//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/has dojox/gfx/_base ./Shape ./svg".split(" "),function(f,g,h,c,e,k,l){Object.defineProperty(g,"__esModule",{value:!0});f=c("android");var m=c("chrome")||f&&4<=f?"auto":"optimizeLegibility";c=function(c){function d(a){var b=c.call(this)||this;return b.fontStyle=null,b.shape=e.getDefault("Text"),b.rawNode=a,b}return h(d,c),d.prototype.getFont=function(){return this.fontStyle},d.prototype.setFont=function(a){return this.fontStyle=
"string"==typeof a?e.splitFontString(a):e.makeParameters(e.defaultFont,a),this._setFont(),this},d.prototype._setFont=function(){var a=this.fontStyle;this.rawNode.setAttribute("font-style",a.style);this.rawNode.setAttribute("font-variant",a.variant);this.rawNode.setAttribute("font-weight",a.weight);this.rawNode.setAttribute("font-size",a.size);this.rawNode.setAttribute("font-family",a.family)},d.prototype.setShape=function(a){this.shape=e.makeParameters(this.shape,a);this.bbox=null;a=this.rawNode;
var b=this.shape;return a.setAttribute("x",b.x),a.setAttribute("y",b.y),a.setAttribute("text-anchor",b.align),a.setAttribute("text-decoration",b.decoration),a.setAttribute("rotate",b.rotated?90:0),a.setAttribute("kerning",b.kerning?"auto":0),a.setAttribute("text-rendering",m),a.firstChild?a.firstChild.nodeValue=b.text:a.appendChild(l._createTextNode(b.text)),this},d.prototype.getTextWidth=function(){var a=this.rawNode,b=a.parentNode,a=a.cloneNode(!0);a.style.visibility="hidden";var c=0,d=a.firstChild.nodeValue;
if(b.appendChild(a),""!==d)for(;!c;)c=a.getBBox?parseInt(a.getBBox().width,10):68;return b.removeChild(a),c},d.prototype.getBoundingBox=function(){var a=null;if(this.getShape().text)try{a=this.rawNode.getBBox()}catch(b){a={x:0,y:0,width:0,height:0}}return a},d}(k["default"]);c.nodeType="text";g["default"]=c});