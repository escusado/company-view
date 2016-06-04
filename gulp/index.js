'use strict';

var fs = require('fs');
var path = require('path');
var filter = function(name) {return /(\.(js)$)/i.test(path.extname(name));};
var tasks = fs.readdirSync('./gulp/tasks/').filter(filter);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
