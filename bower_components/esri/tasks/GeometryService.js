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

define(["../core/kebabDictionary","../core/accessorSupport/ensureType","../geometry/Extent","../geometry/Multipoint","../geometry/Polyline","../geometry/Polygon","../geometry/support/jsonUtils","../request","./Task","./support/ProjectParameters","dojo/_base/lang"],function(e,t,r,i,n,s,a,o,u,c,N){var l=e({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"}),p=t.ensureType(c),m=u.createSubclass({declaredClass:"esri.tasks.GeometryService",areasAndLengths:function(e,t){var r=N.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()),i={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(i=N.mixin({},this.requestOptions,t,i)),o(this.parsedUrl.path+"/areasAndLengths",i).then(function(e){return e.data})},autoComplete:function(e,t,r){var i=e[0].spatialReference,n=N.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),polygons:JSON.stringify(this._encodeGeometries(e).geometries),polylines:JSON.stringify(this._encodeGeometries(t).geometries)}),a={query:n,callbackParamName:"callback"};return(this.requestOptions||r)&&(a=N.mixin({},this.requestOptions,r,a)),o(this.parsedUrl.path+"/autoComplete",a).then(function(e){var t=e.data.geometries||[];return t.map(function(e){return new s({spatialReference:i,rings:e.rings})})})},buffer:function(e,t){var r=N.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()),i=e.outSpatialReference||e.geometries[0].spatialReference,n={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(n=N.mixin({},this.requestOptions,t,n)),o(this.parsedUrl.path+"/buffer",n).then(function(e){var t=e.data.geometries||[];return t.map(function(e){return new s({spatialReference:i,rings:e.rings})})})},cut:function(e,t,r){var i=e[0].spatialReference,n=e.map(function(e){return e.toJSON()}),s=N.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),target:JSON.stringify({geometryType:a.getJsonType(e[0]),geometries:n}),cutter:JSON.stringify(t.toJSON())}),u={query:s,callbackParamName:"callback"};return(this.requestOptions||r)&&(u=N.mixin({},this.requestOptions,r,u)),o(this.parsedUrl.path+"/cut",u).then(function(e){var t=e.data,r=t.geometries||[];return{cutIndexes:t.cutIndexes,geometries:r.map(function(e){return a.fromJSON(e).set("spatialReference",i)})}})},convexHull:function(e,t){var r=e[0].spatialReference,i=N.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(r.toJSON()),geometries:JSON.stringify(this._encodeGeometries(e))}),n={query:i,callbackParamName:"callback"};return(this.requestOptions||t)&&(n=N.mixin({},this.requestOptions,t,n)),o(this.parsedUrl.path+"/convexHull",n).then(function(e){return a.fromJSON(e.data.geometry).set("spatialReference",r)})},densify:function(e,t){var r=N.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()),i=e.geometries[0].spatialReference,n={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(n=N.mixin({},this.requestOptions,t,n)),o(this.parsedUrl.path+"/densify",n).then(function(e){var t=e.data.geometries||[];return t.map(function(e){return a.fromJSON(e).set("spatialReference",i)})})},difference:function(e,t,r){var i=e[0].spatialReference,n=N.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(this._encodeGeometries(e)),geometry:JSON.stringify({geometryType:a.getJsonType(t),geometry:t.toJSON()})}),s={query:n,callbackParamName:"callback"};return(this.requestOptions||r)&&(s=N.mixin({},this.requestOptions,r,s)),o(this.parsedUrl.path+"/difference",s).then(function(e){var t=e.data.geometries||[];return t.map(function(e){return a.fromJSON(e).set("spatialReference",i)})})},distance:function(e,t){var r=N.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()),i={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(i=N.mixin({},this.requestOptions,t,i)),o(this.parsedUrl.path+"/distance",i).then(this._handleDistanceResponse)},fromGeoCoordinateString:function(e,t){var r={};N.isObject(e.sr)?r.sr=e.sr.wkid||JSON.stringify(e.sr.toJSON()):r.sr=e.sr,r.strings=JSON.stringify(e.strings);var i=e.conversionType||"mgrs";r.conversionType=l.toJSON(i),r.conversionMode=e.conversionMode;var n=N.mixin({},this.parsedUrl.query,{f:"json"},r),s={query:n,callbackParamName:"callback"};return(this.requestOptions||t)&&(s=N.mixin({},this.requestOptions,t,s)),o(this.parsedUrl.path+"/fromGeoCoordinateString",s).then(this._handleFromGeoCoordinateResponse)},generalize:function(e,t){var r=N.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()),i=e.geometries[0].spatialReference,n={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(n=N.mixin({},this.requestOptions,t,n)),o(this.parsedUrl.path+"/generalize",n).then(function(e){var t=e.data.geometries||[];return t.map(function(e){return a.fromJSON(e).set("spatialReference",i)})})},intersect:function(e,t,r){var i=e[0].spatialReference,n=N.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(this._encodeGeometries(e)),geometry:JSON.stringify({geometryType:a.getJsonType(t),geometry:t.toJSON()})}),s={query:n,callbackParamName:"callback"};return(this.requestOptions||r)&&(s=N.mixin({},this.requestOptions,r,s)),o(this.parsedUrl.path+"/intersect",s).then(function(e){var t=e.data.geometries||[];return t.map(function(e){return a.fromJSON(e).set("spatialReference",i)})})},lengths:function(e,t){var r=N.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()),i={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(i=N.mixin({},this.requestOptions,t,i)),o(this.parsedUrl.path+"/lengths",i).then(function(e){return e.data})},labelPoints:function(e,t){var r=e.map(function(e){return e.toJSON()}),i=e[0].spatialReference,n=N.mixin({},this.parsedUrl.query,{f:"json",sr:i.wkid?i.wkid:JSON.stringify(i.toJSON()),polygons:JSON.stringify(r)}),s={query:n,callbackParamName:"callback"};return(this.requestOptions||t)&&(s=N.mixin({},this.requestOptions,t,s)),o(this.parsedUrl.path+"/labelPoints",s).then(function(e){var t=e.data.labelPoints||[];return t.map(function(e){return a.fromJSON(e).set("spatialReference",i)})})},offset:function(e,t){var r=N.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()),i=e.geometries[0].spatialReference,n={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(n=N.mixin({},this.requestOptions,t,n)),o(this.parsedUrl.path+"/offset",n).then(function(e){var t=e.data.geometries||[];return t.map(function(e){return a.fromJSON(e).set("spatialReference",i)})})},project:function(e,t){e=p(e);var r=N.mixin({},e.toJSON(),this.parsedUrl.query,{f:"json"}),i=e.outSpatialReference,n=a.getJsonType(e.geometries[0]),s=this._decodeGeometries,u={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(u=N.mixin({},this.requestOptions,t,u)),o(this.parsedUrl.path+"/project",u).then(function(e){return s(e.data,n,i)})},relation:function(e,t){var r=N.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()),i={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(i=N.mixin({},this.requestOptions,t,i)),o(this.parsedUrl.path+"/relation",i).then(this._handleRelationResponse)},reshape:function(e,t,r){var i=e.spatialReference,n=N.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),target:JSON.stringify({geometryType:a.getJsonType(e),geometry:e.toJSON()}),reshaper:JSON.stringify(t.toJSON())}),s={query:n,callbackParamName:"callback"};return(this.requestOptions||r)&&(s=N.mixin({},this.requestOptions,r,s)),o(this.parsedUrl.path+"/reshape",s).then(function(e){return a.fromJSON(e.data.geometry).set("spatialReference",i)})},simplify:function(e,t){var r=e[0].spatialReference,i=N.mixin({},this.parsedUrl.query,{f:"json",sr:r.wkid?r.wkid:JSON.stringify(r.toJSON()),geometries:JSON.stringify(this._encodeGeometries(e))}),n=a.getJsonType(e[0]),s=this._decodeGeometries,u={query:i,callbackParamName:"callback"};return(this.requestOptions||t)&&(u=N.mixin({},this.requestOptions,t,u)),o(this.parsedUrl.path+"/simplify",u).then(function(e){return s(e.data,n,r)})},toGeoCoordinateString:function(e,t){var r={};N.isObject(e.sr)?r.sr=e.sr.wkid||JSON.stringify(e.sr.toJSON()):r.sr=e.sr,r.coordinates=JSON.stringify(e.coordinates);var i=e.conversionType||"mgrs";r.conversionType=l.toJSON(i),r.conversionMode=e.conversionMode,r.numOfDigits=e.numOfDigits,r.rounding=e.rounding,r.addSpaces=e.addSpaces;var n=N.mixin({},this.parsedUrl.query,{f:"json"},r),s={query:n,callbackParamName:"callback"};return(this.requestOptions||t)&&(s=N.mixin({},this.requestOptions,t,s)),o(this.parsedUrl.path+"/toGeoCoordinateString",s).then(this._handleToGeoCoordinateResponse)},trimExtend:function(e,t){var r=N.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()),i=e.sr,s={query:r,callbackParamName:"callback"};return(this.requestOptions||t)&&(s=N.mixin({},this.requestOptions,t,s)),o(this.parsedUrl.path+"/trimExtend",s).then(function(e){var t=e.data.geometries||[];return t.map(function(e){return new n({spatialReference:i,paths:e.paths})})})},union:function(e,t){var r=e[0].spatialReference,i=N.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(r.toJSON()),geometries:JSON.stringify(this._encodeGeometries(e))}),n={query:i,callbackParamName:"callback"};return(this.requestOptions||t)&&(n=N.mixin({},this.requestOptions,t,n)),o(this.parsedUrl.path+"/union",n).then(function(e){return a.fromJSON(e.data.geometry).set("spatialReference",r)})},_handleRelationResponse:function(e){return e.data.relations},_handleDistanceResponse:function(e){return e=e.data,e&&e.distance},_handleToGeoCoordinateResponse:function(e){return e.data.strings},_handleFromGeoCoordinateResponse:function(e){return e.data.coordinates},_encodeGeometries:function(e){var t,r=[],i=e.length;for(t=0;i>t;t++)r.push(e[t].toJSON());return{geometryType:a.getJsonType(e[0]),geometries:r}},_decodeGeometries:function(e,t,r){var i=a.getGeometryType(t),n=e.geometries,s=[],o={spatialReference:r.toJSON()},u=N.mixin;return n.forEach(function(e,t){s[t]=new i(u(e,o))}),s},_toProjectGeometry:function(e){var t=e.spatialReference.toJSON();return e instanceof r?new s({rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]],spatialReference:t}):new n({paths:[[].concat(e.points)],spatialReference:t})},_fromProjectedGeometry:function(e,t,n){if("extent"===t){var s=e.rings[0];return new r(s[0][0],s[0][1],s[2][0],s[2][1],n)}return new i({points:e.paths[0],spatialReference:n.toJSON()})}});return N.mixin(m,{UNIT_METER:9001,UNIT_GERMAN_METER:9031,UNIT_FOOT:9002,UNIT_SURVEY_FOOT:9003,UNIT_CLARKE_FOOT:9005,UNIT_FATHOM:9014,UNIT_NAUTICAL_MILE:9030,UNIT_SURVEY_CHAIN:9033,UNIT_SURVEY_LINK:9034,UNIT_SURVEY_MILE:9035,UNIT_KILOMETER:9036,UNIT_CLARKE_YARD:9037,UNIT_CLARKE_CHAIN:9038,UNIT_CLARKE_LINK:9039,UNIT_SEARS_YARD:9040,UNIT_SEARS_FOOT:9041,UNIT_SEARS_CHAIN:9042,UNIT_SEARS_LINK:9043,UNIT_BENOIT_1895A_YARD:9050,UNIT_BENOIT_1895A_FOOT:9051,UNIT_BENOIT_1895A_CHAIN:9052,UNIT_BENOIT_1895A_LINK:9053,UNIT_BENOIT_1895B_YARD:9060,UNIT_BENOIT_1895B_FOOT:9061,UNIT_BENOIT_1895B_CHAIN:9062,UNIT_BENOIT_1895B_LINK:9063,UNIT_INDIAN_FOOT:9080,UNIT_INDIAN_1937_FOOT:9081,UNIT_INDIAN_1962_FOOT:9082,UNIT_INDIAN_1975_FOOT:9083,UNIT_INDIAN_YARD:9084,UNIT_INDIAN_1937_YARD:9085,UNIT_INDIAN_1962_YARD:9086,UNIT_INDIAN_1975_YARD:9087,UNIT_FOOT_1865:9070,UNIT_RADIAN:9101,UNIT_DEGREE:9102,UNIT_ARCMINUTE:9103,UNIT_ARCSECOND:9104,UNIT_GRAD:9105,UNIT_GON:9106,UNIT_MICRORADIAN:9109,UNIT_ARCMINUTE_CENTESIMAL:9112,UNIT_ARCSECOND_CENTESIMAL:9113,UNIT_MIL6400:9114,UNIT_BRITISH_1936_FOOT:9095,UNIT_GOLDCOAST_FOOT:9094,UNIT_INTERNATIONAL_CHAIN:109003,UNIT_INTERNATIONAL_LINK:109004,UNIT_INTERNATIONAL_YARD:109001,UNIT_STATUTE_MILE:9093,UNIT_SURVEY_YARD:109002,UNIT_50KILOMETER_LENGTH:109030,UNIT_150KILOMETER_LENGTH:109031,UNIT_DECIMETER:109005,UNIT_CENTIMETER:109006,UNIT_MILLIMETER:109007,UNIT_INTERNATIONAL_INCH:109008,UNIT_US_SURVEY_INCH:109009,UNIT_INTERNATIONAL_ROD:109010,UNIT_US_SURVEY_ROD:109011,UNIT_US_NAUTICAL_MILE:109012,UNIT_UK_NAUTICAL_MILE:109013,UNIT_SQUARE_INCHES:"esriSquareInches",UNIT_SQUARE_FEET:"esriSquareFeet",UNIT_SQUARE_YARDS:"esriSquareYards",UNIT_ACRES:"esriAcres",UNIT_SQUARE_MILES:"esriSquareMiles",UNIT_SQUARE_MILLIMETERS:"esriSquareMillimeters",UNIT_SQUARE_CENTIMETERS:"esriSquareCentimeters",UNIT_SQUARE_DECIMETERS:"esriSquareDecimeters",UNIT_SQUARE_METERS:"esriSquareMeters",UNIT_ARES:"esriAres",UNIT_HECTARES:"esriHectares",UNIT_SQUARE_KILOMETERS:"esriSquareKilometers"}),m});