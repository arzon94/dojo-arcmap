//>>built
define("require exports dojo/_base/lang ../Symbol3D ./jsonUtils ./Thumbnail ./StyleOrigin ../../core/urlUtils ../../core/promiseUtils ../../core/Error ../../core/sniff ../../request ../../portal/Portal ../../portal/PortalQueryParams".split(" "),function(K,c,z,A,B,q,r,g,h,e,C,D,E,t){function l(a,b){a=g.normalize(g.makeAbsolute(a,b));b=a.lastIndexOf("/");return-1===b?{url:a,base:a,filename:null}:{url:a,base:a.slice(0,b),filename:a.slice(b+1)}}function F(a,b){G(a,function(a){return g.makeAbsolute(a,
b)})}function H(a,b){a.symbolLayers&&a.symbolLayers.forEach(b)}function G(a,b){H(a,function(a){(a=a.resource)&&a.href&&(a.href=b(a.href))})}function m(a,b){return a=z.clone(a),F(a,b),B.fromJSON(a)}function u(a,b){var f=l(a,b&&b.url&&b.url.path);return n(f.url).then(function(b){return{reference:{styleUrl:a},data:b.data,base:f.base,filename:f.filename,styleUrl:a}})}function I(a,b){var f;b=b.portal||E.getDefault();var d=b.url+" - "+a;return p[d]?h.resolve(p[d]):J(a,b).then(function(a){return f=a,a.fetchData()}).then(function(b){b=
{data:b,base:f.itemUrl,filename:"data",styleName:a};return p[d]=b,b})}function J(a,b){return b.load().then(function(){if(!b.stylesGroupQuery)throw new e("layer-templates:styles-group-query-missing","The styles group query needs to be configured in the portal to query styles");var a=new t({disableExtraQuery:!0,query:b.stylesGroupQuery});return b.queryGroups(a)}).then(function(b){b=b.results;if(!b||!Array.isArray(b)||0===b.length)throw new e("layer-templates:styles-missing","The styles group does not contain any styles");
b=b[0];var f=new t({disableExtraQuery:!0,query:'typekeywords:"'+a+'"'});return b.queryItems(f)}).then(function(b){b=b.results;if(!b||!Array.isArray(b)||0===b.length)throw new e("layer-templates:style-missing","The style '${styleName}' is not part of the styles group",{styleName:a});return b[0].load()})}function v(a,b){return a.styleUrl?u(a.styleUrl,b):a.styleName?I(a.styleName,b):h.reject(new e("layer-templates:style-url-and-name-missing","Either styleUrl or styleName is required in layerDefinition"))}
function w(a,b,f){for(var d=function(d){if(d.name===b){var c=l(d.webRef,a.base);return{value:n(c.url).then(function(e){if((e=m(e.data,c.base))&&e.isInstanceOf(A)){if(d.thumbnail)if(d.thumbnail.href){var k=g.makeAbsolute(d.thumbnail.href,a.base);e.thumbnail=new q["default"]({url:k})}else d.thumbnail.imageData&&(e.thumbnail=new q["default"]({url:"data:image/png;base64,"+d.thumbnail.imageData}));a.styleUrl?e.styleOrigin=new r({portal:f.portal,styleUrl:a.styleUrl,name:b}):a.styleName&&(e.styleOrigin=
new r({portal:f.portal,styleName:a.styleName,name:b}))}return e})}}},c=0,k=a.data.items;c<k.length;c++){var x=d(k[c]);if("object"==typeof x)return x.value}return h.reject(new e("layer-templates:symbol-name-not-found","The symbol name '${symbolName}' could not be found",{symbolName:b}))}function n(a){var b={responseType:"json"};return/\.json$/.test(a)||(b.query={f:"json"}),D(g.normalize(a),b)}Object.defineProperty(c,"__esModule",{value:!0});c.getIconHref=function(a,b){b=b.resource.href;return!C("esri-canvas-svg-support")&&
a.styleOrigin&&y.test(b)?b.replace(y,"/resource/png/$1.png"):b};c.fetchStyleFromUrl=u;var p={};c.fetchStyle=v;c.fetchStyleSymbol=function(a,b){return a.name?v(a,b).then(function(f){return w(f,a.name,b)}):h.reject(new e("layer-templates:style-symbol-reference-name-missing","Missing name in style symbol reference"))};c.fetchSymbolFromStyle=w;c.fetchSymbolSet=function(a){var b=a.data;if(!b.symbolSetUrl)return h.reject(new e("layer-templates:symbol-set-url-missing","Style does not provide symbol set URL",
{style:b}));var f=l(b.symbolSetUrl,a.base);return n(f.url).then(function(a){a=a.data;if(0===a.length||!a[0].name)throw new e("layer-templates:symbol-set-missing-data","Invalid syntax or missing data in symbol set",{style:b});for(var c={},d=0;d<a.length;d++){var g=m(a[d],f.base);c[a[d].name]=g;a[d].name===b.defaultItem&&(c.defaultSymbol=g)}return c.defaultSymbol||(c.defaultSymbol=c[a[0].name]),c})};c.createSymbol=function(a,b){return a?m(a,b&&b.url&&b.url.path):null};c.styleNameFromItem=function(a){var b=
0;for(a=a.typeKeywords;b<a.length;b++){var c=a[b];if(/^Esri.*Style$/.test(c))return c}};c.isVolumetricSymbol=function(a){return(a=a&&a.symbolLayers)?a.some(function(a){a=a.type;return"object"===a||"path"===a||"extrude"===a}):!1};var y=/\/resource\/(.*?)\.svg$/});