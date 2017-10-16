//>>built
define(["dojo/_base/lang","dojo/_base/array","dojo/_base/connect","../_base"],function(e,k,g,f){var d=e.getObject("tag.misc",!0,f);d.DebugNode=e.extend(function(a){this.text=a},{render:function(a,b){for(var c=a.getKeys(),h=[],d=0,e;e=c[d];d++)h+="["+e+": "+typeof a[e]+"]\n";return this.text.set(h).render(a,b,this)},unrender:function(a,b){return b},clone:function(a){return new this.constructor(this.text.clone(a))},toString:function(){return"ddtm.DebugNode"}});d.FilterNode=e.extend(function(a,b){this._varnode=
a;this._nodelist=b},{render:function(a,b){var c=this._nodelist.render(a,new dojox.string.Builder);a=a.update({"var":c.toString()});this._varnode.render(a,b);a=a.pop();return b},unrender:function(a,b){return b},clone:function(a){return new this.constructor(this._expression,this._nodelist.clone(a))}});d.FirstOfNode=e.extend(function(a,b){this._vars=a;this.vars=k.map(a,function(a){return new dojox.dtl._Filter(a)});this.contents=b},{render:function(a,b){for(var c=0,d;d=this.vars[c];c++)if(d=d.resolve(a),
"undefined"!=typeof d)return null===d&&(d="null"),this.contents.set(d),this.contents.render(a,b);return this.contents.unrender(a,b)},unrender:function(a,b){return this.contents.unrender(a,b)},clone:function(a){return new this.constructor(this._vars,this.contents.clone(a))}});d.SpacelessNode=e.extend(function(a,b){this.nodelist=a;this.contents=b},{render:function(a,b){if(b.getParent){var c=[g.connect(b,"onAddNodeComplete",this,"_watch"),g.connect(b,"onSetParent",this,"_watchParent")];b=this.nodelist.render(a,
b);g.disconnect(c[0]);g.disconnect(c[1])}else c=this.nodelist.dummyRender(a),this.contents.set(c.replace(/>\s+</g,"\x3e\x3c")),b=this.contents.render(a,b);return b},unrender:function(a,b){return this.nodelist.unrender(a,b)},clone:function(a){return new this.constructor(this.nodelist.clone(a),this.contents.clone(a))},_isEmpty:function(a){return 3==a.nodeType&&!a.data.match(/[^\s\n]/)},_watch:function(a){if(this._isEmpty(a))a.parentNode.firstChild==a&&a.parentNode.removeChild(a);else{var b=a.parentNode.childNodes;
if(1==a.nodeType&&2<b.length)for(var c=2;b[c];c++)if(1==b[c-2].nodeType&&this._isEmpty(b[c-1])){a.parentNode.removeChild(b[c-1]);break}}},_watchParent:function(a){if(a.childNodes.length)for(;a.childNodes.length;){var b=a.childNodes[a.childNodes.length-1];if(!this._isEmpty(b))break;a.removeChild(b)}}});d.TemplateTagNode=e.extend(function(a,b){this.tag=a;this.contents=b},{mapping:{openblock:"{%",closeblock:"%}",openvariable:"{{",closevariable:"}}",openbrace:"{",closebrace:"}",opencomment:"{#",closecomment:"#}"},
render:function(a,b){this.contents.set(this.mapping[this.tag]);return this.contents.render(a,b)},unrender:function(a,b){return this.contents.unrender(a,b)},clone:function(a){return new this.constructor(this.tag,this.contents.clone(a))}});d.WidthRatioNode=e.extend(function(a,b,c,d){this.current=new f._Filter(a);this.max=new f._Filter(b);this.width=c;this.contents=d},{render:function(a,b){var c=+this.current.resolve(a),d=+this.max.resolve(a);"number"==typeof c&&"number"==typeof d&&d?this.contents.set(""+
Math.round(c/d*this.width)):this.contents.set("");return this.contents.render(a,b)},unrender:function(a,b){return this.contents.unrender(a,b)},clone:function(a){return new this.constructor(this.current.getExpression(),this.max.getExpression(),this.width,this.contents.clone(a))}});d.WithNode=e.extend(function(a,b,c){this.target=new f._Filter(a);this.alias=b;this.nodelist=c},{render:function(a,b){var c=this.target.resolve(a);a=a.push();a[this.alias]=c;b=this.nodelist.render(a,b);a=a.pop();return b},
unrender:function(a,b){return b},clone:function(a){return new this.constructor(this.target.getExpression(),this.alias,this.nodelist.clone(a))}});e.mixin(d,{comment:function(a,b){a.skip_past("endcomment");return f._noOpNode},debug:function(a,b){return new d.DebugNode(a.create_text_node())},filter:function(a,b){b=b.contents.split(null,1)[1];b=a.create_variable_node("var|"+b);var c=a.parse(["endfilter"]);a.next_token();return new d.FilterNode(b,c)},firstof:function(a,b){b=b.split_contents().slice(1);
if(!b.length)throw Error("'firstof' statement requires at least one argument");return new d.FirstOfNode(b,a.create_text_node())},spaceless:function(a,b){b=a.parse(["endspaceless"]);a.delete_first_token();return new d.SpacelessNode(b,a.create_text_node())},templatetag:function(a,b){b=b.contents.split();if(2!=b.length)throw Error("'templatetag' statement takes one argument");b=b[1];var c=d.TemplateTagNode.prototype.mapping;if(!c[b]){a=[];for(var e in c)a.push(e);throw Error("Invalid templatetag argument: '"+
b+"'. Must be one of: "+a.join(", "));}return new d.TemplateTagNode(b,a.create_text_node())},widthratio:function(a,b){b=b.contents.split();if(4!=b.length)throw Error("widthratio takes three arguments");var c=+b[3];if("number"!=typeof c)throw Error("widthratio final argument must be an integer");return new d.WidthRatioNode(b[1],b[2],c,a.create_text_node())},with_:function(a,b){b=b.split_contents();if(4!=b.length||"as"!=b[2])throw Error("do_width expected format as 'with value as name'");var c=a.parse(["endwith"]);
a.next_token();return new d.WithNode(b[1],b[3],c)}});return d});