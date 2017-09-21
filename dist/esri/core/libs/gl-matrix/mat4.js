//>>built
define(["./common"],function(w){var f={scalar:{},SIMD:{}};return f.create=function(){var a=new w.ARRAY_TYPE(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},f.clone=function(a){var b=new w.ARRAY_TYPE(16);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15],b},f.copy=function(a,b){return a[0]=
b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15],a},f.fromValues=function(a,b,c,d,k,h,e,n,l,g,q,m,u,p,f,t){var r=new w.ARRAY_TYPE(16);return r[0]=a,r[1]=b,r[2]=c,r[3]=d,r[4]=k,r[5]=h,r[6]=e,r[7]=n,r[8]=l,r[9]=g,r[10]=q,r[11]=m,r[12]=u,r[13]=p,r[14]=f,r[15]=t,r},f.set=function(a,b,c,d,k,h,e,n,l,g,q,m,f,p,v,t,r){return a[0]=b,a[1]=c,a[2]=d,a[3]=k,a[4]=h,a[5]=e,a[6]=n,a[7]=l,a[8]=g,a[9]=
q,a[10]=m,a[11]=f,a[12]=p,a[13]=v,a[14]=t,a[15]=r,a},f.identity=function(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},f.scalar.transpose=function(a,b){if(a===b){var c=b[1],d=b[2],k=b[3],h=b[6],e=b[7],n=b[11];a[1]=b[4];a[2]=b[8];a[3]=b[12];a[4]=c;a[6]=b[9];a[7]=b[13];a[8]=d;a[9]=h;a[11]=b[14];a[12]=k;a[13]=e;a[14]=n}else a[0]=b[0],a[1]=b[4],a[2]=b[8],a[3]=b[12],a[4]=b[1],a[5]=b[5],a[6]=b[9],a[7]=b[13],a[8]=b[2],a[9]=
b[6],a[10]=b[10],a[11]=b[14],a[12]=b[3],a[13]=b[7],a[14]=b[11],a[15]=b[15];return a},f.SIMD.transpose=function(a,b){var c,d,k,h,e,n,l,g,q,m;return c=SIMD.Float32x4.load(b,0),d=SIMD.Float32x4.load(b,4),k=SIMD.Float32x4.load(b,8),h=SIMD.Float32x4.load(b,12),e=SIMD.Float32x4.shuffle(c,d,0,1,4,5),n=SIMD.Float32x4.shuffle(k,h,0,1,4,5),l=SIMD.Float32x4.shuffle(e,n,0,2,4,6),g=SIMD.Float32x4.shuffle(e,n,1,3,5,7),SIMD.Float32x4.store(a,0,l),SIMD.Float32x4.store(a,4,g),e=SIMD.Float32x4.shuffle(c,d,2,3,6,7),
n=SIMD.Float32x4.shuffle(k,h,2,3,6,7),q=SIMD.Float32x4.shuffle(e,n,0,2,4,6),m=SIMD.Float32x4.shuffle(e,n,1,3,5,7),SIMD.Float32x4.store(a,8,q),SIMD.Float32x4.store(a,12,m),a},f.transpose=w.USE_SIMD?f.SIMD.transpose:f.scalar.transpose,f.scalar.invert=function(a,b){var c=b[0],d=b[1],k=b[2],h=b[3],e=b[4],n=b[5],l=b[6],g=b[7],q=b[8],m=b[9],f=b[10],p=b[11],v=b[12],t=b[13],r=b[14];b=b[15];var w=c*n-d*e,y=c*l-k*e,x=c*g-h*e,z=d*l-k*n,A=d*g-h*n,D=k*g-h*l,E=q*t-m*v,F=q*r-f*v,G=q*b-p*v,H=m*r-f*t,I=m*b-p*t,C=
f*b-p*r,B=w*C-y*I+x*H+z*G-A*F+D*E;return B?(B=1/B,a[0]=(n*C-l*I+g*H)*B,a[1]=(k*I-d*C-h*H)*B,a[2]=(t*D-r*A+b*z)*B,a[3]=(f*A-m*D-p*z)*B,a[4]=(l*G-e*C-g*F)*B,a[5]=(c*C-k*G+h*F)*B,a[6]=(r*x-v*D-b*y)*B,a[7]=(q*D-f*x+p*y)*B,a[8]=(e*I-n*G+g*E)*B,a[9]=(d*G-c*I-h*E)*B,a[10]=(v*A-t*x+b*w)*B,a[11]=(m*x-q*A-p*w)*B,a[12]=(n*F-e*H-l*E)*B,a[13]=(c*H-d*F+k*E)*B,a[14]=(t*y-v*z-r*w)*B,a[15]=(q*z-m*y+f*w)*B,a):null},f.SIMD.invert=function(a,b){var c,d,k,h,e,n,l,g,q,m,f=SIMD.Float32x4.load(b,0),p=SIMD.Float32x4.load(b,
4),v=SIMD.Float32x4.load(b,8);b=SIMD.Float32x4.load(b,12);return e=SIMD.Float32x4.shuffle(f,p,0,1,4,5),d=SIMD.Float32x4.shuffle(v,b,0,1,4,5),c=SIMD.Float32x4.shuffle(e,d,0,2,4,6),d=SIMD.Float32x4.shuffle(d,e,1,3,5,7),e=SIMD.Float32x4.shuffle(f,p,2,3,6,7),h=SIMD.Float32x4.shuffle(v,b,2,3,6,7),k=SIMD.Float32x4.shuffle(e,h,0,2,4,6),h=SIMD.Float32x4.shuffle(h,e,1,3,5,7),e=SIMD.Float32x4.mul(k,h),e=SIMD.Float32x4.swizzle(e,1,0,3,2),n=SIMD.Float32x4.mul(d,e),l=SIMD.Float32x4.mul(c,e),e=SIMD.Float32x4.swizzle(e,
2,3,0,1),n=SIMD.Float32x4.sub(SIMD.Float32x4.mul(d,e),n),l=SIMD.Float32x4.sub(SIMD.Float32x4.mul(c,e),l),l=SIMD.Float32x4.swizzle(l,2,3,0,1),e=SIMD.Float32x4.mul(d,k),e=SIMD.Float32x4.swizzle(e,1,0,3,2),n=SIMD.Float32x4.add(SIMD.Float32x4.mul(h,e),n),q=SIMD.Float32x4.mul(c,e),e=SIMD.Float32x4.swizzle(e,2,3,0,1),n=SIMD.Float32x4.sub(n,SIMD.Float32x4.mul(h,e)),q=SIMD.Float32x4.sub(SIMD.Float32x4.mul(c,e),q),q=SIMD.Float32x4.swizzle(q,2,3,0,1),e=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d,2,3,0,1),h),
e=SIMD.Float32x4.swizzle(e,1,0,3,2),k=SIMD.Float32x4.swizzle(k,2,3,0,1),n=SIMD.Float32x4.add(SIMD.Float32x4.mul(k,e),n),g=SIMD.Float32x4.mul(c,e),e=SIMD.Float32x4.swizzle(e,2,3,0,1),n=SIMD.Float32x4.sub(n,SIMD.Float32x4.mul(k,e)),g=SIMD.Float32x4.sub(SIMD.Float32x4.mul(c,e),g),g=SIMD.Float32x4.swizzle(g,2,3,0,1),e=SIMD.Float32x4.mul(c,d),e=SIMD.Float32x4.swizzle(e,1,0,3,2),g=SIMD.Float32x4.add(SIMD.Float32x4.mul(h,e),g),q=SIMD.Float32x4.sub(SIMD.Float32x4.mul(k,e),q),e=SIMD.Float32x4.swizzle(e,2,
3,0,1),g=SIMD.Float32x4.sub(SIMD.Float32x4.mul(h,e),g),q=SIMD.Float32x4.sub(q,SIMD.Float32x4.mul(k,e)),e=SIMD.Float32x4.mul(c,h),e=SIMD.Float32x4.swizzle(e,1,0,3,2),l=SIMD.Float32x4.sub(l,SIMD.Float32x4.mul(k,e)),g=SIMD.Float32x4.add(SIMD.Float32x4.mul(d,e),g),e=SIMD.Float32x4.swizzle(e,2,3,0,1),l=SIMD.Float32x4.add(SIMD.Float32x4.mul(k,e),l),g=SIMD.Float32x4.sub(g,SIMD.Float32x4.mul(d,e)),e=SIMD.Float32x4.mul(c,k),e=SIMD.Float32x4.swizzle(e,1,0,3,2),l=SIMD.Float32x4.add(SIMD.Float32x4.mul(h,e),l),
q=SIMD.Float32x4.sub(q,SIMD.Float32x4.mul(d,e)),e=SIMD.Float32x4.swizzle(e,2,3,0,1),l=SIMD.Float32x4.sub(l,SIMD.Float32x4.mul(h,e)),q=SIMD.Float32x4.add(SIMD.Float32x4.mul(d,e),q),m=SIMD.Float32x4.mul(c,n),m=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(m,2,3,0,1),m),m=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(m,1,0,3,2),m),e=SIMD.Float32x4.reciprocalApproximation(m),m=SIMD.Float32x4.sub(SIMD.Float32x4.add(e,e),SIMD.Float32x4.mul(m,SIMD.Float32x4.mul(e,e))),(m=SIMD.Float32x4.swizzle(m,0,0,0,0))?(SIMD.Float32x4.store(a,
0,SIMD.Float32x4.mul(m,n)),SIMD.Float32x4.store(a,4,SIMD.Float32x4.mul(m,l)),SIMD.Float32x4.store(a,8,SIMD.Float32x4.mul(m,g)),SIMD.Float32x4.store(a,12,SIMD.Float32x4.mul(m,q)),a):null},f.invert=w.USE_SIMD?f.SIMD.invert:f.scalar.invert,f.scalar.adjoint=function(a,b){var c=b[0],d=b[1],k=b[2],h=b[3],e=b[4],n=b[5],l=b[6],g=b[7],q=b[8],m=b[9],f=b[10],p=b[11],v=b[12],t=b[13],r=b[14];b=b[15];return a[0]=n*(f*b-p*r)-m*(l*b-g*r)+t*(l*p-g*f),a[1]=-(d*(f*b-p*r)-m*(k*b-h*r)+t*(k*p-h*f)),a[2]=d*(l*b-g*r)-n*
(k*b-h*r)+t*(k*g-h*l),a[3]=-(d*(l*p-g*f)-n*(k*p-h*f)+m*(k*g-h*l)),a[4]=-(e*(f*b-p*r)-q*(l*b-g*r)+v*(l*p-g*f)),a[5]=c*(f*b-p*r)-q*(k*b-h*r)+v*(k*p-h*f),a[6]=-(c*(l*b-g*r)-e*(k*b-h*r)+v*(k*g-h*l)),a[7]=c*(l*p-g*f)-e*(k*p-h*f)+q*(k*g-h*l),a[8]=e*(m*b-p*t)-q*(n*b-g*t)+v*(n*p-g*m),a[9]=-(c*(m*b-p*t)-q*(d*b-h*t)+v*(d*p-h*m)),a[10]=c*(n*b-g*t)-e*(d*b-h*t)+v*(d*g-h*n),a[11]=-(c*(n*p-g*m)-e*(d*p-h*m)+q*(d*g-h*n)),a[12]=-(e*(m*r-f*t)-q*(n*r-l*t)+v*(n*f-l*m)),a[13]=c*(m*r-f*t)-q*(d*r-k*t)+v*(d*f-k*m),a[14]=
-(c*(n*r-l*t)-e*(d*r-k*t)+v*(d*l-k*n)),a[15]=c*(n*f-l*m)-e*(d*f-k*m)+q*(d*l-k*n),a},f.SIMD.adjoint=function(a,b){var c,d,k,h,e,n,l,g,f,m,u,p;c=SIMD.Float32x4.load(b,0);d=SIMD.Float32x4.load(b,4);k=SIMD.Float32x4.load(b,8);b=SIMD.Float32x4.load(b,12);return g=SIMD.Float32x4.shuffle(c,d,0,1,4,5),e=SIMD.Float32x4.shuffle(k,b,0,1,4,5),h=SIMD.Float32x4.shuffle(g,e,0,2,4,6),e=SIMD.Float32x4.shuffle(e,g,1,3,5,7),g=SIMD.Float32x4.shuffle(c,d,2,3,6,7),l=SIMD.Float32x4.shuffle(k,b,2,3,6,7),n=SIMD.Float32x4.shuffle(g,
l,0,2,4,6),l=SIMD.Float32x4.shuffle(l,g,1,3,5,7),g=SIMD.Float32x4.mul(n,l),g=SIMD.Float32x4.swizzle(g,1,0,3,2),f=SIMD.Float32x4.mul(e,g),m=SIMD.Float32x4.mul(h,g),g=SIMD.Float32x4.swizzle(g,2,3,0,1),f=SIMD.Float32x4.sub(SIMD.Float32x4.mul(e,g),f),m=SIMD.Float32x4.sub(SIMD.Float32x4.mul(h,g),m),m=SIMD.Float32x4.swizzle(m,2,3,0,1),g=SIMD.Float32x4.mul(e,n),g=SIMD.Float32x4.swizzle(g,1,0,3,2),f=SIMD.Float32x4.add(SIMD.Float32x4.mul(l,g),f),p=SIMD.Float32x4.mul(h,g),g=SIMD.Float32x4.swizzle(g,2,3,0,1),
f=SIMD.Float32x4.sub(f,SIMD.Float32x4.mul(l,g)),p=SIMD.Float32x4.sub(SIMD.Float32x4.mul(h,g),p),p=SIMD.Float32x4.swizzle(p,2,3,0,1),g=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,2,3,0,1),l),g=SIMD.Float32x4.swizzle(g,1,0,3,2),n=SIMD.Float32x4.swizzle(n,2,3,0,1),f=SIMD.Float32x4.add(SIMD.Float32x4.mul(n,g),f),u=SIMD.Float32x4.mul(h,g),g=SIMD.Float32x4.swizzle(g,2,3,0,1),f=SIMD.Float32x4.sub(f,SIMD.Float32x4.mul(n,g)),u=SIMD.Float32x4.sub(SIMD.Float32x4.mul(h,g),u),u=SIMD.Float32x4.swizzle(u,2,3,0,
1),g=SIMD.Float32x4.mul(h,e),g=SIMD.Float32x4.swizzle(g,1,0,3,2),u=SIMD.Float32x4.add(SIMD.Float32x4.mul(l,g),u),p=SIMD.Float32x4.sub(SIMD.Float32x4.mul(n,g),p),g=SIMD.Float32x4.swizzle(g,2,3,0,1),u=SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,g),u),p=SIMD.Float32x4.sub(p,SIMD.Float32x4.mul(n,g)),g=SIMD.Float32x4.mul(h,l),g=SIMD.Float32x4.swizzle(g,1,0,3,2),m=SIMD.Float32x4.sub(m,SIMD.Float32x4.mul(n,g)),u=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,g),u),g=SIMD.Float32x4.swizzle(g,2,3,0,1),m=SIMD.Float32x4.add(SIMD.Float32x4.mul(n,
g),m),u=SIMD.Float32x4.sub(u,SIMD.Float32x4.mul(e,g)),g=SIMD.Float32x4.mul(h,n),g=SIMD.Float32x4.swizzle(g,1,0,3,2),m=SIMD.Float32x4.add(SIMD.Float32x4.mul(l,g),m),p=SIMD.Float32x4.sub(p,SIMD.Float32x4.mul(e,g)),g=SIMD.Float32x4.swizzle(g,2,3,0,1),m=SIMD.Float32x4.sub(m,SIMD.Float32x4.mul(l,g)),p=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,g),p),SIMD.Float32x4.store(a,0,f),SIMD.Float32x4.store(a,4,m),SIMD.Float32x4.store(a,8,u),SIMD.Float32x4.store(a,12,p),a},f.adjoint=w.USE_SIMD?f.SIMD.adjoint:f.scalar.adjoint,
f.determinant=function(a){var b=a[0],c=a[1],d=a[2],k=a[3],h=a[4],e=a[5],n=a[6],l=a[7],g=a[8],f=a[9],m=a[10],u=a[11],p=a[12],v=a[13],t=a[14];a=a[15];return(b*e-c*h)*(m*a-u*t)-(b*n-d*h)*(f*a-u*v)+(b*l-k*h)*(f*t-m*v)+(c*n-d*e)*(g*a-u*p)-(c*l-k*e)*(g*t-m*p)+(d*l-k*n)*(g*v-f*p)},f.SIMD.multiply=function(a,b,c){var d=SIMD.Float32x4.load(b,0),k=SIMD.Float32x4.load(b,4),h=SIMD.Float32x4.load(b,8);b=SIMD.Float32x4.load(b,12);var e=SIMD.Float32x4.load(c,0),e=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,
0,0,0,0),d),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,1,1,1,1),k),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,2,2,2,2),h),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,3,3,3,3),b))));SIMD.Float32x4.store(a,0,e);e=SIMD.Float32x4.load(c,4);e=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,0,0,0,0),d),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,1,1,1,1),k),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,2,2,2,2),h),
SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,3,3,3,3),b))));SIMD.Float32x4.store(a,4,e);e=SIMD.Float32x4.load(c,8);e=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,0,0,0,0),d),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,1,1,1,1),k),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,2,2,2,2),h),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,3,3,3,3),b))));SIMD.Float32x4.store(a,8,e);c=SIMD.Float32x4.load(c,12);d=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,
0,0,0,0),d),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,1,1,1,1),k),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,2,2,2,2),h),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,3,3,3,3),b))));return SIMD.Float32x4.store(a,12,d),a},f.scalar.multiply=function(a,b,c){var d=b[0],k=b[1],h=b[2],e=b[3],n=b[4],l=b[5],g=b[6],f=b[7],m=b[8],u=b[9],p=b[10],v=b[11],t=b[12],r=b[13],w=b[14];b=b[15];var y=c[0],x=c[1],z=c[2],A=c[3];return a[0]=y*d+x*n+z*m+A*t,a[1]=y*k+x*l+z*u+A*r,a[2]=
y*h+x*g+z*p+A*w,a[3]=y*e+x*f+z*v+A*b,y=c[4],x=c[5],z=c[6],A=c[7],a[4]=y*d+x*n+z*m+A*t,a[5]=y*k+x*l+z*u+A*r,a[6]=y*h+x*g+z*p+A*w,a[7]=y*e+x*f+z*v+A*b,y=c[8],x=c[9],z=c[10],A=c[11],a[8]=y*d+x*n+z*m+A*t,a[9]=y*k+x*l+z*u+A*r,a[10]=y*h+x*g+z*p+A*w,a[11]=y*e+x*f+z*v+A*b,y=c[12],x=c[13],z=c[14],A=c[15],a[12]=y*d+x*n+z*m+A*t,a[13]=y*k+x*l+z*u+A*r,a[14]=y*h+x*g+z*p+A*w,a[15]=y*e+x*f+z*v+A*b,a},f.multiply=w.USE_SIMD?f.SIMD.multiply:f.scalar.multiply,f.mul=f.multiply,f.scalar.translate=function(a,b,c){var d,
k,h,e,n,f,g,q,m,u,p,v,t=c[0],r=c[1];c=c[2];return b===a?(a[12]=b[0]*t+b[4]*r+b[8]*c+b[12],a[13]=b[1]*t+b[5]*r+b[9]*c+b[13],a[14]=b[2]*t+b[6]*r+b[10]*c+b[14],a[15]=b[3]*t+b[7]*r+b[11]*c+b[15]):(d=b[0],k=b[1],h=b[2],e=b[3],n=b[4],f=b[5],g=b[6],q=b[7],m=b[8],u=b[9],p=b[10],v=b[11],a[0]=d,a[1]=k,a[2]=h,a[3]=e,a[4]=n,a[5]=f,a[6]=g,a[7]=q,a[8]=m,a[9]=u,a[10]=p,a[11]=v,a[12]=d*t+n*r+m*c+b[12],a[13]=k*t+f*r+u*c+b[13],a[14]=h*t+g*r+p*c+b[14],a[15]=e*t+q*r+v*c+b[15]),a},f.SIMD.translate=function(a,b,c){var d=
SIMD.Float32x4.load(b,0),k=SIMD.Float32x4.load(b,4),h=SIMD.Float32x4.load(b,8),e=SIMD.Float32x4.load(b,12);c=SIMD.Float32x4(c[0],c[1],c[2],0);b!==a&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11]);d=SIMD.Float32x4.mul(d,SIMD.Float32x4.swizzle(c,0,0,0,0));k=SIMD.Float32x4.mul(k,SIMD.Float32x4.swizzle(c,1,1,1,1));h=SIMD.Float32x4.mul(h,SIMD.Float32x4.swizzle(c,2,2,2,2));b=SIMD.Float32x4.add(d,SIMD.Float32x4.add(k,SIMD.Float32x4.add(h,
e)));return SIMD.Float32x4.store(a,12,b),a},f.translate=w.USE_SIMD?f.SIMD.translate:f.scalar.translate,f.scalar.scale=function(a,b,c){var d=c[0],k=c[1];c=c[2];return a[0]=b[0]*d,a[1]=b[1]*d,a[2]=b[2]*d,a[3]=b[3]*d,a[4]=b[4]*k,a[5]=b[5]*k,a[6]=b[6]*k,a[7]=b[7]*k,a[8]=b[8]*c,a[9]=b[9]*c,a[10]=b[10]*c,a[11]=b[11]*c,a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15],a},f.SIMD.scale=function(a,b,c){var d,k,h;c=SIMD.Float32x4(c[0],c[1],c[2],0);return d=SIMD.Float32x4.load(b,0),SIMD.Float32x4.store(a,0,SIMD.Float32x4.mul(d,
SIMD.Float32x4.swizzle(c,0,0,0,0))),k=SIMD.Float32x4.load(b,4),SIMD.Float32x4.store(a,4,SIMD.Float32x4.mul(k,SIMD.Float32x4.swizzle(c,1,1,1,1))),h=SIMD.Float32x4.load(b,8),SIMD.Float32x4.store(a,8,SIMD.Float32x4.mul(h,SIMD.Float32x4.swizzle(c,2,2,2,2))),a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15],a},f.scale=w.USE_SIMD?f.SIMD.scale:f.scalar.scale,f.rotate=function(a,b,c,d){var k,h,e,n,f,g,q,m,u,p,v,t,r,J,y,x,z,A,D,E,F,G,H,I,C=d[0],B=d[1];d=d[2];var K=Math.sqrt(C*C+B*B+d*d);return Math.abs(K)<w.EPSILON?
null:(K=1/K,C*=K,B*=K,d*=K,k=Math.sin(c),h=Math.cos(c),e=1-h,n=b[0],f=b[1],g=b[2],q=b[3],m=b[4],u=b[5],p=b[6],v=b[7],t=b[8],r=b[9],J=b[10],y=b[11],x=C*C*e+h,z=B*C*e+d*k,A=d*C*e-B*k,D=C*B*e-d*k,E=B*B*e+h,F=d*B*e+C*k,G=C*d*e+B*k,H=B*d*e-C*k,I=d*d*e+h,a[0]=n*x+m*z+t*A,a[1]=f*x+u*z+r*A,a[2]=g*x+p*z+J*A,a[3]=q*x+v*z+y*A,a[4]=n*D+m*E+t*F,a[5]=f*D+u*E+r*F,a[6]=g*D+p*E+J*F,a[7]=q*D+v*E+y*F,a[8]=n*G+m*H+t*I,a[9]=f*G+u*H+r*I,a[10]=g*G+p*H+J*I,a[11]=q*G+v*H+y*I,b!==a&&(a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=
b[15]),a)},f.scalar.rotateX=function(a,b,c){var d=Math.sin(c);c=Math.cos(c);var k=b[4],h=b[5],e=b[6],f=b[7],l=b[8],g=b[9],q=b[10],m=b[11];return b!==a&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]),a[4]=k*c+l*d,a[5]=h*c+g*d,a[6]=e*c+q*d,a[7]=f*c+m*d,a[8]=l*c-k*d,a[9]=g*c-h*d,a[10]=q*c-e*d,a[11]=m*c-f*d,a},f.SIMD.rotateX=function(a,b,c){var d=SIMD.Float32x4.splat(Math.sin(c));c=SIMD.Float32x4.splat(Math.cos(c));b!==a&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=
b[3],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);var k=SIMD.Float32x4.load(b,4);b=SIMD.Float32x4.load(b,8);return SIMD.Float32x4.store(a,4,SIMD.Float32x4.add(SIMD.Float32x4.mul(k,c),SIMD.Float32x4.mul(b,d))),SIMD.Float32x4.store(a,8,SIMD.Float32x4.sub(SIMD.Float32x4.mul(b,c),SIMD.Float32x4.mul(k,d))),a},f.rotateX=w.USE_SIMD?f.SIMD.rotateX:f.scalar.rotateX,f.scalar.rotateY=function(a,b,c){var d=Math.sin(c);c=Math.cos(c);var k=b[0],h=b[1],e=b[2],f=b[3],l=b[8],g=b[9],q=b[10],m=b[11];return b!==
a&&(a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]),a[0]=k*c-l*d,a[1]=h*c-g*d,a[2]=e*c-q*d,a[3]=f*c-m*d,a[8]=k*d+l*c,a[9]=h*d+g*c,a[10]=e*d+q*c,a[11]=f*d+m*c,a},f.SIMD.rotateY=function(a,b,c){var d=SIMD.Float32x4.splat(Math.sin(c));c=SIMD.Float32x4.splat(Math.cos(c));b!==a&&(a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);var k=SIMD.Float32x4.load(b,0);b=SIMD.Float32x4.load(b,8);return SIMD.Float32x4.store(a,0,SIMD.Float32x4.sub(SIMD.Float32x4.mul(k,
c),SIMD.Float32x4.mul(b,d))),SIMD.Float32x4.store(a,8,SIMD.Float32x4.add(SIMD.Float32x4.mul(k,d),SIMD.Float32x4.mul(b,c))),a},f.rotateY=w.USE_SIMD?f.SIMD.rotateY:f.scalar.rotateY,f.scalar.rotateZ=function(a,b,c){var d=Math.sin(c);c=Math.cos(c);var k=b[0],h=b[1],e=b[2],f=b[3],l=b[4],g=b[5],q=b[6],m=b[7];return b!==a&&(a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]),a[0]=k*c+l*d,a[1]=h*c+g*d,a[2]=e*c+q*d,a[3]=f*c+m*d,a[4]=l*c-k*d,a[5]=g*c-h*d,a[6]=q*c-e*
d,a[7]=m*c-f*d,a},f.SIMD.rotateZ=function(a,b,c){var d=SIMD.Float32x4.splat(Math.sin(c));c=SIMD.Float32x4.splat(Math.cos(c));b!==a&&(a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);var k=SIMD.Float32x4.load(b,0);b=SIMD.Float32x4.load(b,4);return SIMD.Float32x4.store(a,0,SIMD.Float32x4.add(SIMD.Float32x4.mul(k,c),SIMD.Float32x4.mul(b,d))),SIMD.Float32x4.store(a,4,SIMD.Float32x4.sub(SIMD.Float32x4.mul(b,c),SIMD.Float32x4.mul(k,d))),a},f.rotateZ=w.USE_SIMD?
f.SIMD.rotateZ:f.scalar.rotateZ,f.fromTranslation=function(a,b){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=b[0],a[13]=b[1],a[14]=b[2],a[15]=1,a},f.fromScaling=function(a,b){return a[0]=b[0],a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=b[1],a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=b[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},f.fromRotation=function(a,b,c){var d,k,h,e=c[0],f=c[1];c=c[2];var l=Math.sqrt(e*e+f*f+c*c);return Math.abs(l)<w.EPSILON?null:(l=1/l,e*=
l,f*=l,c*=l,d=Math.sin(b),k=Math.cos(b),h=1-k,a[0]=e*e*h+k,a[1]=f*e*h+c*d,a[2]=c*e*h-f*d,a[3]=0,a[4]=e*f*h-c*d,a[5]=f*f*h+k,a[6]=c*f*h+e*d,a[7]=0,a[8]=e*c*h+f*d,a[9]=f*c*h-e*d,a[10]=c*c*h+k,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a)},f.fromXRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=b,a[6]=c,a[7]=0,a[8]=0,a[9]=-c,a[10]=b,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},f.fromYRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);return a[0]=b,
a[1]=0,a[2]=-c,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=c,a[9]=0,a[10]=b,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},f.fromZRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);return a[0]=b,a[1]=c,a[2]=0,a[3]=0,a[4]=-c,a[5]=b,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},f.fromRotationTranslation=function(a,b,c){var d=b[0],k=b[1],h=b[2],e=b[3],f=d+d,l=k+k,g=h+h;b=d*f;var q=d*l,d=d*g,m=k*l,k=k*g,h=h*g,f=e*f,l=e*l,e=e*g;return a[0]=1-(m+h),a[1]=q+e,a[2]=d-l,a[3]=0,
a[4]=q-e,a[5]=1-(b+h),a[6]=k+f,a[7]=0,a[8]=d+l,a[9]=k-f,a[10]=1-(b+m),a[11]=0,a[12]=c[0],a[13]=c[1],a[14]=c[2],a[15]=1,a},f.getTranslation=function(a,b){return a[0]=b[12],a[1]=b[13],a[2]=b[14],a},f.getRotation=function(a,b){var c=b[0]+b[5]+b[10],d=0;return 0<c?(d=2*Math.sqrt(c+1),a[3]=.25*d,a[0]=(b[6]-b[9])/d,a[1]=(b[8]-b[2])/d,a[2]=(b[1]-b[4])/d):b[0]>b[5]&b[0]>b[10]?(d=2*Math.sqrt(1+b[0]-b[5]-b[10]),a[3]=(b[6]-b[9])/d,a[0]=.25*d,a[1]=(b[1]+b[4])/d,a[2]=(b[8]+b[2])/d):b[5]>b[10]?(d=2*Math.sqrt(1+
b[5]-b[0]-b[10]),a[3]=(b[8]-b[2])/d,a[0]=(b[1]+b[4])/d,a[1]=.25*d,a[2]=(b[6]+b[9])/d):(d=2*Math.sqrt(1+b[10]-b[0]-b[5]),a[3]=(b[1]-b[4])/d,a[0]=(b[8]+b[2])/d,a[1]=(b[6]+b[9])/d,a[2]=.25*d),a},f.fromRotationTranslationScale=function(a,b,c,d){var f=b[0],h=b[1],e=b[2],n=b[3],l=f+f,g=h+h,q=e+e;b=f*l;var m=f*g,f=f*q,u=h*g,h=h*q,e=e*q,l=n*l,g=n*g,n=n*q,q=d[0],p=d[1];d=d[2];return a[0]=(1-(u+e))*q,a[1]=(m+n)*q,a[2]=(f-g)*q,a[3]=0,a[4]=(m-n)*p,a[5]=(1-(b+e))*p,a[6]=(h+l)*p,a[7]=0,a[8]=(f+g)*d,a[9]=(h-l)*
d,a[10]=(1-(b+u))*d,a[11]=0,a[12]=c[0],a[13]=c[1],a[14]=c[2],a[15]=1,a},f.fromRotationTranslationScaleOrigin=function(a,b,c,d,f){var h=b[0],e=b[1],k=b[2],l=b[3],g=h+h,q=e+e,m=k+k;b=h*g;var u=h*q,h=h*m,p=e*q,e=e*m,k=k*m,g=l*g,q=l*q,l=l*m,m=d[0],v=d[1];d=d[2];var t=f[0],r=f[1];f=f[2];return a[0]=(1-(p+k))*m,a[1]=(u+l)*m,a[2]=(h-q)*m,a[3]=0,a[4]=(u-l)*v,a[5]=(1-(b+k))*v,a[6]=(e+g)*v,a[7]=0,a[8]=(h+q)*d,a[9]=(e-g)*d,a[10]=(1-(b+p))*d,a[11]=0,a[12]=c[0]+t-(a[0]*t+a[4]*r+a[8]*f),a[13]=c[1]+r-(a[1]*t+a[5]*
r+a[9]*f),a[14]=c[2]+f-(a[2]*t+a[6]*r+a[10]*f),a[15]=1,a},f.fromQuat=function(a,b){var c=b[0],d=b[1],f=b[2];b=b[3];var h=c+c,e=d+d,n=f+f,c=c*h,l=d*h,d=d*e,g=f*h,q=f*e,f=f*n,h=b*h,e=b*e;b*=n;return a[0]=1-d-f,a[1]=l+b,a[2]=g-e,a[3]=0,a[4]=l-b,a[5]=1-c-f,a[6]=q+h,a[7]=0,a[8]=g+e,a[9]=q-h,a[10]=1-c-d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},f.frustum=function(a,b,c,d,f,h,e){var k=1/(c-b),l=1/(f-d),g=1/(h-e);return a[0]=2*h*k,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*h*l,a[6]=0,a[7]=0,a[8]=(c+b)*k,a[9]=(f+
d)*l,a[10]=(e+h)*g,a[11]=-1,a[12]=0,a[13]=0,a[14]=e*h*2*g,a[15]=0,a},f.perspective=function(a,b,c,d,f){b=1/Math.tan(b/2);var h=1/(d-f);return a[0]=b/c,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=b,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=(f+d)*h,a[11]=-1,a[12]=0,a[13]=0,a[14]=2*f*d*h,a[15]=0,a},f.perspectiveFromFieldOfView=function(a,b,c,d){var f=Math.tan(b.upDegrees*Math.PI/180),h=Math.tan(b.downDegrees*Math.PI/180),e=Math.tan(b.leftDegrees*Math.PI/180);b=Math.tan(b.rightDegrees*Math.PI/180);var n=2/(e+b),l=2/(f+
h);return a[0]=n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=l,a[6]=0,a[7]=0,a[8]=-((e-b)*n*.5),a[9]=(f-h)*l*.5,a[10]=d/(c-d),a[11]=-1,a[12]=0,a[13]=0,a[14]=d*c/(c-d),a[15]=0,a},f.ortho=function(a,b,c,d,f,h,e){var k=1/(b-c),l=1/(d-f),g=1/(h-e);return a[0]=-2*k,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*l,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*g,a[11]=0,a[12]=(b+c)*k,a[13]=(f+d)*l,a[14]=(e+h)*g,a[15]=1,a},f.lookAt=function(a,b,c,d){var k,h,e,n,l,g,q,m,u,p,v=b[0],t=b[1];b=b[2];var r=d[0],J=d[1];d=d[2];var y=c[0],x=c[1];
c=c[2];return Math.abs(v-y)<w.EPSILON&&Math.abs(t-x)<w.EPSILON&&Math.abs(b-c)<w.EPSILON?f.identity(a):(q=v-y,m=t-x,u=b-c,p=1/Math.sqrt(q*q+m*m+u*u),q*=p,m*=p,u*=p,k=J*u-d*m,h=d*q-r*u,e=r*m-J*q,p=Math.sqrt(k*k+h*h+e*e),p?(p=1/p,k*=p,h*=p,e*=p):(k=0,h=0,e=0),n=m*e-u*h,l=u*k-q*e,g=q*h-m*k,p=Math.sqrt(n*n+l*l+g*g),p?(p=1/p,n*=p,l*=p,g*=p):(n=0,l=0,g=0),a[0]=k,a[1]=n,a[2]=q,a[3]=0,a[4]=h,a[5]=l,a[6]=m,a[7]=0,a[8]=e,a[9]=g,a[10]=u,a[11]=0,a[12]=-(k*v+h*t+e*b),a[13]=-(n*v+l*t+g*b),a[14]=-(q*v+m*t+u*b),a[15]=
1,a)},f.str=function(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+")"},f.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2)+Math.pow(a[9],2)+Math.pow(a[10],2)+Math.pow(a[11],2)+Math.pow(a[12],2)+Math.pow(a[13],2)+Math.pow(a[14],2)+Math.pow(a[15],
2))},f.add=function(a,b,c){return a[0]=b[0]+c[0],a[1]=b[1]+c[1],a[2]=b[2]+c[2],a[3]=b[3]+c[3],a[4]=b[4]+c[4],a[5]=b[5]+c[5],a[6]=b[6]+c[6],a[7]=b[7]+c[7],a[8]=b[8]+c[8],a[9]=b[9]+c[9],a[10]=b[10]+c[10],a[11]=b[11]+c[11],a[12]=b[12]+c[12],a[13]=b[13]+c[13],a[14]=b[14]+c[14],a[15]=b[15]+c[15],a},f.subtract=function(a,b,c){return a[0]=b[0]-c[0],a[1]=b[1]-c[1],a[2]=b[2]-c[2],a[3]=b[3]-c[3],a[4]=b[4]-c[4],a[5]=b[5]-c[5],a[6]=b[6]-c[6],a[7]=b[7]-c[7],a[8]=b[8]-c[8],a[9]=b[9]-c[9],a[10]=b[10]-c[10],a[11]=
b[11]-c[11],a[12]=b[12]-c[12],a[13]=b[13]-c[13],a[14]=b[14]-c[14],a[15]=b[15]-c[15],a},f.sub=f.subtract,f.multiplyScalar=function(a,b,c){return a[0]=b[0]*c,a[1]=b[1]*c,a[2]=b[2]*c,a[3]=b[3]*c,a[4]=b[4]*c,a[5]=b[5]*c,a[6]=b[6]*c,a[7]=b[7]*c,a[8]=b[8]*c,a[9]=b[9]*c,a[10]=b[10]*c,a[11]=b[11]*c,a[12]=b[12]*c,a[13]=b[13]*c,a[14]=b[14]*c,a[15]=b[15]*c,a},f.multiplyScalarAndAdd=function(a,b,c,d){return a[0]=b[0]+c[0]*d,a[1]=b[1]+c[1]*d,a[2]=b[2]+c[2]*d,a[3]=b[3]+c[3]*d,a[4]=b[4]+c[4]*d,a[5]=b[5]+c[5]*d,
a[6]=b[6]+c[6]*d,a[7]=b[7]+c[7]*d,a[8]=b[8]+c[8]*d,a[9]=b[9]+c[9]*d,a[10]=b[10]+c[10]*d,a[11]=b[11]+c[11]*d,a[12]=b[12]+c[12]*d,a[13]=b[13]+c[13]*d,a[14]=b[14]+c[14]*d,a[15]=b[15]+c[15]*d,a},f.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]&&a[9]===b[9]&&a[10]===b[10]&&a[11]===b[11]&&a[12]===b[12]&&a[13]===b[13]&&a[14]===b[14]&&a[15]===b[15]},f.equals=function(a,b){var c=a[0],d=a[1],f=a[2],h=a[3],
e=a[4],n=a[5],l=a[6],g=a[7],q=a[8],m=a[9],u=a[10],p=a[11],v=a[12],t=a[13],r=a[14];a=a[15];var J=b[0],y=b[1],x=b[2],z=b[3],A=b[4],D=b[5],E=b[6],F=b[7],G=b[8],H=b[9],I=b[10],C=b[11],B=b[12],K=b[13],L=b[14];b=b[15];return Math.abs(c-J)<=w.EPSILON*Math.max(1,Math.abs(c),Math.abs(J))&&Math.abs(d-y)<=w.EPSILON*Math.max(1,Math.abs(d),Math.abs(y))&&Math.abs(f-x)<=w.EPSILON*Math.max(1,Math.abs(f),Math.abs(x))&&Math.abs(h-z)<=w.EPSILON*Math.max(1,Math.abs(h),Math.abs(z))&&Math.abs(e-A)<=w.EPSILON*Math.max(1,
Math.abs(e),Math.abs(A))&&Math.abs(n-D)<=w.EPSILON*Math.max(1,Math.abs(n),Math.abs(D))&&Math.abs(l-E)<=w.EPSILON*Math.max(1,Math.abs(l),Math.abs(E))&&Math.abs(g-F)<=w.EPSILON*Math.max(1,Math.abs(g),Math.abs(F))&&Math.abs(q-G)<=w.EPSILON*Math.max(1,Math.abs(q),Math.abs(G))&&Math.abs(m-H)<=w.EPSILON*Math.max(1,Math.abs(m),Math.abs(H))&&Math.abs(u-I)<=w.EPSILON*Math.max(1,Math.abs(u),Math.abs(I))&&Math.abs(p-C)<=w.EPSILON*Math.max(1,Math.abs(p),Math.abs(C))&&Math.abs(v-B)<=w.EPSILON*Math.max(1,Math.abs(v),
Math.abs(B))&&Math.abs(t-K)<=w.EPSILON*Math.max(1,Math.abs(t),Math.abs(K))&&Math.abs(r-L)<=w.EPSILON*Math.max(1,Math.abs(r),Math.abs(L))&&Math.abs(a-b)<=w.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))},f});