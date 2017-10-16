//>>built
define(["dojo","../util/oo","../defaults"],function(d,h,k){var l=h.declare(function(a){this.defaults=k.copy();this.mouse=a.mouse;this.point=a.point;this.pointIdx=a.pointIdx;this.util=a.util;this.id=a.id||this.util.uid("anchor");this.org=d.mixin({},this.point);this.stencil=a.stencil;this.stencil.anchorPositionCheck&&(this.anchorPositionCheck=d.hitch(this.stencil,this.stencil.anchorPositionCheck));this.stencil.anchorConstrain&&(this.anchorConstrain=d.hitch(this.stencil,this.stencil.anchorConstrain));
this._zCon=d.connect(this.mouse,"setZoom",this,"render");this.render();this.connectMouse()},{y_anchor:null,x_anchor:null,render:function(){this.shape&&this.shape.removeShape();var a=this.defaults.anchors,b=this.mouse.zoom,c=a.size*b,e=c/2,b={width:a.width*b,style:a.style,color:a.color,cap:a.cap};this.shape=this.stencil.container.createRect({x:this.point.x-e,y:this.point.y-e,width:c,height:c}).setStroke(b).setFill(a.fill);this.shape.setTransform({dx:0,dy:0});this.util.attr(this,"drawingType","anchor");
this.util.attr(this,"id",this.id)},onRenderStencil:function(a){},onTransformPoint:function(a){},onAnchorDown:function(a){this.selected=a.id==this.id},onAnchorUp:function(a){this.selected=!1;this.stencil.onTransformEnd(this)},onAnchorDrag:function(a){if(this.selected){this.shape.getTransform();var b=this.shape.getParent().getParent().getTransform(),c=this.defaults.anchors.marginZero,e=b.dx+this.org.x,f=b.dy+this.org.y,b=a.x-e;a=a.y-f;var d=this.defaults.anchors.minSize,g;g=this.anchorPositionCheck(b,
a,this);if(0>g.x)for(console.warn("X\x3c0 Shift");0>this.anchorPositionCheck(b,a,this).x;)this.shape.getParent().getParent().applyTransform({dx:2,dy:0});if(0>g.y)for(console.warn("Y\x3c0 Shift");0>this.anchorPositionCheck(b,a,this).y;)this.shape.getParent().getParent().applyTransform({dx:0,dy:2});this.y_anchor?this.org.y>this.y_anchor.org.y?(f=this.y_anchor.point.y+d-this.org.y,g=Infinity,a<f&&(a=f)):(f=-f+c,g=this.y_anchor.point.y-d-this.org.y,a<f?a=f:a>g&&(a=g)):(f=-f+c,a<f&&(a=f));this.x_anchor?
this.org.x>this.x_anchor.org.x?(c=this.x_anchor.point.x+d-this.org.x,e=Infinity,b<c&&(b=c)):(c=-e+c,e=this.x_anchor.point.x-d-this.org.x,b<c?b=c:b>e&&(b=e)):(c=-e+c,b<c&&(b=c));c=this.anchorConstrain(b,a);null!=c&&(b=c.x,a=c.y);this.shape.setTransform({dx:b,dy:a});this.linkedAnchor&&this.linkedAnchor.shape.setTransform({dx:b,dy:a});this.onTransformPoint(this)}},anchorConstrain:function(a,b){return null},anchorPositionCheck:function(a,b,c){return{x:1,y:1}},setPoint:function(a){this.shape.applyTransform(a)},
connectMouse:function(){this._mouseHandle=this.mouse.register(this)},disconnectMouse:function(){this.mouse.unregister(this._mouseHandle)},reset:function(a){},destroy:function(){d.disconnect(this._zCon);this.disconnectMouse();this.shape.removeShape()}});return h.declare(function(a){this.mouse=a.mouse;this.undo=a.undo;this.util=a.util;this.drawing=a.drawing;this.items={}},{onAddAnchor:function(a){},onReset:function(a){var b=this.util.byId("drawing").stencils;b.onDeselect(a);b.onSelect(a)},onRenderStencil:function(){for(var a in this.items)d.forEach(this.items[a].anchors,
function(a){a.shape.moveToFront()})},onTransformPoint:function(a){var b=this.items[a.stencil.id].item,c=[];d.forEach(this.items[a.stencil.id].anchors,function(b,f){a.id!=b.id&&"group"==a.stencil.anchorType&&(a.org.y==b.org.y?b.setPoint({dx:0,dy:a.shape.getTransform().dy-b.shape.getTransform().dy}):a.org.x==b.org.x&&b.setPoint({dx:a.shape.getTransform().dx-b.shape.getTransform().dx,dy:0}),b.shape.moveToFront());f=b.shape.getTransform();c.push({x:f.dx+b.org.x,y:f.dy+b.org.y});b.point.t&&(c[c.length-
1].t=b.point.t)},this);b.setPoints(c);b.onTransform(a);this.onRenderStencil()},onAnchorUp:function(a){},onAnchorDown:function(a){},onAnchorDrag:function(a){},onChangeStyle:function(a){for(var b in this.items)d.forEach(this.items[b].anchors,function(a){a.shape.moveToFront()})},add:function(a){this.items[a.id]={item:a,anchors:[]};if("none"!=a.anchorType){var b=a.points;d.forEach(b,function(b,c){b.noAnchor||(b=new l({stencil:a,point:b,pointIdx:c,mouse:this.mouse,util:this.util}),this.items[a.id]._cons=
[d.connect(b,"onRenderStencil",this,"onRenderStencil"),d.connect(b,"reset",this,"onReset"),d.connect(b,"onAnchorUp",this,"onAnchorUp"),d.connect(b,"onAnchorDown",this,"onAnchorDown"),d.connect(b,"onAnchorDrag",this,"onAnchorDrag"),d.connect(b,"onTransformPoint",this,"onTransformPoint"),d.connect(a,"onChangeStyle",this,"onChangeStyle")],this.items[a.id].anchors.push(b),this.onAddAnchor(b))},this);if("path"==a.shortType){var c=b[0],b=b[b.length-1],e=this.items[a.id].anchors;c.x==b.x&&c.y==b.y&&(console.warn("LINK ANVHROS",
e[0],e[e.length-1]),e[0].linkedAnchor=e[e.length-1],e[e.length-1].linkedAnchor=e[0])}"group"==a.anchorType&&d.forEach(this.items[a.id].anchors,function(b){d.forEach(this.items[a.id].anchors,function(a){b.id!=a.id&&(b.org.y==a.org.y?b.x_anchor=a:b.org.x==a.org.x&&(b.y_anchor=a))},this)},this)}},remove:function(a){this.items[a.id]&&(d.forEach(this.items[a.id].anchors,function(a){a.destroy()}),d.forEach(this.items[a.id]._cons,d.disconnect,d),this.items[a.id].anchors=null,delete this.items[a.id])}})});