//>>built
define(["require","exports","./aaBoundingRect","../../../geometry/Extent"],function(q,d,n,p){function f(a){return a[0]>=a[3]?0:a[3]-a[0]}function g(a){return a[1]>=a[4]?0:a[4]-a[1]}function h(a){return a[2]>=a[5]?0:a[5]-a[2]}function k(a){return 6===a.length}Object.defineProperty(d,"__esModule",{value:!0});d.create=function(a){return void 0===a&&(a=d.ZERO),[a[0],a[1],a[2],a[3],a[4],a[5]]};d.fromExtent=function(a){return[a.xmin,a.ymin,a.zmin,a.xmax,a.ymax,a.zmax]};d.toExtent=function(a,b){var c=isFinite(a[2])||
isFinite(a[5]);return new p(c?{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],zmin:a[2],zmax:a[5],spatialReference:b}:{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],spatialReference:b})};d.fromMinMax=function(a,b){return[a[0],a[1],a[2],b[0],b[1],b[2]]};d.expand=function(a,b,c){void 0===c&&(c=a);var d=b.declaredClass;return"esri.geometry.Extent"===d?(c[0]=Math.min(a[0],b.xmin),c[1]=Math.min(a[1],b.ymin),c[3]=Math.max(a[3],b.xmax),c[4]=Math.max(a[4],b.ymax),b.hasZ&&(c[2]=Math.min(a[2],b.zmin),c[5]=Math.max(a[5],
b.zmax))):"esri.geometry.Point"===d?(c[0]=Math.min(a[0],b.x),c[1]=Math.min(a[1],b.y),c[3]=Math.max(a[3],b.x),c[4]=Math.max(a[4],b.y),b.hasZ&&(c[2]=Math.min(a[2],b.z),c[5]=Math.max(a[5],b.z))):k(b)?(c[0]=Math.min(a[0],b[0]),c[1]=Math.min(a[1],b[1]),c[2]=Math.min(a[2],b[2]),c[3]=Math.max(a[3],b[3]),c[4]=Math.max(a[4],b[4]),c[5]=Math.max(a[5],b[5])):n.is(b)?(c[0]=Math.min(a[0],b[0]),c[1]=Math.min(a[1],b[1]),c[3]=Math.max(a[3],b[2]),c[4]=Math.max(a[4],b[3])):Array.isArray(b)&&(2===b.length?(c[0]=Math.min(a[0],
b[0]),c[1]=Math.min(a[1],b[1]),c[3]=Math.max(a[3],b[0]),c[4]=Math.max(a[4],b[1])):3===b.length&&(c[0]=Math.min(a[0],b[0]),c[1]=Math.min(a[1],b[1]),c[2]=Math.min(a[2],b[2]),c[3]=Math.max(a[3],b[0]),c[4]=Math.max(a[4],b[1]),c[5]=Math.max(a[5],b[2]))),c};d.expandBuffer=function(a,b,c,d,e){void 0===e&&(e=a);var m=a[0],f=a[1],g=a[2],h=a[3],k=a[4];a=a[5];for(var l=0;d>l;l++)m=Math.min(m,b[c+3*l]),f=Math.min(f,b[c+3*l+1]),g=Math.min(g,b[c+3*l+2]),h=Math.max(h,b[c+3*l]),k=Math.max(k,b[c+3*l+1]),a=Math.max(a,
b[c+3*l+2]);return e[0]=m,e[1]=f,e[2]=g,e[3]=h,e[4]=k,e[5]=a,e};d.allFinite=function(a){for(var b=0;6>b;b++)if(!isFinite(a[b]))return!1;return!0};d.width=f;d.depth=g;d.height=h;d.center=function(a,b){return void 0===b&&(b=[0,0,0]),b[0]=a[0]+f(a)/2,b[1]=a[1]+g(a)/2,b[2]=a[2]+h(a)/2,b};d.size=function(a,b){return void 0===b&&(b=[0,0,0]),b[0]=f(a),b[1]=g(a),b[2]=h(a),b};d.containsPoint=function(a,b){return b[0]>=a[0]&&b[1]>=a[1]&&b[2]>=a[2]&&b[0]<=a[3]&&b[1]<=a[4]&&b[2]<=a[5]};d.containsPointWithMargin=
function(a,b,c){return b[0]>=a[0]-c&&b[1]>=a[1]-c&&b[2]>=a[2]-c&&b[0]<=a[3]+c&&b[1]<=a[4]+c&&b[2]<=a[5]+c};d.contains=function(a,b){return b[0]>=a[0]&&b[1]>=a[1]&&b[2]>=a[2]&&b[3]<=a[3]&&b[4]<=a[4]&&b[5]<=a[5]};d.intersects=function(a,b){return Math.max(b[0],a[0])<=Math.min(b[3],a[3])&&Math.max(b[1],a[1])<=Math.min(b[4],a[4])&&Math.max(b[2],a[2])<=Math.min(b[5],a[5])};d.offset=function(a,b,c,d,e){return void 0===e&&(e=a),e[0]=a[0]+b,e[1]=a[1]+c,e[2]=a[2]+d,e[3]=a[3]+b,e[4]=a[4]+c,e[5]=a[5]+d,e};d.setMin=
function(a,b,c){return void 0===c&&(c=a),c[0]=b[0],c[1]=b[1],c[2]=b[2],c!==a&&(c[3]=a[3],c[4]=a[4],c[5]=a[5]),c};d.setMax=function(a,b,c){return void 0===c&&(c=a),c[3]=b[0],c[4]=b[1],c[5]=b[2],c!==a&&(c[0]=a[0],c[1]=a[1],c[2]=a[2]),a};d.set=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[4]=b[4],a[5]=b[5],a};d.toRect=function(a,b){return b||(b=n.create()),b[0]=a[0],b[1]=a[1],b[2]=a[3],b[3]=a[4],b};d.fromRect=function(a,b){return a[0]=b[0],a[1]=b[1],a[3]=b[2],a[4]=b[3],a};d.is=k;d.isPoint=
function(a){return 0===f(a)&&0===g(a)&&0===h(a)};d.equals=function(a,b,c){if(null==a||null==b)return a===b;if(!k(a)||!k(b))return!1;if(c)for(var d=0;d<a.length;d++){if(!c(a[d],b[d]))return!1}else for(d=0;d<a.length;d++)if(a[d]!==b[d])return!1;return!0};d.POSITIVE_INFINITY=[-(1/0),-(1/0),-(1/0),1/0,1/0,1/0];d.NEGATIVE_INFINITY=[1/0,1/0,1/0,-(1/0),-(1/0),-(1/0)];d.ZERO=[0,0,0,0,0,0]});