//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./Widget ../core/HandleRegistry ../core/watchUtils ./Legend/LegendViewModel dojo/i18n!./Legend/nls/Legend ../core/lang ./support/widgetUtils dojox/gfx ../core/accessorSupport/decorators ./support/widget".split(" "),function(h,z,r,m,t,u,p,v,q,w,x,y,k,f){h=function(h){function d(a){a=h.call(this)||this;return a._handleRegistry=new u,a.activeLayerInfos=null,a.basemapLegendVisible=!1,a.groundLegendVisible=
!1,a.layerInfos=null,a.view=null,a.viewModel=new v,a}return r(d,h),d.prototype.postInitialize=function(){var a=this;this.own(p.on(this,"activeLayerInfos","change",function(){return a._refreshActiveLayerInfos(a.activeLayerInfos)}))},d.prototype.destroy=function(){this._handleRegistry.destroy();this._handleRegistry=null},d.prototype.render=function(){var a=this,c=this.activeLayerInfos,b=x.join("esri-legend","esri-widget"),c=c&&c.toArray().map(function(b){return a._renderLegendForLayer(b)}).filter(function(a){return!!a});
return f.tsx("div",{"class":b},c&&c.length?c:f.tsx("div",{"class":"esri-legend__message"},q.noLegend))},d.prototype._refreshActiveLayerInfos=function(a){var c=this;this._handleRegistry.removeAll();a.forEach(function(a){return c._renderOnActiveLayerInfoChange(a)});this.scheduleRender()},d.prototype._renderOnActiveLayerInfoChange=function(a){var c=this,b=p.init(a,"version",function(){return c.scheduleRender()});this._handleRegistry.add(b,"version_"+a.layer.uid);a.children.forEach(function(a){return c._renderOnActiveLayerInfoChange(a)})},
d.prototype._renderLegendForLayer=function(a){var c=this;if(!a.ready)return null;var b=!!a.children.length,n="esri-legend__"+a.layer.uid+"-version-"+a.version;if(b){var e=a.children.map(function(a){return c._renderLegendForLayer(a)}).toArray(),b=(g={},g["esri-legend__group-layer"]=b,g);return f.tsx("div",{key:n,"class":"esri-legend__service",classes:b},f.tsx("p",{"class":"esri-legend__service-label"},a.title),e)}if((b=a.legendElements)&&!b.length)return null;g=b.map(function(b){return c._renderLegendForElement(b,
a.layer)}).filter(function(a){return!!a});if(!g.length)return null;b=(e={},e["esri-legend__group-layer-child"]=!!a.parent,e);return f.tsx("div",{key:n,"class":"esri-legend__service",classes:b},f.tsx("p",{"class":"esri-legend__service-label"},a.title),f.tsx("div",{"class":"esri-legend__layer"},g));var g},d.prototype._renderLegendForElement=function(a,c,b){var n=this,e="color-ramp"===a.type,g="opacity-ramp"===a.type,d="size-ramp"===a.type,h=null;if("symbol-table"===a.type||d){var l=a.infos.map(function(b){return n._renderLegendForElementInfo(b,
c,d,a.legendType)}).filter(function(a){return!!a});l.length&&(h=f.tsx("div",{"class":"esri-legend__layer-body"},l))}else(e||g)&&(h=this._renderLegendForRamp(a.infos,a.overlayColor,g));if(!h)return null;var l=a.title,k=null;"string"==typeof l?k=l:l&&(e=this._getTitle(l,e||g),k=l.title?l.title+" ("+e+")":e);b=b?"esri-legend__layer-child-table":"esri-legend__layer-table";e=k?f.tsx("div",{"class":"esri-legend__layer-caption"},k):null;return f.tsx("div",{"class":b},e,h)},d.prototype._renderLegendForRamp=
function(a,c,b){var d=a.length-1,e=null,e=2<d?25*d:50,g=document.createElement("div");g.className="esri-legend__color-ramp "+(b?"esri-legend__opacity-ramp":"");g.style.height=e+"px";b=y.createSurface(g,"100%",e);try{a.forEach(function(a,b){a.offset=b/d}),b.createRect({x:0,y:0,width:"100%",height:e}).setFill({type:"linear",x1:0,y1:0,x2:0,y2:e,colors:a}).setStroke(null),c&&0<c.a&&b.createRect({x:0,y:0,width:"100%",height:e}).setFill(c).setStroke(null)}catch(A){b.clear(),b.destroy()}if(!b)return null;
a=a.filter(function(a){return!!a.label}).map(function(a){return f.tsx("div",{"class":"esri-legend__ramp-label"},a.label)});e={height:e+"px"};return f.tsx("div",{"class":"esri-legend__layer-row"},f.tsx("div",{"class":"esri-legend__layer-cell esri-legend__layer-cell--symbols",styles:{width:"24px"}},f.tsx("div",{"class":"esri-legend__ramps",bind:g,afterCreate:this._attachToNode})),f.tsx("div",{"class":"esri-legend__layer-cell esri-legend__layer-cell--info"},f.tsx("div",{"class":"esri-legend__ramp-labels",
styles:e},a)))},d.prototype._renderLegendForElementInfo=function(a,c,b,d){if(a.type)return this._renderLegendForElement(a,c,!0);var e=null;d=this._isImageryStretchedLegend(c,d);if(a.symbol&&a.preview?e=f.tsx("div",{"class":"esri-legend__symbol",bind:a.preview,afterCreate:this._attachToNode}):a.src&&(e=this._renderImage(a,c,d)),!e)return null;c=(g={},g["esri-legend__imagery-layer-info--stretched"]=d,g);b=(h={},h["esri-legend__imagery-layer-info--stretched"]=d,h["esri-legend__size-ramp"]=!d&&b,h);return f.tsx("div",
{"class":"esri-legend__layer-row"},f.tsx("div",{"class":"esri-legend__layer-cell esri-legend__layer-cell--symbols",classes:b},e),f.tsx("div",{"class":"esri-legend__layer-cell esri-legend__layer-cell--info",classes:c},a.label||""));var g,h},d.prototype._attachToNode=function(a){a.appendChild(this)},d.prototype._renderImage=function(a,c,b){var d=a.src,e=a.opacity;b=(g={},g["esri-legend__imagery-layer-image--stretched"]=b,g["esri-legend__symbol"]=!b,g);return f.tsx("img",{src:d,border:0,width:a.width,
height:a.height,classes:b,styles:{opacity:""+(null!=e?e:c.opacity)}});var g},d.prototype._isImageryStretchedLegend=function(a,c){return!!(c&&"Stretched"===c&&10.3<=a.version&&"esri.layers.ImageryLayer"===a.declaredClass)},d.prototype._getTitle=function(a,c){var b=null;return c?b=a.ratioPercentTotal?"showRatioPercentTotal":a.ratioPercent?"showRatioPercent":a.ratio?"showRatio":a.normField?"showNormField":a.field?"showField":null:!c&&(b=a.normField?"showNormField":a.normByPct?"showNormPct":a.field?"showField":
null),b?w.substitute({field:a.field,normField:a.normField},q[b]):null},d}(k.declared(t));return m([k.aliasOf("viewModel.activeLayerInfos"),f.renderable()],h.prototype,"activeLayerInfos",void 0),m([k.aliasOf("viewModel.basemapLegendVisible"),f.renderable()],h.prototype,"basemapLegendVisible",void 0),m([k.aliasOf("viewModel.groundLegendVisible"),f.renderable()],h.prototype,"groundLegendVisible",void 0),m([k.aliasOf("viewModel.layerInfos"),f.renderable()],h.prototype,"layerInfos",void 0),m([k.aliasOf("viewModel.view"),
f.renderable()],h.prototype,"view",void 0),m([k.property(),f.renderable()],h.prototype,"viewModel",void 0),h=m([k.subclass("esri.widgets.Legend")],h)});