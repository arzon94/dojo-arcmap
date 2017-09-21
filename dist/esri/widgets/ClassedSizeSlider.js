//>>built
require({cache:{"url:esri/widgets/ClassedSizeSlider/templates/ClassedSizeSlider.html":'\x3cdiv class\x3d"${_css.container}"\x3e\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode"\x3e\n  \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\n  \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\n  \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("./Widgette ./RendererSlider ./RendererSlider/sliderUtils ../Color ../core/numberUtils ../renderers/support/utils dijit/_TemplatedMixin dojo/_base/array dojo/_base/lang dojo/dom-style dojox/gfx dojo/text!./ClassedSizeSlider/templates/ClassedSizeSlider.html".split(" "),function(n,p,e,q,r,m,t,h,b,l,u,v){return n.createSubclass([t],{_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,_css:null,declaredClass:"esri.widgets.ClassedSizeSlider",
templateString:v,properties:{breakInfos:null,histogram:null,statistics:null,handles:[],showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,classificationMethod:null,normalizationType:null,histogramWidth:100,rampWidth:26},constructor:function(a,c){c&&(this.breakInfos=b.clone(a.breakInfos),this.set("values",this._getHandleInfo(this.breakInfos)),this._css={container:"esri-classed-size-slider"})},postCreate:function(){this.inherited(arguments);this._setupDataDefaults()},startup:function(){this.inherited(arguments);
this._slider=new p({type:"ClassedSizeSlider",values:this.values,minimum:this.minValue,maximum:this.maxValue,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,classificationMethod:this.classificationMethod,normalizationType:this.normalizationType},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=l.get(this._rampNode,"height")||155;this._createSVGSurfaces();this._slider.on("slide",b.hitch(this,function(a){this._updateBreakInfos(a.values);
this._updateBreakInfoLabels();this._fillRamp()}));this._slider.on("data-change",b.hitch(this,function(a){a.values&&(this.set("values",a.values),this._updateBreakInfos(a.values),this._updateBreakInfoLabels());this._fillRamp();this.emit("change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:b.clone(this.breakInfos)})}));this._slider.on("handle-value-change",b.hitch(this,function(a){this._updateBreakInfos(a.values);this._updateBreakInfoLabels();this._fillRamp();this.emit("handle-value-change",
{minValue:this.minValue,maxValue:this.maxValue,breakInfos:b.clone(this.breakInfos)})}));this._slider.on("data-value-change",b.hitch(this,function(a){this.set("minValue",a.min);this.breakInfos[0].minValue=a.min;this.set("maxValue",a.max);this.breakInfos[this.breakInfos.length-1].maxValue=a.max;this._updateBreakInfoLabels();this._updateRendererSlider();this.emit("data-value-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:b.clone(this.breakInfos)})}));this._slider.on("stop",b.hitch(this,
function(a){this.emit("handle-value-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:b.clone(this.breakInfos)})}));this.histogram&&this.showHistogram&&this._generateHistogram();this.statistics&&this.showStatistics&&this._generateStatistics();this.watch("breakInfos, handles, statistics, showHandles, showLabels, showTicks",this._updateTimeout);this.watch("histogram",this._showHistogram);this.watch("showHistogram",this._toggleHistogram)},destroy:function(){this.inherited(arguments);
this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&h.forEach(this.countTooltips,function(a){a.destroy()})},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue});this._slider.set({minimum:this.minValue,maximum:this.maxValue,values:this._getHandleInfo(this.breakInfos),
handles:this.handles});this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.histogram&&this.showHistogram&&this._generateHistogram();this.statistics&&this.showStatistics&&this._generateStatistics()},_getHandleInfo:function(a){a=h.map(a,function(a,k){return a.maxValue});return a.pop(),a},_updateBreakInfos:function(a){var c=this.breakInfos;m.updateClassBreak({classBreaks:c,normalizationType:this.normalizationType,
classificationMethod:this.classificationMethod,change:a});h.forEach(a,function(a,d){c[d].maxValue=a;c[d+1]&&(c[d+1].minValue=a)})},_updateBreakInfoLabels:function(){m.setLabelsForClassBreaks({classBreaks:this.breakInfos,normalizationType:this.normalizationType,classificationMethod:this.classificationMethod,round:!0})},_setupDataDefaults:function(){null!==this.breakInfos&&1<this.breakInfos.length?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue}):
null!==this.breakInfos&&1===this.breakInfos.length?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[0].maxValue}):(this.set({minValue:0,maxValue:100,breakInfos:[{minValue:0,maxValue:20},{minValue:20,maxValue:80},{minValue:80,maxValue:100}]}),this.set("values",this._getHandleInfo(this.breakInfos)),this._updateBreakInfoLabels())},_createSVGSurfaces:function(){this._colorRampSurface=u.createSurface(this._rampNode,this.rampWidth,this._sliderHeight);this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,
height:this._sliderHeight});this._histogramSurface=e.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp()},_clearRect:function(){this._colorRampSurface.destroy();this._histogramSurface.destroy()},_fillRamp:function(){var a,c,k,d=this.breakInfos,f=this._slider,g=this._sliderHeight,e=[],e=h.map(d,function(a){return[g-Math.round((a.minValue-f.minimum)/(f.maximum-f.minimum)*g),g-Math.round((a.maxValue-f.minimum)/(f.maximum-f.minimum)*g)]});e.reverse();
this._colorRampSurface.clear();a=this.rampWidth/d.length;c=this.rampWidth;k=this._colorRampSurface.createPath().moveTo(c,0);h.forEach(e,b.hitch(this,function(d,b){k.lineTo(c,d[0]);c=this.rampWidth-a*(b+1);k.lineTo(c,d[0])}));k.lineTo(1,g).lineTo(0,g).lineTo(0,0).closePath().setFill(new q([0,121,193,.8]))},_showHistogram:function(){this.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(l.set(this._barsGroup.rawNode,
"display","inline-block"),this._showHistogram()):l.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){this._barsGroup=e.generateHistogram(this._histogramSurface,this.histogram,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=e.generateCountTooltips(this.histogram,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg))){var a,c,b,d=this.statistics;b=this._slider;var f=e.getPrecision(this.maxValue);
d.min===d.max&&d.min===d.avg?(a=0,c=2*d.avg):(a=d.min,c=d.max);(a!==b.minimum||c!==b.maximum)&&(a=b.minimum,c=b.maximum);b=this._sliderHeight*(c-d.avg)/(c-a);a=r.round([d.avg,c,a])[0];this._avgHandleObjs=e.generateAvgLine(this._histogramSurface,a,b,f,!1,this.isLeftToRight())}}})});