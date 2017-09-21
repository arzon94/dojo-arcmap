//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/Error ../core/JSONSupport ./PortalFolder ./PortalGroup ../core/promiseUtils ../core/requireUtils dojo/promise/all".split(" "),function(h,c,k,d,a,f,l,m,g,n,p,q){c=function(c){function a(){var b=c.call(this)||this;return b.access=null,b.created=null,b.culture=null,b.description=null,b.email=null,b.fullName=null,b.modified=null,b.orgId=null,b.portal=null,b.preferredView=
null,b.privileges=null,b.region=null,b.role=null,b.roleId=null,b.units=null,b.username=null,b.userType=null,b}return k(a,c),Object.defineProperty(a.prototype,"thumbnailUrl",{get:function(){var b=this.url,a=this.thumbnail;return b&&a?this.portal._normalizeUrl(b+"/info/"+a+"?f\x3djson"):null},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"userContentUrl",{get:function(){var b=this.get("portal.restUrl");return b?b+"/content/users/"+this.username:null},enumerable:!0,configurable:!0}),
Object.defineProperty(a.prototype,"url",{get:function(){var b=this.get("portal.restUrl");return b?b+"/community/users/"+this.username:null},enumerable:!0,configurable:!0}),a.prototype.addItem=function(b){var a=this,c=b&&b.item,d=b&&b.data;b=b&&b.folder;var e={method:"post"};c&&(e.query=c._getPostQuery(),null!=d&&("string"==typeof d?e.query.text=d:"object"==typeof d&&(e.query.text=JSON.stringify(d))));d=this.userContentUrl;return b&&(d+="/"+b.id),this.portal._request(d+"/addItem",e).then(function(b){return c.id=
b.id,c.portal=a.portal,c.loaded?c._reload():c.load()})},a.prototype.deleteItem=function(b){var a=this.userContentUrl;return b.ownerFolder&&(a+="/"+b.ownerFolder),this.portal._request(a+("/items/"+b.id+"/delete"),{method:"post"}).then(function(){b.id=null;b.portal=null})},a.prototype.fetchFolders=function(){var b=this;return this.portal._request(this.userContentUrl,{query:{num:1}}).then(function(a){return a&&a.folders?a.folders.map(function(a){a=m.fromJSON(a);return a.portal=b.portal,a}):[]})},a.prototype.fetchGroups=
function(){var b=this;return this.portal._request(this.url).then(function(a){return a&&a.groups?a.groups.map(function(a){a=g.fromJSON(a);return a.portal=b.portal,a}):[]})},a.prototype.fetchItems=function(a){var b=this;a||(a={});var c=this.userContentUrl;a.folder&&(c+="/"+a.folder.id);var d;return p.when(h,"./PortalItem").then(function(e){d=e;return b.portal._request(c,{query:{folders:!1,num:a.num||10,start:a.start||1}})}).then(function(a){var c;return a&&a.items?(c=a.items.map(function(a){a=d.fromJSON(a);
return a.portal=b.portal,a.load(),a}),q(c).always(function(){return{items:c,nextStart:a.nextStart,total:a.total}})):{items:[],nextStart:-1,total:0}})},a.prototype.getThumbnailUrl=function(a){var b=this.thumbnailUrl;return b&&a&&(b+="\x26w\x3d"+a),b},a.prototype.queryFavorites=function(a){return this.favGroupId?(this._favGroup||(this._favGroup=new g({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(a)):n.reject(new f("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))},
a.prototype.toJSON=function(){throw new f("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented");},a}(a.declared(l));return d([a.property()],c.prototype,"access",void 0),d([a.property({type:Date})],c.prototype,"created",void 0),d([a.property()],c.prototype,"culture",void 0),d([a.property()],c.prototype,"description",void 0),d([a.property()],c.prototype,"email",void 0),d([a.property()],c.prototype,"favGroupId",void 0),d([a.property()],c.prototype,"fullName",void 0),d([a.property({type:Date})],
c.prototype,"modified",void 0),d([a.property()],c.prototype,"orgId",void 0),d([a.property()],c.prototype,"portal",void 0),d([a.property()],c.prototype,"preferredView",void 0),d([a.property()],c.prototype,"privileges",void 0),d([a.property()],c.prototype,"region",void 0),d([a.property()],c.prototype,"role",void 0),d([a.property()],c.prototype,"roleId",void 0),d([a.property()],c.prototype,"thumbnail",void 0),d([a.property({dependsOn:["url","thumbnail","portal.credential.token"],readOnly:!0})],c.prototype,
"thumbnailUrl",null),d([a.property()],c.prototype,"units",void 0),d([a.property({dependsOn:["portal.restUrl"],readOnly:!0})],c.prototype,"userContentUrl",null),d([a.property({dependsOn:["portal.restUrl"],readOnly:!0})],c.prototype,"url",null),d([a.property()],c.prototype,"username",void 0),d([a.property()],c.prototype,"userType",void 0),c=d([a.subclass("esri.portal.PortalUser")],c)});