//>>built
define(["../../core/declare","dijit/Tooltip","dojo/_base/lang","dojo/dom"],function(f,g,h,k){return f(null,{declaredClass:"esri.widgets.support._Tooltip",constructor:function(){this._tooltips=[]},startup:function(){this.inherited(arguments);this._started||this._tooltips.forEach(function(a){a.startup()})},destroy:function(){this._tooltips.forEach(function(a){a.destroy()});this._tooltips=null},_tooltips:null,createTooltips:function(a){a.forEach(function(a){this.createTooltip(a.node,a.label)},this)},
createTooltip:function(a,b){var c,d;(a=this._getConnectId(a))&&(c="object"==typeof b?h.mixin({},b,{connectId:a}):{connectId:a,label:b},d=new g(c),this._started&&d.startup(),this._tooltips.push(d))},findTooltip:function(a){var b,c,d=this._getNode(a);if(a){a=this._tooltips;b=a.length;for(var e=0;b>e;e++)if(c=a[e],Array.isArray(c.connectId)?-1<c.connectId.indexOf(d):c.connectId===d)return c}},_getConnectId:function(a){var b,c;if(a){if(Array.isArray(a)){if(b=[],a.forEach(function(a){(c=this._getNode(a))&&
b.push(c)},this),0===b.length)return}else if(b=this._getNode(a),!b)return;return b}},_getNode:function(a){return k.byId(a.domNode||a)}})});