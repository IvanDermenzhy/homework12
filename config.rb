require 'compass/import-once/activate'
# Require any additional compass plugins here.


http_path = "/"
css_dir = "style/"
sass_dir = "style/"
images_dir = "img/"
javascripts_dir = "js"

output_style =:expanded

relative_assets = true
line_comments = false

sass_options = {:cache_location => "gitignore/sass-cache"}

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
