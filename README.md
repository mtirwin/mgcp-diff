A [tile-reduce](https://github.com/mapbox/tile-reduce)-based script for comparing road networks across [vector tilesets](https://github.com/mapbox/vector-tile-spec) (e.g. OSM and MGCP).

Takes two vector tilesets in mbtiles format as input, in this case mgcp.mbtiles and osm.mbtiles. Output is geojson of road segments present in one source but not the other within a certain buffer threshold. 

To run:

* Clone repository
* Update diff.js as necessary to reference local tilesets
* `npm install && npm link`
* `node index.js` will display geojson output in the terminal
* `node index.js > output.geojson` will pipe output to a geojson file

Geojson may then be turned into vector tiles with tools like [tippecanoe](https://github.com/mapbox/tippecanoe).

The output files in this repo (osm-not-mgcp.geojson and mgcp-not-osm.geojson) are provided as sample for viewing in a map client. Alternatively, convert to vector tiles with tippecanoe and view locally with [mbview](https://github.com/mapbox/mbview).
