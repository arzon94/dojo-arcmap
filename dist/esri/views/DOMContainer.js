//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/_base/lang dojo/on dojo/dom dojo/dom-construct ../core/Accessor ../core/HandleRegistry ../core/Scheduler ../core/watchUtils ../widgets/Popup ./PopupManager ./ui/DefaultUI ../core/accessorSupport/decorators".split(" "),function(e,y,n,f,p,q,g,m,r,t,u,k,v,w,x,b){var l=[0,0];e=function(e){function b(){var a=e.call(this)||this;return a.height=0,a.position=null,a.resizing=!1,a.root=null,a.surface=null,a.suspended=
!0,a.width=0,Object.defineProperty(a,"_measureInfo",{enumerable:!1,writable:!1,value:{task:null,freq:16,time:750}}),a._domHandles=new t,a.watch("interacting",function(d){var c=a.surface;c&&c.setAttribute("data-interacting",d.toString())}),a}return n(b,e),b.prototype.getDefaults=function(){return p.mixin(this.inherited(arguments),{popup:{},ui:{}})},b.prototype.initialize=function(){var a=this,d=this._measureInfo,c=null;k.init(this,"container",function(b,e,f,h){if(null!=b||null!=e)c&&(c.remove(),c=
null,d.freq=16,d.time=750),d.task&&(d.task.remove(),d.task=null),b?(c=q(window,"resize",function(){d.freq=16;d.time=750}),d.task=u.addFrameTask({prepare:function(d){var c=a._measureInfo;(c.time+=d.deltaTime,c.time<c.freq)||(c.time=0,a._measure()?(c.freq=16,a._set("resizing",!0)):(c.freq=Math.min(750,2*c.freq),512<=c.freq&&a._set("resizing",!1)))}})):a._set("resizing",!1),a._measure(),b=a.root,e=a.surface,f=a.width,h=a.height,b&&e&&f&&h&&(b.style.width=e.style.width=f+"px",b.style.height=e.style.height=
h+"px")})},b.prototype.destroy=function(){this.ui.destroy();this.popup&&this.popup.destroy();this.container=null},Object.defineProperty(b.prototype,"container",{set:function(a){var d=this._get("container");if(d!==a){if(d&&(d.classList.remove("esri-view"),this.popupManager.destroy(),this.popupManager=null,m.destroy(this.root),this._set("root",null)),a){a.classList.add("esri-view");d=document.createElement("div");d.className="esri-view-root";a.insertBefore(d,a.firstChild);this._set("root",d);var c=
document.createElement("div");c.className="esri-view-surface";g.setSelectable(c,!1);d.appendChild(c);this._set("surface",c);this._forceReadyCycle();this.popupManager=new w({enabled:!0,view:this})}else this._set("width",0),this._set("height",0),this._set("position",null),this._set("suspended",!0),this._set("surface",null);this._set("container",a)}},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"popup",{set:function(a){var d=this._get("popup");a!==d&&(this._domHandles.remove("view-popup"),
d&&d.destroy(),a&&(a.viewModel.view=this,a._started||a.startup(),this._domHandles.add([k.init(this,"root",function(c,d){var b=a.domNode;g.isDescendant(b.parentNode,d)&&b.parentNode.removeChild(b);c&&!b.parentNode&&a.placeAt(c)})],"view-popup")),this._set("popup",a))},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"size",{get:function(){return[this.width,this.height]},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"ui",{set:function(a){var d=this._get("ui");a!==
d&&(this._domHandles.remove("ui"),d&&d.destroy(),a&&(a.view=this,this._domHandles.add([k.init(this,"root",function(c){a.container=c?m.create("div",null,c):null})],"ui")),this._set("ui",a))},enumerable:!0,configurable:!0}),b.prototype.pageToContainer=function(a,d,c){var b=this.position;return a-=b[0],d-=b[1],c?(c[0]=a,c[1]=d):c=[a,d],c},b.prototype.containerToPage=function(a,d,c){var b=this.position;return a+=b[0],d+=b[1],c?(c[0]=a,c[1]=d):c=[a,d],c},b.prototype._measure=function(){var a=this.container,
d=a?a.clientWidth:0,c=a?a.clientHeight:0;if(0===d||0===c||"hidden"===window.getComputedStyle(a).visibility)return this._set("suspended",!0),!1;var b=this.root,e=this.surface,f=this.width,h=this.height,g=this.position;if(d===f&&c===h)return this._set("suspended",!1),!1;b&&e&&(b.style.width=e.style.width=d+"px",b.style.height=e.style.height=c+"px");this._set("width",d);this._set("height",c);this._set("suspended",!1);b=(a.ownerDocument||window.document).defaultView;a=a.getBoundingClientRect();a=(l[0]=
a.left+b.pageXOffset,l[1]=a.top+b.pageYOffset,l);return g&&a[0]===g[0]&&a[1]===g[1]||this._set("position",a.slice()),this.emit("resize",{oldWidth:f,oldHeight:h,width:d,height:c}),!0},b}(b.declared(r));return f([b.property({value:null,cast:function(b){return g.byId(b)}})],e.prototype,"container",null),f([b.property({readOnly:!0})],e.prototype,"height",void 0),f([b.property({type:v})],e.prototype,"popup",null),f([b.property({readOnly:!0})],e.prototype,"position",void 0),f([b.property({readOnly:!0})],
e.prototype,"resizing",void 0),f([b.property({readOnly:!0})],e.prototype,"root",void 0),f([b.property({value:null,dependsOn:["width","height"],readOnly:!0})],e.prototype,"size",null),f([b.property({readOnly:!0})],e.prototype,"surface",void 0),f([b.property({readOnly:!0})],e.prototype,"suspended",void 0),f([b.property({type:x})],e.prototype,"ui",null),f([b.property({readOnly:!0})],e.prototype,"width",void 0),e=f([b.subclass("esri.views.DOMContainer")],e)});