//>>built
define(["./core/JSONSupport","./core/kebabDictionary","./core/Collection","./core/lang","./support/Action"],function(l,e,m,c,n){var g=e({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),f=e({shortDate:"short-date",shortDateLE:"short-date-le",longDate:"long-date",dayShortMonthYear:"day-short-month-year",longMonthDayYear:"long-month-day-year",shortDateLongTime:"short-date-long-time",shortDateLELongTime:"short-date-le-long-time",shortDateShortTime:"short-date-short-time",shortDateLEShortTime:"short-date-le-short-time",
shortDateShortTime24:"short-date-short-time-24",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLongTime24:"short-date-long-time-24",shortDateLELongTime24:"short-date-le-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year"}),h=e({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"}),k=l.createSubclass({properties:{actions:{type:m.ofType(n)},content:{value:null,json:{read:{source:["description","popupElements","mediaInfos",
"showAttachments"]}}},expressionInfos:{value:null},fieldInfos:{value:null},overwriteActions:{value:!1},title:{value:""},relatedRecordsInfo:{value:null}},declaredClass:"esri.PopupTemplate",actions:null,content:"",expressionInfos:null,fieldInfos:null,_fieldInfosReader:function(a){return this._readFieldInfos(a)},overwriteActions:!1,title:"",relatedRecordsInfo:null,_relatedRecordsInfoReader:function(a){return a?c.clone(a):a},_dateFormatKebabDict:f,clone:function(){var a=this.actions;return a&&(a=c.clone(a.toArray())),
new k({actions:a||[],content:Array.isArray(this.content)?c.clone(this.content):this.content,fieldInfos:this.fieldInfos?c.clone(this.fieldInfos):null,overwriteActions:this.overwriteActions,relatedRecordsInfo:this.relatedRecordsInfo?c.clone(this.relatedRecordsInfo):null,title:this.title})},toJSON:function(){var a={showAttachments:!1,title:this.title};this.expressionInfos&&(a.expressionInfos=c.clone(this.expressionInfos));this.fieldInfos&&(a.fieldInfos=this._writeFieldInfos(c.clone(this.fieldInfos)));
this.relatedRecordsInfo&&(a.relatedRecordsInfo=c.clone(this.relatedRecordsInfo));var b=this.content;return"string"==typeof b?a.description=b:Array.isArray(b)&&(a.popupElements=c.clone(b),a.popupElements.forEach(function(b){return"attachments"!==b.type||a.showAttachments?"media"!==b.type||a.mediaInfos?"text"!==b.type||a.description?"fields"!==b.type||a.fieldInfos||(b.fieldInfos&&(a.fieldInfos=this._writeFieldInfos(c.clone(b.fieldInfos))),delete b.fieldInfos):(b.text&&(a.description=b.text),delete b.text):
(b.mediaInfos&&(a.mediaInfos=c.clone(b.mediaInfos),a.mediaInfos.forEach(function(b){b.type=h.toJSON(b.type)})),delete b.mediaInfos):a.showAttachments=!0,b}.bind(this))),a},_contentReader:function(a,b){a=b.description;var d=[],c=b.popupElements;return c&&c.length?d=c.map(function(a){return"text"!==a.type||a.text?"media"===a.type&&(a.mediaInfos||b.mediaInfos)&&(a.mediaInfos||(a.mediaInfos=b.mediaInfos),a.mediaInfos=this._readMediaInfos(a.mediaInfos)):a.text=b.description,a}.bind(this)):(b.description?
d.push({type:"text",text:b.description}):d.push({type:"fields"}),b.mediaInfos&&b.mediaInfos.length&&d.push({type:"media",mediaInfos:this._readMediaInfos(b.mediaInfos)}),b.showAttachments&&d.push({type:"attachments",displayType:"list"})),d.length&&(a=d),a},_readFieldInfos:function(a){return a&&a.forEach(function(a){var b=a.format&&a.format.dateFormat,c=a.stringFieldOption;b&&(a.format.dateFormat=f.fromJSON(b));c&&(a.stringFieldOption=g.fromJSON(c))}),a},_writeFieldInfos:function(a){return a.forEach(function(a){var b=
a.format&&a.format.dateFormat,c=a.stringFieldOption;b&&(a.format.dateFormat=f.toJSON(b));c&&(a.stringFieldOption=g.toJSON(c));a.format||delete a.format}),a},_readMediaInfos:function(a){return a.forEach(function(a){a.type=h.fromJSON(a.type)}),a}});return k});