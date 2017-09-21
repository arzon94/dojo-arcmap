//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/on ../../../core/Logger ../../../core/Accessor ../../../core/accessorSupport/decorators ../lib/glMatrix ../support/mathUtils ../support/earthUtils ../support/projectionUtils ../support/aaBoundingRect ../webgl-engine/Stage ../webgl-engine/lib/Texture".split(" "),function(h,K,B,r,C,D,E,q,w,t,F,u,G,m,x){var z=w.vec2d,v=w.vec3d,k=w.vec4d,l={width:0,height:0,pixelRatio:0,views:null},A=[{viewport:k.create(),
extent:k.create()}],H=[A[0],{viewport:k.create(),extent:k.create()}],n=k.create(),p=v.create(),y=[k.create(),k.create()],I=[[0,-1,2,1],[0,-2,2,0],[-1,-2,1,0],[-2,-2,0,0],[-2,-1,0,1],[-2,0,0,2],[-1,0,1,2],[0,0,2,2]],J=D.getLogger("esri.views.3d.OverlayManager");h=function(h){function d(){var a=null!==h&&h.apply(this,arguments)||this;return a._overlaySR=null,a._renderSR=null,a._overlaySREqualsRenderSR=!0,a._connectedLayers={},a._scale=0,a._dirty=!1,a._isSpherical=!1,a.opacity=0,a}return B(d,h),Object.defineProperty(d.prototype,
"hasHighlights",{get:function(){return this._renderer.hasHighlights},enumerable:!0,configurable:!0}),d.prototype.initialize=function(){var a=this;this._stage=this.view._stage;this._renderer=this._stage.getTextureGraphicsRenderer();this._renderer.onHasHighlightsChanged=function(){return a.onHasHighlightsChanged()};this._initialEmptyTexture=new x(new Uint8Array([0,0,0,0]),"overlayEmpty",{width:1,height:1,wrapClamp:!0});this._stage.add(m.ModelContentType.TEXTURE,this._initialEmptyTexture)},d.prototype.destroy=
function(){for(var a in this._connectedLayers)this.unregisterLayerView(this._connectedLayers[a].layerView);this._disposeOverlays();this._stage.remove(m.ModelContentType.TEXTURE,this._initialEmptyTexture.getId())},d.prototype.onHasHighlightsChanged=function(){this.setOverlayDirty();this.notifyChange("hasHighlights")},d.prototype.hasOverlays=function(){return!!this._overlays},d.prototype.setSpatialReference=function(a,b){(this._overlaySR=a)?(this._renderSR=this.view.renderSpatialReference,this._overlaySREqualsRenderSR=
this._overlaySR.equals(this._renderSR),this._isSpherical=b,b?this._longitudeCyclical=a.isWebMercator?new t.Cyclical(-2.0037508342788905E7,2.0037508342788905E7):new t.Cyclical(-180,180):this._longitudeCyclical=null):(this._disposeOverlays(),this._longitudeCyclical=null)},d.prototype.registerLayerView=function(a){var b=this,c=a.layer.uid;if(this._connectedLayers[c])return void J.warn("[OverlayManager#registerLayerView]: Layer "+c+" is already connected");var e=C(a,"draped-data-change",function(){return b.setOverlayDirty()});
if(this._connectedLayers[c]={eventHandles:[e],layerView:a},a.setDrapingExtent&&this._overlays)for(c=0;c<this._overlays.length;c++)a.setDrapingExtent(c,this._overlays[c].extent,this._overlaySR,2048);this.setOverlayDirty()},d.prototype.unregisterLayerView=function(a){for(var b in this._connectedLayers){var c=this._connectedLayers[b];if(c.layerView===a){if(c.eventHandles)for(var e=0;e<c.eventHandles.length;e++)c.eventHandles[e].remove();delete this._connectedLayers[b];this.setOverlayDirty();a.destroyed||
(a._overlayUpdating=!1,a._evaluateUpdatingState())}}},d.prototype.onElevationChange=function(a){var b=a.extent;this.view.renderCoordsHelper.fromRenderCoords(this.view.navigation.currentCamera.center,p,a.spatialReference);b[0]<=p[0]&&b[1]<=p[1]&&b[2]>p[0]&&b[3]>p[1]&&this.setOverlayDirty()},d.prototype.setOverlayDirty=function(){this._dirty||(this._setOverlayUpdating(!0),this._dirty=!0)},d.prototype._setOverlayUpdating=function(a){for(var b in this._connectedLayers){var c=this._connectedLayers[b].layerView;
(!a||!c.suspended&&c.hasDraped)&&(c._overlayUpdating=a,c._evaluateUpdatingState())}(b=this.view._graphicsView)&&(b._overlayUpdating=a,b._evaluateUpdatingState())},d.prototype.updateOverlay=function(){if(this._overlaySR){var a=this._computeOverlayExtents();if(a){this._overlays||this._initOverlays();for(var b=0;b<this._overlays.length;b++){var c;a:{c=a[b];for(var e=this._overlays[b].extent,g=1E-5*Math.max(c[2]-c[0],c[3]-c[1],e[2]-e[0],e[3]-e[1]),f=0;4>f;f++)if(Math.abs(e[f]-c[f])>g){c=!0;break a}c=
!1}if(c){k.set(a[b],this._overlays[b].extent);for(var d in this._connectedLayers)c=this._connectedLayers[d].layerView,c.setDrapingExtent&&c.setDrapingExtent(b,a[b],this._overlaySR,2048)}}this._setOverlayUpdating(!1);this._drawOverlays();this.terrainSurface._updateTileOverlayParams();this._dirty=!1}}},d.prototype.overlaysNeedUpdate=function(){return this._dirty&&this._overlaySR},d.prototype.updateOpacity=function(a){var b=1;if(this._overlays){var c=this._scale;a=this.view.renderCoordsHelper.getAltitude(a);
c>3.5*a&&(b=(a-c/10)/(c/3.5-c/10),b=Math.sqrt(t.clamp(b,0,1)))}return b},d.prototype.setOverlayParamsOfTile=function(a,b,c){a=a.extent;var e=-1;if(this._rectInsideRect(a,this._overlays[0].extent)?e=0:this._rectanglesOverlap(a,this._overlays[1].extent)&&(e=1),0<=e){var g=this._overlays[e].extent;b.overlayTexScale[0]=(a[2]-a[0])/(g[2]-g[0]);b.overlayTexScale[1]=(a[3]-a[1])/(g[3]-g[1]);var f=a[0];if(this._longitudeCyclical){var f=this._longitudeCyclical.minimalMonotonic(g[0],f),d=this._longitudeCyclical.minimalMonotonic(g[0],
a[2]);f>d&&(f=d-(a[2]-a[0]))}z.set2((f-g[0])/(g[2]-g[0]),(a[1]-g[1])/(g[3]-g[1]),b.overlayTexOffset);this._overlays[e].valid?b.overlayTexId=this._overlays[e].texture.getId():b.overlayTexId=this._initialEmptyTexture.getId();this._overlays[e].highlightValid?b.highlightOverlayTexId=this._overlays[e].highlightTexture.getId():b.highlightOverlayTexId=this._initialEmptyTexture.getId();void 0!==c?b.overlayOpacity=c:b.overlayOpacity=1}else b.overlayTexId=null,b.highlightOverlayTexId=null},d.prototype.overlayPixelSizeInMapUnits=
function(a){var b;return this._overlays&&(this._overlays[0]&&this._pointIsInExtent(a,this._overlays[0].extent)?b=this._overlays[0].extent:this._overlays[1]&&(b=this._overlays[1].extent)),b?(b[2]-b[0])/2048:0},d.prototype._createEmptyOverlay=function(){var a=new x(null,"overlay",{wrapClamp:!0,mipmap:!0});this._stage.add(m.ModelContentType.TEXTURE,a);var b=new x(null,"highlightOverlay",{wrapClamp:!0,mipmap:!0});return this._stage.add(m.ModelContentType.TEXTURE,b),{extent:k.create(),texture:a,valid:!1,
highlightTexture:b,highlightValid:!1}},d.prototype._initOverlays=function(){this._overlays=[this._createEmptyOverlay(),this._createEmptyOverlay()]},d.prototype._disposeOverlays=function(){if(this._overlays){var a=this._stage;this._overlays.forEach(function(b){a.remove(m.ModelContentType.TEXTURE,b.texture.getId());a.remove(m.ModelContentType.TEXTURE,b.highlightTexture.getId())});this._overlays=null}},d.prototype._computeOverlayExtents=function(){var a=this.view.navigation.currentCamera,b=this.terrainSurface.extent,
c=v.create();v.set(a.center,c);this._scale=this.view.renderCoordsHelper.getAltitude(a.eye);var e=u.vectorToPoint(c,this._renderSR,this.terrainSurface.spatialReference);(e=this.terrainSurface.getElevation(e))?this.view.renderCoordsHelper.setAltitude(e,c):this.view.navigation.getCenterIntersectManifold(a.eye,a.center,c);var g=v.dist(a.eye,c),e=a.angleOfElevation;if(!isNaN(e)){this._overlaySREqualsRenderSR||u.vectorToVector(c,this._renderSR,c,this._overlaySR);var g=1024*a.perPixelRatio*g*2,f=!1,d=1/
0;this._isSpherical&&(this._overlaySR.isWebMercator?(g/=Math.cos(u.webMercator.y2lat(c[1])),d=this.terrainSurface.extent[3],d*=.999):(f=!0,g/=F.metersPerDegree,d=90),g>=d&&(g=d,c[1]=0,this._overlaySR.isWebMercator&&(c[0]=0)));var l=1;f&&(l=1/Math.max(.2,Math.cos(Math.abs(t.deg2rad(c[1])))),180<g*l&&(l=180/g));var h=g*l,m=y[0];m[0]=c[0]-h;m[1]=c[1]-g;m[2]=c[0]+h;m[3]=c[1]+g;this._isSpherical&&this._shiftExtentToFitBounds(m,1/0,d);f=y[1];(k.set(m,f),6*h>b[2]-b[0])?k.set(b,f):e>.25*Math.PI?(f[0]-=h,
f[1]-=g,f[2]+=h,f[3]+=g):(u.vectorToVector(a.eye,this._renderSR,p,this._overlaySR),z.subtract(c,p,n),a=-Math.atan2(n[1],n[0])+.125*Math.PI,0>a&&(a+=2*Math.PI),k.scale(I[Math.floor(a/(.25*Math.PI))],2*g,n),n[0]*=l,n[2]*=l,k.add(f,n,f));return this._isSpherical&&(f[0]=this._longitudeCyclical.clamp(f[0]),f[2]=this._longitudeCyclical.clamp(f[2]),f[1]=Math.max(f[1],-d),f[3]=Math.min(f[3],d)),this.opacity=1,y}},d.prototype._drawOverlays=function(){for(var a=this._overlays[0].extent[2]-this._overlays[0].extent[0],
b=this._renderer,c=0;c<this._overlays.length;c++){var e=this._overlays[c].extent,d=this._longitudeCyclical?e[2]>this._longitudeCyclical.max:!1,f=this._longitudeCyclical?e[0]<this._longitudeCyclical.min:!1;if(d||f){l.views=H;var f=void 0,f=d?this._longitudeCyclical.max-e[0]:this._longitudeCyclical.min-e[0],f=Math.round(f/(e[2]-e[0])*2048),h=l.views[0];k.set4(0,0,f,2048,h.viewport);k.set4(e[0],e[1],this._longitudeCyclical.max,e[3],h.extent);d||(h.extent[0]+=this._longitudeCyclical.range);h=l.views[1];
k.set4(f,0,2048-f,2048,h.viewport);k.set4(this._longitudeCyclical.min,e[1],e[2],e[3],h.extent);d&&(h.extent[2]-=this._longitudeCyclical.range)}else l.views=A,k.set(e,l.views[0].extent),k.set4(0,0,2048,2048,l.views[0].viewport);l.width=2048;l.height=2048;l.pixelRatio=a/(e[2]-e[0]);this._overlays[c].valid=b.draw(this._overlays[c].texture,l);this._overlays[c].highlightValid=b.drawHighlights(this._overlays[c].highlightTexture,l)}},d.prototype._rectanglesOverlap=function(a,b){return this._longitudeCyclical?
(this._longitudeCyclical.contains(b[0],b[2],a[0])||this._longitudeCyclical.contains(b[0],b[2],a[2]))&&!(a[1]>b[3]||a[3]<b[1]):!(a[0]>b[2]||a[2]<b[0]||a[1]>b[3]||a[3]<b[1])},d.prototype._rectInsideRect=function(a,b){return this._longitudeCyclical?this._longitudeCyclical.contains(b[0],b[2],a[0])&&this._longitudeCyclical.contains(b[0],b[2],a[2])&&a[1]>b[1]&&a[3]<b[3]:a[0]>b[0]&&a[2]<b[2]&&a[1]>b[1]&&a[3]<b[3]},d.prototype._pointIsInExtent=function(a,b){if(this._longitudeCyclical)return this._longitudeCyclical.contains(b[0],
b[2],a.x)&&a.y>=b[1]&&a.y<=b[3];var c=a.x;a=a.y;return c>b[0]&&c<b[2]&&a>b[1]&&a<b[3]},d.prototype._shiftExtentToFitBounds=function(a,b,c){var e=0,d=0;a[0]<-b?e=a[0]+b:a[2]>b&&(e=b-a[2]);a[1]<-c?d=a[1]+c:a[3]>c&&(d=c-a[3]);G.offset(a,e,d)},d}(q.declared(E));return r([q.property()],h.prototype,"view",void 0),r([q.property()],h.prototype,"terrainSurface",void 0),r([q.property({type:Boolean})],h.prototype,"hasHighlights",null),h=r([q.subclass("esri.views.3d.terrain.OverlayManager")],h)});