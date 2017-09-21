//>>built
/*
 MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
!function(){function p(c,e,f){this.obj=c;this.right=this.left=null;this.parent=f;this.dimension=e}function t(c,e,f){function k(a,b,l){var c,d,q=b%f.length;return 0===a.length?null:1===a.length?new p(a[0],q,l):(a.sort(function(a,d){return a[f[q]]-d[f[q]]}),c=Math.floor(a.length/2),d=new p(a[c],q,l),d.left=k(a.slice(0,c),b+1,d),d.right=k(a.slice(c+1),b+1,d),d)}function n(a){function f(a){a.left&&(a.left.parent=a,f(a.left));a.right&&(a.right.parent=a,f(a.right))}h.root=a;f(h.root)}var h=this;Array.isArray(c)?
this.root=k(c,0,null):n(c,e,f);this.toJSON=function(a){a||(a=this.root);var f=new p(a.obj,a.dimension,null);return a.left&&(f.left=h.toJSON(a.left)),a.right&&(f.right=h.toJSON(a.right)),f};this.insert=function(a){function c(d,g){if(null===d)return g;g=f[d.dimension];return a[g]<d.obj[g]?c(d.left,d):c(d.right,d)}var l,e,d=c(this.root,null);return null===d?void(this.root=new p(a,0,null)):(l=new p(a,(d.dimension+1)%f.length,d),e=f[d.dimension],void(a[e]<d.obj[e]?d.left=l:d.right=l))};this.remove=function(a){function c(d){if(null===
d)return null;if(d.obj===a)return d;var e=f[d.dimension];return a[e]<d.obj[e]?c(d.left,d):c(d.right,d)}function l(a){function c(a,d){var e,m,g,b,l;return null===a?null:(e=f[d],a.dimension===d?null!==a.right?c(a.right,d):a:(m=a.obj[e],g=c(a.left,d),b=c(a.right,d),l=a,null!==g&&g.obj[e]>m&&(l=g),null!==b&&b.obj[e]>l.obj[e]&&(l=b),l))}function d(a,c){var e,m,l,g,b;return null===a?null:(e=f[c],a.dimension===c?null!==a.left?d(a.left,c):a:(m=a.obj[e],l=d(a.left,c),g=d(a.right,c),b=a,null!==l&&l.obj[e]<
m&&(b=l),null!==g&&g.obj[e]<b.obj[e]&&(b=g),b))}var m,e,b;return null===a.left&&null===a.right?null===a.parent?void(h.root=null):(b=f[a.parent.dimension],void(a.obj[b]<a.parent.obj[b]?a.parent.left=null:a.parent.right=null)):(m=null!==a.left?c(a.left,a.dimension):d(a.right,a.dimension),e=m.obj,l(m),void(a.obj=e))}var e;e=c(h.root);null!==e&&l(e)};this.nearest=function(a,c,l,k){function d(b){var k,h,m;k=f[b.dimension];var n=e(a,b.obj),p={};for(h=0;h<f.length;h+=1)h===b.dimension?p[f[h]]=a[f[h]]:p[f[h]]=
b.obj[f[h]];h=e(p,b.obj);null===b.right&&null===b.left?(!(g.size()<c||n<g.peek()[1])||l&&!l(b.obj)||(g.push([b,n]),g.size()>c&&g.pop()),b=void 0):(k=null===b.right?b.left:null===b.left?b.right:a[k]<b.obj[k]?b.left:b.right,d(k),!(g.size()<c||n<g.peek()[1])||l&&!l(b.obj)||(g.push([b,n]),g.size()>c&&g.pop()),b=void((g.size()<c||Math.abs(h)<g.peek()[1])&&(m=k===b.left?b.right:b.left,null!==m&&d(m))));return b}var b,g;if(g=new r(function(a){return-a[1]}),k)for(b=0;c>b;b+=1)g.push([null,k]);d(h.root);k=
[];for(b=0;c>b&&b<g.content.length;b+=1)g.content[b][0]&&k.push([g.content[b][0].obj,g.content[b][1]]);return k};this.balanceFactor=function(){function a(b){return null===b?0:Math.max(a(b.left),a(b.right))+1}function b(a){return null===a?0:b(a.left)+b(a.right)+1}return a(h.root)/(Math.log(b(h.root))/Math.log(2))}}function r(c){this.content=[];this.scoreFunction=c}r.prototype={push:function(c){this.content.push(c);this.bubbleUp(this.content.length-1)},pop:function(){var c=this.content[0],e=this.content.pop();
return 0<this.content.length&&(this.content[0]=e,this.sinkDown(0)),c},peek:function(){return this.content[0]},remove:function(c){for(var e=this.content.length,f=0;e>f;f++)if(this.content[f]==c){var k=this.content.pop();return void(f!=e-1&&(this.content[f]=k,this.scoreFunction(k)<this.scoreFunction(c)?this.bubbleUp(f):this.sinkDown(f)))}throw Error("Node not found.");},size:function(){return this.content.length},bubbleUp:function(c){for(var e=this.content[c];0<c;){var f=Math.floor((c+1)/2)-1,k=this.content[f];
if(!(this.scoreFunction(e)<this.scoreFunction(k)))break;this.content[f]=e;this.content[c]=k;c=f}},sinkDown:function(c){for(var e=this.content.length,f=this.content[c],k=this.scoreFunction(f);;){var n=2*(c+1),h=n-1,a=null;if(e>h){var b=this.scoreFunction(this.content[h]);k>b&&(a=h)}e>n&&(h=this.scoreFunction(this.content[n]),(null==a?k:b)>h&&(a=n));if(null==a)break;this.content[c]=this.content[a];this.content[a]=f;c=a}}};this.kdTree=t;"undefined"!=typeof exports&&(exports.kdTree=t,exports.BinaryHeap=
r)}();