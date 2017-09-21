//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/promise/all ../../../views/3d/support/ResourceController ../../../core/sql/WhereClause ../../../views/3d/layers/i3s/I3SNodeLoader ../../../views/3d/layers/i3s/I3SIndexTraversal ../../../views/3d/layers/i3s/I3SUtil ../../../views/3d/layers/i3s/I3SLodHandling ../../../views/3d/layers/i3s/I3SViewportQueries ../../../layers/SceneLayer ../../../layers/IntegratedMeshLayer ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../core/Evented ../../../core/Promise ../../../core/Logger ../../../core/watchUtils ../../../core/HandleRegistry ../../../views/3d/support/PromiseLightweight ../../../views/3d/support/projectionUtils ../../../views/3d/lib/glMatrix".split(" "),
function(d,J,p,e,q,r,t,u,v,k,w,x,y,z,f,A,B,C,D,E,F,G,H,I){function m(d,c){c=c.toLowerCase();for(var a=0;a<d.length;a++)if(d[a].name.toLowerCase()===c)return a;return-1}var h=I.vec3d,l=D.getLogger("esri.layers.SceneService");d=function(d){function c(a){var b=d.call(this)||this;return b.nodeIndex={},b.screenSizeFactor=0,b.updating=!0,b.updatingPercentage=0,b._lodFactorProperty=null,b._isIdle=!1,b._numNodesLoading=0,b._progressMaxNumNodes=1,b._animFrameFunctionQueue=[[],[]],b._requiredAttributesDirty=
!0,b._updatesDisabled=!1,b._restartNodeLoading=!1,b._handles=new F,b._bundleLoadedCallback=function(a,g,c,d,f,e,h,k){(b._lodHandling.lodSwapBundleLoaded(a,g,k),b.layerViewRequiredFunctions.addBundle(a,g,c,d,f,e,h),null!=b.layerViewOptionalFunctions.setPolygonOffset)&&(g=b._lodHandling.shouldSetPolygonOffset(a))&&b.layerViewOptionalFunctions.setPolygonOffset(a,g)},b}return p(c,d),Object.defineProperty(c.prototype,"isMeshPyramid",{get:function(){return"mesh-pyramids"===this.layer.profile||"MeshPyramid"===
this.layer.store.lodType},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"streamDataSupplier",{get:function(){return this.layerView.view.resourceController.registerClient(this.layerView,r.ClientType.SCENE,{addUrlToken:this.addUrlToken,trackRequests:!0})},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"parsedDefinitionExpression",{get:function(){if(!this.layer||!this.layer.definitionExpression)return null;try{var a=t.create(this.layer.definitionExpression);if(!a.isStandardized())return l.error("definitionExpression is using non standard function"),
null;var b=[],n=a.getFields();return k.findFieldsCaseInsensitive(n,this.layer.fields,b),0<b.length?(l.error("definitionExpression references unknown fields: "+b.join(", ")),null):a}catch(g){return l.error("Failed to parse definitionExpression: "+g),null}},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"definitionExpressionFields",{get:function(){if(this.parsedDefinitionExpression){var a=this.parsedDefinitionExpression.getFields();return k.findFieldsCaseInsensitive(a,this.layer.fields)}return null},
enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"crsVertex",{get:function(){return k.getVertexCrs(this.layer)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"crsIndex",{get:function(){return k.getIndexCrs(this.layer)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"rootNodeVisible",{get:function(){var a=this._rootNodeId&&this.nodeIndex[this._rootNodeId];return a&&this._viewportQueries?this._viewportQueries.isNodeVisible(a):!0},enumerable:!0,
configurable:!0}),c.prototype.initialize=function(){var a=this;this.updateEventListener={needsUpdate:function(){return a._needsAnimationFrameHandler()},idleFrame:function(b){return a._animationFrameHandler(b)},idleBegin:function(){a._startNodeLoading();a._updateIdleState(!0)},idleEnd:function(){a.cancelNodeLoading();a._updateIdleState(!1)}};this.updateEventListenerWhileSuspended={idleBegin:function(){return a._startNodeLoadingWhileSuspended()}};this._lodHandling=new w(this.layerViewRequiredFunctions,
this.layerViewOptionalFunctions,function(){return a._evaluateUpdatingState()});this.layerView._controller=this;var b=this.layer;this._defaultGeometrySchema=b.store.defaultGeometrySchema;this._fields=b.fields;this._attributeStorageInfo=b.attributeStorageInfo;this._rootNodeUrl=b.store.rootNode;b=this._rootNodeUrl.split("/");this._rootNodeId=b[b.length-1];this.layer instanceof y?"mesh"===this.layer.geometryType?this._lodFactorProperty="qualitySettings.sceneService.3dObject.lodFactor":"point"===this.layer.geometryType&&
(this._lodFactorProperty="qualitySettings.sceneService.point.lodFactor"):this.layer instanceof z&&(this._lodFactorProperty="qualitySettings.sceneService.integratedMesh.lodFactor");b=q([this.layer,this.layerView]).then(function(){if(!a.destroyed&&a.layerView&&!a.layerView.destroyed){a.setClippingArea(a.layerView.view.clippingArea);var b=a.layerView.view.resourceController,c=!1;a._handles.add(E.init(a.layerView,"suspended",function(n){c&&b.deregisterIdleFrameWorker(a);n?b.registerIdleFrameWorker(a,
a.updateEventListenerWhileSuspended):b.registerIdleFrameWorker(a,a.updateEventListener);c=!0}),"layerview");a._lodFactorProperty&&a._handles.add(a.layerView.view.watch(a._lodFactorProperty,function(){return a._qualityChanged()}),"quality")}});this.addResolvingPromise(b)},c.prototype.destroy=function(){this.layerView.view.resourceController.deregisterIdleFrameWorker(this);this.layerView.view.resourceController.deregisterClient(this.layerView);this._handles.destroy();this._nodeLoader=null},c.prototype._modifyNumNodesLoading=
function(a){this._numNodesLoading+=a},c.prototype._getRequiredAttributes=function(){if(null==this._attributeStorageInfo||!this._fields)return[];var a=Object.create(null);if(this.layer.renderer&&this.layer.renderer.collectRequiredFields(a),this.layer.labelsVisible&&this.layer.labelingInfo&&this.layer.labelingInfo.forEach(function(b){b._collectRequiredFields(a)}),null!=this.definitionExpressionFields)for(var b=0,c=this.definitionExpressionFields;b<c.length;b++)a[c[b]]=!0;var g=this._attributeStorageInfo,
d=this._fields;return Object.keys(a).map(function(a){var b=m(g,a);a=m(d,a);return 0<=b&&0<=a?{index:b,name:d[a].name,field:d[a],attributeStorageInfo:g[b]}:null}).filter(function(a){return null!=a}).sort(function(a,b){return b.index-a.index}).filter(function(a,b,c){return 0===b||c[b-1].index!==a.index})},c.prototype._requiredFieldsChange=function(){this._requiredAttributesDirty=!0;this.restartNodeLoading()},c.prototype._labelingChanged=function(){var a=this._requiredAttributes,b=this._getRequiredAttributes();
a.length===b.length&&a.every(function(a){return 0<=m(b,a.name)})||this._requiredFieldsChange()},c.prototype.setClippingArea=function(a){var b=[];H.extentToBoundingBox(a,b,this.layerView.view.renderSpatialReference)?this._clippingArea=b:this._clippingArea=null},c.prototype._qualityChanged=function(){this.restartNodeLoading()},c.prototype.updateClippingArea=function(a){this.setClippingArea(a);this.restartNodeLoading()},c.prototype.queueAnimationFrameFunctionCall=function(a,b,c,g,d){null!=this._nodeLoader&&
(d=d||0,this._animFrameFunctionQueue[d].push({fct:a,that:b,args:c,cancelFunc:g}),this._evaluateUpdatingState())},c.prototype.getBaseUrl=function(){return k.addTrailingSlash(this.layer.parsedUrl.path)},c.prototype.updateElevationChanged=function(a,b,c){k.findIntersectingNodes(a,b,this.nodeIndex.root,this.crsIndex,this.nodeIndex,c);for(a=0;a<c.length;a++)b=c.data[a],b.computedMbs&&(b.computedMbs[3]=-1);c.length&&this.restartNodeLoading()},c.prototype.restartNodeLoading=function(){this._restartNodeLoading=
!0;this._evaluateUpdatingState()},c.prototype._needsAnimationFrameHandler=function(){return!0},c.prototype._animationFrameHandler=function(a){if(this._restartNodeLoading&&(this.cancelNodeLoading(),this._startNodeLoading()),null!=this._nodeLoader){for(var b;0<this._animFrameFunctionQueue[0].length&&!a.done();)b=this._animFrameFunctionQueue[0].shift(),b.fct.apply(b.that,b.args);b=5-this._numNodesLoading;for(null!=this._indexLoader&&0<b&&this._indexLoader.continueTraversal(b);0<this._animFrameFunctionQueue[1].length&&
!a.done();)b=this._animFrameFunctionQueue[1].shift(),b.fct.apply(b.that,b.args);this._evaluateUpdatingState();this._lodHandling.lodGlobalHandling()}},c.prototype._evaluateUpdatingState=function(){var a=null!=this._indexLoader?this._indexLoader.getQueueSize()+3*this._numNodesLoading:0,b=!(!(0<a||this._indexLoader&&this._indexLoader.isLoading()||this._nodeLoader&&this._nodeLoader.isLoadingAttributes||this._restartNodeLoading||0<this._animFrameFunctionQueue[0].length||0<this._animFrameFunctionQueue[1].length||
this._lodHandling&&this._lodHandling.requiresLODGlobalHandling)&&this._isIdle);0===a&&(this._progressMaxNumNodes=1);this._progressMaxNumNodes=Math.max(a,this._progressMaxNumNodes);b!==this._get("updating")&&this._set("updating",b);a=100*a/this._progressMaxNumNodes;a!==this._get("updatingPercentage")&&this._set("updatingPercentage",a)},c.prototype._initViewData=function(){var a=this.layerView.view,b=a.navigation.targetCamera,c=a.renderCoordsHelper;this.camPos=b.eye;this.screenSizeFactor=1/b.perPixelRatio;
this._poi=h.create();var g=h.create(),d=h.create();h.subtract(b.center,b.eye,g);h.normalize(g);c.worldUpAtPosition(b.center,d);g=Math.acos(h.dot(d,g))-.5*Math.PI;h.lerp(b.eye,b.center,Math.max(0,Math.min(1,g/(.5*Math.PI))),this._poi);g=this._lodFactorProperty&&this.layerView.view.get(this._lodFactorProperty)||1;d=this.layerViewOptionalFunctions.traversalOptions.elevationInfo;this._viewportQueries=new x(this.crsIndex,c,b,this._clippingArea,null!=this.layerViewOptionalFunctions.traversalOptions?this.layerViewOptionalFunctions.traversalOptions.errorMetricPreference:
null,d?a.elevationProvider:null,d,{screenspaceErrorBias:g,maxDistance:25E7,angleDependentLoD:.5>g});this.notifyChange("rootNodeVisible")},c.prototype._startNodeLoadingWhileSuspended=function(){var a=this;this._initViewData();this._removeInvisibleNodes(function(b){return a._viewportQueries.isNodeVisible(b)})},c.prototype._startNodeLoading=function(){var a=this;if(this._restartNodeLoading=!1,!this._updatesDisabled&&null!=this.streamDataSupplier){this._initViewData();var b=null!=this.layerViewOptionalFunctions.getTexturePrefetchFunctions?
this.layerViewOptionalFunctions.getTexturePrefetchFunctions():void 0,c=this.isMeshPyramid&&null!=this._defaultGeometrySchema&&null!=this._defaultGeometrySchema.ordering;null!=this.layerViewOptionalFunctions.getLoadedAttributes&&this._requiredAttributesDirty&&(this._requiredAttributes=this._getRequiredAttributes(),this._requiredAttributesDirty=!1,this._handles.add([this.layer.watch("renderer",function(){return a._requiredFieldsChange()}),this.layer.watch("definitionExpression",function(){return a._requiredFieldsChange()}),
this.layer.watch("labelsVisible",function(){return a._labelingChanged()}),this.layer.watch("labelingInfo",function(){return a._labelingChanged()})],"requiredAttributes"));this._nodeLoader=new u(this.streamDataSupplier,this._bundleLoadedCallback,this.queueAnimationFrameFunctionCall.bind(this),void 0,this.layerView.view.renderCoordsHelper,this.crsIndex,b?b._calcDesiredTextureLOD:void 0,b?b._imageIsPartOfTextureBundle:void 0,b?b._matId2Meta:void 0,b?b._texId2Meta:void 0,b?b.useCompressedTextures:void 0,
l,this._defaultGeometrySchema,this._requiredAttributes,c);this._indexLoader=new v(this.getBaseUrl(),this._rootNodeUrl,this._rootNodeId,this._poi,this.nodeIndex,this.streamDataSupplier,this._viewportQueries,function(b,c){return a._processNodeIndexDocument(b,c)},function(b){return a._lodHandling.finishedLevel(b)},this.layerViewOptionalFunctions._nodeDebugVisualizer,l,this.layerViewOptionalFunctions.traversalOptions);this._indexLoader.start();b=this._removeInvisibleNodes(function(b){return a._indexLoader.nodeIsVisible(b)});
c=null!=this.layerViewOptionalFunctions.traversalOptions&&!0===this.layerViewOptionalFunctions.traversalOptions.perLevelTraversal?"perLevel":this.isMeshPyramid?"global":"swap";this._lodHandling.startNodeLoading(this._indexLoader.nodeIsVisible.bind(this._indexLoader),this._indexLoader.nodeTraversalState.bind(this._indexLoader),c,this.nodeIndex,b,this._rootNodeId);this.layerViewOptionalFunctions.additionalStartNodeLoadingHandler&&this.layerViewOptionalFunctions.additionalStartNodeLoadingHandler();this._evaluateUpdatingState()}},
c.prototype.isNodeLoading=function(){return null!=this._nodeLoader&&null!=this._indexLoader},c.prototype.cancelNodeLoading=function(){if(this.isNodeLoading()){this._indexLoader.cancel();this._nodeLoader.cancel();this.streamDataSupplier.cancelAll();for(var a=0;a<this._animFrameFunctionQueue.length;a++)for(var b=0;b<this._animFrameFunctionQueue[a].length;b++)void 0!==this._animFrameFunctionQueue[a][b].cancelFunc&&this._animFrameFunctionQueue[a][b].cancelFunc();this._numNodesLoading=0;this._animFrameFunctionQueue=
[[],[]];this._indexLoader=this._nodeLoader=void 0;this._lodHandling.cancelNodeLoading();this.layerViewOptionalFunctions.additionalCancelNodeLoadingHandler&&this.layerViewOptionalFunctions.additionalCancelNodeLoadingHandler();this._evaluateUpdatingState()}},c.prototype._removeInvisibleNodes=function(a){for(var b={},c=this.layerViewRequiredFunctions.getAddedNodeIDs(),d=0;d<c.length;d++){var f=c[d],e=this.nodeIndex[f];this._isNodeVisibleWithParents(e,a)?b[f]=e:this._removeNodeData(e)}return b},c.prototype._isNodeVisibleWithParents=
function(a,b){var c=a;do a=b(c),c=c.parentNode,c=null!=c?this.nodeIndex[c.id]:null;while(a&&null!=c);return a},c.prototype._removeNodeData=function(a){this._lodHandling.setLodGlobalDirty();this.layerViewRequiredFunctions.removeNodeData(a)},c.prototype._processNodeIndexDocument=function(a,b){var c=this,d=new G.Promise;if(null!=a.featureData&&0<a.featureData.length)if(this.layerViewRequiredFunctions.areAllBundlesLoaded(a)){var e=this.layerViewOptionalFunctions.getLoadedAttributes,e=null!=e?e(a):void 0;
null!=e&&e!==this._requiredAttributes&&(this._nodeLoader.loadAttributes(a,a.baseUrl,this._requiredAttributes).then(function(b){c.layerViewOptionalFunctions.setAttributeData(a,c._requiredAttributes,b)})["catch"](function(b){c.layerViewOptionalFunctions.setAttributeData(a,c._requiredAttributes,{})}).then(function(){c._evaluateUpdatingState()}),this._evaluateUpdatingState());this._lodHandling.shouldLoadNode(a,b)&&(b=this._lodHandling.lodSwapBuildInfoForNode(a))&&null==b.swapPairs&&this._lodHandling.lodSwapBundleLoaded(a,
null,b)}else if(this._lodHandling.shouldLoadNode(a,b)){b=this._lodHandling.lodSwapBuildInfoForNode(a);if(this.layerViewRequiredFunctions.isOverMemory())return d.done(),d;this._modifyNumNodesLoading(1);for(var e=[],f=0;f<a.featureData.length;f++)this.layerViewRequiredFunctions.isBundleAlreadyAddedToStage(a,f)||e.push(f);return this.queueAnimationFrameFunctionCall(this._nodeLoader.loadNodeData,this._nodeLoader,[a,e,d,null!=this.layerViewOptionalFunctions.getTexturePrefetchFunctions,b],void 0,1),d.then(function(){return c._modifyNumNodesLoading(-1)},
function(){return c._modifyNumNodesLoading(-1)}),d}return d.done(),d},c.prototype._updateIdleState=function(a){a!==this._isIdle&&(this._isIdle=a,this._evaluateUpdatingState())},c}(f.declared(A,C,B));return e([f.property({readOnly:!0})],d.prototype,"isMeshPyramid",null),e([f.property({readOnly:!0})],d.prototype,"streamDataSupplier",null),e([f.property({readOnly:!0,dependsOn:["layer.definitionExpression"]})],d.prototype,"parsedDefinitionExpression",null),e([f.property({readOnly:!0,dependsOn:["parsedDefinitionExpression"]})],
d.prototype,"definitionExpressionFields",null),e([f.property({readOnly:!0})],d.prototype,"crsVertex",null),e([f.property({readOnly:!0})],d.prototype,"crsIndex",null),e([f.property({readOnly:!0})],d.prototype,"nodeIndex",void 0),e([f.property()],d.prototype,"camPos",void 0),e([f.property()],d.prototype,"screenSizeFactor",void 0),e([f.property()],d.prototype,"layerView",void 0),e([f.property()],d.prototype,"layerViewRequiredFunctions",void 0),e([f.property()],d.prototype,"layerViewOptionalFunctions",
void 0),e([f.property()],d.prototype,"layer",void 0),e([f.property()],d.prototype,"addUrlToken",void 0),e([f.property({readOnly:!0})],d.prototype,"updating",void 0),e([f.property({readOnly:!0})],d.prototype,"updatingPercentage",void 0),e([f.property({readOnly:!0})],d.prototype,"rootNodeVisible",null),d=e([f.subclass("esri.layers.graphics.controllers.I3SOnDemandController")],d)});