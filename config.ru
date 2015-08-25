use Rack::Static,
  :urls => ["/images", "/js", "/css", "/music_survey.html", "politics_survey.html", "/googlea5c29d8a8b8f96ba.html"],
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