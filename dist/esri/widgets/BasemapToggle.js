//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./support/widget ../core/accessorSupport/decorators ./Widget ./BasemapToggle/BasemapToggleViewModel dojo/i18n!./BasemapToggle/nls/BasemapToggle".split(" "),function(b,l,g,c,a,d,h,e,k){function f(a){return(a=e.getThumbnailUrl(a))?{backgroundImage:"url("+a+")"}:{backgroundImage:""}}b=function(b){function c(a){a=b.call(this)||this;return a.activeBasemap=null,a.nextBasemap=null,a.titleVisible=!1,a.view=null,
a.viewModel=new e,a}return g(c,b),c.prototype.toggle=function(){},c.prototype.render=function(){var c,b=this.viewModel,d="disabled"===b.state?null:b.activeBasemap,b="disabled"===b.state?null:b.nextBasemap,e=d?d.title:"";return this.titleVisible&&e&&(c=a.tsx("div",{"class":"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",key:"esri-basemap-toggle__overlay"},a.tsx("span",{"class":"esri-basemap-thumbnail__title esri-basemap-toggle__title",title:e},e))),a.tsx("div",{"class":"esri-basemap-toggle esri-widget",
role:"button","data-basemap-id":b?b.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:k.toggle},a.tsx("div",{"class":"esri-basemap-thumbnail esri-basemap-toggle__container"},a.tsx("div",{"class":"esri-basemap-thumbnail__image esri-basemap-toggle__image",styles:f(d)}),c),a.tsx("div",{"class":a.join("esri-basemap-thumbnail esri-basemap-toggle__container","esri-basemap-toggle__image--secondary")},a.tsx("div",{"class":"esri-basemap-thumbnail__image esri-basemap-toggle__image",
styles:f(b)})))},c.prototype._toggle=function(){this.toggle()},c}(d.declared(h));return c([d.aliasOf("viewModel.activeBasemap"),a.renderable()],b.prototype,"activeBasemap",void 0),c([d.aliasOf("viewModel.nextBasemap"),a.renderable()],b.prototype,"nextBasemap",void 0),c([d.property(),a.renderable()],b.prototype,"titleVisible",void 0),c([d.aliasOf("viewModel.view"),a.renderable()],b.prototype,"view",void 0),c([a.vmEvent("toggle"),d.property({type:e}),a.renderable("viewModel.state")],b.prototype,"viewModel",
void 0),c([d.aliasOf("viewModel.toggle")],b.prototype,"toggle",null),c([a.accessibleHandler()],b.prototype,"_toggle",null),b=c([d.subclass("esri.widgets.BasemapToggle")],b)});