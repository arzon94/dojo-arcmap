//>>built
define([],function(){return{decodeBIP:function(b,a){var d=a.pixelType,e=a.bandCount,g=[],f=a.width*a.height,c=this.getBandCount(b,a),e=e||c,h,k,m,l,n=b.byteLength-b.byteLength%(f*this._getPixelLength(d)),p=new d(b,0,f*c);for(h=0;e>h;h++){l=new d(f);for(k=0;f>k;k++)l[k]=p[k*c+h];g.push(l)}return n<b.byteLength-1&&(m=this._decodeMask(b.slice(n),a)),{pixels:g,mask:m}},decodeBSQ:function(b,a){var d=a.pixelType,e=a.bandCount;void 0!==e&&null!==e||(e=this.getBandCount(b,a));for(var g,f=[],c=a.width*a.height,
h=c*e,k=b.byteLength-b.byteLength%(c*this._getPixelLength(d)),h=new d(b,0,h),d=0;e>d;d++)f.push(h.subarray(d*c,(d+1)*c));return k<b.byteLength-1&&(g=this._decodeMask(b.slice(k),a)),{pixels:f,mask:g}},getBandCount:function(b,a){return Math.floor(b.byteLength/(a.width*a.height*this._getPixelLength(a.pixelType)))},_getPixelLength:function(b){var a=1;switch(b){case Uint8Array:case Int8Array:case Uint8ClampedArray:a=1;break;case Uint16Array:case Int16Array:a=2;break;case Uint32Array:case Int32Array:case Float32Array:a=
4;break;case Float64Array:a=8}return a},_decodeMask:function(b,a){var d=a.width*a.height;if(8*b.byteLength<d)return null;b=new Uint8Array(b,0,Math.ceil(d/8));a=new Uint8Array(a.width*a.height);for(var e=0,g=0,f=0,c=0,f=0;f<b.length-1;f++)for(g=b[f],c=7;0<=c;c--)a[e++]=g>>c&1;for(c=7;d-1>e;)g=b[b.length-1],a[e++]=g>>c&1,c--;return a}}});