//>>built
define("../core/declare dojo/_base/lang ../core/lang ../core/screenUtils ./MarkerSymbol ./support/urlUtils".split(" "),function(h,k,l,d,m,f){var g={width:12,height:12,angle:0,xoffset:0,yoffset:0},c=h(m,{declaredClass:"esri.symbols.PictureMarkerSymbol",properties:{color:{json:{write:!1}},type:"picture-marker-symbol",url:f.urlPropertyDefinition,source:f.sourcePropertyDefinition,height:{json:{read:{source:["height","size"],reader:function(a,b){return b.size||a}},write:!0},cast:d.toPt},width:{json:{read:{source:["width",
"size"],reader:function(a,b){return b.size||a}},write:!0},cast:d.toPt},size:{json:{write:!1}}},getDefaults:function(){return k.mixin(this.inherited(arguments),g)},normalizeCtorArgs:function(a,b,c){if(a&&"string"!=typeof a&&null==a.imageData)return a;var e={};return a&&(e.url=a),null!=b&&(e.width=d.toPt(b)),null!=c&&(e.height=d.toPt(c)),e},clone:function(){var a=new c({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return a._set("source",
l.clone(this.source)),a}});return c.defaultProps=g,c});