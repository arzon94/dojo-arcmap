//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/accessorSupport/decorators ../../../../core/Accessor ../../../../core/Logger ../../../../geometry/Point ../../webgl-engine/lib/Selector ../../support/Evented ../../support/aaBoundingRect ../../lib/glMatrix".split(" "),function(f,y,r,m,l,t,u,v,w,x,g,h){var c=g.create(g.NEGATIVE_INFINITY),k={spatialReference:null,extent:c},b=h.vec3d.create(),n=h.vec3d.create(),p=h.vec3d.create(),
q=u.getLogger("esri.layers.SceneService");f=function(f){function d(a,b){var e=f.call(this)||this;return e.layerView=a,e.renderCoordsHelper=e.layerView.view.renderCoordsHelper,e.intersectLayers=[b],e.selector=new w(e.layerView.view.viewingMode),e.zmin=a.layer.fullExtent.zmin,e.zmax=a.layer.fullExtent.zmax,e}return r(d,f),d.prototype.getElevation=function(a){if(a instanceof v){if(!this.renderCoordsHelper.toRenderCoords(a,b))return q.error("could not project point for elevation alignment"),-(1/0)}else if(!this.renderCoordsHelper.toRenderCoords(a,
this.spatialReference,b))return q.error("could not project point for elevation alignment"),-(1/0);return h.vec3d.set(b,n),h.vec3d.set(b,p),this.renderCoordsHelper.setAltitude(this.zmax,n),this.renderCoordsHelper.setAltitude(this.zmin,p),this.selector.init(this.intersectLayers,n,p,null,null,1,!1),this.selector.getMinResult().getIntersectionPoint(b)?this.renderCoordsHelper.getAltitude(b):-(1/0)},d.prototype.objectCreated=function(a){this.objectChanged(a)},d.prototype.objectDeleted=function(a){this.objectChanged(a)},
d.prototype.visibilityChanged=function(a){void 0!==a?this.objectChanged(a):this.spatialReference&&(k.extent=this.computeLayerExtent(this.intersectLayers[0]),k.spatialReference=this.spatialReference,this.emit("elevation-change",k))},d.prototype.objectChanged=function(a){this.spatialReference&&(k.extent=this.computeObjectExtent(a),k.spatialReference=this.spatialReference,this.emit("elevation-change",k))},d.prototype.computeObjectExtent=function(a){return g.set(c,g.NEGATIVE_INFINITY),this.expandExtent(a,
c),c},d.prototype.computeLayerExtent=function(a){g.set(c,g.NEGATIVE_INFINITY);var b=0;for(a=a.getObjects();b<a.length;b++)this.expandExtent(a[b],c);return c},d.prototype.expandExtent=function(a,d){for(var e=a.getBBMin(!0),f=a.getBBMax(!0),c=0;8>c;++c)b[0]=1&c?e[0]:f[0],b[1]=2&c?e[1]:f[1],b[2]=4&c?e[2]:f[2],h.mat4d.multiplyVec3(a.objectTransformation,b),this.renderCoordsHelper.fromRenderCoords(b,b,this.spatialReference),g.expand(d,b);return d},d}(l.declared(t,x.Evented));return m([l.property()],f.prototype,
"layerView",void 0),m([l.property({readOnly:!0,aliasOf:"layerView.view.elevationProvider.spatialReference"})],f.prototype,"spatialReference",void 0),f=m([l.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],f)});