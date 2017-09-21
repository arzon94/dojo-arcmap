//>>built
define(["../../core/screenUtils","../../Color"],function(f,m){return{applyVisualVariables:function(c,a){var e=a.graphic,d=a.renderer,b=a.symbol;a=b.type;if("text-symbol"!==a&&"shield-label-symbol"!==a){var g=d.getVisualVariablesForType("size"),h=d.getVisualVariablesForType("color"),k=d.getVisualVariablesForType("opacity"),l=d.getVisualVariablesForType("rotation"),g=g&&g[0],h=h&&h[0],k=k&&k[0],l=l&&l[0];g&&(b=d.getSize(e,{sizeInfo:g,shape:"simple-marker-symbol"===a?b.style:null}),null!=b&&("simple-marker-symbol"===
a?c.size=f.px2pt(b):"picture-marker-symbol"===a?(c.width=f.px2pt(b),c.height=f.px2pt(b)):"simple-line-symbol"===a?c.width=f.px2pt(b):c.outline&&(c.outline.width=f.px2pt(b))));h&&((b=d.getColor(e,{colorInfo:h}))&&"simple-marker-symbol"===a||"simple-line-symbol"===a||"simple-fill-symbol"===a)&&(c.color=m.toJSON(b));k&&(a=d.getOpacity(e,{opacityInfo:k}),null!=a&&c.color&&(c.color[3]=Math.round(255*a)));l&&(e=-d.getRotationAngle(e),c.angle=e)}},createPolylineLayer:function(){return{layerDefinition:{name:"polylineLayer",
geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}},createPointLayer:function(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}},createMultipointLayer:function(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",
features:[]}}},createPolygonLayer:function(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}}});