require 'babel/transpiler'
require 'json'

module Jekyll
  class BabelGenerator < Jekyll::Generator
    safe true

    def generate(site)
      es_ext = site.config['babel']['extension'] || '.es'
      es_files = []

      # Remove es6 files and re-insert as BabelFile's.
      site.static_files.delete_if do |file|
        next unless File.extname(file.path) == es_ext

        # Save and pass the directory and file name.
        es_dir = File.dirname(file.path.sub(site.source, ''))
        es_name = File.basename(file.path)

        es_files << BabelFile.new(site, site.source, es_dir, es_name)

        true
      end

      # Concat new static files.
      site.static_files.concat(es_files)
    end
  end

  class BabelFile < Jekyll::StaticFile
    def initialize(site, base, dir, name)
      super(site, base, dir, name)
      @dest_name = File.basename(name, '.*') + '.js'
      @map_name = @dest_name + '.map'
    end

    def write(dest)
      map = File.join(*[dest, @dir, @map_name].compact)
      dest = File.join(*[dest, @dir, @dest_name].compact)
      src = File.join(*[@base, @dir, @name].compact)

      transpiled = Babel::Transpiler.transform(File.read(src), {
        :sourceMaps => @site.config['babel']['source_maps'],
        :filename => @name,
      })

      if transpiled
        File.write(dest, transpiled['code'])

        if transpiled.has_key?('map')
          File.write(map, JSON.generate(transpiled['map']))

          # Write out source mapping comment.
          map_path = @dir + '/' + @map_name
          sourcemap_comment = "\n//# sourceMappingURL=#{map_path}"
          open(dest, 'a') do |f|
            f << sourcemap_comment
          end
        end
      end
    end
  end
end
