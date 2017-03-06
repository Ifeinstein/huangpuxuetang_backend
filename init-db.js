require('babel-core/register')({
    presets: ['stage-3']
});

const model = require('./model.js');
model.sync();

console.log('init db please wait...');
// process.exit(0);