//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/Accessor ../../core/Evented ../../core/Error ../../core/HandleRegistry ../../core/promiseUtils ../../core/watchUtils".split(" "),function(b,m,d,c,a,e,f,g,h,k,l){b=function(b){function a(){var a=b.call(this)||this;return a._handles=new h,a.connectionError=null,a.connectionStatus="disconnected",a.filter=null,a._handles.add(l.on(a,"controller","data-received",
function(b){a.emit("data-received",b)})),a}return d(a,b),a.prototype.connect=function(){return this.controller.connection.connect()},a.prototype.disconnect=function(){this.controller.connection.disconnect()},a.prototype.updateFilter=function(a){return"connected"!==this.connectionStatus?k.reject(new g("stream-layer-view: updateFilter","Cannot update filter. The connection with the stream service is closed")):this.controller.updateFilter(a).then(function(a){return a}).otherwise(function(a){throw a;
})},a}(a.declared(e,f));return c([a.property({aliasOf:"controller.connection.connectionError",readOnly:!0})],b.prototype,"connectionError",void 0),c([a.property({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],b.prototype,"connectionStatus",void 0),c([a.property()],b.prototype,"controller",void 0),c([a.property({aliasOf:"controller.filter",readOnly:!0})],b.prototype,"filter",void 0),b=c([a.subclass("esri.views.layers.StreamLayerView")],b)});