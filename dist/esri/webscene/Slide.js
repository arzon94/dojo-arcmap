//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../Viewpoint ../Basemap ../support/basemapUtils ../core/JSONSupport ../core/lang ../core/Logger ../core/Collection ../core/collectionUtils ../core/promiseUtils ./Environment ./Lighting ./support/Description ./support/Title ./support/Thumbnail dojo/_base/lang dojo/promise/all ../views/3d/lib/glMatrix".split(" "),function(f,J,t,g,d,z,A,u,v,B,C,w,D,h,k,E,x,y,n,p,F,G){var H=
0,m=l=function(d){function c(){var a=null!==d&&d.apply(this,arguments)||this;return a.id="",a}return t(c,d),c.prototype.clone=function(){return new l({id:this.id})},c}(d.declared(v));g([d.property({type:String,json:{write:!0}})],m.prototype,"id",void 0);var m=l=g([d.subclass()],m),q=w.ofType(m),I=C.getLogger("esri.webscene.Slide");f=function(d){function c(a){a=d.call(this,a)||this;return a._currentAnimation=null,a.id=Date.now().toString(16)+"-slide-"+H++,a.title=new y["default"],a.description=new x["default"],
a.thumbnail=new n["default"],a.viewpoint=null,a.basemap=null,a.environment=new k,a.visibleLayers=new q,a}return t(c,d),c.prototype.readBasemap=function(a,b,e){if(!b.baseMap)return null;a=new A;return a.resourceInfo=b.baseMap,a.read(b.baseMap,e),a},c.prototype.writeBasemap=function(a,b,e,c){b.baseMap||(b.baseMap={});a.write(b.baseMap,c)},c.prototype.castBasemap=function(a){return u.ensureType(a)},Object.defineProperty(c.prototype,"visibleLayers",{set:function(a){this._set("visibleLayers",D.referenceSetter(a,
this._get("visibleLayers"),q))},enumerable:!0,configurable:!0}),c.prototype.castVisibleLayers=function(a){return a&&"function"==typeof a.map?a.map(function(a){return"string"==typeof a?{id:a}:a.id?{id:a.id}:(I.warn('Invalid visible layer, expected { id }, Layer or "id"'),a)}):a},c.prototype.clone=function(){return new this.constructor({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||
null,basemap:this.basemap&&this.basemap.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null})},c.prototype._updateVisibleLayersFrom=function(a){var b=this,e=[];return h.eachAlways(this._allLayers(a.map).map(function(b){return a.whenLayerView(b).then(function(a){a.visible&&e.push(new m({id:a.layer.id}))})}).toArray()).then(function(){b.visibleLayers.removeAll();b.visibleLayers.addMany(e)})},c.prototype.updateFrom=function(a,b){var e=this;
return b=p.mixin({screenshot:p.mixin({format:"jpeg",quality:80,width:120,height:75},b&&b.screenshot)},b),a.then(function(){return e.viewpoint=a.viewpoint.clone(),e.environment.lighting=E.prototype.clone.apply(a.environment.lighting),e.basemap=a.map.basemap&&a.map.basemap.clone()||null,e._updateVisibleLayersFrom(a)}).then(function(){return a.takeScreenshot(b.screenshot)}).then(function(a){return e.thumbnail=new n["default"]({url:a.dataURL}),e})},c.prototype.applyTo=function(a,b){var e=this,c=p.mixin({animate:!0},
b);return this._applyBasemap(a).then(function(){return F([e._applyViewpoint(a,c),e._applyLayerVisibility(a,c)])}).then(function(){return e})},c.prototype._applyBasemap=function(a){var b=this;return this.basemap?this.basemap.load().always(function(){a.map.basemap=u.clonePreservingTiledLayers(b.basemap,a.map.basemap)}):h.resolve()},c.prototype._allLayers=function(a){var b=new w;return this._collectLayers(a,b),this._collectLayers(a.ground,b),b},c.prototype._collectLayers=function(a,b){var e=this;a.layers.forEach(function(a){b.add(a);
a.layers&&e._collectLayers(a,b)})},c.prototype._applyLayerVisibility=function(a,b){var e=this;if(this.visibleLayers){var c=this._allLayers(a.map);return b.applyToLayerViews?h.eachAlways(c.map(function(b){return a.whenLayerView(b).then(function(a){a.visible=e.visibleLayers.some(function(b){return b.id===a.layer.id})})}).toArray()):(c.forEach(function(a){return a.visible=e.visibleLayers.some(function(b){return b.id===a.id})}),h.resolve())}},c.prototype._applyViewpoint=function(a,b){if(this.viewpoint){if(this.viewpoint.camera.fov=
a.camera.fov,b.animate)return this.get("environment.lighting.date")?this._animateToLighting(a,b).then(function(){}):(a.environment.lighting=this.environment.lighting.clone(),a.goTo(this.viewpoint,b).then(function(){}));a.viewpoint=this.viewpoint;a.environment.lighting=this.environment.lighting.clone()}return h.resolve()},c.prototype._animateToLighting=function(a,b){var c,d=this;"global"===a.viewingMode&&(c=this._animateLightingWithCamera(a));this._currentAnimation&&(this._currentAnimation.stop(),
this._currentAnimation=null);a.environment.lighting.cameraTrackingEnabled=!1;a.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled;null!=this.environment.lighting.displayUTCOffset&&(a.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset);var f=a.goTo(this.viewpoint,b);return this._currentAnimation=f,this._currentAnimation.always(function(){c&&c.remove();d._currentAnimation===f&&(a.environment.lighting.cameraTrackingEnabled=!0)}),this._currentAnimation.then(function(){a.environment.lighting=
d.environment.lighting.clone()}),this._currentAnimation},c.prototype._getTime=function(a){var b=a.getTime();a=3600*a.getUTCHours()+60*a.getUTCMinutes()+a.getUTCSeconds();return[b,a]},c.prototype._setTime=function(a,b,c){return a.setTime(b),a.setUTCHours(c/3600),a.setUTCMinutes(c%3600/60),a.setUTCSeconds(c%3600%60),a},c.prototype._animateLightingWithCamera=function(a){var b=this,c=G.vec3d,d=this._getTime(new Date(a.environment.lighting.date.toString())),f=d[0],g=d[1],d=this._getTime(this.environment.lighting.date),
h=d[0],m=d[1],k=a.renderCoordsHelper,n=[0,0,0];k.toRenderCoords(a.camera.position,n);var p=[0,0,0];k.toRenderCoords(this.viewpoint.camera.position,p);var l=[0,0,0],q=new Date;return a.watch("camera",function(d){k.toRenderCoords(d.position,l);d=c.dist2(n,l);var e=c.dist2(p,l),r=0;0!==d+e&&(r=d/(d+e));a.environment.lighting.date=b._setTime(q,f+(h-f)*r,g+(m-g)*r)})},c.createFrom=function(a,b){return(new this).updateFrom(a,b)},c.sanitizeJSON=function(a){var b;b=void 0!==a.visibleLayers&&Array.isArray(a.visibleLayers)?
B.clone(a.visibleLayers):[];b={id:a.id||"",title:a.title||{text:""},thumbnail:a.thumbnail||{url:""},viewpoint:a.viewpoint,baseMap:a.baseMap,visibleLayers:b};return void 0!==a.description&&(b.description=a.description),void 0!==a.environment&&(b.environment=k.sanitizeJSON(a.environment)),b},c}(d.declared(v));g([d.property({json:{write:!0}})],f.prototype,"id",void 0);g([d.property({type:y["default"],json:{write:!0}})],f.prototype,"title",void 0);g([d.property({type:x["default"],json:{write:!0}})],f.prototype,
"description",void 0);g([d.property({type:n["default"],json:{write:!0}})],f.prototype,"thumbnail",void 0);g([d.property({type:z,json:{write:!0}})],f.prototype,"viewpoint",void 0);g([d.property({json:{write:{target:"baseMap"}}})],f.prototype,"basemap",void 0);g([d.reader("basemap",["baseMap"])],f.prototype,"readBasemap",null);g([d.writer("basemap")],f.prototype,"writeBasemap",null);g([d.cast("basemap")],f.prototype,"castBasemap",null);g([d.property({type:q,json:{write:!0}})],f.prototype,"visibleLayers",
null);g([d.cast("visibleLayers")],f.prototype,"castVisibleLayers",null);g([d.property({type:k,json:{write:!0}})],f.prototype,"environment",void 0);f=g([d.subclass("esri.webscene.Slide")],f);var l;return f});