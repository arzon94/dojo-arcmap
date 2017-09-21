//>>built
define("require exports ../../webgl/Program ../../webgl/VertexArrayObject ../../webgl/BufferObject ../../webgl/Texture ../GeometryUtils ./vtShaderSnippets".split(" "),function(q,r,k,l,m,n,p,g){return function(){function c(){this._initialized=!1;this._maxWidth=0;this._color=new Float32Array([1,0,0,1])}return c.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null);this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null);
this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null);this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null)},c.prototype.render=function(a,b){this._initialized||this._initialize(a);a.bindVAO(this._outlineVertexArrayObject);a.bindProgram(this._outlineProgram);this._outlineProgram.setUniformMatrix4fv("u_transformMatrix",b.tileTransform.transform);this._outlineProgram.setUniform2fv("u_normalized_origin",
b.tileTransform.displayCoord);this._outlineProgram.setUniform1f("u_coord_range",b.coordRange);this._outlineProgram.setUniform1f("u_depth",0);this._outlineProgram.setUniform4fv("u_color",this._color);a.setLineWidth(2);a.drawArrays(3,0,4);a.bindVAO();var f=this._getTexture(a,b);f&&(a.bindVAO(this._tileInfoVertexArrayObject),a.bindProgram(this._tileInfoProgram),a.bindTexture(f,0),this._tileInfoProgram.setUniformMatrix4fv("u_transformMatrix",b.tileTransform.transform),this._tileInfoProgram.setUniform2fv("u_normalized_origin",
b.tileTransform.displayCoord),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform1f("u_coord_ratio",b.coordRange/512),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",f.descriptor.width,f.descriptor.height),a.drawArrays(5,0,4),a.bindVAO())},c.prototype._initialize=function(a){if(this._initialized)return!0;var b={a_pos:0},f=new k(a,g.backgroundVS,g.backgroundFS,b),d=new k(a,g.tileInfoVS,g.tileInfoFS,b),e={geometry:[{name:"a_pos",
count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},c=new Int8Array([0,0,1,0,1,1,0,1]),c=m.createVertex(a,35044,c),c=new l(a,b,e,{geometry:c}),h=new Int8Array([0,0,1,0,0,1,1,1]),h=m.createVertex(a,35044,h);a=new l(a,b,e,{geometry:h});return this._outlineProgram=f,this._tileInfoProgram=d,this._vertexAttributes=e,this._outlineVertexArrayObject=c,this._tileInfoVertexArrayObject=a,this._initialized=!0,!0},c.prototype._getTexture=function(a,b){if(b.texture)return b.texture;this._canvas||(this._canvas=
document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","256"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var c=b.key.id,d=this._canvas.getContext("2d");d.font="24px sans-serif";d.textAlign="left";d.textBaseline="middle";var e=d.measureText(c),e=Math.pow(2,Math.ceil(p.log2(e.width+2)));e>this._maxWidth&&(this._maxWidth=e);return d.clearRect(0,0,this._maxWidth,32),d.fillStyle=b.key.level>b.refKey.level?
"red":"blue",d.fillText(c,0,16),b.texture=new n(a,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas),b.texture},c}()});