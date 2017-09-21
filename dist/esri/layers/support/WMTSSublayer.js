//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/paramHelper ../../core/accessorSupport/decorators ../../core/Collection ../../core/JSONSupport ./TileMatrixSet ./WMTSStyle ../../geometry/Extent".split(" "),function(c,n,g,d,p,b,f,h,k,l,m){c=e=function(c){function b(a){a=c.call(this)||this;return a.fullExtent=null,a.imageFormats=null,a.id=null,a.layer=null,a.styles=null,a.tileMatrixSetId=null,a.tileMatrixSets=null,a}return g(b,
c),Object.defineProperty(b.prototype,"description",{get:function(){return this._get("description")},set:function(a){this._set("description",a)},enumerable:!0,configurable:!0}),b.prototype.readFullExtent=function(a,b,c){return a=b.fullExtent,a?m.fromJSON(a):null},Object.defineProperty(b.prototype,"imageFormat",{get:function(){var a=this._get("imageFormat");return a||(a=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),a},set:function(a){return(-1<a.indexOf("image/")||-1===this.imageFormats.indexOf(a))&&
(-1===a.indexOf("image/")&&(a="image/"+a),this.imageFormats&&-1===this.imageFormats.indexOf(a))?void console.error("The layer doesn't support the format of "+a):void this._set("imageFormat",a)},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"styleId",{get:function(){var a=this._get("styleId");return a||(a=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),a},set:function(a){this._set("styleId",a)},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"title",
{get:function(){return this._get("title")},set:function(a){this._set("title",a)},enumerable:!0,configurable:!0}),b.prototype.clone=function(){var a=new e;return this.hasOwnProperty("description")&&(a.description=this.description),this.hasOwnProperty("imageFormats")&&(a.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(a.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(a.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&
(a.id=this.id),this.hasOwnProperty("layer")&&(a.layer=this.layer),this.hasOwnProperty("styleId")&&(a.styleId=this.styleId),this.hasOwnProperty("styles")&&(a.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(a.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(a.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(a.title=this.title),a},b}(b.declared(h));d([b.property()],c.prototype,"description",null);d([b.property()],
c.prototype,"fullExtent",void 0);d([b.reader("fullExtent",["fullExtent"])],c.prototype,"readFullExtent",null);d([b.property({dependsOn:["imageFormats"]})],c.prototype,"imageFormat",null);d([b.property({json:{read:{source:"formats"}}})],c.prototype,"imageFormats",void 0);d([b.property()],c.prototype,"id",void 0);d([b.property()],c.prototype,"layer",void 0);d([b.property()],c.prototype,"styleId",null);d([b.property({type:f.ofType(l),json:{read:{source:"styles"}}})],c.prototype,"styles",void 0);d([b.property({value:null,
json:{write:{ignoreOrigin:!0}}})],c.prototype,"title",null);d([b.property()],c.prototype,"tileMatrixSetId",void 0);d([b.property({type:f.ofType(k),json:{read:{source:"tileMatrixSets"}}})],c.prototype,"tileMatrixSets",void 0);c=e=d([b.subclass("esri.layers.support.WMTSSublayer")],c);var e;return c});