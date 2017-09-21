//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/_base/lang dojox/gfx/_base dojox/gfx/matrix ./Shape".split(" "),function(h,l,n,m,k,p,q){Object.defineProperty(l,"__esModule",{value:!0});h=function(g){function f(d){var b=g.call(this)||this;return b.segments=[],b.tbbox=null,b.absolute=!0,b.last={},b.segmented=!1,b._validSegments={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},b._2PI=2*Math.PI,b.rawNode=d,b.shape=m.clone(k.defaultPath),b}return n(f,g),f.prototype.setAbsoluteMode=function(d){return this._confirmSegmented(),
this.absolute="string"==typeof d?"absolute"===d:d,this},f.prototype.getAbsoluteMode=function(){return this._confirmSegmented(),this.absolute},f.prototype.getBoundingBox=function(){return this._confirmSegmented(),this.bbox&&"l"in this.bbox?{x:this.bbox.l,y:this.bbox.t,width:this.bbox.r-this.bbox.l,height:this.bbox.b-this.bbox.t}:null},f.prototype._getRealBBox=function(){if(this._confirmSegmented(),this.tbbox)return this.tbbox;var d=this.bbox,b=this._getRealMatrix();this.bbox=null;for(var a=this.segments.length,
c=0;a>c;++c)this._updateWithSegment(this.segments[c],b);b=this.bbox;return this.bbox=d,this.tbbox=b?[{x:b.l,y:b.t},{x:b.r,y:b.t},{x:b.r,y:b.b},{x:b.l,y:b.b}]:null,this.tbbox},f.prototype.getLastPosition=function(){return this._confirmSegmented(),"x"in this.last?this.last:null},f.prototype._applyTransform=function(){return this.tbbox=null,g.prototype._applyTransform.call(this),this},f.prototype._updateBBox=function(d,b,a){a&&(b=p.multiplyPoint(a,d,b),d=b.x,b=b.y);this.bbox&&"l"in this.bbox?(this.bbox.l>
d&&(this.bbox.l=d),this.bbox.r<d&&(this.bbox.r=d),this.bbox.t>b&&(this.bbox.t=b),this.bbox.b<b&&(this.bbox.b=b)):this.bbox={l:d,b:b,r:d,t:b}},f.prototype._updateWithSegment=function(d,b){var a,c=d.args,e=c.length;switch(d.action){case "M":case "L":case "C":case "S":case "Q":case "T":for(a=0;e>a;a+=2)this._updateBBox(c[a],c[a+1],b);this.last.x=c[e-2];this.last.y=c[e-1];this.absolute=!0;break;case "H":for(a=0;e>a;++a)this._updateBBox(c[a],this.last.y,b);this.last.x=c[e-1];this.absolute=!0;break;case "V":for(a=
0;e>a;++a)this._updateBBox(this.last.x,c[a],b);this.last.y=c[e-1];this.absolute=!0;break;case "m":a=0;"x"in this.last||(this._updateBBox(this.last.x=c[0],this.last.y=c[1],b),a=2);for(;e>a;a+=2)this._updateBBox(this.last.x+=c[a],this.last.y+=c[a+1],b);this.absolute=!1;break;case "l":case "t":for(a=0;e>a;a+=2)this._updateBBox(this.last.x+=c[a],this.last.y+=c[a+1],b);this.absolute=!1;break;case "h":for(a=0;e>a;++a)this._updateBBox(this.last.x+=c[a],this.last.y,b);this.absolute=!1;break;case "v":for(a=
0;e>a;++a)this._updateBBox(this.last.x,this.last.y+=c[a],b);this.absolute=!1;break;case "c":for(a=0;e>a;a+=6)this._updateBBox(this.last.x+c[a],this.last.y+c[a+1],b),this._updateBBox(this.last.x+c[a+2],this.last.y+c[a+3],b),this._updateBBox(this.last.x+=c[a+4],this.last.y+=c[a+5],b);this.absolute=!1;break;case "s":case "q":for(a=0;e>a;a+=4)this._updateBBox(this.last.x+c[a],this.last.y+c[a+1],b),this._updateBBox(this.last.x+=c[a+2],this.last.y+=c[a+3],b);this.absolute=!1;break;case "A":for(a=0;e>a;a+=
7)this._updateBBox(c[a+5],c[a+6],b);this.last.x=c[e-2];this.last.y=c[e-1];this.absolute=!0;break;case "a":for(a=0;e>a;a+=7)this._updateBBox(this.last.x+=c[a+5],this.last.y+=c[a+6],b);this.absolute=!1}d=[d.action];for(a=0;e>a;++a)d.push(k.formatNumber(c[a],!0));if("string"==typeof this.shape.path)this.shape.path+=d.join("");else for(a=0,e=d.length;e>a;++a)this.shape.path.push(d[a]);"string"==typeof this.shape.path&&this.rawNode.setAttribute("d",this.shape.path)},f.prototype._pushSegment=function(d,
b){this.tbbox=null;var a,c=this._validSegments[d.toLowerCase()];"number"==typeof c&&(c?b.length>=c&&(a={action:d,args:b.slice(0,b.length-b.length%c)},this.segments.push(a),this._updateWithSegment(a)):(a={action:d,args:[]},this.segments.push(a),this._updateWithSegment(a)))},f.prototype._collectArgs=function(d,b){for(var a=0;a<b.length;++a){var c=b[a];"boolean"==typeof c?d.push(c?1:0):"number"==typeof c?d.push(c):c instanceof Array?this._collectArgs(d,c):"x"in c&&"y"in c&&d.push(c.x,c.y)}},f.prototype._confirmSegmented=
function(){if(!this.segmented){var d=this.shape.path;this.shape.path=[];this._setPath(d);this.shape.path=this.shape.path.join("");this.segmented=!0}},f.prototype._setPath=function(d){d=m.isArray(d)?d:d.match(k.pathSvgRegExp);if(this.segments=[],this.absolute=!0,this.bbox={},this.last={},d){for(var b="",a=[],c=d.length,e=0;c>e;++e){var f=d[e],g=parseFloat(f);isNaN(g)?(b&&this._pushSegment(b,a),a=[],b=f):a.push(g)}this._pushSegment(b,a)}},f.prototype.setShape=function(d){return g.prototype.setShape.call(this,
"string"==typeof d?{path:d}:d),this.segmented=!1,this.segments=[],this.shape.path?this.rawNode.setAttribute("d",this.shape.path):this.rawNode.removeAttribute("d"),this},f}(q["default"]);h.nodeType="path";l["default"]=h});