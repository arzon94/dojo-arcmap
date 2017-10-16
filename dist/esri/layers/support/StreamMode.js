//>>built
define("../../core/declare dojo/_base/lang dojo/_base/array ../../geometry/SpatialReference ../../geometry/support/jsonUtils ../../tasks/support/Query ../../tasks/QueryTask ./RenderMode".split(" "),function(p,n,m,q,r,t,u,v){return p([v],{declaredClass:"esri.layers.support.StreamMode",constructor:function(a,b){this.featureLayer=a;this._featureMap={};this._setRefreshRate();this._drawBuffer={adds:[],updates:[]};this._timeoutId=null;this._flushDrawBuffer=n.hitch(this,this._flushDrawBuffer);this._featuresByTime=
{};this._lastEndTimeCheck=null;this._maxFeatureAge=0;a.purgeOptions&&a.purgeOptions.age&&"number"==typeof a.purgeOptions.age&&(this._maxFeatureAge=1E3*Math.ceil(60*a.purgeOptions.age));this._drawFeatures=n.hitch(this,this._drawFeatures);this._queryErrorHandler=n.hitch(this,this._queryErrorHandler)},startup:function(){this.featureLayer._collection},propertyChangeHandler:function(a){this._init&&(0===a?this._applyTimeFilter():3===a&&this._redrawAllTracks())},drawFeature:function(a){var b=this.featureLayer,
c=b.objectIdField;this._timeoutId||(this._timeoutId=setTimeout(this._flushDrawBuffer,this._refreshRate));b._joinField&&this._getFeature(a.attributes[c])?this._drawBuffer.updates.push({oid:a.attributes[c],updates:a}):this._drawBuffer.adds.push(a)},resume:function(){this.propertyChangeHandler(0)},refresh:function(){var a=this.featureLayer;a&&(a._relatedUrl||a._keepLatestUrl?(a._fireUpdateStart(),a._refreshing=!0,a.disconnect(),a.removeAll(),a._relatedQueried=!1,a._keepLatestQueried=!1,a.connect()):
(a._fireUpdateStart(),a.removeAll(),a._fireUpdateEnd()))},_drawFeatures:function(a){this._purgeRequests();var b=this.featureLayer;b._create(a.features||[]);b._fireUpdateEnd(null,null)},_applyTimeFilter:function(a){this.inherited(arguments);this._redrawAllTracks()},_removeFeatures:function(a){var b=this.featureLayer,c=b.objectIdField;a&&m.forEach(a,function(a){a=a.attributes[c];b._unSelectFeatureIIf(a,this);this._decRefCount(a);this._removeFeatureIIf(a)},this)},_addFeatures:function(a){var b,c,d,e=
this.featureLayer,l=e._endTimeField,f=e._startTimeField,g=[],k=[],h=[];if(b=e._trackManager,c=e.objectIdField,b)for(d in a=b.addFeatures(a),a)a.hasOwnProperty(d)&&(g.push(d),a[d].adds&&(k=k.concat(a[d].adds)),a[d].deletes&&(h=h.concat(a[d].deletes)));else k=a;m.forEach(k,function(a){var b,d,e=a.attributes[c];b=l&&a.attributes[l];!b&&this._maxFeatureAge&&(b=f&&a.attributes[f]?a.attributes[f]+this._maxFeatureAge:Date.now()+this._maxFeatureAge);b&&(d=1E3*Math.ceil(b/1E3),this._featuresByTime[d]?this._featuresByTime[d].push(e):
this._featuresByTime[d]=[e]);this._addFeatureIIf(e,a);this._incRefCount(e)},this);h.length&&this._removeFeatures(h);b&&b.refreshTracks(g)},_updateFeatures:function(a){var b,c,d=this.featureLayer,e=[];b=d._trackManager;c=d._trackIdField;m.forEach(a,function(a){var f,g;f=a.updates;if(a=this._getFeature(a.oid)){f.geometry&&a.setGeometry(f.geometry);f=f.attributes||{};for(g in f)f.hasOwnProperty(g)&&(a.attributes[g]=f[g]);a.visible=this._checkFeatureTimeIntersects(a);b&&a.attributes[c]?e.push(a.attributes[c]):
d._repaint(a,null,!0)}},this);e.length&&b.refreshTracks(e)},_redrawAllTracks:function(){var a,b=this.featureLayer._trackManager;b&&(a=b.trimTracks(),a&&0<a.length&&(this._removeFeatures(a),b.refreshTracks()))},_flushDrawBuffer:function(){clearTimeout(this._timeoutId);var a,b=this._drawBuffer,c=b.adds.splice(0,b.adds.length),b=b.updates.splice(0,b.updates.length),d=this.featureLayer;return d?(d.updating||d._fireUpdateStart(),this._addFeatures(c),this._updateFeatures(b),a=this._getExpiredFeatures(),
a&&a.length&&(this._removeFeatures(a),d._trackManager&&d._trackManager.removeFeatures(a)),d._purge(),d._fireUpdateEnd(),void(this._timeoutId=null)):!1},_clearDrawBuffer:function(){var a=this._timeoutId,b=this._drawBuffer,c=b.adds,b=b.updates;a&&clearTimeout(a);c.splice(0,c.length);b.splice(0,b.length);this._timeoutId=null},_clearTimeBin:function(){this._featuresByTime={};this._lastEndTimeCheck=1E3*Math.ceil(Date.now()/1E3)},_clearFeatureMap:function(){this._featureMap={}},_setRefreshRate:function(a){a=
a||0===a?a:200;0>a&&(a=200);this._refreshRate=a},_checkFeatureTimeIntersects:function(a){var b,c=this.featureLayer,d=c.getMap().timeExtent;return d&&c.timeInfo&&(c.timeInfo.startTimeField||c.timeInfo.endTimeField)?(b=c._filterByTime([a],d.startTime,d.endTime),0<b.match.length):!0},_getRequestId:function(a){return("_"+a.name+a.layerId+a._ulid).replace(/[^a-zA-Z0-9\_]+/g,"_")},_fetchArchive:function(a){var b,c,d,e,l,f,g,k,h=this.featureLayer;return h._fireUpdateStart(),a&&this.map?(b=new u(a),c=new t,
d=this.map,e=h.getFilter()||{},l=e.where||"1\x3d1",f=e.geometry?r.fromJSON(e.geometry):null,g=e.outFields?e.outFields.split(","):["*"],c.geometry=f,c.where=l,c.outFields=g,c.returnGeometry=!0,c.outSpatialReference=new q(d.spatialReference.toJSON()),h._usePatch&&(k=this._getRequestId(h),this._cancelPendingRequest(null,k)),b.execute(c,this._drawFeatures,this._queryErrorHandler,k),void 0):(this._fireUpdateEnd({error:"Archive data cannot be fetched if no feature service url is provided or if the layer is not added to a map"}),
!1)},_queryErrorHandler:function(a){this._purgeRequests();var b=this.featureLayer;b._errorHandler(a);b._fireUpdateEnd(a)},_getExpiredFeatures:function(){var a,b,c,d=[],e=[];if(!this.featureLayer._endTimeField&&!this._maxFeatureAge)return e;if(a=1E3*Math.floor(this._lastEndTimeCheck/1E3),b=1E3*Math.ceil(Date.now()/1E3),this._lastEndTimeCheck=b,a&&a!==b)for(c=this._featuresByTime;b>=a;a+=1E3)c[a]&&(d=d.concat(c[a]),delete c[a]);return m.forEach(d,function(a){(a=this._getFeature(a))&&e.push(a)},this),
e}})});