# voithos.io

Personal site of Zaven Muradyan.

### Requirements
- Rake
- Bundler

### Setup

    $ bundle install --path vendor/bundle

### Tasks

- `rake serve` Start the Jekyll development server. [Default]
- `rake build` Rebuild the Jekyll site without starting a local server.
- `rake clean` Remove the generated `_site` directory.
- `rake new[title,tags,edit]` Create a new draft with the specified title and tags.
  Opens the draft in an editor by default, unless a falsy value is given to `edit`.
- `rake publish[title]` Publish a draft, stamped with the current date and time,
  based on a fuzzy search of the `title` parameter.
- `rake deploy` Automatically build and deploy the current Jekyll site in a raw
  form to the `master` branch.

### License
The content of the site is licensed under [CC-BY](http://creativecommons.org/licenses/by/4.0/).
The structure, design, and layout code is licensed under [MIT](http://opensource.org/licenses/MIT).
