//>>built
define("dojo/_base/lang ../Graphic ../core/Accessor ../core/Collection ../core/CollectionFlattener ../core/Evented ../core/HandleRegistry ../core/Promise ../core/watchUtils ../core/promiseUtils ../core/Scheduler ../geometry/Extent ../geometry/HeightModelInfo ../geometry/SpatialReference ./BreakpointsOwner ./LayerViewManager ./BasemapView ./GroundView ./support/DefaultsFromMap".split(" "),function(e,f,g,c,h,k,l,m,b,n,p,q,r,t,u,v,w,x,d){return g.createSubclass([m,k,u],{declaredClass:"esri.views.View",
properties:{allLayerViews:{readOnly:!0},basemapView:{},animation:{},resizing:{},interacting:{},graphics:{type:c.ofType(f)},groundView:{},defaultsFromMap:d,heightModelInfo:{type:r,dependsOn:["defaultsFromMap.heightModelInfo"]},initialExtent:{readOnly:!0,type:q,dependsOn:["defaultsFromMap.extent"]},initialExtentRequired:{},layerViews:{type:c},map:{},ready:{readOnly:!0,dependsOn:"map spatialReference width height initialExtentRequired initialExtent defaultsFromMap.isSpatialReferenceDone heightModelInfo defaultsFromMap.isHeightModelInfoDone map.loaded".split(" ")},
size:{readOnly:!0,dependsOn:["width","height"],get:function(){return[this.width,this.height]}},spatialReference:{type:t,dependsOn:["defaultsFromMap.spatialReference"]},stationary:{dependsOn:["animation","interacting","resizing"]},type:{},updating:{},padding:{},width:{},height:{}},constructor:function(a){this._viewHandles=new l;this._viewHandles.add(this.watch("ready",function(a,b){a?this._currentSpatialReference=this.spatialReference:this._currentSpatialReference=null;this.notifyChange("spatialReference");
!a&&b&&this.layerViewManager.empty()}.bind(this)));this.allLayerViews=new h({root:this,rootCollectionNames:["basemapView.baseLayerViews","groundView.layerViews","layerViews","basemapView.referenceLayerViews"],getChildrenFunction:function(a){return a.layerViews}});this.defaultsFromMap=new d({view:this})},getDefaults:function(){return e.mixin(this.inherited(arguments),{layerViews:[],graphics:[],padding:{left:0,top:0,right:0,bottom:0}})},initialize:function(){var a=this.validate().then(function(){return this._isValid=
!0,this.notifyChange("ready"),b.whenOnce(this,"ready")}.bind(this));this.addResolvingPromise(a);this.basemapView=new w({view:this});this.groundView=new x({view:this});this.layerViewManager=new v({view:this});this._resetInitialViewPropertiesFromContent()},destroy:function(){this.destroyed||(this.basemapView.destroy(),this.groundView.destroy(),this.destroyLayerViews(),this.defaultsFromMap.destroy(),this.defaultsFromMap=null,this._viewHandles.destroy(),this.map=null)},destroyLayerViews:function(){this.layerViewManager.destroy()},
_viewHandles:null,_isValid:!1,_readyCycleForced:!1,_userSpatialReference:null,_currentSpatialReference:null,_userHeightModelInfo:null,animation:null,basemapView:null,groundView:null,graphics:null,_graphicsSetter:function(a){this._graphicsView&&(this._graphicsView.graphics=a);this._set("graphics",a)},heightModelInfo:null,_heightModelInfoGetter:function(){return this.getHeightModelInfoWithOverride()},_heightModelInfoSetter:function(a){this.setHeightModelInfoOverride(a)},interacting:!1,layerViews:null,
map:null,_mapSetter:function(a){var b=this._get("map");a!==b&&(a&&a.load&&a.load(),this._forceReadyCycle(),this._resetInitialViewPropertiesFromContent(),this._set("map",a))},padding:null,_readyGetter:function(){return!!(this._isValid&&!this._readyCycleForced&&this.map&&0!==this.width&&0!==this.height&&this.spatialReference&&(!this.map.load||this.map.loaded)&&(this._currentSpatialReference||!this.initialExtentRequired||this.initialExtent||this.defaultsFromMap&&this.defaultsFromMap.isSpatialReferenceDone)&&
(this.heightModelInfo||this.defaultsFromMap&&this.defaultsFromMap.isHeightModelInfoDone)&&this.defaultsFromMap&&this.defaultsFromMap.isTileInfoDone&&this.isSpatialReferenceSupported(this.spatialReference))},spatialReference:null,_spatialReferenceGetter:function(){return this._userSpatialReference||this._currentSpatialReference||this.getDefaultSpatialReference()||null},_spatialReferenceSetter:function(a){this._userSpatialReference=a;this._set("spatialReference",a)},stationary:!0,_stationaryGetter:function(){return!this.animation&&
!this.interacting&&!this.resizing},type:null,updating:!1,initialExtentRequired:!0,initialExtent:null,_initialExtentGetter:function(){return this.defaultsFromMap&&this.defaultsFromMap.extent},whenLayerView:function(a){return this.layerViewManager.whenLayerView(a)},getDefaultSpatialReference:function(){return this.get("defaultsFromMap.spatialReference")},getDefaultHeightModelInfo:function(){return this.get("defaultsFromMap.heightModelInfo")},getHeightModelInfoWithOverride:function(){return this._userHeightModelInfo||
this.getDefaultHeightModelInfo()||null},setHeightModelInfoOverride:function(a){this._userHeightModelInfo=a;this.notifyChange("heightModelInfo")},validate:function(){return n.resolve()},isSpatialReferenceSupported:function(){return!0},isHeightModelInfoRequired:function(){return!1},isTileInfoRequired:function(){return!1},_resetInitialViewPropertiesFromContent:function(){if(this.defaultsFromMap){var a=this.defaultsFromMap.start.bind(this.defaultsFromMap);this.defaultsFromMap.reset();this._currentSpatialReference=
null;this.notifyChange("spatialReference");this._viewHandles.remove("defaultsFromMap");this._viewHandles.add([b.watch(this,"spatialReference",a),b.watch(this,"initialExtentRequired",a),p.schedule(a)],"defaultsFromMap")}},_forceReadyCycle:function(){this.ready&&(this._readyCycleForced=!0,b.whenFalseOnce(this,"ready",function(){this._readyCycleForced=!1;this.notifyChange("ready")}.bind(this)),this.notifyChange("ready"))}})});