//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Collection ../../core/Evented ../../core/HandleRegistry ../../core/watchUtils ./ListItem ./support/layerListUtils dojo/debounce dojo/has ../../core/accessorSupport/decorators".split(" "),function(d,x,m,g,n,p,q,r,e,k,t,u,v,f){var w=v("dojo-debug-messages"),l=p.ofType(k);d=function(d){function c(a){var b=d.call(this)||this;return b._actionsOpenMap=new Map,b._itemOpenMap=
new Map,b._handles=new r,b.listItemCreatedFunction=null,b.operationalItems=new l,b.view=null,b._handles.add(e.init(b,"view",function(){return b._viewHandles()}),"view"),b._compileList=u(b._compileList,0),b}return m(c,d),c.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null;this.operationalItems.removeAll()},Object.defineProperty(c.prototype,"createActionsFunction",{get:function(){return this._get("createActionsFunction")||null},set:function(a){w&&console.warn('"createActionsFunction" is deprecated, use "listItemCreatedFunction" instead');
this._set("createActionsFunction",a)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"state",{get:function(){var a=this.get("view");return this.get("view.ready")?"ready":a?"loading":"disabled"},enumerable:!0,configurable:!0}),c.prototype.triggerAction=function(a,b){a&&this.emit("trigger-action",{action:a,item:b})},c.prototype._createMapHandles=function(a){var b=this;this._handles.remove("map");var h=a&&a.get("map.layers");h&&(h=h.on("change",function(){return b._compileList(a)}),
this._handles.add(h,"map"))},c.prototype._resetMapItems=function(a){this._actionsOpenMap.clear();this._itemOpenMap.clear();this._createMapHandles(a);this._compileList(a)},c.prototype._setUpChildActions=function(a){var b=this;a.forEach(function(a){return b._setupActions(a)})},c.prototype._watchItemProperties=function(a){var b=this;this._handles.add([e.watch(a,"actionsOpen",function(c){b._actionsOpenMap.set(a.layer,c)}),e.watch(a,"open",function(c){b._itemOpenMap.set(a.layer,c)}),a.children.on("change",
function(){b._setUpChildActions(a.children)})],"list-items")},c.prototype._modifyListItemChildren=function(a){var b=this;a.forEach(function(a){return b._modifyListItem(a)})},c.prototype._modifyListItem=function(a){"function"==typeof this.listItemCreatedFunction&&this.listItemCreatedFunction.call(null,{item:a});this._modifyListItemChildren(a.children)},c.prototype._setupActions=function(a){if("function"==typeof this.createActionsFunction){var b=this.createActionsFunction.call(null,{item:a});b&&b.length&&
(a.actionsSections=b)}this._setUpChildActions(a.children)},c.prototype._createListItem=function(a){var b=!!this._actionsOpenMap.get(a),c=!!this._itemOpenMap.get(a);a=new k({actionsOpen:b,open:c,layer:a,view:this.view});return this._setupActions(a),this._watchItemProperties(a),this._modifyListItem(a),a},c.prototype._compileList=function(a){var b=this;if(!this.destroyed){this._handles.remove("list-items");var c=a&&a.get("map.layers"),d=[];c&&c.forEach(function(c){e.watch(c,"listMode",function(){return b._compileList(a)});
"hide"!==t.findLayerListMode(c)&&(c=b._createListItem(c),d.unshift(c))});this.operationalItems.removeAll();this.operationalItems.addMany(d)}},c.prototype._viewHandles=function(){var a=this,b=this.view;this._handles.remove("layers");this._resetMapItems(b);b&&b.then(function(){a._handles.add([e.init(b,"map",function(){return a._resetMapItems(b)}),b.layerViews.on("change",function(){return a._compileList(b)}),e.init(a,"createActionsFunction",function(){return a._compileList(b)}),e.init(a,"listItemCreatedFunction",
function(){return a._compileList(b)})],"layers")})},c}(f.declared(n,q));return g([f.property()],d.prototype,"createActionsFunction",null),g([f.property()],d.prototype,"listItemCreatedFunction",void 0),g([f.property({type:l})],d.prototype,"operationalItems",void 0),g([f.property({dependsOn:["view.ready"],readOnly:!0})],d.prototype,"state",null),g([f.property()],d.prototype,"view",void 0),d=g([f.subclass("esri.widgets.LayerList.LayerListViewModel")],d)});