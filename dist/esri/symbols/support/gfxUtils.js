//>>built
define("require exports dojo/_base/lang dojox/gfx/_base ../../Color ../../core/screenUtils".split(" "),function(y,e,t,u,z,f){function v(a){var c=a.style,b=null;if(a){var d=a.constructor;switch(a.type){case n:c!==d.STYLE_CROSS&&c!==d.STYLE_X&&(b=a.color);break;case p:c===d.STYLE_SOLID?b=a.color:c!==d.STYLE_NULL&&(b=t.mixin({},u.defaultPattern,{src:A+c+".png",width:10,height:10}));break;case q:b=t.mixin({},u.defaultPattern,{src:a.url,width:f.pt2px(a.width)*a.xscale,height:f.pt2px(a.height)*a.yscale,
x:f.pt2px(a.xoffset),y:f.pt2px(a.yoffset)});break;case w:b=a.color}}return b}function r(a){if(!a)return null;var c,b=a.constructor,d=f.pt2px(a.width);switch(a.type){case p:case q:case n:c=r(a.outline);break;case x:a.style!==b.STYLE_NULL&&0!==d&&(c={color:a.color,style:B(a.style),width:d,cap:a.cap,join:a.join===b.JOIN_MITER?f.pt2px(a.miterLimit):a.join});break;default:c=null}return c}Object.defineProperty(e,"__esModule",{value:!0});var q="picture-fill-symbol",p="simple-fill-symbol",x="simple-line-symbol",
n="simple-marker-symbol",w="text-symbol",A=y.toUrl("../../symbols/patterns/"),C={left:"start",center:"middle",right:"end",justify:"start"},D={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"};e.getSVGAlign=function(a){return a=(a=a.horizontalAlignment)&&C[a.toLowerCase()]||"middle"};e.getSVGBaseline=function(a){return(a=a.verticalAlignment)&&D[a.toLowerCase()]||"alphabetic"};e.getSVGBaselineShift=function(a){return"bottom"===a.verticalAlignment?"super":null};
e.getFill=v;e.getStroke=r;var B=function(){var a={};return function(c){if(a[c])return a[c];var b=c.replace(/-/g,"");return a[c]=b,b}}();e.getShapeDescriptors=function(a){if(!a)return{defaultShape:null,fill:null,font:null,stroke:null};var c={defaultShape:null,fill:v(a),font:null,stroke:r(a)},b=a.constructor,d=b.defaultProps,g=null;switch(a.type){case n:var e=a.style,d=.5*f.pt2px(a.size||d.size),h=-d,l=+d,m=-d,k=+d;switch(e){case b.STYLE_CIRCLE:g={type:"circle",cx:0,cy:0,r:d};break;case b.STYLE_CROSS:g=
{type:"path",path:"M "+h+",0 L "+l+",0 M 0,"+m+" L 0,"+k+" E"};break;case b.STYLE_DIAMOND:g={type:"path",path:"M "+h+",0 L 0,"+m+" L "+l+",0 L 0,"+k+" L "+h+",0 Z"};break;case b.STYLE_SQUARE:g={type:"path",path:"M "+h+","+k+" L "+h+","+m+" L "+l+","+m+" L "+l+","+k+" L "+h+","+k+" Z"};break;case b.STYLE_X:g={type:"path",path:"M "+h+","+k+" L "+l+","+m+" M "+h+","+m+" L "+l+","+k+" E"};break;case b.STYLE_PATH:g={type:"path",path:a.path||""}}break;case x:g={type:"path",path:"M -15,0 L 15,0 E"};break;
case q:case p:g={type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 E"};break;case "picture-marker-symbol":g={type:"image",x:-Math.round(f.pt2px(a.width)/2),y:-Math.round(f.pt2px(a.height)/2),width:f.pt2px(a.width),height:f.pt2px(a.height),src:a.url||""};break;case w:b=a.font,e=f.pt2px(b.size),g={type:"text",text:a.text,x:0,y:.25*e,align:"middle",decoration:a.decoration||b&&b.decoration,rotated:a.rotated,kerning:a.kerning},c.font=b&&{size:e+"px",style:b.style,variant:b.variant,weight:b.weight,
family:b.family}}return c.defaultShape=g,c};e.defaultThematicColor=new z([128,128,128])});