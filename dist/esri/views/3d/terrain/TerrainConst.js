//>>built
define(["require","exports","./TilingScheme","../support/aaBoundingRect"],function(e,b,d,c){Object.defineProperty(b,"__esModule",{value:!0});!function(a){a[a.MAP=0]="MAP";a[a.ELEVATION=1]="ELEVATION";a[a.LAYER_CLASS_COUNT=2]="LAYER_CLASS_COUNT"}(b.LayerClass||(b.LayerClass={}));!function(a){a[a.NONE=0]="NONE";a[a.SPLIT=1]="SPLIT";a[a.VSPLITMERGE=2]="VSPLITMERGE";a[a.MERGE=4]="MERGE";a[a.DECODE_ELEVATION=8]="DECODE_ELEVATION";a[a.UPDATE_GEOMETRY=16]="UPDATE_GEOMETRY";a[a.UPDATE_TEXTURE=32]="UPDATE_TEXTURE"}(b.TileUpdateTypes||
(b.TileUpdateTypes={}));b.TILE_LOADING_DEBUGLOG=!1;b.MAX_ROOT_TILES=64;b.MAX_TILE_TESSELATION=512;b.ELEVATION_NODATA_VALUE=3.40282347E37;b.noDataValueOpt={noDataValue:b.ELEVATION_NODATA_VALUE};b.ELEVATION_DESIRED_RESOLUTION_LEVEL=4;b.TILEMAP_SIZE_EXP=5;b.TILEMAP_SIZE=1<<b.TILEMAP_SIZE_EXP;b.WEBMERCATOR_WORLD_EXTENT=c.create([0,0,0,0]);d.WebMercatorAuxiliarySphere.getExtent(0,0,0,b.WEBMERCATOR_WORLD_EXTENT);b.GEOGRAPHIC_WORLD_EXTENT=c.create([-180,-90,180,90])});