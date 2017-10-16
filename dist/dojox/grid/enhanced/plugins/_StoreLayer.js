//>>built
define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/xhr"],function(f,g,d,l){var h=d.getObject("grid.enhanced.plugins",!0,dojox),m=function(a){for(var b=["reorder","sizeChange","normal","presentation"],c=b.length,e=a.length-1;0<=e;--e){var d=g.indexOf(b,a[e]);0<=d&&d<=c&&(c=d)}return c<b.length-1?b.slice(0,c+1):b},n=function(a){var b,c=this._layers;b=c.length;if(a){for(--b;0<=b;--b)if(c[b].name()==a){c[b]._unwrap(c[b+1]);break}c.splice(b,1)}else for(--b;0<=b;--b)c[b]._unwrap();
c.length||(delete this._layers,delete this.layer,delete this.unwrap,delete this.forEachLayer);return this},p=function(a){var b,c=this._layers;if("undefined"==typeof a)return c.length;if("number"==typeof a)return c[a];for(b=c.length-1;0<=b;--b)if(c[b].name()==a)return c[b];return null},q=function(a,b){var c=this._layers.length,e;b?(b=0,e=1):(b=c-1,e=c=-1);for(;b!=c;b+=e)if(!1===a(this._layers[b],b))return b;return c};h.wrap=function(a,b,c,e){a._layers||(a._layers=[],a.layer=d.hitch(a,p),a.unwrap=d.hitch(a,
n),a.forEachLayer=d.hitch(a,q));var f=m(c.tags);g.some(a._layers,function(d,h){if(g.some(d.tags,function(a){return 0<=g.indexOf(f,a)}))return!1;a._layers.splice(h,0,c);c._wrap(a,b,e,d);return!0})||(a._layers.push(c),c._wrap(a,b,e));return a};var k=f("dojox.grid.enhanced.plugins._StoreLayer",null,{tags:["normal"],layerFuncName:"_fetch",constructor:function(){this._originFetch=this._store=null;this.__enabled=!0},initialize:function(a){},uninitialize:function(a){},invalidate:function(){},_wrap:function(a,
b,c,e){this._store=a;this._funcName=b;var f=d.hitch(this,function(){return(this.enabled()?this[c||this.layerFuncName]:this.originFetch).apply(this,arguments)});e?(this._originFetch=e._originFetch,e._originFetch=f):(this._originFetch=a[b]||function(){},a[b]=f);this.initialize(a)},_unwrap:function(a){this.uninitialize(this._store);a?a._originFetch=this._originFetch:this._store[this._funcName]=this._originFetch;this._store=this._originFetch=null},enabled:function(a){"undefined"!=typeof a&&(this.__enabled=
!!a);return this.__enabled},name:function(){if(!this.__name){var a=this.declaredClass.match(/(?:\.(?:_*)([^\.]+)Layer$)|(?:\.([^\.]+)$)/i);this.__name=a?(a[1]||a[2]).toLowerCase():this.declaredClass}return this.__name},originFetch:function(){return d.hitch(this._store,this._originFetch).apply(this,arguments)}});f=f("dojox.grid.enhanced.plugins._ServerSideLayer",k,{constructor:function(a){a=a||{};this._url=a.url||"";this._isStateful=!!a.isStateful;this._onUserCommandLoad=a.onCommandLoad||function(){};
this.__cmds={cmdlayer:this.name(),enable:!0};this.useCommands(this._isStateful)},enabled:function(a){var b=this.inherited(arguments);this.__cmds.enable=this.__enabled;return b},useCommands:function(a){"undefined"!=typeof a&&(this.__cmds.cmdlayer=a&&this._isStateful?this.name():null);return!!this.__cmds.cmdlayer},_fetch:function(a){this.__cmds.cmdlayer?l.post({url:this._url||this._store.url,content:this.__cmds,load:d.hitch(this,function(b){this.onCommandLoad(b,a);this.originFetch(a)}),error:d.hitch(this,
this.onCommandError)}):(this.onCommandLoad("",a),this.originFetch(a));return a},command:function(a,b){var c=this.__cmds;null===b?delete c[a]:"undefined"!==typeof b&&(c[a]=b);return c[a]},onCommandLoad:function(a,b){this._onUserCommandLoad(this.__cmds,b,a)},onCommandError:function(a){throw a;}});return{_StoreLayer:k,_ServerSideLayer:f,wrap:h.wrap}});