//>>built
define(["dojo","../util/oo","../defaults"],function(e,n,g){return n.declare(function(a){this.util=a.util;this.keys=a.keys;this.id=a.id||this.util.uid("mouse");this.currentNodeId="";this.registered={}},{doublClickSpeed:400,_lastx:0,_lasty:0,__reg:0,_downOnCanvas:!1,init:function(a){this.container=a;this.setCanvas();var b,c=!1;e.connect(this.container,"rightclick",this,function(a){console.warn("RIGHTCLICK")});e.connect(document.body,"mousedown",this,function(a){});e.connect(this.container,"mousedown",
this,function(a){this.down(a);a.button!=e.mouseButtons.RIGHT&&(c=!0,b=e.connect(document,"mousemove",this,"drag"))});e.connect(document,"mouseup",this,function(a){e.disconnect(b);c=!1;this.up(a)});e.connect(document,"mousemove",this,function(a){c||this.move(a)});e.connect(this.keys,"onEsc",this,function(a){this._dragged=!1})},setCanvas:function(){var a=e.position(this.container.parentNode);this.origin=e.clone(a)},scrollOffset:function(){return{top:this.container.parentNode.scrollTop,left:this.container.parentNode.scrollLeft}},
resize:function(a,b){this.origin&&(this.origin.w=a,this.origin.h=b)},register:function(a){var b=a.id||"reg_"+this.__reg++;this.registered[b]||(this.registered[b]=a);return b},unregister:function(a){this.registered[a]&&delete this.registered[a]},_broadcastEvent:function(a,b){for(var c in this.registered)if(this.registered[c][a])this.registered[c][a](b)},onDown:function(a){this._broadcastEvent(this.eventName("down"),a)},onDrag:function(a){var b=this.eventName("drag");this._selected&&"onDrag"==b&&(b=
"onStencilDrag");this._broadcastEvent(b,a)},onMove:function(a){this._broadcastEvent("onMove",a)},overName:function(a,b){a=a.id.split(".");b=b.charAt(0).toUpperCase()+b.substring(1);return"dojox"!=a[0]||!g.clickable&&g.clickMode?"on"+b:"onStencil"+b},onOver:function(a){this._broadcastEvent(this.overName(a,"over"),a)},onOut:function(a){this._broadcastEvent(this.overName(a,"out"),a)},onUp:function(a){var b=this.eventName("up");"onStencilUp"==b?this._selected=!0:this._selected&&"onUp"==b&&(b="onStencilUp",
this._selected=!1);this._broadcastEvent(b,a);"silverlight"!=dojox.gfx.renderer&&(this._clickTime=(new Date).getTime(),this._lastClickTime&&this._clickTime-this._lastClickTime<this.doublClickSpeed&&(b=this.eventName("doubleClick"),console.warn("DOUBLE CLICK",b,a),this._broadcastEvent(b,a)),this._lastClickTime=this._clickTime)},zoom:1,setZoom:function(a){this.zoom=1/a},setEventMode:function(a){this.mode=a?"on"+a.charAt(0).toUpperCase()+a.substring(1):""},eventName:function(a){a=a.charAt(0).toUpperCase()+
a.substring(1);if(this.mode)return"onPathEdit"==this.mode?"on"+a:this.mode+a;if(!g.clickable&&g.clickMode)return"on"+a;var b=this.drawingType&&"surface"!=this.drawingType&&"canvas"!=this.drawingType?this.drawingType:"";return"on"+(b?b.charAt(0).toUpperCase()+b.substring(1):"")+a},up:function(a){this.onUp(this.create(a))},down:function(a){this._downOnCanvas=!0;var b=this.scrollOffset(),c=this._getXY(a);this._lastpagex=c.x;this._lastpagey=c.y;var d=this.origin,f=c.x-d.x+b.left,b=c.y-d.y+b.top,g=0<=
f&&0<=b&&f<=d.w&&b<=d.h,f=f*this.zoom,b=b*this.zoom;d.startx=f;d.starty=b;this._lastx=f;this._lasty=b;this.drawingType=this.util.attr(a,"drawingType")||"";d=this._getId(a);if(a.button!=e.mouseButtons.RIGHT||"mse"!=this.id)a.preventDefault(),e.stopEvent(a);this.onDown({mid:this.id,x:f,y:b,pageX:c.x,pageY:c.y,withinCanvas:g,id:d})},over:function(a){this.onOver(a)},out:function(a){this.onOut(a)},move:function(a){a=this.create(a);if(a.id!=this.currentNodeId){var b={},c;for(c in a)b[c]=a[c];(b.id=this.currentNodeId)&&
this.out(b);a.id&&this.over(a);this.currentNodeId=a.id}this.onMove(a)},drag:function(a){this.onDrag(this.create(a,!0))},create:function(a,b){var c=this.scrollOffset(),d=this._getXY(a),f=d.x,g=d.y,h=this.origin,k=d.x-h.x+c.left,l=d.y-h.y+c.top,m=0<=k&&0<=l&&k<=h.w&&l<=h.h,k=k*this.zoom,l=l*this.zoom;b=m?this._getId(a,b):"";c={mid:this.id,x:k,y:l,pageX:d.x,pageY:d.y,page:{x:d.x,y:d.y},orgX:h.x,orgY:h.y,last:{x:this._lastx,y:this._lasty},start:{x:this.origin.startx,y:this.origin.starty},move:{x:f-this._lastpagex,
y:g-this._lastpagey},scroll:c,id:b,withinCanvas:m};this._lastx=k;this._lasty=l;this._lastpagex=f;this._lastpagey=g;e.stopEvent(a);return c},_getId:function(a,b){return this.util.attr(a,"id",null,b)},_getXY:function(a){return{x:a.pageX,y:a.pageY}},setCursor:function(a,b){b?e.style(b,"cursor",a):e.style(this.container,"cursor",a)}})});