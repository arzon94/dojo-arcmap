//>>built
define("require exports ../../../../portal/support/geometryServiceUtils ../../../../core/promiseUtils ../../../../tasks/support/ProjectParameters ../../../../geometry/support/webMercatorUtils".split(" "),function(l,d,g,e,h,f){Object.defineProperty(d,"__esModule",{value:!0});d.toView=function(b){var c=b.view.spatialReference,a=b.layer.fullExtent&&b.layer.fullExtent.spatialReference;return!a||a.equals(c)||"local"!==b.view.viewingMode?e.resolve(null):f.canProject(a,c)?e.resolve(f.project(b.layer.fullExtent,
c)):g.create(b.layer.portalItem).then(function(k){var a=new h;return a.geometries=[b.layer.fullExtent],a.outSR=c,k.project(a)}).then(function(a){return!b.destroyed&&a&&Array.isArray(a)&&1===a.length?a[0]:void 0}).otherwise(function(){return null})}});