//>>built
define(["../main","dojo/_base/lang","dojo/_base/Color","dojo/colors"],function(f,k,l,n){f=k.getObject("color",!0,f);f.Color=l;f.blend=l.blendColors;f.fromRgb=l.fromRgb;f.fromHex=l.fromHex;f.fromArray=l.fromArray;f.fromString=l.fromString;f.greyscale=n.makeGrey;k.mixin(f,{fromCmy:function(a,d,b){k.isArray(a)?(d=a[1],b=a[2],a=a[0]):k.isObject(a)&&(d=a.m,b=a.y,a=a.c);return new l({r:Math.round(255*(1-a/100)),g:Math.round(255*(1-d/100)),b:Math.round(255*(1-b/100))})},fromCmyk:function(a,d,b,c){k.isArray(a)?
(d=a[1],b=a[2],c=a[3],a=a[0]):k.isObject(a)&&(d=a.m,b=a.y,c=a.b,a=a.c);c/=100;return new l({r:Math.round(255*(1-Math.min(1,a/100*(1-c)+c))),g:Math.round(255*(1-Math.min(1,d/100*(1-c)+c))),b:Math.round(255*(1-Math.min(1,b/100*(1-c)+c)))})},fromHsl:function(a,d,b){k.isArray(a)?(d=a[1],b=a[2],a=a[0]):k.isObject(a)&&(d=a.s,b=a.l,a=a.h);d/=100;for(b/=100;0>a;)a+=360;for(;360<=a;)a-=360;var c,e;120>a?(c=(120-a)/60,e=a/60,a=0):240>a?(c=0,e=(240-a)/60,a=(a-120)/60):(c=(a-240)/60,e=0,a=(360-a)/60);c=2*d*Math.min(c,
1)+(1-d);e=2*d*Math.min(e,1)+(1-d);a=2*d*Math.min(a,1)+(1-d);.5>b?(c*=b,e*=b,a*=b):(c=(1-b)*c+2*b-1,e=(1-b)*e+2*b-1,a=(1-b)*a+2*b-1);return new l({r:Math.round(255*c),g:Math.round(255*e),b:Math.round(255*a)})}});f.fromHsv=function(a,d,b){k.isArray(a)?(d=a[1],b=a[2],a=a[0]):k.isObject(a)&&(d=a.s,b=a.v,a=a.h);360==a&&(a=0);d/=100;b/=100;var c,e,g;if(0==d)e=g=c=b;else{var h=a/60;a=Math.floor(h);var f=h-a,h=b*(1-d),m=b*(1-d*f);d=b*(1-d*(1-f));switch(a){case 0:c=b;e=d;g=h;break;case 1:c=m;e=b;g=h;break;
case 2:c=h;e=b;g=d;break;case 3:c=h;e=m;g=b;break;case 4:c=d;e=h;g=b;break;case 5:c=b,e=h,g=m}}return new l({r:Math.round(255*c),g:Math.round(255*e),b:Math.round(255*g)})};k.extend(l,{toCmy:function(){return{c:Math.round(100*(1-this.r/255)),m:Math.round(100*(1-this.g/255)),y:Math.round(100*(1-this.b/255))}},toCmyk:function(){var a,d=this.r/255,b=this.g/255,c=this.b/255;a=Math.min(1-d,1-b,1-c);return{c:Math.round((1-d-a)/(1-a)*100),m:Math.round((1-b-a)/(1-a)*100),y:Math.round((1-c-a)/(1-a)*100),b:Math.round(100*
a)}},toHsl:function(){var a=this.r/255,d=this.g/255,b=this.b/255,c=Math.min(a,b,d),e=Math.max(a,d,b),g=e-c,h=0,f=0,c=(c+e)/2;0<c&&1>c&&(f=g/(.5>c?2*c:2-2*c));0<g&&(e==a&&e!=d&&(h+=(d-b)/g),e==d&&e!=b&&(h+=2+(b-a)/g),e==b&&e!=a&&(h+=4+(a-d)/g),h*=60);return{h:h,s:Math.round(100*f),l:Math.round(100*c)}},toHsv:function(){var a=this.r/255,d=this.g/255,b=this.b/255,c=Math.max(a,d,b),e=c-Math.min(a,b,d),g=null,f=0==c?0:e/c;0==f?g=0:(g=a==c?60*(d-b)/e:d==c?120+60*(b-a)/e:240+60*(a-d)/e,0>g&&(g+=360));return{h:g,
s:Math.round(100*f),v:Math.round(100*c)}}});return f});