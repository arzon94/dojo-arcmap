//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/Accessor ../../core/Error ../../core/promiseUtils ../../geometry/support/graphicsUtils".split(" "),function(d,n,h,f,e,k,l,g,m){d=function(d){function c(){var a=null!==d&&d.apply(this,arguments)||this;return a.features=null,a.objectIdField=null,a}return h(c,d),c.prototype.queryFeatures=function(a){if(this.features)if(a)if(this._isSupportedQuery(a)){var b=this._createFilters(a);
a=b.length?this._executeQuery(a,b):this._rejectQuery("Invalid query")}else a=this._rejectQuery("Unsupported query");else a=this._returnAllFeatures();else a=this._rejectQuery("Engine not initialized");return a},c.prototype.queryObjectIds=function(a){return this.objectIdField?this.queryFeatures(a).then(this._getObjectIds.bind(this)):this._rejectQuery("Unsupported query")},c.prototype.queryFeatureCount=function(a){return this.queryFeatures(a).then(function(a){return a.length})},c.prototype.queryExtent=
function(a){var b=this;return this.queryFeatures(a).then(function(a){return{count:a.length,extent:b._getExtent(a)}})},c.prototype._returnAllFeatures=function(){return g.resolve(this.features.toArray())},c.prototype._executeQuery=function(a,b){var c=this,d=this.features.filter(function(d){return b.every(function(b){return b.call(c,d,a)})});return g.resolve(d.toArray())},c.prototype._isSupportedQuery=function(a){var b=!0;return(null!=a.distance||null!=a.geometryPrecision||a.groupByFieldsForStatistics&&
a.groupByFieldsForStatistics.length||null!=a.maxAllowableOffset||a.multipatchOption||null!=a.num||a.orderByFields&&a.orderByFields.length||a.outFields&&a.outFields.length||a.outSpatialReference||a.outStatistics&&a.outStatistics.length||a.pixelSize||a.quantizationParameters||a.relationParam||a.returnDistinctValues||null!=a.start||a.text||a.timeExtent||a.where||a.objectIds&&a.objectIds.length&&!this.objectIdField)&&(b=!1),b},c.prototype._createFilters=function(a){var b=[];return a.objectIds&&a.objectIds.length&&
b.push(this._createObjectIdFilter()),a.geometry&&"extent"===a.geometry.type&&"intersects"===a.spatialRelationship&&b.push(this._createExtentFilter()),b},c.prototype._createExtentFilter=function(){return function(a,b){a=a.geometry;b=b.geometry;return a&&b.intersects(a)}},c.prototype._createObjectIdFilter=function(){var a=this;return function(b,c){b=b.attributes;return-1<c.objectIds.indexOf(b&&b[a.objectIdField])}},c.prototype._rejectQuery=function(a){return g.reject(new l(this.declaredClass,a))},c.prototype._getObjectIds=
function(a){var b=this.objectIdField,c=[];return a.forEach(function(a){a=(a=a.attributes)&&a[b];null!=a&&c.push(a)}),c},c.prototype._getExtent=function(a){return a.length?m.graphicsExtent(a):null},c}(e.declared(k));return f([e.property()],d.prototype,"features",void 0),f([e.property()],d.prototype,"objectIdField",void 0),d=f([e.subclass("esri.layers.graphics.QueryEngine")],d)});