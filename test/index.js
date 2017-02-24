var it = require('tape'),
    fs = require('fs'),
    {ffmpeg, ffprobe} = require('..');

it('should find ffmpeg', function(t) {
  console.log(ffmpeg);
  var stats = fs.statSync(ffmpeg.path);
  t.ok(stats.isFile(ffmpeg.path));
  t.end();
});

it('should find ffprobe', function(t) {
  var stats = fs.statSync(ffprobe.path);
  t.ok(stats.isFile(ffprobe.path));
  t.end();
});