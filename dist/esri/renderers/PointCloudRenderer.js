//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/kebabDictionary ../core/lang ../core/accessorSupport/decorators".split(" "),function(c,k,g,d,h,f,e,b){c=function(c){function b(a){a=c.call(this)||this;return a.pointSizeAlgorithm=null,a.colorModulation=null,a.pointsPerInch=10,a}return g(b,c),b.prototype.readPointSizeAlgorithm=function(a,b,c){return null==a||"object"!=typeof a?null:"pointCloudFixedSizeAlgorithm"===a.type?{type:"fixed-size",
useRealWorldSymbolSizes:!!a.useRealWorldSymbolSizes,size:null!=a.size?parseFloat(a.size):0}:"pointCloudSplatAlgorithm"===a.type?{type:"splat",scaleFactor:null!=a.scaleFactor?parseFloat(a.scaleFactor):1,minSize:null!=a.minSize?parseFloat(a.minSize):4}:null},b.prototype.writePointSizeAlgorithm=function(a,b,c,d){a&&(b.pointSizeAlgorithm="fixed-size"===a.type?{type:"pointCloudFixedSizeAlgorithm",useRealWorldSymbolSizes:a.useRealWorldSymbolSizes,size:a.size}:{type:"pointCloudSplatAlgorithm",scaleFactor:a.scaleFactor,
minSize:a.minSize})},b.prototype.readColorModulation=function(a,b,c){return null==a||"object"!=typeof a?null:{field:String(a.field),minValue:null!=a.minValue?parseFloat(a.minValue):0,maxValue:null!=a.maxValue?parseFloat(a.maxValue):255}},b.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},b.prototype.cloneProperties=function(){return{pointSizeAlgorithm:e.clone(this.pointSizeAlgorithm),colorModulation:e.clone(this.colorModulation),pointsPerInch:e.clone(this.pointsPerInch)}},
b}(b.declared(h));return d([b.property({readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],c.prototype,"type",void 0),d([b.property({json:{write:!0}})],c.prototype,"pointSizeAlgorithm",void 0),d([b.reader("pointSizeAlgorithm")],c.prototype,"readPointSizeAlgorithm",null),d([b.writer("pointSizeAlgorithm")],c.prototype,"writePointSizeAlgorithm",null),d([b.property({json:{write:!0}})],c.prototype,"colorModulation",void 0),d([b.reader("colorModulation")],c.prototype,"readColorModulation",null),d([b.property({json:{write:!0},
type:Number})],c.prototype,"pointsPerInch",void 0),c=d([b.subclass("esri.renderers.PointCloudRenderer")],c),function(b){b.pointSizeKebabDict=f({pointCloudSplatAlgorithm:"fixed-size",pointCloudFixedSizeAlgorithm:"splat"});b.fieldTransformTypeKebabDict=f({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(c||(c={})),c});