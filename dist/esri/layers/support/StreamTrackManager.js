//>>built
define(["../../core/declare","dojo/_base/array","../../Graphic","../../geometry/Polyline","./TrackManager"],function(q,n,r,t,u){return q([u],{declaredClass:"esri.layers.support.StreamTrackManager",constructor:function(f){this.inherited(arguments)},initialize:function(f){this.inherited(arguments)},addFeatures:function(f,b){function l(a,h){var d,c,e;m[a]||(m[a]=[]);a=m[a];0<g&&(h.length>g&&h.splice(0,h.length-g),c=h.length+a.length,c>g&&(d=a.splice(0,c-g)));c=h.length;for(e=0;c>e;e+=1)a.push(h[e]);
return{deletes:d,adds:h}}var m,a,d,g,e,c,p={},k={};if(b)return this.inherited(arguments),p;m=this.trackMap;a=this.layer;d=a._trackIdField;g=a.maximumTrackPoints||0;n.forEach(f,function(a){var c=a.attributes[d];a.visible&&(k[c]||(k[c]=[]),k[c].push(a))});for(c in k)k.hasOwnProperty(c)&&(e=l(c,k[c]),p[c]=e);return p},removeFeatures:function(f){var b=[],l=this.layer.objectIdField,m=this.layer._trackIdField;f&&(n.forEach(f,function(a){var d,g,e,c;if(g=a.attributes[m],d=a.attributes[l],e=this.trackMap[g])for(a=
0;a<e.length;a+=1)if(c=e[a],c.attributes[l]===d){this.trackMap[g].splice(a,1);-1===n.indexOf(g)&&b.push(g);break}},this),0<f.length&&this.refreshTracks(b))},drawTracks:function(f){function b(c){var d,k,f,h,b,n;k=(h=l[c])&&1<h.length;if(b=g.trackLineMap[c],b&&!k&&(e.remove(b),delete g.trackLineMap[c],b=null),!k)return!1;k=[];for(d=h.length-1;0<=d;--d)(f=h[d].geometry)&&k.push([f.x,f.y]);h={};h[a]=c;1<k.length&&(b?(n=b.geometry,n.removePath(0),n.addPath(k),b.setGeometry(n)):(b=new r(new t({paths:[k],
spatialReference:m}),null,h),e.add(b),g.trackLineMap[c]=b))}var l,m,a,d,g=this,e=this.container;if(e)if(l=this.trackMap,m=this.map.spatialReference,a=this.layer._trackIdField,f)n.forEach(f,function(a){b(a)});else for(d in l)l.hasOwnProperty(d)&&b(d)},refreshTracks:function(f){function b(d){var b,e;d=m[d]||[];b=d.length;for(e=0;b>e;e++)a._repaint(d[e],null,!0)}var l,m=this.trackMap,a=this.layer;if(this.drawTracks(f),f)n.forEach(f,function(a){b(a)});else for(l in m)m.hasOwnProperty(l)&&b(l)},destroy:function(){this.inherited(arguments);
this.trackLineMap=null}})});