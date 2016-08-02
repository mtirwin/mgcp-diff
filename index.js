'use strict';

var tileReduce = require('tile-reduce');
var path = require('path');

tileReduce({
  zoom: 12,
  map: path.join(__dirname, 'diff.js'),
  sources: [
    {name: 'osm-kiribati',   mbtiles: path.join(__dirname, 'osm-kiribati.mbtiles'), raw: true},
    {name: 'mgcp', mbtiles: path.join(__dirname, 'mgcp.mbtiles'), raw: true}
  ]
})
.on('start', function() {
  // null feature is a hack to be able to write each feature starting with a comma
  process.stdout.write('{"type": "FeatureCollection", "features": [{"type": "Feature", "geometry": null, "properties": null}');
})
.on('end', function() {
  process.stdout.write(']}');
});
