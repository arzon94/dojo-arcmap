//>>built
define(["dojo/_base/array","../../Graphic","../../core/JSONSupport","./DirectionsFeatureSet"],function(f,d,b,g){return b.createSubclass({declaredClass:"esri.tasks.support.RouteResult",properties:{directions:{value:null,type:g},route:{value:null,json:{read:function(a,c){return a.geometry&&(a.geometry.spatialReference=c.spatialReference),d.fromJSON(a)}}},routeName:null,stops:{value:null,json:{read:function(a,c){var e=[],b=c.spatialReference;return f.forEach(a,function(a){a.geometry&&(a.geometry.spatialReference=
b);e[a.attributes.Sequence-1]=d.fromJSON(a)}),e}}}}})});