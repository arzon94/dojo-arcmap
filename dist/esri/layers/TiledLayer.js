//>>built
define(["../request","./Layer","./support/TileInfo"],function(c,d,f){return d.createSubclass({properties:{attributionDataUrl:null,tileInfo:f},viewModulePaths:{"2d":"../views/2d/layers/TiledLayerView2D","3d":"../views/3d/layers/TiledLayerView3D"},getTileUrl:function(a,c,e){},fetchTile:function(a,d,e,b){a=this.getTileUrl(a,d,e);b={responseType:"image",allowImageDataAccess:b&&b.allowImageDataAccess||!1};return"string"==typeof a?c(a,b).then(function(a){return a.data}):a.then(function(a){return c(a,{responseType:"image"})}).then(function(a){return a.data})}})});