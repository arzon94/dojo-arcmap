//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ./Graphics3DSymbolLayer ./Graphics3DGraphicLayer ./Graphics3DSymbolCommonCode ../../../../geometry/Point ../../support/projectionUtils ../../../../views/3d/lib/glMatrix ../../webgl-engine/Stage ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/Material ../../webgl-engine/lib/Util ./graphicUtils".split(" "),function(u,W,K,L,M,n,N,O,B,C,P,Q,D,R,E,S){function T(F,
f,a,b){for(var c=F.getGeometryRecords(),G=c.length,H="absolute-height"!==f.mode,l=0,h=0;G>h;h++){var p=c[h].geometry,q=[c[h].transformation[12],c[h].transformation[13],c[h].transformation[14]],m=p.getData().getVertexAttr(),k=m[U.POSITION].data,z=m.zOffset.data,m=m.mapPos.data,v=m.length/3;V(k.length/3===v*A+2,"unexpected tube geometry");var r=0,x=0;y.spatialReference=a.spatialReference;for(var w=0,d=0;v>d;d++){y.x=m[3*d];y.y=m[3*d+1];y.z=m[3*d+2];var g=n.computeElevation(a,y,f,H?I:null);H&&(w+=I.terrainElevation);
var t=A;0!==d&&d!==v-1||t++;for(var u=0;t>u;u++)e[0]=k[r]+q[0],e[1]=k[r+1]+q[1],e[2]=k[r+2]+q[2],b.setAltitude(g+z[x],e,0),k[r]=e[0]-q[0],k[r+1]=e[1]-q[1],k[r+2]=e[2]-q[2],r+=3,x+=1;p.invalidateBoundingInfo()}F.geometryVertexAttrsUpdated(h);l+=w/v}return l/G}var z=B.vec3d,J=B.mat4d,V=E.assert;u=function(e){function f(){return null!==e&&e.apply(this,arguments)||this}return K(f,e),f.prototype._prepareResources=function(){if(!this._isPropertyDriven("size")){var a=S.validateSymbolLayerSize(this._getSymbolSize());
if(a)return this._logWarning(a),void this.reject()}var a=this._getStageIdHint(),b=this._getMaterialOpacityAndColor(),c=z.create(b),b=b[3],c={diffuse:c,ambient:c,opacity:b,transparent:1>b||this._isPropertyDriven("opacity"),vertexColors:this._isPropertyDriven("color")||this._isPropertyDriven("opacity")};this._material=new R(c,a+"_3dlinemat");this._context.stage.add(C.ModelContentType.MATERIAL,this._material);this.resolve()},f.prototype.destroy=function(){this.isFulfilled()||this.reject();this._material&&
(this._context.stage.remove(C.ModelContentType.MATERIAL,this._material.getId()),this._material=null)},f.prototype.createGraphics3DGraphic=function(a,b){var c=a.geometry;if("polyline"!==c.type)return this._logWarning("unsupported geometry type for path symbol: "+c.type),null;var c="graphic"+a.uid,f=this.getGraphicElevationInfo(a);return this._createAs3DShape(a,b,f,c,a.uid)},f.prototype.layerPropertyChanged=function(a,b,c){if("opacity"===a)return b=this._getMaterialOpacity(),c=1>b||this._isPropertyDriven("opacity"),
this._material.setParameterValues({opacity:b,transparent:c}),!0;if("elevationInfo"===a){this._updateElevationInfo();for(var f in b){var e=b[f];if(a=c(e))e=this.getGraphicElevationInfo(e.graphic),a.needsElevationUpdates=n.needsElevationUpdates3D(e.mode),a.elevationInfo.set(e)}return!0}return!1},f.prototype._getPathSize=function(a){var b;return b=a.size&&this._isPropertyDriven("size")?n.getSingleSizeDriver(a.size):this._getSymbolSize(),b/=this._context.renderCoordsHelper.unitInMeters},f.prototype._getSymbolSize=
function(){return this.symbol.size||1},f.prototype._createAs3DShape=function(a,b,c,e,f){var l=a.geometry,h=l.hasZ,p=l.paths;if(0<p.length){a=[];for(var q=[],m=[],k=z.create(),u=this._context.renderSpatialReference===O.SphericalRenderSpatialReference,v=Array(6),r=this._getPathSize(b),l=n.getGeometryVertexData3D(p,h,l.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,c),h=l.geometryData.outlines,p=l.eleVertexData,x=l.vertexData,w=0;w<h.length;++w){var d=h[w],g=d.index,
t=d.count;if(!this._context.clippingExtent||(n.computeBoundingBox(p,g,t,v),!n.boundingBoxClipped(v,this._context.clippingExtent))){n.chooseOrigin(x,g,t,k);n.subtractCoordinates(x,g,t,k);d=new Float64Array(p.buffer,3*g*p.BYTES_PER_ELEMENT,3*t);g=n.flatArrayToArrayOfArrays(x,g,t);g=D.createTubeGeometry(g,.5*r,A,u,k);if(g.getVertexAttr().mapPos={size:3,data:d},this._material.getParams().vertexColors)d=this._getVertexOpacityAndColor(b),g=D.addVertexColors(g,d,!0);d=new Q(g,e+"path"+w);d.singleUse=!0;
a.push(d);q.push([this._material]);d=J.identity();J.translate(d,k,d);m.push(d)}}if(0<a.length)return b=new P({geometries:a,materials:q,transformations:m,castShadow:!0,metadata:{layerId:this._context.layer.id,graphicId:f},idHint:e}),b=new M(this,b,a,null,null,T,c),b.alignedTerrainElevation=l.terrainElevation,b.needsElevationUpdates=n.needsElevationUpdates3D(c.mode),b}return null},f}(L);var U=E.VertexAttrConstants,e=z.create(),y=new N,I={verticalDistanceToGround:0,terrainElevation:0},A=10;return u});