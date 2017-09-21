//>>built
define(["../../core/declare","dojo/_base/array","dojo/_base/lang","./TrackFilter"],function(k,l,h,m){var f=k([m],{declaredClass:"esri.processors.filters.ObservationFilter",getDefaults:function(){return h.mixin(this.inherited(arguments),{observationType:f.CURRENT})},observationType:null,run:function(a){this.trackIdField&&a&&(this.observationType===f.CURRENT?this._outputCurrentObservations(a):this._outputOtherObservations(a))},_outputCurrentObservations:function(a){var c,g,b;b=this._getTracksAffectedByChanges(a);
var d;c=0;for(g=b.length;g>c;c++){d=this._getItemsByParent(b[c],this.output);for(var e=0,f=d.length;f>e;e++)a=d.getItemAt(e),this.output.remove(a);(d=this._getItemsByParent(b[c],this.input))&&d.length&&this.output.add(d.getItemAt(d.length-1))}},_outputOtherObservations:function(a){var c,g,b=a.added||[],d=[];if(b=b.concat(a.removed||[]),b.length)for(a=0,g=b.length;g>a;a++)c=b[a],-1===l.indexOf(d,c[this.parentField])&&d.push(c[this.parentField]);a=0;for(g=d.length;g>a;a++){for(var b=this._getItemsByParent(d[a],
this.output),e=0,f=b.length;f>e;e++)c=b.getItemAt(e),this.output.remove(c);if(b=this._getItemsByParent(d[a],this.input),b&&1<b.length)for(c=0,e=b.length;e-1>c;c++)this.output.add(b.getItemAt(c))}}});return h.mixin(f,{CURRENT:"current",OTHER:"other"}),f});