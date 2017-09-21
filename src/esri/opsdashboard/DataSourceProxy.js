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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/typescript","dojo/json","dojo/Deferred","../renderers/support/jsonUtils","./core/messageHandler","./core/MessageReceiver","./core/errorMessages","../layers/support/Field","../tasks/support/FeatureSet"],function(e,t,r,n,i,o,s,a,u,d,l,p,c){var f=function(e){function t(t){var r=e.call(this)||this;return r.id=null,r.name=null,r.mapWidgetId=null,r.objectIdFieldName=null,r.displayFieldName=null,r.typeIdFieldName=null,r.fields=null,r.types=null,r.geometryType=null,r.supportsSelection=!1,r.isBroken=!1,r._popupInfo=null,r._renderer=null,r.advancedQueryCapabilities=null,r}return r(t,e),t.prototype.dojoConstructor=function(e){this.fields||(this.fields=[]);for(var t=0;t<this.fields.length;t++){var r=this.fields[t];"string"==typeof r&&(r=o.parse(r)),this.fields[t]=new p(r)}},t.prototype._findField=function(e){if(!e||!Array.isArray(this.fields))return null;for(var t=0;t<this.fields.length;t++)if(this.fields[t].name===e)return this.fields[t];return null},t.prototype._findType=function(e){if(!e||!Array.isArray(this.types))return null;for(var t=0;t<this.types.length;t++)if(this.types[t].id===e)return this.types[t];return null},t.prototype._getCodedValueFromCodedDomain=function(e,t){if(!t||"codedValue"!==t.type)return null;for(var r=0;r<t.codedValues.length;r++)if(t.codedValues[r].code===e)return t.codedValues[r];return null},t.prototype.executeQuery=function(e){var t=this,r={functionName:"executeQuery",args:{dataSourceId:this.id,query:e}};return u._sendMessageWithReply(r).then(function(e){t.isBroken=!1;var r=e.featureSet;return new c(r)}).otherwise(function(e){throw t.isBroken=!0,e})},t.prototype.getAssociatedSelectionDataSourceId=function(){return u._sendMessageWithReply({functionName:"getAssociatedSelectionDataSource",args:{dataSourceId:this.id}}).then(function(e){return e.dataSourceId})},t.prototype.selectFeaturesByObjectIds=function(e){if(!Array.isArray(e))throw new Error(l.invalidObjectIdArray);if(!this.supportsSelection)throw new Error(l.selectionNotSupported);u._sendMessage({functionName:"selectFeaturesByIds",args:{dataSourceId:this.id,objectIds:e}})},t.prototype.selectFeatures=function(e){if(!this.supportsSelection)throw new Error(l.selectionNotSupported);u._sendMessage({functionName:"selectFeatures",args:{dataSourceId:this.id,geometry:e}})},t.prototype.clearSelection=function(){this.supportsSelection&&u._sendMessage({functionName:"clearSelection",args:{dataSourceId:this.id}})},t.prototype.getPopupInfo=function(){var e=this;return this._popupInfo?(new s).resolve(this._popupInfo):u._sendMessageWithReply({functionName:"getPopupInfo",args:{dataSourceId:this.id}}).then(function(t){return e._popupInfo=t.popupInfo,e._popupInfo})},t.prototype.getRenderer=function(){var e=this;return this._renderer?(new s).resolve(this._renderer):u._sendMessageWithReply({functionName:"getRenderer",args:{dataSourceId:this.id}}).then(function(t){return t.renderer?(e._renderer=a.fromJSON(t.renderer),e._renderer):null})},t.prototype.getAdvancedQueryCapabilities=function(){var e=this;return this.advancedQueryCapabilities?(new s).resolve(this.advancedQueryCapabilities):u.isNative?u._sendMessageWithReply({functionName:"getAdvancedQueryCapabilities",args:{dataSourceId:this.id}}).then(function(t){return t.advancedQueryCapabilities?(e.advancedQueryCapabilities=t.advancedQueryCapabilities,e.advancedQueryCapabilities):null}):(new s).resolve(null)},t.prototype.getTypeFromFeature=function(e){return this.typeIdFieldName?this._findType(e.attributes[this.typeIdFieldName]):null},t.prototype.getValueFromFeature=function(e,t){var r=this._findField(t);if(!t||!r)return null;var n=e.attributes[t];if(!n&&(n=e.attributes[t.toUpperCase()],!n))return null;if(this.typeIdFieldName===t){var i=this._findType(n);if(i)return i.name}var o,s=this.getTypeFromFeature(e);if(s&&Array.isArray(s.domains)){var a=s.domains[t];if(o=this._getCodedValueFromCodedDomain(n,a))return o.name}return o=this._getCodedValueFromCodedDomain(n,r.domain),o?o.name:n},t}(d);return n([i.shared("esri.opsdashboard.DataSourceProxy")],f.prototype,"declaredClass",void 0),f=n([i.subclass()],f)});