//>>built
define(["../../core/declare","dojo/_base/lang"],function(b,c){return b(null,{declaredClass:"esri.layers.support.FeatureEditResult",constructor:function(a){a&&c.isObject(a)&&(this.objectId=a.objectId,this.success=a.success,!a.success)&&(a=a.error,this.error=Error(),this.error.code=a.code,this.error.message=a.description)}})});