require 'tmpdir'

task :default => :serve

## Tasks

desc 'Start the development server'
task :serve => :clean do
  sh 'bundle exec jekyll serve -w -D'
end

desc 'Build site'
task :build => :clean do
  sh 'bundle exec jekyll build'
end

desc 'Create a new post'
task :new, [:title, :tags, :edit] do |t, args|
  args.with_defaults(:tags => '', :edit => 'true')
  if not args.title
    puts "Title required"
    next
  end

  filetitle = normalizetitle(args.title)
  filename = "#{filetitle}.md"

  path = File.join('_drafts', filename)
  if File.exist? path
    puts "Would clobber #{path}"
    next
  end

  timestamp = Time.now.strftime('%Y-%m-%d %H:%M:%S')
  File.open(path, 'w') do |file|
    file.puts <<-EOS
---
layout: post
title:  #{args.title}
date:   #{timestamp}
tags:   #{args.tags}
---
EOS
  end

  if not to_bool(args.edit) or not openeditor(path)
    puts "#{path} has been created"
  end
end

desc 'Publish a draft'
task :publish, [:title] do |t, args|
  filetitle = normalizetitle(args.title)
  wildcard = filetitle.split('').join('*').gsub(/^|$/, '*')
  candidates = Dir[File.join('_drafts', wildcard)]

  if candidates.length == 0
    puts "'#{filetitle}' does not match any draft"
    next
  elsif candidates.length > 1
    puts "'#{filetitle}' matches multiple drafts:"
    candidates.each do |file|
      puts "    #{File.basename(file)}"
    end
    next
  end

  draftpath = candidates.first
  draftbase = File.basename(draftpath)
  filetimestamp = Time.now.strftime('%Y-%m-%d')
  postpath = File.join('_posts', "#{filetimestamp}-#{draftbase}")

  if File.exist? postpath
    puts "Would clobber #{postpath}"
    next
  end

  File.rename(draftpath, postpath)

  timestamp = Time.now.strftime('%Y-%m-%d %H:%M:%S')
  timestampline = "date:   #{timestamp}"

  text = File.read(postpath)
  text = text.sub(/date:\s*\d\d\d\d-\d\d-\d\d\s+(\d\d:\d\d:\d\d)?/, timestampline)

  File.open(postpath, 'w') do |file|
    file.puts text
  end
end

desc 'Clean generated site'
task :clean do
  FileUtils.rm_rf('_site')
end

desc 'Deploy into `master` branch'
task :deploy do
  repo_dir = Dir.getwd
  protect = ['.git', '.nojekyll'].map {|s| "--filter='P #{s}'"}.join(' ')

  raw_dir = Dir.mktmpdir
  begin
    puts "Beginning deploy to #{raw_dir}"

    Dir.chdir(raw_dir) do
      system("git clone -q #{repo_dir} .")
      system('git checkout jekyll')
      system('rake build')

      tmp_dir = Dir.mktmpdir
      begin
        puts "Setting up _site in #{tmp_dir}"
        tmp_site = File.join(tmp_dir, '_site')
        FileUtils.mv('_site', tmp_site)

        system('git checkout master')
        puts "Copying to master..."
        system("rsync -az --delete #{protect} #{tmp_site}/ .")

        system('git add -A')
        system('git commit -m "Sync raw with jekyll"')
        system("git push #{repo_dir} master")
      ensure
        FileUtils.remove_entry_secure tmp_dir
      end
    end
  ensure
    FileUtils.remove_entry_secure raw_dir
  end
end


## Helper functions

def openeditor(path)
  # Prefer gvim/vim
  editor = which('gvim') || which('vim')
  if not editor.nil?
    system("#{editor} '#{path}'")
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

def normalizetitle(title)
  title.gsub(/\s/, '-').gsub(/[^a-zA-Z0-9_-]/, '').downcase
end

def to_bool(s)
  !!(s =~ /^(true|t|yes|y|1)$/i)
end
