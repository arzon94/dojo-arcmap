//>>built
define("dojo/_base/lang ../core/lang ./SpatialReference ./Geometry ./Point ./Extent ./support/coordsUtils ./support/mathUtils ./support/webMercatorUtils ./support/zmUtils".split(" "),function(N,O,P,Q,k,M,r,t,u,v){var w=function(a){return function(b,c){return null==b?c:null==c?b:a(b,c)}},p=w(Math.min),m=w(Math.max),n=Q.createSubclass({declaredClass:"esri.geometry.Polygon",type:"polygon",getDefaults:function(a){return{rings:[]}},normalizeCtorArgs:function(a,b){var c,d,e=null,g=null;return a&&!Array.isArray(a)?
(e=a.rings?a.rings:null,b||(a.spatialReference?b=a.spatialReference:a.rings||(b=a)),c=a.hasZ,d=a.hasM):e=a,e=e||[],b=b||P.WGS84,e.length&&e[0]&&null!=e[0][0]&&"number"==typeof e[0][0]&&(e=[e]),g=e[0]&&e[0][0],g&&(void 0===c&&void 0===d?(c=2<g.length,d=!1):void 0===c?c=!d&&3<g.length:void 0===d&&(d=!c&&3<g.length)),{rings:e,spatialReference:b,hasZ:c,hasM:d}},_ring:0,properties:{cache:{dependsOn:["hasM","hasZ","rings"]},centroid:{readOnly:!0,dependsOn:["cache"],get:function(a){var b=r.centroid([],this.rings,
this.hasZ);return isNaN(b[0])||isNaN(b[1])||this.hasZ&&isNaN(b[2])?null:(a=a||new k,a.x=b[0],a.y=b[1],a.spatialReference=this.spatialReference,this.hasZ&&(a.z=b[2]),a)}},extent:{dependsOn:["cache"],readOnly:!0,get:function(){var a=this.rings,b=a.length;if(!b||!a[0].length)return null;var c,d,e,g,h,f,q,l,z,n,k,A,r,B,t,C,D,E,F,x,y,G,H,I=q=a[0][0][0],J=l=a[0][0][1],u=this.spatialReference,K=[],L=this.hasZ,v=this.hasM,w=L?3:2;for(k=0;b>k;k++){c=a[k];C=D=c[0]&&c[0][0];E=F=c[0]&&c[0][1];r=c.length;G=H=
x=y=void 0;for(A=0;r>A;A++)d=c[A],e=d[0],g=d[1],I=p(I,e),J=p(J,g),q=m(q,e),l=m(l,g),C=p(C,e),E=p(E,g),D=m(D,e),F=m(F,g),L&&2<d.length&&(h=d[2],B=p(B,h),z=m(z,h),x=p(x,h),y=m(y,h)),v&&d.length>w&&(f=d[w],t=p(B,f),n=m(z,f),G=p(x,f),H=m(y,f));K.push(new M({xmin:C,ymin:E,zmin:x,mmin:G,xmax:D,ymax:F,zmax:y,mmax:H,spatialReference:u}))}a=new M;return a.xmin=I,a.ymin=J,a.xmax=q,a.ymax=l,a.spatialReference=u,L&&(a.zmin=B,a.zmax=z),v&&(a.mmin=t,a.mmax=n),a.cache._partwise=1<K.length?K:null,a}},isSelfIntersecting:{dependsOn:["cache"],
readOnly:!0,get:function(){var a,b,c,d,e,g,h,f,q,l=this.rings,k=l.length;for(d=0;k>d;d++){a=l[d];for(b=0;b<a.length-1;b++)for(g=[[a[b][0],a[b][1]],[a[b+1][0],a[b+1][1]]],c=d+1;k>c;c++)for(e=0;e<l[c].length-1;e++)if(h=[[l[c][e][0],l[c][e][1]],[l[c][e+1][0],l[c][e+1][1]]],f=t._getLineIntersection2(g,h),f&&!(f[0]===g[0][0]&&f[1]===g[0][1]||f[0]===h[0][0]&&f[1]===h[0][1]||f[0]===g[1][0]&&f[1]===g[1][1]||f[0]===h[1][0]&&f[1]===h[1][1]))return!0;if(q=a.length,!(4>=q))for(b=0;q-3>b;b++)for(e=q-1,0===b&&
(e=q-2),g=[[a[b][0],a[b][1]],[a[b+1][0],a[b+1][1]]],c=b+2;e>c;c++)if(h=[[a[c][0],a[c][1]],[a[c+1][0],a[c+1][1]]],f=t._getLineIntersection2(g,h),f&&!(f[0]===g[0][0]&&f[1]===g[0][1]||f[0]===h[0][0]&&f[1]===h[0][1]||f[0]===g[1][0]&&f[1]===g[1][1]||f[0]===h[1][0]&&f[1]===h[1][1]))return!0}return!1}},rings:null},addRing:function(a){if(a){this.clearCache();var b=this.rings,c=b.length;if(Array.isArray(a[0]))b[c]=a.concat();else{var d=[];b[c]=d;b=0;for(c=a.length;c>b;b++)d[b]=a[b].toArray()}return this}},
clone:function(){var a=new n;return a.spatialReference=this.spatialReference,a.rings=N.clone(this.rings),a.hasZ=this.hasZ,a.hasM=this.hasM,a},contains:function(a){return a?(u.canProject(a,this.spatialReference)&&(a=u.project(a,this.spatialReference)),r.contains(this.rings,r.fromGeom(a))):!1},isClockwise:function(a){var b,c,d,e,g=0,h=0,f=0,k=a.length,l=this.hasZ,n=this.hasM;for(b=0;k>b;b++)c=a[b],d=a[(b+1)%k],Array.isArray(c)?(g+=c[0]*d[1]-d[0]*c[1],e=2,2<c.length&&2<d.length&&l&&(h+=c[0]*d[2]-d[0]*
c[2],e=3),c.length>e&&d.length>e&&n&&(f+=c[0]*d[e]-d[0]*c[e])):(g+=c.x*d.y-d.x*c.y,c.hasZ&&d.hasZ&&(h+=c.x*d.z-d.x*c.z),c.hasM&&d.hasM&&(f+=c.x*d.m-d.x*c.m));return 0>=g&&0>=h&&0>=f},getPoint:function(a,b){if(this._validateInputs(a,b)){a=this.rings[a][b];b=this.hasZ;var c=this.hasM;return b&&!c?new k(a[0],a[1],a[2],void 0,this.spatialReference):c&&!b?new k(a[0],a[1],void 0,a[2],this.spatialReference):b&&c?new k(a[0],a[1],a[2],a[3],this.spatialReference):new k(a[0],a[1],this.spatialReference)}},insertPoint:function(a,
b,c){return this._validateInputs(a)&&O.isDefined(b)&&0<=b&&b<=this.rings[a].length?(this.clearCache(),v.updateSupportFromPoint(this,c),Array.isArray(c)||(c=c.toArray()),this.rings[a].splice(b,0,c),this):void 0},removePoint:function(a,b){return this._validateInputs(a,b)?(this.clearCache(),new k(this.rings[a].splice(b,1)[0],this.spatialReference)):void 0},removeRing:function(a){if(this._validateInputs(a,null)){this.clearCache();var b=this.rings.splice(a,1)[0],c=b.length,d=this.spatialReference;for(a=
0;c>a;a++)b[a]=new k(b[a],d);return b}},setPoint:function(a,b,c){return this._validateInputs(a,b)?(this.clearCache(),v.updateSupportFromPoint(this,c),Array.isArray(c)||(c=c.toArray()),this.rings[a][b]=c,this):void 0},toJSON:function(){var a=this.spatialReference,a={rings:this.rings,spatialReference:a&&a.toJSON()};return this.hasZ&&(a.hasZ=!0),this.hasM&&(a.hasM=!0),a},_insertPoints:function(a,b){this.clearCache();this._ring=b;this.rings[this._ring]||(this.rings[this._ring]=[]);a.forEach(this._addPoint,
this)},_validateInputs:function(a,b){return null!==a&&void 0!==a&&(0>a||a>=this.rings.length)?!1:null!==b&&void 0!==a&&(0>b||b>=this.rings[a].length)?!1:!0}});return n.createEllipse=function(a){var b,c,d=a.center.x,e=a.center.y,g=a.center.z,h=a.center.m,f=a.longAxis,k=a.shortAxis,l=a.numberOfPoints,p=a.map,m=[],r=2*Math.PI/l;for(a=0;l>a;a++)b=Math.cos(a*r),c=Math.sin(a*r),b=p.toMap({x:f*b+d,y:k*c+e}),null==g||b.hasZ||(b.z=g),null==h||b.hasM||(b.m=h),m.push(b);return m.push(m[0]),new n({rings:[m],
spatialReference:p.spatialReference})},n.createCircle=function(a){return n.createEllipse({center:a.center,longAxis:a.r,shortAxis:a.r,numberOfPoints:a.numberOfPoints,map:a.map})},n.fromExtent=function(a){var b=a.clone().normalize();a=a.spatialReference;var c=!1,d=!1;b.map(function(a){a.hasZ&&(c=!0);a.hasM&&(d=!0)});b={rings:b.map(function(a){var b=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];if(c&&a.hasZ)for(var e=(a.zmax-a.zmin)/2,f=0;f<b.length;f++)b[f].push(e);
if(d&&a.hasM)for(a=(a.mmax-a.mmin)/2,f=0;f<b.length;f++)b[f].push(a);return b}),spatialReference:a?a.toJSON():null};return c&&(b.hasZ=!0),d&&(b.hasM=!0),new n(b)},n});