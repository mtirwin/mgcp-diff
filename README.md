A [Tile Reduce](https://github.com/mapbox/tile-reduce)-based script for comparing road networks across [vector tilesets](https://github.com/mapbox/vector-tile-spec) (e.g. OSM and MGCP).

Generates GeoJSON of road segments present in one source but not the other within a certain buffer threshold. May then be turned into vector tiles with tools like [tippecanoe](https://github.com/mapbox/tippecanoe).
