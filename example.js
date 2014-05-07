console.log("Hello world");
//require('./').watch('tmp', {ignored: /[\/\\]\./}).on('all', function(event, path) {
require('./').watch('tmp', { persistent: true })
  .on('all', function(event, path) {
    console.log(event, path);
  })
  .on('add', function(path, stats) {
    console.log('File', path, 'stats', stats);
  });
console.log("done");
