//>>built
define(["require","exports","./Geometry","./GeometryUtils","./Conflict"],function(B,q,t,g,D){Object.defineProperty(q,"__esModule",{value:!0});B=function(){return function(d,a,c,h,e){void 0===c&&(c=0);void 0===h&&(h=-1);void 0===e&&(e=C);this.x=d;this.y=a;this.angle=c;this.segment=h;this.minzoom=e}}();q.Anchor=B;B=function(){return function(d,a,c){this.glyph=d;this.x=a;this.y=c}}();q.ShapedGlyph=B;var P=function(){return function(d,a,c,h,e,f,m){void 0===e&&(e=!1);void 0===f&&(f=C);void 0===m&&(m=g.C_INFINITY);
this.anchor=d;this.labelAngle=a;this.glyphAngle=c;this.page=h;this.upsideDown=e;this.minzoom=f;this.maxzoom=m}}(),Q=function(){return function(d,a,c,h,e,f,g,r,t,I){this.tl=d;this.tr=a;this.bl=c;this.br=h;this.mosaicRect=e;this.labelAngle=f;this.anchor=g;this.minzoom=r;this.maxzoom=t;this.page=I}}();q.PlacedSymbol=Q;var R=function(){return function(g,a){this.footprint=g;this.shapes=a}}();q.Placement=R;var C=.5;B=function(){function d(){this.mapAngle=0;this._conflictEngine=new D.ConflictEngine}return d.prototype.reset=
function(){this._conflictEngine.reset()},d.prototype.setAngle=function(a){this.mapAngle=a;this._conflictEngine.setAngle(a)},d.prototype.getIconPlacement=function(a,c,h,e,f,d){var r=c.width/c.pixelRatio,m=c.height/c.pixelRatio;e=f.offset[0]-r/2;var I=f.offset[1]-m/2,r=e+r,m=I+m,y=c.rect,u=e-2,k=I-2,l=u+y.width/c.pixelRatio,b=k+y.height/c.pixelRatio;c=new t.Point(u,k);var v=new t.Point(l,b),u=new t.Point(u,b),l=new t.Point(l,k),b=f.rotate*g.C_DEG_TO_RAD,k=1===f.rotationAlignment;if(0<=a.segment&&!k&&
(b+=a.angle),0!==b){var n=Math.cos(b),p=Math.sin(b);c.rotate(n,p);v.rotate(n,p);u.rotate(n,p);l.rotate(n,p)}n=8*f.padding;p=new t.Point(a.x,a.y);a=new D.Footprint(this.mapAngle,n,k);a.addBox(p,new D.Box(e,I,r,m),h,b,C,g.C_INFINITY);h=new Q(c,l,u,v,y,0,p,C,g.C_INFINITY,0);h=new R(a,[h]);e=C;return f.allowOverlap||(e=this._conflictEngine.getMinZoom(h.footprint,e,d,k)),a.minzoom=e,h},d.prototype.getTextPlacement=function(a,c,h,e,f,d,r,B){for(var m,y=new t.Point(a.x,a.y),u=r.rotate*g.C_DEG_TO_RAD,k=0===
r.rotationAlignment,l=r.keepUpright,b=C,v=!k,n=v?0:a.angle,p=0<=a.segment&&k,q=new D.Footprint(this.mapAngle,8*r.padding,v),Z=[],S=!p,E=Number.POSITIVE_INFINITY,F=Number.NEGATIVE_INFINITY,J=E,K=F,ea=p?l:k&&l,fa=[],T=0;T<h.length;T++){var z=h[T],w=e[z.glyph];if(w&&!w.rect.isEmpty){var U=w.rect,G=w.metrics,A=w.page;S&&(m&&m!==z.y&&(q.addBox(y,new D.Box(E,J,F,K),f,u,C,g.C_INFINITY),E=Number.POSITIVE_INFINITY,F=Number.NEGATIVE_INFINITY,J=E,K=F),m=z.y);var H=[];if(p){if(w=(c.x+z.x+G.left-4+.5*w.metrics.width)*
f,b=this._placeGlyph(a,b,w,d,a.segment,1,A,H),l&&(b=this._placeGlyph(a,b,w,d,a.segment,-1,A,H)),2<=b)break}else H.push(new P(y,n,n,A)),k&&l&&H.push(new P(y,n+g.C_PI,n+g.C_PI,A,!0));for(var A=z.x+c.x+G.left,z=z.y+c.y-G.top,w=A+G.width,G=z+G.height,L=new t.Point(A-4,z-4),V=new t.Point(L.x+U.width,L.y+U.height),ga=new t.Point(L.x,V.y),ha=new t.Point(V.x,L.y),W=0;W<H.length;W++){var x=H[W],aa=L.clone(),ba=ga.clone(),ca=ha.clone(),da=V.clone(),X=z,Y=G,M=x.glyphAngle+u;if(0!==M){var N=Math.cos(M),O=Math.sin(M);
aa.rotate(N,O);da.rotate(N,O);ba.rotate(N,O);ca.rotate(N,O)}Z.push(new Q(aa,ca,ba,da,U,x.labelAngle,x.anchor,x.minzoom,x.maxzoom,x.page));(!ea||this._legible(x.labelAngle))&&(S?(E>A&&(E=A),J>X&&(J=X),w>F&&(F=w),Y>K&&(K=Y)):2>x.minzoom&&q.addBox(x.anchor,new D.Box(A,X,w,Y),f,M,x.minzoom,x.maxzoom));fa.push(x)}}}if(2<=b)return null;S&&q.addBox(y,new D.Box(E,J,F,K),f,u,C,g.C_INFINITY);a=new R(q,Z);return r.allowOverlap||(b=this._conflictEngine.getMinZoom(a.footprint,b,B,v)),q.minzoom=b,a},d.prototype.add=
function(a){this._conflictEngine.add(a.footprint)},d.prototype._legible=function(a){a=g.radToByte(a);return 65>a||193<=a},d.prototype._placeGlyph=function(a,c,d,e,f,m,r,q){var h=0>m?g.positiveMod(a.angle+g.C_PI,g.C_2PI):a.angle,y=this._legible(h),u=0;0>d&&(m*=-1,d*=-1,u=g.C_PI);0<m&&++f;a=new t.Point(a.x,a.y);var k=e[f],l=g.C_INFINITY;if(e.length<=f)return l;for(;;){var b=k.x-a.x,v=k.y-a.y,n=Math.sqrt(b*b+v*v),p=Math.max(d/n,c),b=g.positiveMod(Math.atan2(v/n,b/n)+u,g.C_2PI);if(q.push(new P(a,h,b,
r,y,p,l)),c>=p)return p;a=k.clone();do{if(f+=m,e.length<=f||0>f)return p;k=e[f]}while(a.isEqual(k));l=k.x-a.x;b=k.y-a.y;v=Math.sqrt(l*l+b*b);l*=n/v;b*=n/v;a.x-=l;a.y-=b;l=p}},d}();q.PlacementEngine=B});