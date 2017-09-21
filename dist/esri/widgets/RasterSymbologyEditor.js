//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dgrid/OnDemandGrid ./ColorRampSelector dijit/TitlePane ../core/accessorSupport/decorators ./Widget ./RasterSymbologyEditor/RasterSymbologyEditorViewModel dojo/dom-construct dojo/store/Memory dijit/form/FilteringSelect dijit/form/NumberTextBox dijit/form/CheckBox dijit/form/NumberSpinner dojo/_base/lang ./support/widget dojo/i18n!./RasterSymbologyEditor/nls/RasterSymbologyEditor".split(" "),function(g,M,
G,l,H,E,m,h,I,r,e,p,n,k,J,K,L,b,f){var d={base:"esri-raster-symbology-editor",filteringSelect:"esri-raster-symbology-editor__filtering-select",stretchColorSchemeRow:"esri-raster-symbology-editor__stretch-color-ramp-row",percentClipOptionsRow:"esri-raster-symbology-editor__percent-clip-row",stdDeviationOptionsRow:"esri-raster-symbology-editor__std-deviation-row",stretchOptionsBlock:"esri-raster-symbology-editor__stretch-options",stretchGammaBlock:"esri-raster-symbology-editor__stretch-gamma-row",stretchDraBlock:"esri-raster-symbology-editor__stretch-dra-row",
displayHidden:"esri-raster-symbology-editor--hidden",displayBlock:"esri-raster-symbology-editor--block",table:"esri-raster-symbology-editor__table",thumbnailImage:"esri-raster-symbology-editor__thumbnail-image",bandCombinationPresetNaturalColorIcon:"esri-raster-symbology-editor__band-combination-icon--natural-color",bandCombinationPresetLanduseIcon:"esri-raster-symbology-editor__band-combination-icon--landuse",bandCombinationPresetLandWaterIcon:"esri-raster-symbology-editor__band-combination-icon--land-water",
bandCombinationPresetVegetationIcon:"esri-raster-symbology-editor__band-combination-icon--vegetation",bandCombinationPresetShallowBathymetricIcon:"esri-raster-symbology-editor__band-combination-icon--bathymetric",bandCombinationPresetColorInfraredIcon:"esri-raster-symbology-editor__band-combination-icon--color-infrared",minMaxStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--min-max",noneStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--none",standardDeviationStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--standard-deviation",
percentClipStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--percent-clip",rgbSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--rgb",stretchSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--stretch",uniqueValueSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--unique-value",discreteSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--discrete",menuItemTd:"esri-raster-symbology-editor__menu-item-td",dgridSymbolCell:"esri-raster-symbology-editor__dgrid-symbol-cell",
menuItemText:"esri-raster-symbology-editor__menu-item-text",checkbox:"esri-raster-symbology-editor__checkbox"};g=function(g){function c(){var a=null!==g&&g.apply(this,arguments)||this;return a.layer=null,a.defaultParams=null,a.viewModel=new r,a.stretchType=0,a.symbologyType="",a._components=[],a._symbologySelect=null,a._supportsBandPresets=!1,a}return G(c,g),c.prototype.postInitialize=function(a){this.defaultParams=this.viewModel.getDefaultRenderParameters();this._createUIComponents()},c.prototype.destroy=
function(){this._components.forEach(function(a){a&&(a.destroy(),a=null)})},c.prototype.render=function(){var a=this.symbologyType,c=this.stretchType,q=r.SymbologyTypes,e=q.stretch,t=q.rgb,g=q.uniqueValue,n=q.discrete,h=this.viewModel.isStretchColorRampApplicable(c),k=this.viewModel.getStretchFilterType(r.StretchTypeNames.percentClip),x=this.viewModel.getStretchFilterType(r.StretchTypeNames.none),F=this.viewModel.getStretchFilterType(r.StretchTypeNames.standardDeviation),q=b.tsx("div",null,b.tsx("div",
{afterCreate:this._placeSymbologySelect,bind:this})),h=b.tsx("div",{classes:(u={},u[d.displayBlock]=a===e,u[d.displayHidden]=a!==e,u)},b.tsx("div",{afterCreate:this._createColorSchemeTitlePane,bind:this},b.tsx("table",{"class":d.table},b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.bandSelectionLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeBandSelect,bind:this}))),b.tsx("tr",{classes:(l={},l[d.stretchColorSchemeRow]=h,l[d.displayHidden]=!h,l)},b.tsx("td",null,b.tsx("label",null,
f.colorSchemeLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeColorRampSelect,bind:this})))))),u=b.tsx("div",{classes:(v={},v[d.displayBlock]=a===e||a===t,v[d.displayHidden]=a!==e,v)},b.tsx("div",{afterCreate:this._createNoDataTitlePane,bind:this},b.tsx("table",{"class":d.table},b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.noDataLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeNoDataInput,bind:this})))))),v=b.tsx("div",{afterCreate:this._placeStretchTypeSelect,bind:this}),
k=b.tsx("tr",{classes:(w={},w[d.percentClipOptionsRow]=c===k,w[d.displayHidden]=c!==k,w)},b.tsx("td",null,b.tsx("label",null,f.minLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeMinPercentInput,bind:this})),b.tsx("td",null,b.tsx("label",null,f.maxLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeMaxPercentInput,bind:this}))),w=b.tsx("tr",{classes:(p={},p[d.stdDeviationOptionsRow]=c===F,p[d.displayHidden]=c!==F,p)},b.tsx("td",{colSpan:2},b.tsx("label",null,f.nStdDeviationsLabel)),
b.tsx("td",{colSpan:2},b.tsx("div",{afterCreate:this._placeStandardDeviationsInput,bind:this}))),c=b.tsx("div",{classes:(m={},m[d.displayBlock]=a===e||a===t,m[d.displayHidden]=a!==e,m)},b.tsx("div",{afterCreate:this._createStretchTitlePane,bind:this},b.tsx("table",{"class":d.table},b.tsx("tr",{"class":d.stretchOptionsBlock},b.tsx("td",{colSpan:2},b.tsx("label",null,f.stretchTypeLabel)),b.tsx("td",{colSpan:2},v)),k,w,b.tsx("tr",{classes:(y={},y[d.stretchGammaBlock]=c!==x,y[d.displayHidden]=c===x,y)},
b.tsx("td",{colSpan:2},b.tsx("label",null,f.gammaLabel)),b.tsx("td",{colSpan:2},b.tsx("div",{afterCreate:this._placeGammaInput,bind:this}))),b.tsx("tr",{classes:(z={},z[d.stretchDraBlock]=c!==x,z[d.displayHidden]=c===x,z)},b.tsx("td",{colSpan:4},b.tsx("div",{"class":d.checkbox,afterCreate:this._placeStretchStatisticsCheckbox,bind:this}),b.tsx("label",null,f.draStatisticsTitle)))))),t=b.tsx("div",{classes:(A={},A[d.displayBlock]=a===t,A[d.displayHidden]=a!==t,A)},b.tsx("div",{afterCreate:this._createBandCombinationTitlePane,
bind:this},b.tsx("table",{"class":d.table},b.tsx("tr",{classes:(B={},B[d.stdDeviationOptionsRow]=this._supportsBandPresets,B[d.displayHidden]=!this._supportsBandPresets,B)},b.tsx("td",null,b.tsx("label",null,f.bandCombinationPresetLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeBandCombinationPresetSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.redBandTitle)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeRedBandSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",
null,b.tsx("label",null,f.greenBandTitle)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeGreenBandSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.blueBandTitle)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeBlueBandSelect,bind:this})))))),g=b.tsx("div",{classes:(C={},C[d.displayBlock]=a===g,C[d.displayHidden]=a!==g,C)},b.tsx("table",{"class":d.table},b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.valueFieldTitle)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeUniqueValueFieldSelect,
bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.colorSchemeLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeUniqueValueColorSchemeSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.noDataLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeUniqueValueNoDataInput,bind:this})))),b.tsx("div",{afterCreate:this._placeUniqueValuesGrid,bind:this})),a=b.tsx("div",{classes:(D={},D[d.displayBlock]=a===n,D[d.displayHidden]=a!==n,D)},b.tsx("table",{"class":d.table},
b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.colorSchemeLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeDiscreteColorSchemeSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.numberOfColors)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeDiscreteNColorsInput,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.noDataLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeDiscreteNoDataInput,bind:this})))));return b.tsx("div",null,q,
h,t,u,c,g,a);var u,l,v,w,p,m,y,z,A,B,C,D},c.prototype._createUIComponents=function(){this._createSymbologySelect();this._createStretchStatisticsCheckbox();this._createBandSelect();this._createStretchTypeSelect();this._createColorRampSelect();this._createBandCombinationPresetSelect();this._createRedBandSelect();this._createGreenBandSelect();this._createBlueBandSelect();this._createNoDataInput();this._createMinPercentInput();this._createMaxPercentInput();this._createStandardDeviationsInput();this._createGammaInput();
this._createUniqueValueFieldSelect();this._createUniqueValueColorSchemeSelect();this._createUniqueValueNoDataInput();this._createUniqueValuesGrid();this._createDiscreteColorSchemeSelect();this._createDiscreteNoDataInput();this._createDiscreteNColorsInput()},c.prototype._createSymbologySelect=function(){var a=this;this._symbologySelect=new n({store:this._getSymbologyStore(),"class":d.filteringSelect,labelAttr:"label",labelType:"html",onChange:function(b){return a._updateSymbologyType(b)},value:this.defaultParams.symbologyType});
this._symbologySelect.startup();this._components.push(this._symbologySelect)},c.prototype._createStretchStatisticsCheckbox=function(){var a=this;this._stretchStatisticsCheckBox=new J({onChange:function(){return a._updateSymbology()}});this._stretchStatisticsCheckBox.startup();this._components.push(this._stretchStatisticsCheckBox)},c.prototype._createColorSchemeTitlePane=function(a){this._colorSchemeTitlePane=new m({title:f.colorRampTitle},a);this._colorSchemeTitlePane.startup();this._components.push(this._colorSchemeTitlePane)},
c.prototype._createNoDataTitlePane=function(a){this._noDataTitlePane=new m({title:f.backgroundTitle},a);this._noDataTitlePane.startup();this._components.push(this._noDataTitlePane)},c.prototype._createStretchTitlePane=function(a){this._stretchTitlePane=new m({title:f.stretchTitle},a);this._stretchTitlePane.startup();this._components.push(this._stretchTitlePane)},c.prototype._createBandCombinationTitlePane=function(a){this._bandCombinationTitlePane=new m({title:f.bandCombinationTitle},a);this._bandCombinationTitlePane.startup();
this._components.push(this._bandCombinationTitlePane)},c.prototype._createBandSelect=function(){var a=this;this._bandSelect=new n({"class":d.filteringSelect,onChange:function(){return a._updateSymbology()}});this._bandSelect.startup();this._populateBandSelect();this._components.push(this._bandSelect)},c.prototype._createStretchTypeSelect=function(){var a=this;this._stretchTypeSelect=new n({"class":d.filteringSelect,onChange:function(b){return a._onStretchTypeChange(b)},labelAttr:"label",labelType:"html"});
this._stretchTypeSelect.startup();this._populateStretchTypeSelect();this._components.push(this._stretchTypeSelect)},c.prototype._createColorRampSelect=function(){var a=this;this._stretchColorRampSelect=new E({"class":d.filteringSelect,maxHeight:300});this._stretchColorRampSelect.on("change",function(){return a._updateSymbology()});this._stretchColorRampSelect.startup();this._stretchColorRampSelect.set("value",this.defaultParams.colorRamp);this._components.push(this._stretchColorRampSelect)},c.prototype._createBandCombinationPresetSelect=
function(){var a=this;this._bandCombinationPresetSelect=new n({"class":d.filteringSelect,onChange:function(b){return a._updateBandCombination(b)},labelType:"html",labelAttr:"label",maxHeight:350});this._bandCombinationPresetSelect.startup();this._components.push(this._bandCombinationPresetSelect)},c.prototype._createRedBandSelect=function(){var a=this;this._redBandSelect=new n({"class":d.filteringSelect,onChange:function(){return a._bandCombinationChanged()}});this._redBandSelect.startup();this._populateBandLists();
this._components.push(this._redBandSelect)},c.prototype._createGreenBandSelect=function(){var a=this;this._greenBandSelect=new n({"class":d.filteringSelect,onChange:function(){return a._bandCombinationChanged()}});this._greenBandSelect.startup();this._populateBandLists();this._components.push(this._greenBandSelect)},c.prototype._createBlueBandSelect=function(){var a=this;this._blueBandSelect=new n({"class":d.filteringSelect,onChange:function(){return a._bandCombinationChanged()}});this._blueBandSelect.startup();
this._populateBandLists();this._components.push(this._blueBandSelect)},c.prototype._createNoDataInput=function(){var a=this;this._noDataInput=new k({"class":d.filteringSelect,onChange:function(){return a._updateSymbology()}});this._noDataInput.startup();this._components.push(this._noDataInput)},c.prototype._createMinPercentInput=function(){var a=this;this._minPercentInput=new k({"class":d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.minPercent});this._minPercentInput.startup();
this._components.push(this._minPercentInput)},c.prototype._createMaxPercentInput=function(){var a=this;this._maxPercentInput=new k({"class":d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.maxPercent});this._maxPercentInput.startup();this._components.push(this._maxPercentInput)},c.prototype._createStandardDeviationsInput=function(){var a=this;this._standardDeviationsInput=new k({"class":d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.numberOfStandardDeviations});
this._standardDeviationsInput.startup();this._components.push(this._standardDeviationsInput)},c.prototype._createGammaInput=function(){var a=this;this._gammaInput=new K({"class":d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.gamma,smallDelta:.1});this._gammaInput.startup();this._components.push(this._gammaInput)},c.prototype._createUniqueValueFieldSelect=function(){var a=this;this._uniqueValueFieldSelect=new n({"class":d.filteringSelect,onChange:function(){return a._updateUniqueValueGrid()}});
this._populateUniqueValueFieldSelect();this._components.push(this._uniqueValueFieldSelect)},c.prototype._createUniqueValueColorSchemeSelect=function(){var a=this;this._uniqueValueColorSchemeSelect=new E({"class":d.filteringSelect,maxHeight:300});this._uniqueValueColorSchemeSelect.on("change",function(){return a._updateUniqueValueGrid()});this._uniqueValueColorSchemeSelect.startup();this.defaultParams.uniqueValuesColorRamp&&(this.defaultParams.uniqueValuesColorRamp.name=f.uniqueValuesColorRampTitle,
this._uniqueValueColorSchemeSelect.addColorRamp(this.defaultParams.uniqueValuesColorRamp,!0));this._components.push(this._uniqueValueColorSchemeSelect)},c.prototype._createUniqueValueNoDataInput=function(){var a=this;this._uniqueValueNoDataInput=new k({"class":d.filteringSelect,onChange:function(){return a._updateSymbology()}});this._components.push(this._uniqueValueNoDataInput);this._uniqueValueNoDataInput.startup()},c.prototype._createDiscreteColorSchemeSelect=function(){var a=this;this._discreteColorSchemeSelect=
new E({"class":d.filteringSelect,maxHeight:300});this._discreteColorSchemeSelect.on("change",function(){a._updateSymbology()});this._discreteColorSchemeSelect.startup();this._discreteColorSchemeSelect.set("value",this.defaultParams.colorRamp);this._components.push(this._discreteColorSchemeSelect)},c.prototype._createDiscreteNoDataInput=function(){var a=this;this._discreteNoDataInput=new k({"class":d.filteringSelect,onChange:function(){return a._updateSymbology()}});this._discreteNoDataInput.startup();
this._components.push(this._discreteNoDataInput)},c.prototype._createDiscreteNColorsInput=function(){var a=this;this._discreteNColorsInput=new k({"class":d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.discreteNColors});this._discreteNColorsInput.startup();this._components.push(this._discreteNColorsInput)},c.prototype._createUniqueValuesGrid=function(){this._uniqueValuesGrid=new H({columns:[{field:"esriRasterSymbologyEditorUniqueValueSymbol",renderCell:function(a,
b,c){c.innerHTML="\x3cdiv class \x3d "+d.dgridSymbolCell+'\n          style \x3d "background: rgb( '+a.esriRasterSymbologyEditorUniqueValueSymbol.r+",\n          "+a.esriRasterSymbologyEditorUniqueValueSymbol.g+",\n          "+a.esriRasterSymbologyEditorUniqueValueSymbol.b+'");\x3e\x3c/div\x3e'},label:f.symbolLabel},{field:"esriRasterSymbologyEditorUniqueValueValue",label:f.valueLabel}]});this._uniqueValuesGrid.startup();this._components.push(this._uniqueValuesGrid)},c.prototype._placeSymbologySelect=
function(a){this._symbologySelect&&e.place(this._symbologySelect.domNode,a)},c.prototype._placeStretchStatisticsCheckbox=function(a){this._stretchStatisticsCheckBox&&e.place(this._stretchStatisticsCheckBox.domNode,a)},c.prototype._placeBandSelect=function(a){this._bandSelect&&e.place(this._bandSelect.domNode,a)},c.prototype._placeStretchTypeSelect=function(a){this._stretchTypeSelect&&e.place(this._stretchTypeSelect.domNode,a)},c.prototype._placeColorRampSelect=function(a){this._stretchColorRampSelect&&
e.place(this._stretchColorRampSelect.domNode,a)},c.prototype._placeBandCombinationPresetSelect=function(a){this._bandCombinationPresetSelect&&e.place(this._bandCombinationPresetSelect.domNode,a)},c.prototype._placeRedBandSelect=function(a){this._redBandSelect&&e.place(this._redBandSelect.domNode,a)},c.prototype._placeGreenBandSelect=function(a){this._colorSchemeTitlePane&&e.place(this._greenBandSelect.domNode,a)},c.prototype._placeBlueBandSelect=function(a){this._blueBandSelect&&e.place(this._blueBandSelect.domNode,
a)},c.prototype._placeNoDataInput=function(a){this._noDataInput&&e.place(this._noDataInput.domNode,a)},c.prototype._placeMinPercentInput=function(a){this._minPercentInput&&e.place(this._minPercentInput.domNode,a)},c.prototype._placeMaxPercentInput=function(a){this._maxPercentInput&&e.place(this._maxPercentInput.domNode,a)},c.prototype._placeStandardDeviationsInput=function(a){this._standardDeviationsInput&&e.place(this._standardDeviationsInput.domNode,a)},c.prototype._placeGammaInput=function(a){this._gammaInput&&
e.place(this._gammaInput.domNode,a)},c.prototype._placeUniqueValueFieldSelect=function(a){this._uniqueValueFieldSelect&&e.place(this._uniqueValueFieldSelect.domNode,a)},c.prototype._placeUniqueValueColorSchemeSelect=function(a){this._uniqueValueColorSchemeSelect&&e.place(this._uniqueValueColorSchemeSelect.domNode,a)},c.prototype._placeUniqueValueNoDataInput=function(a){this._uniqueValueNoDataInput&&e.place(this._uniqueValueNoDataInput.domNode,a)},c.prototype._placeUniqueValuesGrid=function(a){this._uniqueValuesGrid&&
e.place(this._uniqueValuesGrid.domNode,a)},c.prototype._placeDiscreteColorSchemeSelect=function(a){this._discreteColorSchemeSelect&&e.place(this._discreteColorSchemeSelect.domNode,a)},c.prototype._placeDiscreteNoDataInput=function(a){this._discreteNoDataInput&&e.place(this._discreteNoDataInput.domNode,a)},c.prototype._placeDiscreteNColorsInput=function(a){this._discreteNColorsInput&&e.place(this._discreteNColorsInput.domNode,a)},c.prototype._bandCombinationChanged=function(){this._redBandSelect&&
this._redBandSelect.validate()&&this._greenBandSelect&&this._greenBandSelect.validate()&&this._blueBandSelect&&this._blueBandSelect.validate()&&this._updateSymbology()},c.prototype._updateBandCombination=function(a){if("custom"===a)return this._redBandSelect.set("disabled",!1),this._greenBandSelect.set("disabled",!1),void this._blueBandSelect.set("disabled",!1);var b;this._bandCombinationPresetSelect.store.data.some(function(c){a===c.id&&(b=c.combination)});b&&(this._redBandSelect.set({value:b[0]-
1,disabled:!0}),this._greenBandSelect.set({value:b[1]-1,disabled:!0}),this._blueBandSelect.set({value:b[2]-1,disabled:!0}),this._updateSymbology())},c.prototype._updateSymbologyType=function(a){this.symbologyType=a;this._updateSymbology()},c.prototype._updateUniqueValueGrid=function(){var a=this.viewModel.getUniqueValueGridData(this._uniqueValueColorSchemeSelect.colorRamp,this._uniqueValueFieldSelect.value);a&&(this._uniqueValuesGrid.refresh(),this._uniqueValuesGrid.renderArray(a),this._uniqueValuesSymbolData=
a,this._updateSymbology())},c.prototype._populateUniqueValueFieldSelect=function(){var a=this.viewModel.getUniqueValueFields(),a=new p({data:a,idProperty:"name"});this._uniqueValueFieldSelect.set({store:a,labelAttr:"alias",value:this.defaultParams.uniqueValuesField})},c.prototype._populateStretchTypeSelect=function(){var a,b,c,e=L.clone(this.viewModel.stretchTypes);e.forEach(function(e){a=f[e.name+"StretchTypeDescription"]||f[e.name+"TypeDescription"];c=d[e.name+"StretchTypeIcon"];b=f[e.name+"StretchTitle"];
e.id=e.filterType.toString();e.label="\x3chtml\x3e\x3cbody\x3e\x3csection\x3e\n        \x3ch4\x3e"+b+"\x3c/h4\x3e\n        \x3ctable\x3e\x3ctr\x3e\n          \x3ctd class\x3d"+d.menuItemTd+'\x3e\n            \x3cimg class\x3d"'+c+" "+d.thumbnailImage+'" /\x3e\n          \x3c/td\x3e\n          \x3ctd class\x3d'+d.menuItemTd+"\x3e\n            \x3cp class\x3d"+d.menuItemText+"\x3e\x3ci\x3e"+a+"\x3c/i\x3e\x3c/p\x3e\n          \x3c/td\x3e\n          \x3c/tr\x3e\x3c/table\x3e\n        \x3c/section\x3e\x3c/body\x3e\x3c/html\x3e";
e.name=b});this._stretchTypeSelect.set({store:new p({data:e}),value:this.defaultParams.stretchType.toString(),labelAttr:"label",labelType:"html"})},c.prototype._populateBandSelect=function(){var a,b=this;this.viewModel.getBandData().then(function(c){a=new p({data:c.lists[0],idProperty:"index"});b._bandSelect.set("store",a);1===c.lists[0].length&&b._bandSelect.set({value:c.lists[0][0].index,disabled:!0})})},c.prototype._populateBandLists=function(){var a=this;if(this._redBandSelect&&this._greenBandSelect&&
this._blueBandSelect&&this._bandCombinationPresetSelect){var b,c,e,g,h,k,l,n=[this._redBandSelect,this._greenBandSelect,this._blueBandSelect],m=[];this.viewModel.getBandData().then(function(q){q.lists.forEach(function(a,b){a.some(function(a){return a.selected?(c=a.index,!0):void 0});e=new p({data:a,idProperty:"index"});n[b].set({store:e,value:c})});q.presets&&q.presets.length?(a._supportsBandPresets=!0,q.presets.forEach(function(a,c){b=Object.keys(a)[0];h=f["bandComboName"+b];k=f["bandComboDesc"+
b];l=d["bandCombinationPreset"+b+"Icon"];m.push({name:f["bandComboName"+b],label:"\x3chtml\x3e\x3cbody\x3e\x3csection\x3e\n              \x3ch4\x3e"+h+"\x3c/h4\x3e\n              \x3ctable\x3e\x3ctr\x3e\n                \x3ctd class\x3d"+d.menuItemTd+'\x3e\n                  \x3cimg class\x3d "'+l+" "+d.thumbnailImage+'" /\x3e\n                \x3c/td\x3e\n                \x3ctd class\x3d'+d.menuItemTd+"\x3e\n                  \x3cp class\x3d"+d.menuItemText+"\x3e\x3ci\x3e"+k+"\x3c/i\x3e\x3c/p\x3e\n                \x3c/td\x3e\n              \x3c/tr\x3e\x3c/table\x3e\n            \x3c/section\x3e\x3c/body\x3e\x3c/html\x3e",
combination:a[b],id:b})}),m.push({name:f.bandComboNameCustom,combination:null,id:"custom",label:"\x3chtml\x3e\x3cbody\x3e\x3csection\x3e\n            \x3ch4\x3e "+f.bandComboNameCustom+":\x3c/h4\x3e\n            \x3ctable cellspacing\x3d'5'\x3e\n              \x3ctr\x3e\n                \x3ctd class\x3d"+d.menuItemTd+"\x3e\n                  \x3cp class\x3d"+d.menuItemText+"\x3e\x3ci\x3e"+f.bandComboNameCustom+"\x3c/i\x3e\x3c/p\x3e\n                \x3c/td\x3e\n              \x3c/tr\x3e\n            \x3c/table\x3e\n          \x3c/section\x3e\x3c/body\x3e\x3c/html\x3e"}),
g=new p({data:m}),a._bandCombinationPresetSelect.set({store:g,value:"custom"})):a._supportsBandPresets=!1;a.scheduleRender()})}},c.prototype._onStretchTypeChange=function(a){var b;this._stretchTypeSelect.store.data.forEach(function(c){c.id===a&&(b=c.filterType)});this.stretchType=b;this.scheduleRender();this._updateSymbology()},c.prototype._updateSymbology=function(){if(this._symbologySelect&&this._stretchTypeSelect&&this._stretchColorRampSelect&&this._noDataInput&&this._minPercentInput&&this._maxPercentInput&&
this._stretchTypeSelect&&this._gammaInput&&this._standardDeviationsInput){var a=this._getProperties();this.viewModel.updateRendering(a)}},c.prototype._getProperties=function(){var a={};return a.symbologyType=this._symbologySelect.value,a.stretchType=this.stretchType,a.minPercent=this._minPercentInput.value,a.maxPercent=this._maxPercentInput.value,a.numberOfStandardDeviations=this._standardDeviationsInput.value,this.symbologyType===r.SymbologyTypes.uniqueValue?a.noData=this._uniqueValueNoDataInput.value:
this.symbologyType===r.SymbologyTypes.discrete?a.noData=this._discreteNoDataInput.value:a.noData=this._noDataInput.value,a.gamma=this._gammaInput.value,a.colorRampName=this._stretchColorRampSelect.colorRampName,a.dra=this._stretchStatisticsCheckBox.checked,a.selectedBand=this._bandSelect.value,a.bandIds=[this._redBandSelect.value,this._greenBandSelect.value,this._blueBandSelect.value],a.uniqueValuesColorRamp=this._uniqueValueColorSchemeSelect.colorRamp,a.uniqueValuesSymbolData=this._uniqueValuesSymbolData,
a.discreteColorRamp=this._discreteColorSchemeSelect.colorRamp,a.discreteNColors=this._discreteNColorsInput.value,a},c.prototype._getSymbologyStore=function(){var a,b,c,e=[];return this.viewModel.getSymbologyTypes().forEach(function(g){a=f[g+"Title"];b=f[g+"Description"]||f[g+"Title"];c=d[g+"SymbologyTypeIcon"];e.push({id:g,name:a,label:"\x3chtml\x3e\x3cbody\x3e\x3csection\x3e\n          \x3ch4\x3e"+a+"\x3c/h4\x3e\n          \x3ctable\x3e\x3ctr\x3e\n            \x3ctd class\x3d"+d.menuItemTd+"\x3e\x3cimg class\x3d "+
c+" /\x3e\x3c/td\x3e\n            \x3ctd class\x3d"+d.menuItemTd+"\x3e\n              \x3cp class\x3d"+d.menuItemText+"\x3e\x3ci\x3e"+b+"\x3c/i\x3e\x3c/p\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\x3c/table\x3e\n        \x3c/section\x3e\x3c/body\x3e\x3c/html\x3e"})},this),new p({data:e})},c}(h.declared(I));return l([h.property(),b.renderable()],g.prototype,"layer",void 0),l([h.property()],g.prototype,"defaultParams",void 0),l([h.property({type:r})],g.prototype,"viewModel",void 0),l([h.property(),
b.renderable()],g.prototype,"stretchType",void 0),l([h.property(),b.renderable()],g.prototype,"symbologyType",void 0),g=l([h.subclass("esri.widgets.RasterSymbologyEditor")],g)});