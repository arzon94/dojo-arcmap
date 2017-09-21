//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper dojo/Deferred dojo/_base/lang ../../../../core/Scheduler ../../../../geometry/Multipoint".split(" "),function(e,f,k,g,l,m,n,p){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function b(a,d,c){this.spatialReference=a;this._getElevationQueryProvider=d;this._queries=[];this._isScheduled=!1;this._queryOptions=m.mixin({},c,{ignoreInvisibleLayers:!0})}return b.prototype.queryElevation=
function(a,d){return g(this,void 0,void 0,function(){var c;return k(this,function(b){return c=new l,this._queries.push({x:a,y:d,result:c}),this._scheduleDoQuery(),[2,c.promise]})})},b.prototype._scheduleDoQuery=function(){var a=this;this._isScheduled||(n.schedule(function(){return a._doQuery()}),this._isScheduled=!0)},b.prototype._doQuery=function(){return g(this,void 0,void 0,function(){var a,d,c,b,e,f,g;return k(this,function(h){switch(h.label){case 0:if(this._isScheduled=!1,a=this._queries,this._queries=
[],d=a.map(function(a){return[a.x,a.y]}),c=new p({points:d,spatialReference:this.spatialReference}),b=this._getElevationQueryProvider(),!b)return a.forEach(function(a,b){return a.result.reject()}),[2];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,b.queryElevation(c,this._queryOptions)];case 2:return e=h.sent(),[3,4];case 3:return f=h.sent(),a.forEach(function(a){return a.result.reject(f)}),[2];case 4:return g=e.geometry.points,a.forEach(function(a,b){return a.result.resolve(g[b][2])}),[2]}})})},
b}();f.ElevationQuery=e});