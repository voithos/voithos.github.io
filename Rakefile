task :default => :serve

## Tasks

desc 'Start the development server'
task :serve => :clean do
    sh 'bundle exec jekyll serve -w -D'
end

desc 'Start SCSS watcher'
task :scss do
    scss = File.join('assets', 'scss')
    css = File.join('assets', 'css')
    sh "bundle exec scss --watch #{scss}:#{css}"
end

desc 'Build site'
task :build => :clean do
    sh 'bundle exec jekyll build'
end

desc 'Create a new post'
task :new, :title do |t, args|
    if not args.title
        puts "Title required"
        return
    end

    filetitle = args.title.gsub(/\s/, '_').downcase
    filetimestamp = Time.now.strftime('%Y-%m-%d')
    filename = "#{filetimestamp}-#{filetitle}.md"

    path = File.join('_drafts', filename)
    if File.exist? path
        raise "Would clobber #{path}"
    end

    timestamp = Time.now.strftime('%Y-%m-%d %k:%M:%S')
    File.open(path, 'w') do |file|
        file.write <<-EOS
---
layout: post
title: #{args.title}
date: #{timestamp}
---
EOS
    end

    if not openeditor(path)
        puts "#{path} has been created"
    end
end

desc 'Clean generated site'
task :clean do
    FileUtils.rm_rf('_site')
end


## Helper functions

def openeditor(path)
    # Prefer gvim/vim
    editor = which('gvim') || which('vim')
    if not editor.nil?
        system("#{editor} #{path}")
        true
    else
        false
    end
end

def which(cmd)
    exts = ENV['PATHEXT'] ? ENV['PATHEXT'].split(';') : ['']
    ENV['PATH'].split(File::PATH_SEPARATOR).each do |path|
        exts.each { |ext|
            exe = File.join(path, "#{cmd}#{ext}")
            return exe if File.executable? exe
        }
    end
    return nil
end
