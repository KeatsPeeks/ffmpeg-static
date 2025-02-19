var os = require('os')
var path = require('path')

var platform = os.platform()
if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
  console.error('Unsupported platform.')
  process.exit(1)
}

var arch = os.arch()
if (platform === 'darwin' && arch !== 'x64') {
  console.error('Unsupported architecture.')
  process.exit(1)
}

function getPath(base) {
  return path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win32' ? base + '.exe' : base
  );
}

exports.ffmpeg = {path: getPath('ffmpeg')};
exports.ffprobe = {path: getPath('ffprobe')};
