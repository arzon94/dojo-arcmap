// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/lang","dojo/_base/array","../../geometry/SpatialReference","../../geometry/support/jsonUtils","../../tasks/support/Query","../../tasks/QueryTask","./RenderMode"],function(e,t,r,a,i,s,u,n){var h=e([n],{declaredClass:"esri.layers.support.StreamMode",constructor:function(e,r){this.featureLayer=e,this._featureMap={},this._setRefreshRate(),this._drawBuffer={adds:[],updates:[]},this._timeoutId=null,this._flushDrawBuffer=t.hitch(this,this._flushDrawBuffer),this._featuresByTime={},this._lastEndTimeCheck=null,this._maxFeatureAge=0,e.purgeOptions&&e.purgeOptions.age&&"number"==typeof e.purgeOptions.age&&(this._maxFeatureAge=1e3*Math.ceil(60*e.purgeOptions.age)),this._drawFeatures=t.hitch(this,this._drawFeatures),this._queryErrorHandler=t.hitch(this,this._queryErrorHandler)},startup:function(){this.featureLayer._collection},propertyChangeHandler:function(e){this._init&&(0===e?this._applyTimeFilter():3===e?this._redrawAllTracks(): 0 && console.debug("StreamLayer: Stream Layer only supports changing map time or maximumTrackPoints. Layer id = "+this.featureLayer.id))},drawFeature:function(e){var t,r=this.featureLayer,a=r.objectIdField;this._timeoutId||(this._timeoutId=setTimeout(this._flushDrawBuffer,this._refreshRate)),t=r._joinField?this._getFeature(e.attributes[a]):null,t?this._drawBuffer.updates.push({oid:e.attributes[a],updates:e}):this._drawBuffer.adds.push(e)},resume:function(){this.propertyChangeHandler(0)},refresh:function(){var e=this.featureLayer;e&&(e._relatedUrl||e._keepLatestUrl?(e._fireUpdateStart(),e._refreshing=!0,e.disconnect(),e.removeAll(),e._relatedQueried=!1,e._keepLatestQueried=!1,e.connect()):(e._fireUpdateStart(),e.removeAll(),e._fireUpdateEnd()))},_drawFeatures:function(e){this._purgeRequests();var t=e.features||[],r=this.featureLayer;r._create(t),r._fireUpdateEnd(null,null)},_applyTimeFilter:function(e){this.inherited(arguments),this._redrawAllTracks()},_removeFeatures:function(e){var t=this.featureLayer,a=t.objectIdField;e&&r.forEach(e,function(e){var r=e.attributes[a];t._unSelectFeatureIIf(r,this),this._decRefCount(r),this._removeFeatureIIf(r)},this)},_addFeatures:function(e){var t,a,i,s,u=this.featureLayer,n=u._endTimeField,h=u._startTimeField,d=[],o=[],f=[];if(t=u._trackManager,i=u.objectIdField,t){a=t.addFeatures(e);for(s in a)a.hasOwnProperty(s)&&(d.push(s),a[s].adds&&(o=o.concat(a[s].adds)),a[s].deletes&&(f=f.concat(a[s].deletes)))}else o=e;r.forEach(o,function(e){var t,r,a=e.attributes[i];t=n&&e.attributes[n],!t&&this._maxFeatureAge&&(t=h&&e.attributes[h]?e.attributes[h]+this._maxFeatureAge:Date.now()+this._maxFeatureAge),t&&(r=1e3*Math.ceil(t/1e3),this._featuresByTime[r]?this._featuresByTime[r].push(a):this._featuresByTime[r]=[a]),this._addFeatureIIf(a,e),this._incRefCount(a)},this),f.length&&this._removeFeatures(f),t&&t.refreshTracks(d)},_updateFeatures:function(e){var t,a,i,s=this.featureLayer,u=[];t=s._trackManager,a=s.objectIdField,i=s._trackIdField,r.forEach(e,function(e){var r,a,n=e.updates,h=e.oid,d=this._getFeature(h);if(d){n.geometry&&d.setGeometry(n.geometry),r=n.attributes||{};for(a in r)r.hasOwnProperty(a)&&(d.attributes[a]=r[a]);d.visible=this._checkFeatureTimeIntersects(d),t&&d.attributes[i]?u.push(d.attributes[i]):s._repaint(d,null,!0)}},this),u.length&&t.refreshTracks(u)},_redrawAllTracks:function(){var e,t=this.featureLayer,r=t._trackManager;r&&(e=r.trimTracks(),e&&e.length>0&&(this._removeFeatures(e),r.refreshTracks()))},_flushDrawBuffer:function(){clearTimeout(this._timeoutId);var e,t=this._drawBuffer,r=t.adds.splice(0,t.adds.length),a=t.updates.splice(0,t.updates.length),i=this.featureLayer;return i?(i.updating||i._fireUpdateStart(),this._addFeatures(r),this._updateFeatures(a),e=this._getExpiredFeatures(),e&&e.length&&(this._removeFeatures(e),i._trackManager&&i._trackManager.removeFeatures(e)),i._purge(),i._fireUpdateEnd(),void(this._timeoutId=null)):!1},_clearDrawBuffer:function(){var e=this._timeoutId,t=this._drawBuffer,r=t.adds,a=t.updates;e&&clearTimeout(e),r.splice(0,r.length),a.splice(0,a.length),this._timeoutId=null},_clearTimeBin:function(){this._featuresByTime={},this._lastEndTimeCheck=1e3*Math.ceil(Date.now()/1e3)},_clearFeatureMap:function(){this._featureMap={}},_setRefreshRate:function(e){e=e||0===e?e:200,0>e&&(e=200),this._refreshRate=e},_checkFeatureTimeIntersects:function(e){var t,r=this.featureLayer,a=r.getMap(),i=a.timeExtent;return i&&r.timeInfo&&(r.timeInfo.startTimeField||r.timeInfo.endTimeField)?(t=r._filterByTime([e],i.startTime,i.endTime),t.match.length>0):!0},_getRequestId:function(e){var t="_"+e.name+e.layerId+e._ulid;return t.replace(/[^a-zA-Z0-9\_]+/g,"_")},_fetchArchive:function(e){var t,r,n,h,d,o,f,l,_=this.featureLayer;return _._fireUpdateStart(),e&&this.map?(t=new u(e),r=new s,n=this.map,h=_.getFilter()||{},d=h.where||"1=1",o=h.geometry?i.fromJSON(h.geometry):null,f=h.outFields?h.outFields.split(","):["*"],r.geometry=o,r.where=d,r.outFields=f,r.returnGeometry=!0,r.outSpatialReference=new a(n.spatialReference.toJSON()),_._usePatch&&(l=this._getRequestId(_),this._cancelPendingRequest(null,l)),t.execute(r,this._drawFeatures,this._queryErrorHandler,l),void 0):(this._fireUpdateEnd({error:"Archive data cannot be fetched if no feature service url is provided or if the layer is not added to a map"}),!1)},_queryErrorHandler:function(e){this._purgeRequests();var t=this.featureLayer;t._errorHandler(e),t._fireUpdateEnd(e)},_getExpiredFeatures:function(){var e,t,a,i,s=this.featureLayer,u=s._endTimeField,n=[],h=[];if(!u&&!this._maxFeatureAge)return h;if(e=1e3*Math.floor(this._lastEndTimeCheck/1e3),t=1e3*Math.ceil(Date.now()/1e3),this._lastEndTimeCheck=t,e&&e!==t)for(i=this._featuresByTime,a=e;t>=a;a+=1e3)i[a]&&(n=n.concat(i[a]),delete i[a]);return r.forEach(n,function(e){var t=this._getFeature(e);t&&h.push(t)},this),h}});return h});