//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/Collection ../core/collectionUtils ../core/accessorSupport/decorators ./Slide".split(" "),function(a,n,k,f,l,m,g,d,h){var e=m.ofType(h);a=function(a){function c(b){b=a.call(this,b)||this;return b.slides=new e,b}return k(c,a),Object.defineProperty(c.prototype,"slides",{set:function(b){this._set("slides",g.referenceSetter(b,this._get("slides"),e))},enumerable:!0,configurable:!0}),
c.prototype.clone=function(){return new this.constructor({slides:this.slides.clone()})},c.sanitizeJSON=function(b){var a;return a=void 0!==b.slides&&Array.isArray(b.slides)?b.slides.filter(function(a){return a&&!!a.viewpoint}).map(function(a){return h.sanitizeJSON(a)}):[],{slides:a}},c}(d.declared(l));return f([d.property({type:e,json:{write:!0}}),d.cast(g.castForReferenceSetter)],a.prototype,"slides",null),a=f([d.subclass("esri.webscene.Presentation")],a)});