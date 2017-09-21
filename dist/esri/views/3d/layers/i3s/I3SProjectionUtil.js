//>>built
define(["../../support/projectionUtils","../../lib/glMatrix","../../webgl-engine/lib/Util"],function(q,w,x){var e=w.vec3d,m=w.mat4d,y=x.assert,v={PER_VERTEX:"perVertex",BOUNDINGBOX:"boundingBox",NO_REPROJECTION:"noReprojection"},n=new Float64Array(3E3);return{ReprojectionTypes:v,reprojectPoints:function(c,b,g,l,e,d,f){c===v.PER_VERTEX?g=this.reprojectPointsPerVertex(b,g,e,d,f,l):c===v.BOUNDINGBOX?g=this.reprojectBoundingBox(b,g,e,d,f):(c=m.create(),m.identity(c),b=m.create(),q.computeLinearTransformation(e,
g,b,f),g={localTrafo:c,globalTrafo:b});return g},reprojectPointsPerVertex:function(c,b,g,l,e,d){var f=m.create();q.computeLinearTransformation(g,b,f,e);var a=m.create(),a=m.inverse(f,a),k=m.create();if(m.identity(k),!d){d=[0,0,0];var h=c.length/3;q.vectorToVector(b,g,d,l);for(g=b=0;h>g;g+=1E3){var p=Math.min(1E3,h-g);for(b=0;p>b;b++)n[3*b]=c[3*(g+b)]+d[0],n[3*b+1]=c[3*(g+b)+1]+d[1],n[3*b+2]=c[3*(g+b)+2]+d[2];q.bufferToBuffer(n,l,0,n,e,0,p);var r,t,u;for(b=0;p>b;b++)r=n[3*b],t=n[3*b+1],u=n[3*b+2],
c[3*(g+b)]=a[0]*r+a[4]*t+a[8]*u+a[12],c[3*(g+b)+1]=a[1]*r+a[5]*t+a[9]*u+a[13],c[3*(g+b)+2]=a[2]*r+a[6]*t+a[10]*u+a[14]}}return{localTrafo:k,globalTrafo:f}},reprojectNormalsPerVertex:function(c,b,g,e,p){y(e.equals(q.SphericalRenderSpatialReference));e=m.create();q.computeLinearTransformation(g,b,e,p);b=m.create();b=m.inverse(e,b);for(var d=c.length/3,f=0;d>f;f++)g=c[3*f],p=c[3*f+1],e=c[3*f+2],c[3*f]=b[0]*g+b[4]*p+b[8]*e,c[3*f+1]=b[1]*g+b[5]*p+b[9]*e,c[3*f+2]=b[2]*g+b[6]*p+b[10]*e},reprojectBoundingBox:function(c,
b,g,l,p){for(var d=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],f=[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE],a=0;a<c.length/3;a++)for(var k=[c[3*a],c[3*a+1],c[3*a+2]],h=0;3>h;h++)d[h]=Math.min(d[h],k[h]),f[h]=Math.max(f[h],k[h]);a=this.geographicToProjected(b,g,l);e.add(a,d,d);e.add(a,f,f);for(a=0;3>a;a++)f[a]==d[a]&&(f[a]+=1);a=[[d[0],d[1],d[2]],[f[0],d[1],d[2]],[d[0],f[1],d[2]],[d[0],d[1],f[2]]];for(k=0;4>k;k++)h=a[k],q.vectorToVector(h,l,h,p);l=e.subtract(a[1],a[0],e.create());
k=e.subtract(a[2],a[0],e.create());h=e.subtract(a[3],a[0],e.create());e.scale(l,1/(f[0]-d[0]));e.scale(k,1/(f[1]-d[1]));e.scale(h,1/(f[2]-d[2]));var d=e.length(l),f=e.length(k),n=e.length(h);if(3<Math.abs(d-f)||3<Math.abs(d-n)||3<Math.abs(f-n)){for(a=0;a<c.length/3;a++)c[3*a]*=d,c[3*a+1]*=f,c[3*a+2]*=n;e.normalize(l);e.normalize(k);e.normalize(h)}c=m.createFromMatrixRowMajor([l[0],k[0],h[0],0,l[1],k[1],h[1],0,l[2],k[2],h[2],0,0,0,0,1]);d=[0,0,0,0];q.vectorToVector(b,g,d,p);return{globalTrafo:m.createFromMatrixRowMajor([1,
0,0,d[0],0,1,0,d[1],0,0,1,d[2],0,0,0,1]),localTrafo:c}},geographicToProjected:function(c,b,e){return 4326===e.wkid?[c[0],c[1],c[2]]:c}}});