//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/internal/highlight.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\n\n\x3csnippets\x3e\n\n\x3c!--\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\nSmartly downsamples a texture, halfing its resolution. This allows for a square\nscreen region to check if none, any or all pixels were set.\n\nThe red channel is always ceiled after interpolating the 4 merged pixels.\nThis allows to evaluate:\nany(pixels.red !\x3d 0.0) as red \x3d\x3d 1.0\nnone(pixels.red !\x3d 0.0) as red \x3d\x3d 0.0\n\nThe green and blue channels are set to floor(max(green, blue)).\nThis allows to evaluate:\nall(pixels.green || pixels.blue) as green \x3d\x3d 1.0\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\n--\x3e\n\n\x3csnippet name\x3d"vsConservativeDownsample"\x3e\x3c![CDATA[\n\n  $vsprecisionf\n\n  attribute vec2 $position;\n\n  void main()\n  {\n    gl_Position \x3d vec4(vec2(1.0) - $position * 2.0, .0, 1.0);\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"fsConservativeDownsample"\x3e\x3c![CDATA[\n\n  $fsprecisionf\n\n  uniform sampler2D tex;\n  uniform vec2 invFramebufferDim;\n\n  void main()\n  {\n    vec2 coord \x3d gl_FragCoord.xy * invFramebufferDim;\n    vec4 value \x3d texture2D(tex, coord);\n    float mx \x3d floor(max(value.g, value.b));\n    gl_FragColor \x3d vec4(ceil(value.r), mx, mx, 1.0);\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3c!--\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\nGaussian blur with linear sampling. Supports different number of samples, but\nonly 5 samples have proper weights. Uses linear texture interpolation to reduce\nthe number of samples taken.\n\nDefines:\nGRID_OPTIMIZATION (set or !set)\nGAUSSIAN_SAMPLES (3,5,7)\n\nThis technique requires linear filtering on source texture\nhttp://rastergrid.com/blog/2010/09/efficient-gaussian-blur-with-linear-sampling/\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\n--\x3e\n\x3csnippet name\x3d"vsHighlightBlurFastGaussian"\x3e\x3c![CDATA[\n\n  $vsprecisionf\n\n  attribute vec2 $position;\n  attribute vec2 $uv0;\n\n  #ifdef GRID_OPTIMIZATION\n    uniform sampler2D coverageTex;\n    varying vec3 blurCoordinate;\n  #else\n    uniform vec2 blurSize;\n    varying vec2 blurCoordinates[GAUSSIAN_SAMPLES];\n  #endif\n\n  void main()\n  {\n    gl_Position \x3d vec4($position, 0.0, 1.0);\n\n    #ifdef GRID_OPTIMIZATION\n      // sample the coverage texture at the block center\n      // and if no coverage detected, create degenerate triangle\n      vec4 cov \x3d texture2D(coverageTex, $uv0);\n      if (cov.r \x3d\x3d 0.0) {\n        gl_Position \x3d vec4(0,0,0,0);\n      }\n\n      // create texture coordinate for blur center\n      // encode information about fully inside block in z coordinate\n      blurCoordinate \x3d vec3(gl_Position.xy * .5 + vec2(.5), max(cov.g, cov.b));\n    #else\n      vec2 uv \x3d $position.xy * .5 + vec2(.5);\n\n      #if GAUSSIAN_SAMPLES \x3d\x3d 3\n        // not proper gaussian weights\n        blurCoordinates[0] \x3d uv;\n        blurCoordinates[1] \x3d uv + blurSize * 1.407333;\n        blurCoordinates[2] \x3d uv - blurSize * 1.407333;\n      #elif GAUSSIAN_SAMPLES \x3d\x3d 5\n        blurCoordinates[0] \x3d uv;\n        blurCoordinates[1] \x3d uv + blurSize * 1.407333;\n        blurCoordinates[2] \x3d uv - blurSize * 1.407333;\n        blurCoordinates[3] \x3d uv + blurSize * 3.294215;\n        blurCoordinates[4] \x3d uv - blurSize * 3.294215;\n      #elif GAUSSIAN_SAMPLES \x3d\x3d 7\n        // not proper gaussian weights\n        blurCoordinates[0] \x3d uv;\n        blurCoordinates[1] \x3d uv + blurSize * 1.407333;\n        blurCoordinates[2] \x3d uv - blurSize * 1.407333;\n        blurCoordinates[3] \x3d uv + blurSize * 3.294215;\n        blurCoordinates[4] \x3d uv - blurSize * 3.294215;\n        blurCoordinates[5] \x3d uv + blurSize * 5.1;\n        blurCoordinates[6] \x3d uv - blurSize * 5.1;\n      #elif GAUSSIAN_SAMPLES \x3d\x3d 9\n        // not proper gaussian weights\n        blurCoordinates[0] \x3d uv;\n        blurCoordinates[1] \x3d uv + blurSize * 1.407333;\n        blurCoordinates[2] \x3d uv - blurSize * 1.407333;\n        blurCoordinates[3] \x3d uv + blurSize * 3.294215;\n        blurCoordinates[4] \x3d uv - blurSize * 3.294215;\n        blurCoordinates[5] \x3d uv + blurSize * 5.1;\n        blurCoordinates[6] \x3d uv - blurSize * 5.1;\n        blurCoordinates[7] \x3d uv + blurSize * 7.1;\n        blurCoordinates[8] \x3d uv - blurSize * 7.1;\n      #endif\n    #endif\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"fsHighlightBlurFastGaussian"\x3e\x3c![CDATA[\n\n  $fsprecisionf\n\n  uniform sampler2D tex;\n\n  #ifdef GRID_OPTIMIZATION\n    uniform vec2 blurSize;\n    varying vec3 blurCoordinate;\n  #else\n    varying vec2 blurCoordinates[GAUSSIAN_SAMPLES];\n  #endif\n\n  void main()\n  {\n    #ifdef GRID_OPTIMIZATION\n      vec2 uv \x3d blurCoordinate.xy;\n      vec4 center \x3d texture2D(tex, uv);\n\n      // do not blur if no pixel or all pixels in neighborhood are set\n      if (blurCoordinate.z \x3d\x3d 1.0) {\n        gl_FragColor \x3d center;\n      }\n      else {\n        vec4 sum \x3d vec4(0.0);\n\n        #if GAUSSIAN_SAMPLES \x3d\x3d 3\n          // not proper gaussian weights\n          sum +\x3d center * 0.204164;\n          sum +\x3d texture2D(tex, uv + blurSize * 1.407333) * 0.304005;\n          sum +\x3d texture2D(tex, uv - blurSize * 1.407333) * 0.304005;\n        #elif GAUSSIAN_SAMPLES \x3d\x3d 5\n          sum +\x3d center * 0.204164;\n          sum +\x3d texture2D(tex, uv + blurSize * 1.407333) * 0.304005;\n          sum +\x3d texture2D(tex, uv - blurSize * 1.407333) * 0.304005;\n          sum +\x3d texture2D(tex, uv + blurSize * 3.294215) * 0.093913;\n          sum +\x3d texture2D(tex, uv - blurSize * 3.294215) * 0.093913;\n        #elif GAUSSIAN_SAMPLES \x3d\x3d 7\n          // not proper gaussian weights\n          sum +\x3d center * 0.204164;\n          sum +\x3d texture2D(tex, uv + blurSize * 1.407333) * 0.304005;\n          sum +\x3d texture2D(tex, uv - blurSize * 1.407333) * 0.304005;\n          sum +\x3d texture2D(tex, uv + blurSize * 3.294215) * 0.093913;\n          sum +\x3d texture2D(tex, uv - blurSize * 3.294215) * 0.093913;\n          sum +\x3d texture2D(tex, uv + blurSize * 5.1) * 0.03;\n          sum +\x3d texture2D(tex, uv - blurSize * 5.1) * 0.03;\n        #elif GAUSSIAN_SAMPLES \x3d\x3d 9\n          // not proper gaussian weights\n          sum +\x3d center * 0.154164;\n          sum +\x3d texture2D(tex, uv + blurSize * 1.5) * 0.204005;\n          sum +\x3d texture2D(tex, uv - blurSize * 1.5) * 0.204005;\n          sum +\x3d texture2D(tex, uv + blurSize * 3.5) * 0.123913;\n          sum +\x3d texture2D(tex, uv - blurSize * 3.5) * 0.123913;\n          sum +\x3d texture2D(tex, uv + blurSize * 5.5) * 0.123913;\n          sum +\x3d texture2D(tex, uv - blurSize * 5.5) * 0.123913;\n          sum +\x3d texture2D(tex, uv + blurSize * 7.5) * 0.05;\n          sum +\x3d texture2D(tex, uv - blurSize * 7.5) * 0.05;\n        #endif\n\n        gl_FragColor \x3d sum;\n      }\n    #else\n      vec4 sum \x3d vec4(0.0);\n\n      #if GAUSSIAN_SAMPLES \x3d\x3d 3\n        // not proper gaussian weights\n        sum +\x3d texture2D(tex, blurCoordinates[0]) * 0.204164;\n        sum +\x3d texture2D(tex, blurCoordinates[1]) * 0.304005;\n        sum +\x3d texture2D(tex, blurCoordinates[2]) * 0.304005;\n      #elif GAUSSIAN_SAMPLES \x3d\x3d 5\n        sum +\x3d texture2D(tex, blurCoordinates[0]) * 0.204164;\n        sum +\x3d texture2D(tex, blurCoordinates[1]) * 0.304005;\n        sum +\x3d texture2D(tex, blurCoordinates[2]) * 0.304005;\n        sum +\x3d texture2D(tex, blurCoordinates[3]) * 0.093913;\n        sum +\x3d texture2D(tex, blurCoordinates[4]) * 0.093913;\n      #elif GAUSSIAN_SAMPLES \x3d\x3d 7\n        // not proper gaussian weights\n        sum +\x3d texture2D(tex, blurCoordinates[0]) * 0.204164;\n        sum +\x3d texture2D(tex, blurCoordinates[1]) * 0.304005;\n        sum +\x3d texture2D(tex, blurCoordinates[2]) * 0.304005;\n        sum +\x3d texture2D(tex, blurCoordinates[3]) * 0.093913;\n        sum +\x3d texture2D(tex, blurCoordinates[4]) * 0.093913;\n        sum +\x3d texture2D(tex, blurCoordinates[5]) * 0.03;\n        sum +\x3d texture2D(tex, blurCoordinates[6]) * 0.03;\n      #elif GAUSSIAN_SAMPLES \x3d\x3d 9\n        // not proper gaussian weights\n        sum +\x3d texture2D(tex, blurCoordinates[0]) * 0.154164;\n        sum +\x3d texture2D(tex, blurCoordinates[1]) * 0.204005;\n        sum +\x3d texture2D(tex, blurCoordinates[2]) * 0.204005;\n        sum +\x3d texture2D(tex, blurCoordinates[3]) * 0.123913;\n        sum +\x3d texture2D(tex, blurCoordinates[4]) * 0.123913;\n        sum +\x3d texture2D(tex, blurCoordinates[5]) * 0.09;\n        sum +\x3d texture2D(tex, blurCoordinates[6]) * 0.09;\n        sum +\x3d texture2D(tex, blurCoordinates[7]) * 0.05;\n        sum +\x3d texture2D(tex, blurCoordinates[8]) * 0.05;\n      #endif\n\n      gl_FragColor \x3d sum;\n    #endif\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3c!--\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\nMerging blurred outlines with source image, advanced version\n\nDefines:\nGRID_OPTIMIZATION (set or !set)\nGRID_DEBUG (set or !set)\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\n--\x3e\n\x3csnippet name\x3d"vsHighlightApply"\x3e\x3c![CDATA[\n\n  $vsprecisionf\n\n  attribute vec2 $position;\n  varying vec2 uv;\n\n  #ifdef GRID_OPTIMIZATION\n    attribute vec2 $uv0;\n    uniform sampler2D coverageTex;\n  #endif\n\n  void main()\n  {\n    #ifdef GRID_OPTIMIZATION\n      #ifdef GRID_DEBUG\n        vec4 cov \x3d texture2D(coverageTex, $uv0);\n        // if no highlight pixel set in this block,\n        // or all pixels set, hide block\n        if (cov.r \x3d\x3d 0.0 || cov.g \x3d\x3d 1.0 || cov.b \x3d\x3d 1.0) {\n          gl_Position \x3d vec4(0,0,0,0);\n          return;\n        }\n        gl_Position \x3d vec4($position, .0, 1.0);\n        uv \x3d $uv0;\n        return;\n      #else\n        vec4 cov \x3d texture2D(coverageTex, $uv0);\n        // if no highlight pixel set in this block, hide block\n        if (cov.r \x3d\x3d 0.0) {\n          gl_Position \x3d vec4(0,0,0,0);\n          return;\n        }\n      #endif\n    #endif\n\n    gl_Position \x3d vec4($position, .0, 1.0);\n    uv \x3d $position.xy * .5 + vec2(.5);\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"fsHighlightApply"\x3e\x3c![CDATA[\n\n  $fsprecisionf\n\n  uniform sampler2D tex;\n  uniform sampler2D origin;\n\n  uniform vec4 color;\n  uniform float outlineSize;\n  uniform float blurSize;\n  uniform vec4 opacities; // [outline, outlineOccluded, fill, fillOccluded]\n\n  varying vec2 uv;\n\n  void main()\n  {\n    #if defined(GRID_OPTIMIZATION) \x26\x26 defined(GRID_DEBUG)\n      gl_FragColor \x3d vec4(uv, 0, 1.0);\n    #else\n      // Read the highlight intensity from the blurred highlight image\n      vec4 blurredHighlightValue \x3d texture2D(tex, uv);\n      float highlightIntensity \x3d blurredHighlightValue.a;\n\n      // Discard all pixels which are not affected by highlight\n      if (highlightIntensity \x3d\x3d 0.0) {\n        discard;\n      }\n\n      vec4 origin_color \x3d texture2D(origin, uv);\n\n      float outlineIntensity;\n      float fillIntensity;\n\n      // if occluded\n      if (blurredHighlightValue.g \x3e blurredHighlightValue.b) {\n        outlineIntensity \x3d color.w * opacities[1];\n        fillIntensity \x3d color.w * opacities[3];\n      }\n      // if unoccluded\n      else {\n        outlineIntensity \x3d color.w * opacities[0];\n        fillIntensity \x3d color.w * opacities[2];\n      }\n\n      float inner \x3d 1.0 - outlineSize / 9.0;\n      float outer \x3d 1.0 - (outlineSize + blurSize) / 9.0;\n\n      float outlineFactor \x3d smoothstep(outer, inner, highlightIntensity);\n      //float fillFactor \x3d smoothstep(0.6, 0.72, highlightIntensity);\n      float fillFactor \x3d any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;\n      float intensity \x3d outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;\n\n      // Blending equation: gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);\n      // I.e., color should not be premultiplied with alpha\n      gl_FragColor \x3d vec4(color.xyz, intensity);\n    #endif\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3c/snippets\x3e\n'}});
define("require exports ./Util ./gl-matrix dojo/text!../materials/internal/highlight.xml ../../../webgl/FramebufferObject ../../../webgl/Program ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ../../../webgl/Util ../../../webgl/enums ./DefaultVertexBufferLayouts ./DefaultVertexAttributeLocations ../../support/debugFlags".split(" "),function(B,C,y,z,A,r,p,u,v,q,D,w,n,t){var x=z.vec4d;return function(){function m(b,f,h){this._grid={coverageMipmap:null,vao:null,verticalCellCount:0,horizontalCellCount:0,
cellPixelSize:0,mipmapLevels:0,viewportWidth:0,viewportHeight:0};this.blur1Fbo=this.blur0Fbo=this.quadVAO=null;this._rctx=h;this.viewportToRestore=x.create();this.programRep=b;this.defaultOptions={color:new Float32Array([1,0,1,1]),haloOpacity:1,fillOpacity:.2,haloOpacityOccluded:.25,fillOpacityOccluded:.05}}return m.prototype._gridUpdateResources=function(b,f){var h=this._rctx,d=this._grid,e=!1;if(null===d.coverageMipmap&&(d.coverageMipmap=[b],e=!0),(d.viewportWidth!==b.width||d.viewportHeight!==
b.height)&&(e=!0,d.viewportWidth=b.width,d.viewportHeight=b.height),d.coverageMipmap[0]=b,d.cellPixelSize!==f&&(d.cellPixelSize=f,e=!0),e){for(f=1;f<d.coverageMipmap.length;f++)d.coverageMipmap[f].dispose();d.mipmapLevels=Math.ceil(Math.log(d.cellPixelSize)*Math.LOG2E);d.coverageMipmap.length=d.mipmapLevels+1;for(f=0;f<d.mipmapLevels;f++)e=d.coverageMipmap[f],e=r.createWithAttachments(h,{target:3553,pixelFormat:6407,dataType:33635,samplingMode:9729,wrapMode:33071,width:Math.ceil(e.width/2),height:Math.ceil(e.height/
2)},{colorTarget:0,depthStencilTarget:0,width:Math.ceil(e.width/2),height:Math.ceil(e.height/2)}),d.coverageMipmap[f+1]=e}var e=Math.ceil(b.height/d.cellPixelSize),a=Math.ceil(b.width/d.cellPixelSize);if(!d.vao||d.verticalCellCount!==e||d.horizontalCellCount!==a){d.verticalCellCount=e;d.horizontalCellCount=a;b=e+1;f=a+1;for(var e=1/e,a=1/a,g=new Float32Array(24*b*f),c=0,k=0;b>k;k++)for(var l=0;f>l;l++)g[c+0]=(l-.5)*a*2-1,g[c+1]=(k-.5)*e*2-1,g[c+2]=l*a,g[c+3]=k*e,g[c+4]=(l+.5)*a*2-1,g[c+5]=(k-.5)*
e*2-1,g[c+6]=l*a,g[c+7]=k*e,g[c+8]=(l-.5)*a*2-1,g[c+9]=(k+.5)*e*2-1,g[c+10]=l*a,g[c+11]=k*e,g[c+12]=(l-.5)*a*2-1,g[c+13]=(k+.5)*e*2-1,g[c+14]=l*a,g[c+15]=k*e,g[c+16]=(l+.5)*a*2-1,g[c+17]=(k-.5)*e*2-1,g[c+18]=l*a,g[c+19]=k*e,g[c+20]=(l+.5)*a*2-1,g[c+21]=(k+.5)*e*2-1,g[c+22]=l*a,g[c+23]=k*e,c+=24;d.vao&&d.vao.dispose(!0);d.vao=new u(h,n.Default3D,{geometry:w.Pos2Tex},{geometry:v.createVertex(h,35044,g)})}},m.prototype._gridComputeMipmap=function(){var b=this._rctx,f=this._grid,h=this.programRep.get("conservative-downsample");
b.bindVAO(this.quadVAO);for(var d=0;d<f.mipmapLevels;d++){b.bindFramebuffer(f.coverageMipmap[d+1]);b.bindTexture(f.coverageMipmap[d].colorTexture,0);var e=f.coverageMipmap[d+1].width,a=f.coverageMipmap[d+1].height;b.bindProgram(h);h.setUniform1i("tex",0);h.setUniform2f("invFramebufferDim",1/e,1/a);b.setViewport(0,0,e,a);b.drawArrays(5,0,q.vertexCount(this.quadVAO,"geometry"))}},m.prototype.createQuadVAO=function(){var b=this._rctx,f=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return new u(b,n.Default3D,
{geometry:w.Pos2},{geometry:v.createVertex(b,35044,f)})},Object.defineProperty(m.prototype,"profilingCallback",{get:function(){return t.HIGHLIGHTS_PROFILE_TO_CONSOLE?function(b){return console.log(b)}:null},enumerable:!0,configurable:!0}),m.prototype.getIsSupported=function(){return!0},m.prototype.setEnableState=function(b){b?this.enable():this.disable()},m.prototype.getEnableState=function(){return null!==this.blur0Fbo},m.prototype.enable=function(){this.quadVAO=this.createQuadVAO();var b={colorTarget:0,
depthStencilTarget:0,width:0,height:0},f={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:0,height:0};this.blur0Fbo=r.createWithAttachments(this._rctx,f,b);this.blur1Fbo=r.createWithAttachments(this._rctx,f,b)},m.prototype.disable=function(){this.getEnableState()&&(this.quadVAO.dispose(!0),this.blur1Fbo.dispose(),this.blur0Fbo.dispose(),this.quadVAO=null,this.blur0Fbo=null,this.blur1Fbo=null)},m.prototype.getHighlightFBO=function(){return this.blur0Fbo},m.prototype.render=
function(b,f,h){var d=!t.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED,e=t.HIGHLIGHTS_VISUALIZE_BLOCKS,a=this._rctx;y.assert(this.getEnableState());x.set(b.fullViewport,this.viewportToRestore);b=Math.ceil(h.width/1);var g=Math.ceil(h.height/1);this.blur0Fbo.resize(b,g);this.blur1Fbo.resize(b,g);a.bindVAO(this.quadVAO);a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setBlendingEnabled(!1);var c=null,k=c=null,l=null;if(d){var m=this._grid;this._gridUpdateResources(h,32);this._gridComputeMipmap();k=m.vao;
l=4;c=this.programRep.get("highlight-blur-grid-5");a.bindProgram(c);a.bindTexture(m.coverageMipmap[m.mipmapLevels].colorTexture,1);c.setUniform1i("coverageTex",1)}else k=this.quadVAO,l=5,c=this.programRep.get("highlight-blur-5"),a.bindProgram(c);(a.bindVAO(k),a.bindFramebuffer(this.blur0Fbo),a.setViewport(0,0,b,g),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),c.setUniform1i("tex",0),a.bindTexture(h.colorTexture,0),c.setUniform2f("blurSize",1/b,0),a.drawArrays(l,0,q.vertexCount(k,"geometry")),
a.bindFramebuffer(this.blur1Fbo),a.clear(a.gl.COLOR_BUFFER_BIT),a.bindTexture(this.blur0Fbo.colorTexture,0),c.setUniform2f("blurSize",0,1/g),a.drawArrays(l,0,q.vertexCount(k,"geometry")),a.bindFramebuffer(f),a.setBlendingEnabled(!0),a.setBlendFunctionSeparate(770,771,1,771),a.setViewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3]),d)?(c=this.programRep.get(e?"highlight-apply-grid-debug":"highlight-apply-grid"),a.bindProgram(c),c.setUniform1i("coverageTex",
2),a.bindTexture(this._grid.coverageMipmap[this._grid.mipmapLevels].colorTexture,2)):(c=this.programRep.get("highlight-apply"),a.bindProgram(c));c.setUniform1i("tex",0);a.bindTexture(this.blur1Fbo.colorTexture,0);c.setUniform1i("origin",1);a.bindTexture(h.colorTexture,1);c.setUniform4fv("color",this.defaultOptions.color);c.setUniform1f("outlineSize",8.6);c.setUniform1f("blurSize",.4);c.setUniform4f("opacities",this.defaultOptions.haloOpacity,this.defaultOptions.haloOpacityOccluded,this.defaultOptions.fillOpacity,
this.defaultOptions.fillOpacityOccluded);a.drawArrays(l,0,q.vertexCount(k,"geometry"));a.bindVAO(null);a.setDepthWriteEnabled(!0);a.setDepthTestEnabled(!0);a.setBlendingEnabled(!1)},m.prototype.setDefaultOptions=function(b){this.defaultOptions=b},m.loadShaders=function(b,f,h,d){b._parse(A);f=0;for(var e=["3","5","7","9"];f<e.length;f++){var a=e[f];h.add("highlight-blur-"+a,new p(d,b.vsHighlightBlurFastGaussian,b.fsHighlightBlurFastGaussian,n.Default3D,{GAUSSIAN_SAMPLES:a}));h.add("highlight-blur-grid-"+
a,new p(d,b.vsHighlightBlurFastGaussian,b.fsHighlightBlurFastGaussian,n.Default3D,{GAUSSIAN_SAMPLES:a,GRID_OPTIMIZATION:"true"}))}h.add("highlight-apply",new p(d,b.vsHighlightApply,b.fsHighlightApply,n.Default3D));h.add("highlight-apply-grid",new p(d,b.vsHighlightApply,b.fsHighlightApply,n.Default3D,["GRID_OPTIMIZATION"]));h.add("highlight-apply-grid-debug",new p(d,b.vsHighlightApply,b.fsHighlightApply,n.Default3D,["GRID_OPTIMIZATION","GRID_DEBUG"]));h.add("conservative-downsample",new p(d,b.vsConservativeDownsample,
b.fsConservativeDownsample,n.Default3D))},m}()});