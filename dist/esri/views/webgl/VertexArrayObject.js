//>>built
define(["require","exports"],function(q,t){q=function(){function c(b,r,g,e,a){this._locations=this._layout=this._glName=this._context=null;this._indexBuffer=this._buffers=void 0;this._initialized=!1;this._context=b;this._layout=g;this._buffers=e;this._locations=r;a&&(this._indexBuffer=a);this._id=c._nextId++}return Object.defineProperty(c.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"glName",{get:function(){return this._glName},
enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0}),
c.prototype.dispose=function(b){if(void 0===b&&(b=!0),this._context){var c=this._context.extensions.vao;c&&this._glName&&(c.deleteVertexArrayOES(this._glName),this._glName=null);if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),b){for(var g in this._buffers)this._buffers[g].dispose(),delete this._buffers[g];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}this._context=null}},c.prototype.initialize=function(){if(!this._initialized){var b=this._context.extensions.vao;
if(b){var c=b.createVertexArrayOES();b.bindVertexArrayOES(c);this._bindLayout();b.bindVertexArrayOES(null);this._glName=c}this._initialized=!0}},c.prototype.bind=function(){this.initialize();var b=this._context.extensions.vao;b?b.bindVertexArrayOES(this.glName):(this._context.bindVAO(null),this._bindLayout())},c.prototype._bindLayout=function(){var b=this._buffers,c=this._context.extensions.vao,g=this._layout,e=this._indexBuffer;b||console.error("Vertex buffer dictionary is empty!");var a,k,f=this._context.gl,
l=0,h;for(h in b)for((a=b[h])||console.error("Vertex buffer is uninitialized!"),(k=g[h])||console.error("Vertex element descriptor is empty!"),this._context.bindBuffer(a),l=0;l<k.length;++l){a=k[l];var d=this._locations[a.name],m=a.baseInstance?a.baseInstance*a.stride:0;if(void 0===d&&console.error("There is no location for vertex attribute '"+a.name+"' defined."),a.baseInstance&&!a.divisor&&console.error("Vertex attribute '"+a.name+"' uses baseInstanceOffset without divisor."),4>=a.count){if(f.enableVertexAttribArray(d),
f.vertexAttribPointer(d,a.count,a.type,a.normalized,a.stride,a.offset+m),a.divisor&&0<a.divisor){var p=this._context.extensions.angleInstancedArrays;p&&p.vertexAttribDivisorANGLE(d,a.divisor)}}else if(16===a.count&&5126===a.type)for(var n=0;4>n;n++)(f.enableVertexAttribArray(d+n),f.vertexAttribPointer(d+n,4,a.type,a.normalized,a.stride,a.offset+16*n+m),a.divisor&&0<a.divisor)&&(p=this._context.extensions.angleInstancedArrays)&&p.vertexAttribDivisorANGLE(d+n,a.divisor);else console.error("Unsupported vertex attribute element count: "+
a.count)}e&&(c?f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,e.glName):this._context.bindBuffer(e))},c.prototype.unbind=function(){this.initialize();var b=this._context.extensions.vao;b?b.bindVertexArrayOES(null):this._unbindLayout()},c.prototype._unbindLayout=function(){var b=this._buffers,c=this._layout,g=this._locations,e=this._context;b||console.error("Vertex buffer dictionary is empty!");var a,k,f,l=e.gl,h=0,d=0,m;for(m in b){(a=b[m])||console.error("Vertex buffer is uninitialized!");k=c[m];h=0;for(d=
k.length;d>h;++h)f=k[h],l.disableVertexAttribArray(g[f.name]);e.unbindBuffer(a.bufferType)}(b=this._indexBuffer)&&e.unbindBuffer(b.bufferType)},c}();return q._nextId=0,q});