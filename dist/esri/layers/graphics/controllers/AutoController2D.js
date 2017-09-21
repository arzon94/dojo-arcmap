//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/requireUtils ../../../Graphic ../../../core/Accessor ../../../core/Collection ../../../core/Promise ../../../tasks/QueryTask ../../../tasks/support/StatisticDefinition".split(" "),function(h,b,k,f,e,l,m,n,p,q,r,t){var g;!function(b){b[b.Snapshot=0]="Snapshot";b[b.OnDemand=1]="OnDemand"}(g||(g={}));b=function(b){function d(){var c=null!==
b&&b.apply(this,arguments)||this;return c.controllerModulePaths=(a={},a[g.Snapshot]="./SnapshotController",a[g.OnDemand]="./OnDemandController2D",a),c.maxPointCountForAuto=4E3,c.maxRecordCountForAuto=2E3,c.maxVertexCountForAuto=25E4,c;var a}return k(d,b),d.prototype.initialize=function(){var c=this,a=this.layer.then(function(){return c._figureOutMode().then(function(a){return c._createController(a)})}).then(function(a){return c._set("activeController",a)});this.addResolvingPromise(a)},d.prototype.destroy=
function(){this.activeController&&(this.activeController.destroy(),this._set("activeController",null))},Object.defineProperty(d.prototype,"countThresholdForAuto",{get:function(){var c,a=this.layer.geometryType;return"polyline"===a||"polygon"===a||"multipoint"===a?c=this.maxRecordCountForAuto:"point"===a&&(c=this.maxPointCountForAuto),c},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"updating",{get:function(){return!1===this.isFulfilled()||!0===this.get("activeController.updating")},
enumerable:!0,configurable:!0}),d.prototype._figureOutMode=function(){return this._isStatisticsSupported()?this._checkByStatistics():this._checkByCount()},d.prototype._isStatisticsSupported=function(){return/(https?:)?\/\/services.*\.arcgis\.com/i.test(this.layer.source.parsedUrl.path)},d.prototype._checkByStatistics=function(){var c=this,a=this.layer,b=a.source.parsedUrl.path,a=a.createQuery();a.outStatistics=[new t({statisticType:"exceedslimit",maxPointCount:this.maxPointCountForAuto,maxRecordCount:this.maxRecordCountForAuto,
maxVertexCount:this.maxVertexCountForAuto,outStatisticFieldName:"exceedslimit"})];return(new r({url:b+"/query"})).execute(a).then(function(a){a=a&&a.features&&a.features[0];if(0===(a&&a.attributes&&a.attributes.exceedslimit)){a=c.layer;var b=a.maxRecordCount;if(a.get("capabilities.query.supportsPagination")||b>=c.countThresholdForAuto)return g.Snapshot}return g.OnDemand})},d.prototype._checkByCount=function(){var b=this,a=this.layer;return a.queryFeatureCount().then(function(c){return c<=b.countThresholdForAuto&&
c<=a.maxRecordCount?g.Snapshot:g.OnDemand})},d.prototype._createController=function(b){var a=this;return l.when(h,this.controllerModulePaths[b]).then(function(b){return new b({layer:a.layer,layerView:a.layerView,graphics:a.graphics})}).otherwise(function(a){throw Error("Module path not found for controller type: "+(b===g.Snapshot?"snapshot":"on demand"));})},d}(e.declared(n,q));return f([e.property()],b.prototype,"activeController",void 0),f([e.property({dependsOn:["layer.geometryType"]})],b.prototype,
"countThresholdForAuto",null),f([e.property()],b.prototype,"controllerModulePaths",void 0),f([e.property({type:p.ofType(m)})],b.prototype,"graphics",void 0),f([e.property()],b.prototype,"layer",void 0),f([e.property()],b.prototype,"layerView",void 0),f([e.property({dependsOn:["activeController.updating"]})],b.prototype,"updating",null),f([e.aliasOf("activeController.update")],b.prototype,"update",void 0),b=f([e.subclass("esri.layers.graphics.controllers.AutoController2D")],b)});