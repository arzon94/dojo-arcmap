//>>built
define("require dojo/_base/lang dojo/io-query ../Graphic ../PopupTemplate ../request ../core/kebabDictionary ../core/MultiOriginJSONSupport ../core/Collection ../core/Error ../core/Logger ../core/lang ../core/HandleRegistry ../core/promiseUtils ../core/requireUtils ../core/urlUtils ../geometry/Extent ../geometry/SpatialReference ../geometry/support/normalizeUtils ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ../symbols/support/jsonUtils ../symbols/support/ElevationInfo ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/arcadeUtils ../renderers/support/jsonUtils ../renderers/support/styleUtils ../tasks/support/FeatureSet ../tasks/support/Query ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./mixins/ArcGISService ./graphics/sources/MemorySource ./support/Field ./support/fieldUtils ./support/FeatureType ./support/FeatureTemplate ./support/LabelClass ./support/labelingInfo ./support/arcgisLayerUrl ./support/commonProperties".split(" "),
function(u,l,v,w,x,F,m,G,n,e,p,H,I,f,y,h,J,z,K,L,M,N,t,O,A,P,B,Q,R,S,T,U,V,W,X,Y,q,Z,k,aa,C,ba,D,r,ca){m=m({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});var da=p.getLogger("esri.layers.FeatureLayer");p=function(a,b){a=S.fromJSON(b.featureSet);return new q({layer:this,items:a&&a.features||[]})};var E=U.createSubclass([V,W,X,Y,G],{declaredClass:"esri.layers.FeatureLayer",viewModulePaths:{"2d":"../views/2d/layers/FeatureLayerView2D",
"3d":"../views/3d/layers/FeatureLayerView3D"},constructor:function(){this._handles=new I},normalizeCtorArgs:function(a,b){return"string"==typeof a?l.mixin({},{url:a},b):a},load:function(){var a;a=this.source&&(Array.isArray(this.source)||this.source.isInstanceOf&&this.source.isInstanceOf(n));a=this.portalItem&&a?f.resolve():this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]}).always(function(){return this.url&&null==this.layerId&&/FeatureServer\/*$/i.test(this.url)?this._fetchFirstLayerId().then(function(a){null!=
a&&(this.layerId=a)}.bind(this)):void 0}.bind(this)).then(function(){if(!this.url&&!this._hasMemorySource())throw new e("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.createGraphicsSource().then(this._initLayerProperties.bind(this))}.bind(this));this.addResolvingPromise(a)},_handles:null,properties:{advancedQueryCapabilities:{json:{origins:{service:{read:{source:["advancedQueryCapabilities","supportsStatistics","supportsAdvancedQueries"],
reader:function(a,b){return this._readAdvancedQueryCapabilities(b)}}}},read:{source:["layerDefinition.supportsAdvancedQueries","layerDefinition.supportsStatistics"],reader:function(a,b){return this._readAdvancedQueryCapabilities(b.layerDefinition)}}}},featureReduction:{json:{origins:{webScene:{read:{source:"layerDefinition.featureReduction"},write:{target:"layerDefinition.featureReduction"}}}}},allowGeometryUpdates:{json:{origins:{service:{read:{reader:function(a){return this._readAllowGeometryUpdates(a)}}}},
read:{source:"layerDefinition.allowGeometryUpdates",reader:function(a){return this._readAllowGeometryUpdates(a)}}}},allRenderers:{readOnly:!0,dependsOn:["loaded","renderer","fields"],get:function(){return this._getAllRenderers(this.renderer)}},capabilities:{json:{origins:{service:{read:{source:"advancedQueryCapabilities supportsStatistics supportsAdvancedQueries hasAttachments hasM hasZ supportsCalculate supportsTruncate supportsValidateSql supportsCoordinatesQuantization useStandardizedQueries ownershipBasedAccessControlForFeatures allowGeometryUpdates supportsApplyEditsWithGlobalIds supportsRollbackOnFailureParameter allowUpdateWithoutMValues supportsAttachmentsByUploadId".split(" "),
reader:function(a,b){return this._readCapabilities(a,b)}}}},read:{source:"layerDefinition.capabilities layerDefinition.advancedQueryCapabilities layerDefinition.supportsStatistics layerDefinition.supportsAdvancedQueries layerDefinition.hasAttachments layerDefinition.hasM layerDefinition.hasZ layerDefinition.supportsCalculate layerDefinition.supportsTruncate layerDefinition.supportsValidateSql layerDefinition.supportsCoordinatesQuantization layerDefinition.useStandardizedQueries layerDefinition.ownershipBasedAccessControlForFeatures layerDefinition.allowGeometryUpdates layerDefinition.supportsApplyEditsWithGlobalIds layerDefinition.supportsRollbackOnFailureParameter layerDefinition.allowUpdateWithoutMValues layerDefinition.supportsAttachmentsByUploadId".split(" "),
reader:function(a,b){return this._readCapabilities(b.layerDefinition.capabilities,b.layerDefinition)}}},dependsOn:["loaded"],get:function(){var a=this._get("capabilities");return!a&&this.loaded&&this._hasMemorySource()&&(a={data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!0,supportsDelete:!0,supportsEditing:!0,supportsQuery:!0,supportsUpdate:!0},query:{supportsStatistics:!1,supportsCentroid:!1,supportsDistance:!1,
supportsDistinct:!1,supportsExtent:!0,supportsGeometryProperties:!1,supportsOrderBy:!1,supportsPagination:!1,supportsQuantization:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsQueryByOthers:!1},queryRelated:{supportsPagination:!1,supportsCount:!1,supportsOrderBy:!1},editing:{supportsGeometryUpdate:!0,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,
supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}),a}},copyright:{value:null,json:{origins:{service:{read:{source:"copyrightText"}}},read:{source:"layerDefinition.copyrightText"}}},displayField:{value:null,json:{origins:{service:{read:{source:"displayField"}}},read:{source:"layerDefinition.displayField"}}},definitionExpression:{value:null,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}},defaultSymbol:{json:{read:t.read}},
elevationInfo:{type:O,value:null,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},fields:{value:null,type:[Z],json:{origins:{service:{read:!0}},read:{source:"layerDefinition.fields"}}},fullExtent:{value:null,type:J,json:{origins:{service:{read:{source:"extent"}}},read:{source:"layerDefinition.extent"}}},gdbVersion:null,generalizeForScale:4E3,geometryType:{json:{origins:{service:{read:m.fromJSON}},
read:{source:"layerDefinition.geometryType",reader:m.fromJSON}}},hasAttachments:{value:!1,readOnly:!0,get:function(){return!this._hasMemorySource()&&this._get("hasAttachments")},json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasAttachments"}}},hasM:{value:!1,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasM"}}},hasZ:{value:!1,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasM"}}},id:{json:{origins:{service:{read:!1},portalItem:{read:!1}}}},isTable:{value:!1,
readOnly:!0,json:{origins:{service:{read:{source:"type",reader:function(a){return"Table"===a}}}},read:{source:"layerDefinition.type",reader:function(a){return"Table"===a}}}},labelsVisible:{value:!1,json:{read:{source:["showLabels"],reader:function(a,b){return!!b.showLabels}},write:function(a,b){b.showLabels=!!a}}},labelingInfo:{value:null,type:[ba],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:D.reader},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",
reader:D.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}},layerId:{json:{origins:{service:{read:{source:["id"],reader:function(a,b){return b.id}}}},read:!1}},legendEnabled:{value:!0,json:{read:{source:["showLegend"],reader:function(a,b){return null!=b.showLegend?b.showLegend:!0}},write:function(a,b){b.showLegend=!!a}}},maxRecordCount:{value:null,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.maxRecordCount"}}},minScale:{json:{origins:{service:{read:{source:["minScale",
"effectiveMinScale"],reader:function(a,b){return b.effectiveMinScale||a}},write:{target:["minScale"],enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},maxScale:{json:{origins:{service:{read:{source:["maxScale","effectiveMaxScale"],reader:function(a,b){return b.effectiveMaxScale||a}},write:{target:"maxScale",enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},objectIdField:{json:{origins:{service:{read:{source:["objectIdField",
"fields"],reader:function(a,b){return this._readObjectIdField(b)}}}},read:{source:["layerDefinition.objectIdField","layerDefinition.fields"],reader:function(a,b){return this._readObjectIdField(b.layerDefinition)}}}},operationalLayerType:"ArcGISFeatureLayer",outFields:{value:null,dependsOn:["requiredFields"],get:function(){var a=this._get("outFields"),b=this.requiredFields;return a?-1===a.indexOf("*")&&b.forEach(function(b){-1===a.indexOf(b)&&a.push(b)}):a=b,this.loaded&&(a=a.filter(function(a){return"*"===
a||!!this.getField(a)},this),a=a.map(function(a){return"*"===a?a:this.getField(a).name},this)),a},set:function(a){var b=this.requiredFields;a?-1===a.indexOf("*")&&b.forEach(function(b){-1===a.indexOf(b)&&a.push(b)}):a=b;this.loaded&&(a=a.filter(function(a){return"*"===a||!!this.getField(a)},this),a=a.map(function(a){return"*"===a?a:this.getField(a).name},this));this._set("outFields",a)}},parsedUrl:{dependsOn:["layerId"],get:function(){var a=this.url?h.urlToObject(this.url):null;return null!=this.layerId&&
null!=a&&(a.path=h.join(a.path,this.layerId.toString())),a}},popupEnabled:{value:!0,json:{read:{source:["disablePopup"],reader:function(a,b){return null!=b.disablePopup?!b.disablePopup:!0}},write:function(a,b){a||(b.disablePopup=!0)}}},popupTemplate:{value:null,type:x,json:{read:{source:["popupInfo"],reader:function(a,b){return b.popupInfo?x.fromJSON(b.popupInfo):null}},write:function(a,b){a&&(b.popupInfo=a.toJSON())}}},relationships:null,renderer:{set:function(a){var b=this._getAllRenderers(a);k.fixRendererFields(b,
this.fields);this._set("renderer",a)},json:{origins:{service:{read:{source:["drawingInfo.renderer","defaultSymbol","type"],reader:function(a,b,c){return this._readRenderer(null,b,c)}},write:{target:"drawingInfo.renderer",enabled:!1}}},read:{source:["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol","layerDefinition.type"],reader:function(a,b,c){return this._readRenderer(null,b.layerDefinition,c)}},write:{target:"layerDefinition.drawingInfo.renderer"}}},requiredFields:{dependsOn:["allRenderers"],
get:function(){var a=this.timeInfo,b=[this.objectIdField,this.typeIdField,this.editFieldsInfo&&this.editFieldsInfo.creatorField,a&&a.startTimeField,a&&a.endTimeField,this.trackIdField],c=k.rendererFields,d=[];return this.allRenderers.forEach(function(a){c.forEach(function(c){b.push(l.getObject(c,!1,a))});a.valueExpression&&(d=d.concat(B.extractFieldNames(a.valueExpression)));a.visualVariables&&a.visualVariables.forEach(function(a){k.visualVariableFields.forEach(function(c){b.push(a[c])});a.valueExpression&&
(d=d.concat(B.extractFieldNames(a.valueExpression)))},this)},this),b=b.concat(d),b=b.concat(this.dataAttributes),b.filter(function(a,b,c){return!!a&&c.indexOf(a)===b&&"function"!=typeof a})}},returnM:!1,returnZ:!1,screenSizePerspectiveEnabled:ca.screenSizePerspectiveEnabled,source:{json:{origins:{portalItem:{read:{source:["featureSet"],reader:p}},webMap:{read:{source:["featureSet"],reader:p}}}},cast:function(a){return a&&(Array.isArray(a)||a.isInstanceOf&&a.isInstanceOf(n))?new q({layer:this,items:a}):
a},set:function(a){var b=this._get("source");b!==a&&(b&&b.isInstanceOf&&b.isInstanceOf(q)&&this._resetMemorySource(b),a&&a.isInstanceOf&&a.isInstanceOf(q)&&this._initMemorySource(a),this._set("source",a))}},supportsCoordinatesQuantization:!1,serviceDefinitionExpression:{json:{origins:{service:{read:{source:["definitionExpression"],reader:function(a,b){return b.definitionExpression}}}}}},spatialReference:{json:{origins:{service:{read:{source:"extent",reader:function(a){return a&&a.spatialReference?
z.fromJSON(a.spatialReference):void 0}}}},read:{source:"layerDefinition.extent",reader:function(a){return a&&a.spatialReference?z.fromJSON(a.spatialReference):void 0}}}},templates:{type:[C],json:{read:function(a,b){var c=b.editFieldsInfo;b=c&&c.creatorField;c=c&&c.editorField;return a=a&&a.map(function(a){return C.fromJSON(a)}),this._fixTemplates(a,b),this._fixTemplates(a,c),a}}},title:{json:{origins:{portalItem:{read:{source:["layerDefinition.title","layerDefinition.name","title"],reader:function(a,
b){a=b.layerDefinition&&b.layerDefinition.name;b=b.title||b.layerDefinition&&b.layerDefinition.title;return a?this._readTitleFromName(a):"item-title"===this.sublayerTitleMode&&b?b:void 0}}},service:{read:{source:"name",reader:function(a,b){return this._readTitleFromName(a)}}}}}},sublayerTitleMode:{type:String,value:"item-title"},trackIdField:{json:{read:{source:["timeInfo.trackIdField"],reader:function(a,b){return b.timeInfo.trackIdField}}}},type:{value:"feature",json:{read:!1}},typeIdField:{json:{origins:{service:{read:function(a,
b){return this._readTypeIdField(a,b)}}},read:{source:"layerDefinition.typeIdField",reader:function(a,b){return this._readTypeIdField(a,b.layerDefinition)}}}},types:{json:{origins:{service:{read:function(a,b){return this._readTypes(a,b)}}},read:{source:"layerDefinition.types",reader:function(a,b){return this._readTypes(a,b.layerDefinition)}}}},url:{set:function(a){var b=h.urlToObject(a),c=r.parse(b.path);c&&null!=c.sublayer&&(null==this.layerId&&(this.layerId=c.sublayer),b=v.objectToQuery(b.query),
a=c.url.path,b&&(a=a+"?"+b));this._set("url",a)},json:{write:function(a,b){(a&&h.isProtocolRelative(a)&&(a="https:"+a),a&&(a=h.normalize(a),b.url=a),null!=this.layerId)&&(a=h.urlToObject(a))&&(b.url=h.join(a.path,""+this.layerId),a.query&&Object.keys(a.query)&&(b.url+="?"+v.objectToQuery(a.query)))}}},userIsAdmin:!1,version:{json:{origins:{service:{read:{source:"currentVersion capabilities drawingInfo hasAttachments htmlPopupType relationships timeInfo typeIdField types".split(" "),reader:function(a,
b){return this._readVersion(b)}}},portalItem:{read:!1}},read:{source:"layerDefinition.currentVersion layerDefinition.capabilities layerDefinition.drawingInfo layerDefinition.hasAttachments layerDefinition.htmlPopupType layerDefinition.typeIdField layerDefinition.types".split(" "),reader:function(a,b){return this._readVersion(b.layerDefinition)}}}},visible:{json:{origins:{portalItem:{read:{source:["visibility","layerDefinition.defaultVisibility"],reader:function(a,b){return b.layerDefinition&&null!=
b.layerDefinition.defaultVisibility?!!b.layerDefinition.defaultVisibility:null!=b.visibility?!!b.visibility:void 0}},write:{target:"layerDefinition.defaultVisibility"}}}}}},applyEdits:function(a){return this.load().then(function(){return this.source.applyEdits?this._processApplyEditsParams(a).then(function(a){return this.source.applyEdits(a).then(function(a){var b=function(a){return a.filter(function(a){return!a.error}).map(function(a){return H.clone(a)})},b={addedFeatures:b(a.addFeatureResults),
updatedFeatures:b(a.updateFeatureResults),deletedFeatures:b(a.deleteFeatureResults)};return(b.addedFeatures.length||b.updatedFeatures.length||b.deletedFeatures.length)&&this.emit("edits",b),a}.bind(this))}.bind(this)):f.reject(new e("FeatureLayer","Layer source does not support applyEdits capability"))}.bind(this))},createGraphicsSource:function(){return this._hasMemorySource()?(this.emit("graphics-source-create",{graphicsSource:this.source}),f.resolve(this.source)):y.when(u,"./graphics/sources/FeatureLayerSource").then(function(a){return new a({layer:this})}.bind(this)).then(function(a){return this.emit("graphics-source-create",
{graphicsSource:a}),a}.bind(this))},createGraphicsController:function(a){var b,c=a.layerView,d=n.ofType(w),g=this.source,e=g&&g.isInstanceOf&&g.isInstanceOf(n),f=l.mixin(a.options||{},{layer:this,layerView:c,graphics:e?g:new d});return b=e?"./graphics/controllers/MemoryController":"2d"===c.view.type?"./graphics/controllers/AutoController2D":"./graphics/controllers/SnapshotController",y.when(u,b).then(function(a){return new a(f)}.bind(this)).then(function(a){return this.emit("graphics-controller-create",
{graphicsController:a}),a}.bind(this))},createQuery:function(){var a=new T,b=this.get("capabilities.data");return a.returnGeometry=!0,a.returnZ=b&&b.supportsZ&&this.returnZ||null,a.returnM=b&&b.supportsM&&this.returnM||null,a.outFields=this.outFields,a.where=this.definitionExpression||"1\x3d1",a.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null,a},getFieldDomain:function(a,b){var c,d;b=(b=b&&b.feature)&&b.attributes;var g=this.typeIdField&&b&&b[this.typeIdField];return null!=g&&
this.types&&this.types.some(function(b){return b.id==g?(c=b.domains&&b.domains[a],c&&"inherited"===c.type&&(c=this._getLayerDomain(a),d=!0),!0):!1},this),d||c||(c=this._getLayerDomain(a)),c},getField:function(a,b){return k.getField(a,b||this.fields)},graphicChanged:function(a){this.emit("graphic-update",a)},queryFeatures:function(a){var b=this;return this.load().then(function(){return a=a||b.createQuery(),b.source.queryFeatures?b.source.queryFeatures(a):f.reject(new e("FeatureLayer","Layer source does not support queryFeatures capability"))}).then(function(c){if(a.returnJSON)return c;
if(c&&c.features){var d=b.popupTemplate;c.features.forEach(function(a){a.popupTemplate=d;a.layer=b})}return c})},queryObjectIds:function(a){var b=this;return this.load().then(function(){return a=a||b.createQuery(),b.source.queryObjectIds?b.source.queryObjectIds(a):f.reject(new e("FeatureLayer","Layer source does not support queryObjectIds capability"))})},queryFeatureCount:function(a){var b=this;return this.load().then(function(){return a=a||b.createQuery(),b.source.queryFeatureCount?b.source.queryFeatureCount(a):
f.reject(new e("FeatureLayer","Layer source does not support queryFeatureCount capability"))})},queryExtent:function(a){var b=this;return this.load().then(function(){return a=a||b.createQuery(),b.source.queryExtent?b.source.queryExtent(a):f.reject(new e("FeatureLayer","Layer source does not support queryExtent capability"))})},read:function(a,b){switch(b&&b.origin){case "web-map":this.inherited(arguments,[{outFields:["*"]},b]);break;case "web-scene":this.inherited(arguments,[{mode:E.MODE_SNAPSHOT,
returnZ:!0,outFields:["*"]},b])}var c=a.featureCollection;if(c){var d=c.layers;d&&1===d.length&&(this.inherited(arguments,[d[0],b]),null!=c.showLegend&&this.inherited(arguments,[{showLegend:c.showLegend},b]))}return this.inherited(arguments,[a,b]),this},write:function(a,b){if(b&&"web-scene"===b.origin&&b.messages){if(!this.url)return b.messages.push(new e("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' require a url to a service to be written to web scenes",
{layer:this})),null;if(this.isTable)return b.messages.push(new e("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' using a Table source cannot written to web scenes",{layer:this})),null}return this.inherited(arguments)},_getLayerDomain:function(a){var b;return this.fields&&this.fields.some(function(c){return c.name===a&&(b=c.domain),!!b}),b},_fetchFirstLayerId:function(){return F(this.url,{query:{f:"json"},callbackParamName:"callback",responseType:"json"}).then(function(a){return a.data&&
Array.isArray(a.data.layers)&&0<a.data.layers.length?a.data.layers[0].id:void 0})},_initLayerProperties:function(a){return this.source||(this.source=a),a.url&&(this.url=a.url),a.layerDefinition&&this.read(a.layerDefinition,{origin:"service",url:this.parsedUrl}),this._verifySource(),this._verifyFields(),this._addSymbolUrlTokens(),k.fixRendererFields(this._getAllRenderers(this.renderer),this.fields),this.watch("token",function(){this._addSymbolUrlTokens()}.bind(this)),R.loadStyleRenderer(this,{origin:"service"})},
_findUrlBasedSymbols:function(){var a=this.renderer;if(!a)return[];var b=[];a.symbol&&b.push(a.symbol);a.defaultSymbol&&b.push(a.defaultSymbol);a=a.classBreakInfos||a.uniqueValueInfos;return a&&a.forEach(function(a){a.symbol&&b.push(a.symbol)}),b.filter(function(a){return!!a.url})},_addSymbolUrlTokens:function(){var a=this.token;!this._hasMemorySource()&&a&&this._findUrlBasedSymbols().forEach(function(b){var c=b.url;if(c&&-1!==c.search(/https?\:/i)&&!/[?&]token=/.test(c)){var d=-1===c.indexOf("?")?
"?":"\x26";b.url=c+d+"token\x3d"+a}})},_getAllRenderers:function(a){var b=[];a&&[a,a.trackRenderer,a.observationRenderer,a.latestObservationRenderer].forEach(function(a){a&&(b.push(a),a.rendererInfos&&a.rendererInfos.forEach(function(a){a.renderer&&b.push(a.renderer)}))});return b},_verifyFields:function(){var a=this.parsedUrl&&this.parsedUrl.path||"undefined";this.isTable||this._hasMemorySource()||-1!==a.search(/\/FeatureServer\//i)||this.fields&&this.fields.some(function(a){return"geometry"===a.type})},
_fixTemplates:function(a,b){a&&a.forEach(function(a){(a=a.prototype&&a.prototype.attributes)&&b&&delete a[b]})},_verifySource:function(){if(this._hasMemorySource()){if(this.url)throw new e("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url");var a=["geometryType","fields","objectIdField"];if(!a.every(function(a){return this.hasOwnProperty(a)},this))throw new e("feature-layer:missing-property","FeatureLayer created as feature collection requires properties: "+
a.join(),{requiredProperties:a});}else{if(this.isTable)throw new e("feature-layer:source-type-not-supported","The table feature service type is not yet supported",{sourceType:"Table"});if(!this.url)throw new e("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source");}},_initMemorySource:function(a){a.forEach(function(a){a.layer=this}.bind(this));this._handles.add([a.on("after-add",function(a){a.item.layer=this}.bind(this)),a.on("after-remove",function(a){a.item.layer=
null}.bind(this))],"fl-source")},_resetMemorySource:function(a){a.forEach(function(a){a.layer=null}.bind(this));this._handles.remove("fl-source")},_hasMemorySource:function(){return!(this.url||!this.source)},_readTitleFromName:function(a){var b=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return this.url?r.titleFromUrlAndName(this.url,a):a;if(a=a||this.url&&r.parse(this.url).title)return"item-title-and-service-name"===this.sublayerTitleMode&&b&&(a=b+" - "+a),r.cleanTitle(a)},
_readAdvancedQueryCapabilities:function(a){return a.advancedQueryCapabilities||{supportsPagination:!1,supportsQueryWithDistance:!1,supportsReturningQueryExtent:!1,supportsStatistics:a.supportsStatistics,supportsOrderBy:a.supportsAdvancedQueries,supportsDistinct:a.supportsAdvancedQueries}},_readAllowGeometryUpdates:function(a){return null==a?!0:a},_readCapabilities:function(a,b){return{data:this._readDataCapabilities(b),operations:this._readOperationsCapabilities(a,b),query:this._readQueryCapabilities(b),
queryRelated:this._readQueryRelatedCapabilities(b),editing:this._readEditingCapabilities(b)}},_readBoolean:function(a,b,c){return!(a&&a.hasOwnProperty(b)?!a[b]:!c)},_readDataCapabilities:function(a){return{supportsAttachment:this._readBoolean(a,"hasAttachments",!1),supportsM:this._readBoolean(a,"hasM",!1),supportsZ:this._readBoolean(a,"hasZ",!1)}},_readOperationsCapabilities:function(a,b){a=a?a.toLowerCase().split(",").map(function(a){return a.trim()}):[];var c=-1!==a.indexOf("editing"),d=c&&-1!==
a.indexOf("create"),g=c&&-1!==a.indexOf("delete"),e=c&&-1!==a.indexOf("update");return c&&!(d||g||e)&&(d=g=e=!0),{supportsCalculate:this._readBoolean(b,"supportsCalculate",!1),supportsTruncate:this._readBoolean(b,"supportsTruncate",!1),supportsValidateSql:this._readBoolean(b,"supportsValidateSql",!1),supportsAdd:d,supportsDelete:g,supportsEditing:c,supportsQuery:-1!==a.indexOf("query"),supportsUpdate:e}},_readQueryCapabilities:function(a){var b=a.advancedQueryCapabilities,c=a.ownershipBasedAccessControlForFeatures;
return{supportsStatistics:this._readBoolean(b,"supportsStatistics",a.supportsStatistics),supportsCentroid:this._readBoolean(b,"supportsReturningGeometryCentroid",!1),supportsDistance:this._readBoolean(b,"supportsQueryWithDistance",!1),supportsDistinct:this._readBoolean(b,"supportsDistinct",a.supportsAdvancedQueries),supportsExtent:this._readBoolean(b,"supportsReturningQueryExtent",!1),supportsGeometryProperties:this._readBoolean(b,"supportsReturningGeometryProperties",!1),supportsOrderBy:this._readBoolean(b,
"supportsOrderBy",a.supportsAdvancedQueries),supportsPagination:this._readBoolean(b,"supportsPagination",!1),supportsQuantization:this._readBoolean(a,"supportsCoordinatesQuantization",!1),supportsResultType:this._readBoolean(b,"supportsQueryWithResultType",!1),supportsSqlExpression:this._readBoolean(b,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:this._readBoolean(a,"useStandardizedQueries",!1),supportsQueryByOthers:this._readBoolean(c,"allowOthersToQuery",!0)}},_readQueryRelatedCapabilities:function(a){a=
a.advancedQueryCapabilities;var b=this._readBoolean(a,"supportsAdvancedQueryRelated",!1);return{supportsPagination:this._readBoolean(a,"supportsQueryRelatedPagination",!1),supportsCount:b,supportsOrderBy:b}},_readEditingCapabilities:function(a){var b=a.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:this._readBoolean(a,"allowGeometryUpdates",!0),supportsGlobalId:this._readBoolean(a,"supportsApplyEditsWithGlobalIds",!1),supportsRollbackOnFailure:this._readBoolean(a,"supportsRollbackOnFailureParameter",
!1),supportsUpdateWithoutM:this._readBoolean(a,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:this._readBoolean(a,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:this._readBoolean(b,"allowAnonymousToDelete",!0),supportsDeleteByOthers:this._readBoolean(b,"allowOthersToDelete",!0),supportsUpdateByAnonymous:this._readBoolean(b,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:this._readBoolean(b,"allowOthersToUpdate",!0)}},_readObjectIdField:function(a){if(a.objectIdField)return a.objectIdField;
if(a.fields)for(var b=0;b<a.fields.length;b++){var c=a.fields[b];if("esriFieldTypeOID"===c.type)return c.name}},_readRenderer:function(a,b,c){var d;if(a=b.drawingInfo&&b.drawingInfo.renderer||void 0)(a=Q.read(a,b,c)||void 0)||da.error("Failed to create renderer",{rendererDefinition:b.drawingInfo.renderer,layer:this,context:c});else if(b.defaultSymbol)t.read(b.defaultSymbol,b,c),b.types&&b.types.length?(a=new P({defaultSymbol:d,field:b.typeIdField}),b.types.forEach(function(b){a.addUniqueValueInfo(b.id,
t.read(b.symbol,b,c))})):a=new A({symbol:d});else if("Table"!==b.type){switch(b.geometryType){case "esriGeometryPoint":case "esriGeometryMultipoint":d=new L;break;case "esriGeometryPolyline":d=new M;break;case "esriGeometryPolygon":d=new N}a=d&&new A({symbol:d})}return a},_readTypeIdField:function(a,b){a&&(b=this.getField(a,b.fields))&&(a=b.name);return a},_readTypes:function(a,b){var c=(b=b.editFieldsInfo)&&b.creatorField,d=b&&b.editorField;return a&&a.map(function(a){return a=new aa(a),this._fixTemplates(a.templates,
c),this._fixTemplates(a.templates,d),a},this)},_readVersion:function(a){return a.currentVersion?a.currentVersion:a.hasOwnProperty("capabilities")||a.hasOwnProperty("drawingInfo")||a.hasOwnProperty("hasAttachments")||a.hasOwnProperty("htmlPopupType")||a.hasOwnProperty("relationships")||a.hasOwnProperty("timeInfo")||a.hasOwnProperty("typeIdField")||a.hasOwnProperty("types")?10:9.3},_processApplyEditsParams:function(a){if(!a)return f.reject(new e("feature-layer:missing-parameters","'addFeatures', 'updateFeatures' or 'deleteFeatures' parameter is required"));
if(a=l.mixin({},a),a.addFeatures=a.addFeatures||[],a.updateFeatures=a.updateFeatures||[],a.deleteFeatures=a.deleteFeatures||[],a.addFeatures.length||a.updateFeatures.length||a.deleteFeatures.length){var b=function(a){var b=new w;return b.geometry=a.geometry,b.attributes=a.attributes,b};return a.addFeatures=a.addFeatures.map(b),a.updateFeatures=a.updateFeatures.map(b),this._normalizeGeometries(a).then(function(a){return f.resolve(a)})}return f.reject(new e("feature-layer:missing-parameters","'addFeatures', 'updateFeatures' or 'deleteFeatures' parameter is required"))},
_normalizeGeometries:function(a){var b=a.addFeatures,c=a.updateFeatures,d=b.concat(c).map(function(a){return a.geometry});return K.normalizeCentralMeridian(d).then(function(d){var e=b.length,f=c.length;return d.slice(0,e).forEach(function(b,c){a.addFeatures[c].geometry=b}),d.slice(e,e+f).forEach(function(b,c){a.updateFeatures[c].geometry=b}),a})}});return E});