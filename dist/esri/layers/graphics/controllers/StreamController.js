//>>built
define("../../../core/declare dojo/promise/all dojo/Deferred ../../../core/Accessor ../../../core/Promise ../../../core/Collection ../../../core/HandleRegistry ../../../core/Evented ../../../core/promiseUtils ../../../core/Error ../../support/StreamPurger ../../../Graphic ../../../geometry/support/jsonUtils ../../../tasks/support/Query".split(" "),function(p,q,k,r,t,m,u,v,h,w,x,l,y,n){return p([r,t,v],{declaredClass:"esri.layers.graphics.controllers.StreamController",constructor:function(){this._addFeatures=
this._addFeatures.bind(this);this._handleMessage=this._handleMessage.bind(this);this._handleRegistry=new u;this._nextId=0},initialize:function(){var b=new k;return this.addResolvingPromise(q([this.layer,this.layerView]).then(function(){var a=m.ofType(l);return this.source=this.layer.source,this.graphics=this.graphics||new a,this._initializeFilter(),new x(this)}.bind(this)).then(function(a){return this.purger=a,this._makeConnection()}.bind(this)).otherwise(function(a){b.reject(new w("stream-controller:initialize",
"Error during initialization process",a.message))}.bind(this))),b.promise},destroy:function(){this.connection&&(this.connection.disconnect(),this._set("connection",null));this.purger&&(this.purger.destroy(),this.purger=null);this.graphics=null;this._handleRegistry&&(this._handleRegistry.destroy(),this._handleRegistry=null)},properties:{connection:{readOnly:!0,value:null},graphics:{type:m.ofType(l),set:function(b){this._get("graphics")!==b&&(this._handleRegistry.remove("graphics"),b&&(this._collectionChanged({added:b.toArray()}),
this._handleRegistry.add(b.on("change",this._collectionChanged.bind(this)),"graphics")),this._set("graphics",b))}},filter:{value:{geometry:null,where:null},readOnly:!0},definitionExpression:{value:null,get:function(){return console.warn("StreamController.definitionExpression is deprecated. Access the filter.where property"),this.filter.where},set:function(b){console.warn("StreamController.definitionExpression is deprecated. Use the updateFilter method to change the attribute filter");this.updateFilter({where:b})}},
geometryDefinition:{value:null,get:function(){return console.warn("StreamController.geometryDefinition is deprecated. Access the filter.geometry property"),this.filter.geometry},set:function(b){console.warn("StreamController.geometryDefinition is deprecated. Use the updateFilter method to change the spatial filter");this.updateFilter({geometry:b})}},layer:{value:{}},purger:{set:function(b){this._get("purger")!==b&&this._set("purger",b)}},updating:{value:!1,readOnly:!0,dependsOn:["connection","connectionStatus"],
get:function(){return!this.connection||"connected"===this.connectionStatus}}},updateFilter:function(b){return this._filterValid(b)?this._filterChanged(b)?this._setFilter(b):h.resolve({filter:this.filter}):h.reject(Error("Invalid properties in filter. geometry must be an extent and where must be a string"))},_makeConnection:function(){return this._handleRegistry.remove("websocket"),this._addBuddiedServiceFeatures(!0).then(function(){return this._addBuddiedServiceFeatures(!1)}.bind(this),function(b){return h.reject(Error("Error fetching related features. Layer cannot be created"))}.bind(this)).then(function(b){return this.source.createWebSocketConnector(this.layerView.view.spatialReference)}.bind(this)).then(function(b){return this._set("connection",
b),this._handleRegistry.add(b.on("data-received",function(a){this._handleMessage(a)}.bind(this)),"websocket"),b.connect()}.bind(this))},_handleMessage:function(b){var a;b=JSON.parse(b);this.emit("data-received",b);b.filter||(a=b instanceof Array?b:[b],this._addFeatures(a))},_addFeatures:function(b){if(b){for(var a=this.layer.objectIdField,c=[],d=0,e=b.length;e>d;d++){var f,g=b[d];!g.geometry||g.geometry.hasOwnProperty("x")&&!g.geometry.x||((!g.attributes||!g.attributes[a]&&0!==g.attributes[a])&&(g.attributes=
g.attributes||{},g.attributes[a]=this._nextId++),f=g.declaredClass?g:l.fromJSON(g),c.push(f))}this.purger.addMany(c)}},_collectionChanged:function(b){var a,c,d;if(d=b.added)for(a=0;c=d[a];a++)c.layer=this.layer;if(d=b.removed)for(a=0;c=d[a];a++)c.layer=null},_initializeFilter:function(){var b=this.layer;b&&b.filter&&this._set("filter",{where:b.filter.where||null,geometry:b.filter.geometry||null});this._handleRegistry.add(this.watch("layer.filter",function(a){this._setFilter(a)}.bind(this)))},_filterChanged:function(b){var a,
c=!1,d=!1;return a=b?this.source.makeFilter(b):{geometry:null,where:null},a.hasOwnProperty("geometry")&&(c=a.geometry?!a.geometry.equals(this.filter.geometry):a.geometry!==this.filter.geometry),a.hasOwnProperty("where")&&(d=a.where!==this.filter.where),c||d},_filterValid:function(b){var a=!0;return b&&(b.hasOwnProperty("geometryDefinition")&&b.geometryDefinition&&(b.geometryDefinition.type&&"extent"===b.geometryDefinition.type||(a=!1)),a&&b.hasOwnProperty("definitionExpression")&&b.definitionExpression&&
"string"!=typeof b.definitionExpression&&(a=!1)),a},_setFilter:function(b){var a=null,c=new k;b&&(a=this.source.makeFilter(b),a.geometry&&"string"!=typeof a.geometry&&(a.geometry=a.geometry.toJSON?JSON.stringify(a.geometry.toJSON()):JSON.stringify(a.geometry)));b={filter:a};var d=this.connection.on("data-received",function(a){if(a=JSON.parse(a),a.hasOwnProperty("filter"))d.remove(),a=this._processFilterMessage(a),a.error?c.reject(a.error):c.resolve({filter:this.filter})}.bind(this));return this.connection.send(b),
c.promise},_processFilterMessage:function(b){var a,c,d={};return b.error?(d.error=Error(b.error.join(",")),d.filter={where:this.filter.where,geometry:this.filter.geometry}):(b.filter=b.filter||{},a=b.filter.geometry,a&&("string"==typeof a&&(a=JSON.parse(a)),a=y.fromJSON(a)),c={where:b.filter.where||null,geometry:a||null},this._set("filter",c),this.notifyChange("geometryDefinition"),this.notifyChange("definitionExpression"),d.filter=c),d},_addBuddiedServiceFeatures:function(b){var a,c;if(b){if(!this.source.relatedFeaturesInfo)return h.resolve();
b=this.source.relatedFeaturesQueryTask;a=this.source.relatedLayerDefinition;c=this._createQuery(a,!0)}else{if(!this.source.latestUrl)return h.resolve();b=this.source.latestQueryTask;a=this.source.archivedLayerDefinition;c=this._createQuery(a,!1)}return!!(a.advancedQueryCapabilities||{}).supportsPagination&&(c.num=a.maxRecordCount),this._query({query:c,queryTask:b}).then(function(a){if(a){var b=this._fixFieldNameCasing(this.source.layer,a);a.features=b;this._addFeatures(a.features)}return h.resolve()}.bind(this),
function(a){return h.reject(a)},function(a){a&&this._addFeatures(a.features)}.bind(this))},_query:function(b){var a=b.query,c=b.queryTask,d=new k;a.num&&(a.start=0);var e=function(b){(b||0===b)&&(a.start=b);c.execute(a).then(f,function(a){d.reject(a)})},f=function(b){b.exceededTransferLimit&&a.num?(e(a.start+a.num),d.progress(b)):d.resolve(b)};return e(a.start),d.promise},_createQuery:function(b,a){var c=this.layer,d=this.layerView,e={where:"1\x3d1",returnGeometry:!0,outFields:["*"]};if(!b)return new n(e);
var e=(e=a?this.source.relatedFeaturesInfo&&this.source.relatedFeaturesInfo.outFields:c.outFields)?e.slice(0):["*"],f=c.definitionExpression||"1\x3d1";a&&(a=this._getFieldsNotShared(b,this.layer.fields),e=this._removeInvalidOutfields(a,e),"1\x3d1"!==f&&this._checkForInvalidFieldInWhere(a,f)&&(f="1\x3d1"));return e=this._addObjectIdFieldToOutfields(b,e),new n({where:f,geometry:c.geometryDefinition,outFields:e,outSpatialReference:d.view.spatialReference,returnGeometry:!0})},_addObjectIdFieldToOutfields:function(b,
a){if(a=a||["*"],"*"!==a[0]){var c=this._getObjectIdFieldName(b);c&&(a.some(function(a){return a.toLowerCase()===c.toLowerCase()})||a.push(c))}return a},_removeInvalidOutfields:function(b,a){a=a||["*"];var c;return"*"!==a[0]&&(c=a.filter(function(a){return-1===b.indexOf(a)?a:void 0})),c&&0!==c.length?c:["*"]},_checkForInvalidFieldInWhere:function(b,a){return a&&"1\x3d1"!==a?b.some(function(b){return(new RegExp("\\s*"+b+"\\b","i")).test(a)}):!1},_getObjectIdFieldName:function(b){var a=null;return b.fields.some(function(b){return"esriFieldTypeOID"===
b.type?(a=b.name,!0):!1}),a},_getFieldsNotShared:function(b,a){var c=b.fields.map(function(a){return a.name.toLowerCase()}),d=[];return a.forEach(function(a){a=a.name;-1===c.indexOf(a.toLowerCase())&&d.push(a)}),d},_fixFieldNameCasing:function(b,a){var c,d,e=[];if(!b)throw Error("streamLayer is a required argument for _fixFieldNameCasingmethod");if(b&&(c=b.fields),a&&(e=a.features||[],d=a.fields),!d||!e.length||!c)return e;var f;b=this._mapFieldNameDifferences(c,d);c=[];d=0;for(var g=a.features.length;g>
d;d++)a=e[d],f=this._swizzleResponseAttributes(a.attributes,b),a.attributes=f,c.push(a);return c},_mapFieldNameDifferences:function(b,a){var c,d,e=[],f={};b=b||[];a=a||[];c=0;for(d=a.length;d>c;c++)e.push(a[c].name);c=0;for(d=b.length;d>c;c++){a=b[c].name;var g=this._checkForStreamFieldName(a,e);g&&(f[g]=a)}return f},_checkForStreamFieldName:function(b,a){var c,d;if(a&&a.length){if(b&&b.toLowerCase){b=b.toLowerCase();for(var e=0,f=a.length;f>e;e++)if(c=a[e],c.toLowerCase&&c.toLowerCase()===b){d=c;
break}}return d}},_swizzleResponseAttributes:function(b,a){var c={},d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];a.hasOwnProperty(d)?c[a[d]]=e:c[d]=e}return c}})});