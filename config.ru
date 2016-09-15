use Rack::Static,
  :urls => ["assets/img", "assets/js", "assets/css", "/index.html", "/survey.html", "/about.html"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'private, max-age=0'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}