//>>built
define(["../../core/JSONSupport","../../Graphic"],function(c,d){return c.createSubclass({declaredClass:"esri.tasks.support.IdentifyResult",properties:{displayFieldName:null,feature:{value:null,json:{read:{source:["attributes","geometry"],reader:function(a,b){a={};return b.attributes&&(a.attributes=b.attributes),b.geometry&&(a.geometry=b.geometry),d.fromJSON(a)}}}},layerId:null,layerName:null}})});