//>>built
define("../core/declare dojo/_base/config dojo/_base/lang dojo/_base/array dojo/Deferred dojo/_base/url dojo/sniff dojo/cookie dojo/io-query dojo/regexp ../kernel ../config ../core/lang ./ServerInfo ../core/urlUtils ../core/deferredUtils ../core/Accessor ../request ../core/Evented ./OAuthCredential ./OAuthInfo".split(" "),function(z,t,q,g,O,x,I,C,P,Q,m,D,v,E,r,J,R,y,K,L,M){var w,A={},F=function(a){var b=(new x(a.owningSystemUrl)).host;a=(new x(a.server)).host;var c=/.+\.arcgis\.com$/i;return c.test(b)&&
c.test(a)},G=function(a,b){return!!(F(a)&&b&&g.some(b,function(b){return b.test(a.server)}))};z=z(K,{declaredClass:"esri.identity.IdentityManagerBase",constructor:function(){this._portalConfig=q.getObject("esriGeowConfig");this.serverInfos=[];this.oAuthInfos=[];this.credentials=[];this._soReqs=[];this._xoReqs=[];this._portals=[];this._getOAuthHash()},defaultOAuthInfo:null,defaultTokenValidity:60,tokenValidity:null,signInPage:null,useSignInPage:!0,normalizeWebTierAuth:!1,_busy:null,_oAuthHash:null,
_gwTokenUrl:"/sharing/generateToken",_agsRest:"/rest/services",_agsPortal:/\/sharing(\/|$)/i,_agsAdmin:/https?:\/\/[^\/]+\/[^\/]+\/admin\/?(\/.*)?$/i,_adminSvcs:/\/admin\/services(\/|$)/i,_agolSuffix:".arcgis.com",_gwDomains:[{regex:/https?:\/\/www\.arcgis\.com/i,tokenServiceUrl:"https://www.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/dev\.arcgis\.com/i,tokenServiceUrl:"https://dev.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/.*dev[^.]*\.arcgis\.com/i,tokenServiceUrl:"https://devext.arcgis.com/sharing/generateToken"},
{regex:/https?:\/\/.*qa[^.]*\.arcgis\.com/i,tokenServiceUrl:"https://qaext.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/.*.arcgis\.com/i,tokenServiceUrl:"https://www.arcgis.com/sharing/generateToken"}],_legacyFed:[],_regexSDirUrl:/http.+\/rest\/services\/?/gi,_regexServerType:/(\/(MapServer|GeocodeServer|GPServer|GeometryServer|ImageServer|NAServer|FeatureServer|GeoDataServer|GlobeServer|MobileServer|GeoenrichmentServer|VectorTileServer|SceneServer)).*/gi,_gwUser:/http.+\/users\/([^\/]+)\/?.*/i,
_gwItem:/http.+\/items\/([^\/]+)\/?.*/i,_gwGroup:/http.+\/groups\/([^\/]+)\/?.*/i,_errorCodes:[499,498,403,401],_rePortalTokenSvc:/\/sharing(\/rest)?\/generatetoken/i,_publicUrls:[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],_createDefaultOAuthInfo:!0,_hasTestedIfAppIsOnPortal:!1,registerServers:function(a){var b=this.serverInfos;b?(a=g.filter(a,function(a){return!this.findServerInfo(a.server)},this),this.serverInfos=b.concat(a)):this.serverInfos=a;g.forEach(a,function(a){if(a.owningSystemUrl&&
this._portals.push(a.owningSystemUrl),a.hasPortal){this._portals.push(a.server);var b=D.request.corsEnabledServers,c=this._getOrigin(a.tokenServiceUrl);r.canUseXhr(a.server)||b.push(a.server.replace(/^https?:\/\//i,""));r.canUseXhr(c)||b.push(c.replace(/^https?:\/\//i,""))}},this)},registerOAuthInfos:function(a){var b=this.oAuthInfos;b?(a=g.filter(a,function(a){return!this.findOAuthInfo(a.portalUrl)},this),this.oAuthInfos=b.concat(a)):this.oAuthInfos=a},registerToken:function(a){a=q.mixin({},a);var b,
c=this._sanitizeUrl(a.server),d=this.findServerInfo(c),e=this._isServerRsrc(c),f=!0;d||(d=new E,d.server=this._getServerInstanceRoot(c),e?d.hasServer=!0:(d.tokenServiceUrl=this._getTokenSvcUrl(c),d.hasPortal=!0),this.registerServers([d]));(b=this._findCredential(c))?(delete a.server,q.mixin(b,a),f=!1):(b=new w({userId:a.userId,server:d.server,token:a.token,expires:a.expires,ssl:a.ssl,scope:e?"server":"portal"}),b.resources=[c],this.credentials.push(b));b.emitTokenChange(!1);f||b.refreshServerTokens()},
toJSON:function(){return v.fixJson({serverInfos:g.map(this.serverInfos,function(a){return a.toJSON()}),oAuthInfos:g.map(this.oAuthInfos,function(a){return a.toJSON()}),credentials:g.map(this.credentials,function(a){return a.toJSON()})})},initialize:function(a){if(a){q.isString(a)&&(a=JSON.parse(a));var b=a.serverInfos,c=a.oAuthInfos;a=a.credentials;if(b){var d=[];g.forEach(b,function(a){a.server&&a.tokenServiceUrl&&d.push(a.declaredClass?a:new E(a))});d.length&&this.registerServers(d)}if(c){var e=
[];g.forEach(c,function(a){a.appId&&e.push(a.declaredClass?a:new M(a))});e.length&&this.registerOAuthInfos(e)}a&&g.forEach(a,function(a){a.server&&a.token&&a.expires&&a.expires>(new Date).getTime()&&(a=a.declaredClass?a:new w(a),a.emitTokenChange(),this.credentials.push(a))},this)}},findServerInfo:function(a){var b;return a=this._sanitizeUrl(a),g.some(this.serverInfos,function(c){return this._hasSameServerInstance(c.server,a)&&(b=c),!!b},this),b},findOAuthInfo:function(a){var b;return a=this._sanitizeUrl(a),
g.some(this.oAuthInfos,function(c){return this._hasSameServerInstance(c.portalUrl,a)&&(b=c),!!b},this),b},findCredential:function(a,b){var c,d;return a=this._sanitizeUrl(a),d=this._isServerRsrc(a)?"server":"portal",b?g.some(this.credentials,function(e){return this._hasSameServerInstance(e.server,a)&&b===e.userId&&e.scope===d&&(c=e),!!c},this):g.some(this.credentials,function(b){return this._hasSameServerInstance(b.server,a)&&-1!==this._getIdenticalSvcIdx(a,b)&&b.scope===d&&(c=b),!!c},this),c},getCredential:function(a,
b){var c,d,e=!0;v.isDefined(b)&&(q.isObject(b)?(c=!!b.token,d=b.error,e=!1!==b.prompt):c=b);a=this._sanitizeUrl(a);var f,k=J.makeDeferredCancellingPending(),g=this._isAdminResource(a),l=c&&this._doPortalSignIn(a)?this._getEsriAuthCookie():null;if((c=c?this.findCredential(a):null)&&d&&498===d.code)c.destroy(),l&&l.token===b.token&&C("esri_auth",null,{expires:-1,path:"/",domain:document.domain});else if(l||c)return f=Error("You are currently signed in as: '"+(l&&l.email||c&&c.userId)+"'. You do not have access to this resource: "+
a),f.code="IdentityManagerBase.1",f.httpCode=d&&d.httpCode,f.messageCode=d?d.messageCode:null,f.subcode=d?d.subcode:null,f.details=d?d.details:null,f.log=!!t.isDebug,k.reject(f),k.promise;if(d=this._findCredential(a,b))return k.resolve(d),k.promise;if(d=this.findServerInfo(a))!d.hasServer&&this._isServerRsrc(a)&&(d._restInfoDfd=this._getTokenSvcUrl(a,!0),d.hasServer=!0);else{l=this._getTokenSvcUrl(a);if(!l)return f=Error("Unknown resource - could not find token service endpoint."),f.code="IdentityManagerBase.2",
f.log=!!t.isDebug,k.reject(f),k.promise;d=new E;d.server=this._getServerInstanceRoot(a);q.isString(l)?(d.tokenServiceUrl=l,d.hasPortal=!0):(d._restInfoDfd=l,d.hasServer=!0);this.registerServers([d])}return e&&d.hasPortal&&void 0===d._selfReq&&!this._findOAuthInfo(a)&&(d._selfReq={owningTenant:b&&b.owningTenant,selfDfd:this._getPortalSelf(d.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),a)}),this._enqueue(a,d,b,k,g)},getResourceName:function(a){return this._isRESTService(a)?
a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(a)&&a.replace(this._gwUser,"$1")||this._gwItem.test(a)&&a.replace(this._gwItem,"$1")||this._gwGroup.test(a)&&a.replace(this._gwGroup,"$1")||""},generateToken:function(a,b,c){var d,e,f,k,g,l,h,p,u=this._rePortalTokenSvc.test(a.tokenServiceUrl),B=new x(window.location.href.toLowerCase()),N=this._getEsriAuthCookie(),n=!b,H=a.shortLivedTokenValidity;b&&(p=m.id.tokenValidity||H||m.id.defaultTokenValidity,p>H&&(p=H));
c&&(d=c.isAdmin,e=c.serverUrl,f=c.token,l=c.ssl,a.customParameters=c.customParameters);d?k=a.adminTokenServiceUrl:(k=a.tokenServiceUrl,g=new x(k.toLowerCase()),N&&(h=N.auth_tier,h=h&&h.toLowerCase()),("web"===h||a.webTierAuth)&&c&&c.serverUrl&&!l&&"http"===B.scheme&&(r.hasSameOrigin(B.uri,k,!0)||"https"===g.scheme&&B.host===g.host&&"7080"===B.port&&"7443"===g.port)&&(k=k.replace(/^https:/i,"http:").replace(/:7443/i,":7080")),n&&u&&(k=k.replace(/\/rest/i,"")));c=q.mixin({query:q.mixin({request:"getToken",
username:b&&b.username,password:b&&b.password,serverUrl:e,token:f,expiration:p,referer:d||u?window.location.host:null,client:d?"referer":null,f:"json"},a.customParameters),method:n?"auto":"post",disableIdentityLookup:!0,useProxy:this._useProxy(a,c),responseType:"json",callbackParamName:n?"callback":void 0},c&&c.ioArgs);u||(c.withCredentials=!1);return y(k,c).then(function(c){c=c.data;if(!c||!c.token)return c=Error("Unable to generate token"),c.code="IdentityManagerBase.3",c.log=!!t.isDebug,c;var d=
a.server;return A[d]||(A[d]={}),b&&(A[d][b.username]=b.password),c.validity=p,c})},isBusy:function(){return!!this._busy},checkSignInStatus:function(a){return this.getCredential(a,{prompt:!1}).then(function(a){return a.token?y(a.server+("portal"===a.scope?"/sharing/rest":"/rest/services"),{query:{f:"json",token:a.token},callbackParamName:"callback",disableIdentityLookup:!0}).then(function(){return a}).otherwise(function(b){if(498===b.code)throw a.destroy(),b=Error("User is not signed in."),b.code=
"IdentityManagerBase.6",b.log=!!t.isDebug,b;return a}):a})},setRedirectionHandler:function(a){this._redirectFunc=a},setProtocolErrorHandler:function(a){this._protocolFunc=a},signIn:function(){},oAuthSignIn:function(){},destroyCredentials:function(){if(this.credentials){var a=this.credentials.slice();g.forEach(a,function(a){a.destroy()})}this.emit("credentials-destroy")},_getOAuthHash:function(){var a=window.location.hash;if(a){"#"===a.charAt(0)&&(a=a.substring(1));var a=P.queryToObject(a),b=!1;a.access_token&&
a.expires_in&&a.state&&a.hasOwnProperty("username")?(a.state=JSON.parse(a.state),this._oAuthHash=a,b=!0):a.error&&a.error_description&&"access_denied"===a.error&&(b=!0);b&&(!I("ie")||8<I("ie"))&&(window.location.hash="")}},_findCredential:function(a,b){var c,d,e,f,k=-1,m=b&&b.token;b=b&&b.resource;var l=this._isServerRsrc(a)?"server":"portal",h=g.filter(this.credentials,function(b){return this._hasSameServerInstance(b.server,a)&&b.scope===l},this);if(a=b||a,h.length)if(1===h.length){if(c=h[0],f=this.findServerInfo(c.server),
d=f&&f.owningSystemUrl,e=d&&this.findCredential(d,c.userId),k=this._getIdenticalSvcIdx(a,c),!m)return-1===k&&c.resources.push(a),this._addResource(a,e),c;-1!==k&&(c.resources.splice(k,1),this._removeResource(a,e))}else{var p,u;if(g.some(h,function(b){return u=this._getIdenticalSvcIdx(a,b),-1!==u?(p=b,f=this.findServerInfo(p.server),d=f&&f.owningSystemUrl,e=d&&this.findCredential(d,p.userId),k=u,!0):!1},this),m)p&&(p.resources.splice(k,1),this._removeResource(a,e));else if(p)return this._addResource(a,
e),p}},_findOAuthInfo:function(a){var b=this.findOAuthInfo(a);return b||g.some(this.oAuthInfos,function(c){return this._isIdProvider(c.portalUrl,a)&&(b=c),!!b},this),b},_addResource:function(a,b){b&&-1===this._getIdenticalSvcIdx(a,b)&&b.resources.push(a)},_removeResource:function(a,b){var c=-1;b&&(c=this._getIdenticalSvcIdx(a,b),-1<c&&b.resources.splice(c,1))},_useProxy:function(a,b){return b&&b.isAdmin&&!r.hasSameOrigin(a.adminTokenServiceUrl,window.location.href)||!this._isPortalDomain(a.tokenServiceUrl)&&
10.1==a.currentVersion&&!r.hasSameOrigin(a.tokenServiceUrl,window.location.href)},_getOrigin:function(a){a=new x(a);return a.scheme+"://"+a.host+(v.isDefined(a.port)?":"+a.port:"")},_getServerInstanceRoot:function(a){var b=a.toLowerCase(),c=b.indexOf(this._agsRest);return-1===c&&this._isAdminResource(a)&&(c=b.indexOf("/admin")),-1===c&&(c=b.indexOf("/sharing")),-1===c&&"/"===b.substr(-1)&&(c=b.length-1),-1<c?a.substring(0,c):a},_hasSameServerInstance:function(a,b){return"/"===a.substr(-1)&&(a=a.slice(0,
-1)),a=a.toLowerCase(),b=this._getServerInstanceRoot(b).toLowerCase(),a=a.substr(a.indexOf(":")),b=b.substr(b.indexOf(":")),a===b},_sanitizeUrl:function(a){a=r.normalize(q.trim(a));var b=(D.request.proxyUrl||"").toLowerCase(),c=b?a.toLowerCase().indexOf(b+"?"):-1;return-1!==c&&(a=a.substring(c+b.length+1)),r.urlToObject(a).path},_isRESTService:function(a){return-1<a.indexOf(this._agsRest)},_isAdminResource:function(a){return this._agsAdmin.test(a)||this._adminSvcs.test(a)},_isServerRsrc:function(a){return this._isRESTService(a)||
this._isAdminResource(a)},_isIdenticalService:function(a,b){var c;this._isRESTService(a)&&this._isRESTService(b)?(a=this._getSuffix(a).toLowerCase(),b=this._getSuffix(b).toLowerCase(),(c=a===b,c)||(c=/(.*)\/(MapServer|FeatureServer).*/gi,c=a.replace(c,"$1")===b.replace(c,"$1"))):this._isAdminResource(a)&&this._isAdminResource(b)?c=!0:this._isServerRsrc(a)||this._isServerRsrc(b)||!this._isPortalDomain(a)||(c=!0);return c},_isPortalDomain:function(a){a=a.toLowerCase();var b=(new x(a)).authority,c=this._portalConfig,
d=-1!==b.indexOf(this._agolSuffix);(!d&&c&&(d=this._hasSameServerInstance(this._getServerInstanceRoot(c.restBaseUrl),a)),d)||(this._arcgisUrl||(c=q.getObject("esri.arcgis.utils.arcgisUrl"))&&(this._arcgisUrl=(new x(c)).authority),this._arcgisUrl&&(d=this._arcgisUrl.toLowerCase()===b));return d||(d=g.some(this._portals,function(b){return this._hasSameServerInstance(b,a)},this)),d=d||this._agsPortal.test(a)},_isIdProvider:function(a,b){var c=-1,d=-1;g.forEach(this._gwDomains,function(e,f){-1===c&&e.regex.test(a)&&
(c=f);-1===d&&e.regex.test(b)&&(d=f)});var e=!1;if(-1<c&&-1<d&&(0===c||4===c?(0===d||4===d)&&(e=!0):1===c?(1===d||2===d)&&(e=!0):2===c?2===d&&(e=!0):3===c&&3===d&&(e=!0)),!e){var f=this.findServerInfo(b),k=f&&f.owningSystemUrl;k&&F(f)&&this._isPortalDomain(k)&&this._isIdProvider(a,k)&&(e=!0)}return e},_isPublic:function(a){return a=this._sanitizeUrl(a),g.some(this._publicUrls,function(b){return b.test(a)})},_getIdenticalSvcIdx:function(a,b){var c=-1;return g.some(b.resources,function(b,e){return this._isIdenticalService(a,
b)?(c=e,!0):!1},this),c},_getSuffix:function(a){return a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")},_getTokenSvcUrl:function(a){var b,c,d,e=this._isRESTService(a);if(e||this._isAdminResource(a))return d=a.toLowerCase().indexOf(e?this._agsRest:"/admin/"),b=a.substring(0,d)+"/admin/generateToken",a=a.substring(0,d)+"/rest/info",c=y(a,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(a){return a.data}),c.adminUrl_=b,c;if(this._isPortalDomain(a)){var f=
"";if(g.some(this._gwDomains,function(b){return b.regex.test(a)&&(f=b.tokenServiceUrl),!!f}),f||g.some(this._portals,function(b){return this._hasSameServerInstance(b,a)&&(f=b+this._gwTokenUrl),!!f},this),f||(d=a.toLowerCase().indexOf("/sharing"),-1!==d&&(f=a.substring(0,d)+this._gwTokenUrl)),f||(f=this._getOrigin(a)+this._gwTokenUrl),f)b=(new x(a)).port,/^http:\/\//i.test(a)&&"7080"===b&&(f=f.replace(/:7080/i,":7443")),f=f.replace(/http:/i,"https:");return f}return-1!==a.toLowerCase().indexOf("premium.arcgisonline.com")?
"https://premium.arcgisonline.com/server/tokens":void 0},_getPortalSelf:function(a,b){return"https:"===window.location.protocol?a=a.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(b)&&(a=a.replace(/^https:/i,"http:").replace(/:7443/i,":7080")),y(a,{query:{f:"json"},responseType:"json",callbackParamName:"callback",crossOrigin:!1,disableIdentityLookup:!0}).then(function(a){return a.data})},_hasPortalSession:function(){return!!this._getEsriAuthCookie()},_getEsriAuthCookie:function(){var a;
if(C.isSupported()){var b,c=this._getAllCookies("esri_auth");for(b=0;b<c.length;b++){var d=JSON.parse(c[b]);if(d.portalApp){a=d;break}}}return a},_getAllCookies:function(a){var b=[],c=document.cookie.match(new RegExp("(?:^|; )"+Q.escapeString(a)+"\x3d([^;]*)","g"));if(c)for(a=0;a<c.length;a++){var d=c[a],e=d.indexOf("\x3d");-1<e&&(d=d.substring(e+1),b.push(decodeURIComponent(d)))}return b},_doPortalSignIn:function(a){if(C.isSupported()){var b=this._getEsriAuthCookie(),c=this._portalConfig,d=window.location.href,
e=this.findServerInfo(a);if(this.useSignInPage&&(c||this._isPortalDomain(d)||b)&&(e?e.hasPortal||e.owningSystemUrl&&this._isPortalDomain(e.owningSystemUrl):this._isPortalDomain(a))&&(this._isIdProvider(d,a)||c&&(this._hasSameServerInstance(this._getServerInstanceRoot(c.restBaseUrl),a)||this._isIdProvider(c.restBaseUrl,a))||r.hasSameOrigin(d,a,!0)))return!0}return!1},_checkProtocol:function(a,b,c,d){var e=!0;d=d?b.adminTokenServiceUrl:b.tokenServiceUrl;0!==q.trim(d).toLowerCase().indexOf("https:")||
0===window.location.href.toLowerCase().indexOf("https:")||D.request.useCors&&(r.canUseXhr(d)||r.canUseXhr(r.getProxyUrl(!0).path))||(e=this._protocolFunc?!!this._protocolFunc({resourceUrl:a,serverInfo:b}):!1)||(a=Error("Aborted the Sign-In process to avoid sending password over insecure connection."),a.code="IdentityManagerBase.4",a.log=!!t.isDebug,c(a));return e},_enqueue:function(a,b,c,d,e,f){return d||(d=J.makeDeferredCancellingPending()),d.resUrl_=a,d.sinfo_=b,d.options_=c,d.admin_=e,d.refresh_=
f,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(a),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(d)):this._xoReqs.push(d):this._doSignIn(d),d.promise},_doSignIn:function(a){this._busy=a;var b=this,c=function(c){var d=a.options_&&a.options_.resource,h=a.resUrl_,e=a.refresh_,f=!1;-1===g.indexOf(b.credentials,c)&&(e&&-1!==g.indexOf(b.credentials,e)?(e.userId=c.userId,e.token=c.token,e.expires=c.expires,e.validity=
c.validity,e.ssl=c.ssl,e.creationTime=c.creationTime,f=!0,c=e):b.credentials.push(c));c.resources||(c.resources=[]);c.resources.push(d||h);c.scope=b._isServerRsrc(h)?"server":"portal";c.emitTokenChange();var d=b._soReqs,n={};b._soReqs=[];g.forEach(d,function(a){if(!this._isIdenticalService(h,a.resUrl_)){var b=this._getSuffix(a.resUrl_);n[b]||(n[b]=!0,c.resources.push(a.resUrl_))}},b);a.resolve(c);g.forEach(d,function(a){this._hasSameServerInstance(this._getServerInstanceRoot(h),a.resUrl_)?a.resolve(c):
this._soReqs.push(a)},b);b._busy=a.resUrl_=a.sinfo_=a.refresh_=null;f||b.emit("credential-create",{credential:c});b._soReqs.length?b._doSignIn(b._soReqs.shift()):b._xoReqs.length&&b._doSignIn(b._xoReqs.shift())},d=function(c){a.reject(c);b._busy=a.resUrl_=a.sinfo_=a.refresh_=null;b._soReqs.length?b._doSignIn(b._soReqs.shift()):b._xoReqs.length&&b._doSignIn(b._xoReqs.shift())},e=function(h,e,f,k){var g,n;g=a.sinfo_;var p=!a.options_||!1!==a.options_.prompt,l=g.hasPortal&&b._findOAuthInfo(a.resUrl_);
if(b._doPortalSignIn(a.resUrl_)){h=b._getEsriAuthCookie();l=b._portalConfig;if(h)return void c(new w({userId:h.email,server:g.server,token:h.token,expires:null}));if(p)return p="",h=window.location.href,p=b.signInPage?b.signInPage:l?l.baseUrl+l.signin:b._isIdProvider(h,a.resUrl_)?b._getOrigin(h)+"/home/signin.html":g.tokenServiceUrl.replace(b._rePortalTokenSvc,"")+"/home/signin.html",p=p.replace(/http:/i,"https:"),l&&!1===l.useSSL&&(p=p.replace(/https:/i,"http:")),void(0===h.toLowerCase().replace("https",
"http").indexOf(p.toLowerCase().replace("https","http"))?(n=Error("Cannot redirect to Sign-In page from within Sign-In page. URL of the resource that triggered this workflow: "+a.resUrl_),n.code="IdentityManagerBase.5",n.log=!!t.isDebug,d(n)):b._redirectFunc?b._redirectFunc({signInPage:p,returnUrlParamName:"returnUrl",returnUrl:h,resourceUrl:a.resUrl_,serverInfo:g}):window.location=p+"?returnUrl\x3d"+window.escape(h));n=Error("User is not signed in.");n.code="IdentityManagerBase.6";n.log=!!t.isDebug;
d(n)}else h?c(new w({userId:h,server:g.server,token:f,expires:v.isDefined(k)?Number(k):null,ssl:!!e})):l?(h=l._oAuthCred,h||(e=new L(l,window.localStorage),f=new L(l,window.sessionStorage),e.isValid()&&f.isValid()?e.expires>f.expires?(h=e,f.destroy()):(h=f,e.destroy()):h=e.isValid()?e:f,l._oAuthCred=h),h.isValid()?c(new w({userId:h.userId,server:g.server,token:h.token,expires:h.expires,ssl:h.ssl,_oAuthCred:h})):b._oAuthHash&&b._oAuthHash.state.portalUrl===l.portalUrl?(n=b._oAuthHash,g=new w({userId:n.username,
server:g.server,token:n.access_token,expires:(new Date).getTime()+1E3*Number(n.expires_in),ssl:"true"===n.ssl,oAuthState:n.state,_oAuthCred:h}),h.storage=n.persist?window.localStorage:window.sessionStorage,h.token=g.token,h.expires=g.expires,h.userId=g.userId,h.ssl=g.ssl,h.save(),b._oAuthHash=null,c(g)):p?a._pendingDfd=b.oAuthSignIn(a.resUrl_,g,l,a.options_).then(c,d):(n=Error("User is not signed in."),n.code="IdentityManagerBase.6",n.log=!!t.isDebug,d(n))):p?b._checkProtocol(a.resUrl_,g,d,a.admin_)&&
(n=a.options_,a.admin_&&(n=n||{},n.isAdmin=!0),a._pendingDfd=b.signIn(a.resUrl_,g,n).then(c,d)):(n=Error("User is not signed in."),n.code="IdentityManagerBase.6",n.log=!!t.isDebug,d(n))},f=function(){var h,e,f,k,l=a.sinfo_,n=l.owningSystemUrl,m=a.options_;(m&&(h=m.token,e=m.error,f=m.prompt),k=b._findCredential(n,{token:h,resource:a.resUrl_}),!k&&F(l)&&g.some(b.credentials,function(a){return this._isIdProvider(n,a.server)&&(k=a),!!k},b),k)?(h=b.findCredential(a.resUrl_,k.userId))?c(h):G(l,b._legacyFed)?
(h=k.toJSON(),h.server=l.server,h.resources=null,c(new w(h))):(a._pendingDfd=b.generateToken(b.findServerInfo(k.server),null,{serverUrl:a.resUrl_,token:k.token,ssl:k.ssl})).then(function(b){c(new w({userId:k.userId,server:l.server,token:b.token,expires:v.isDefined(b.expires)?Number(b.expires):null,ssl:!!b.ssl,isAdmin:a.admin_,validity:b.validity}))},d):(b._busy=null,h&&(a.options_.token=null),(a._pendingDfd=b.getCredential(n.replace(/\/?$/,"/sharing"),{resource:a.resUrl_,owningTenant:l.owningTenant,
token:h,error:e,prompt:f})).then(function(c){b._enqueue(a.resUrl_,a.sinfo_,a.options_,a,a.admin_)},function(a){d(a)}))},k=a.sinfo_.owningSystemUrl,m=this._isServerRsrc(a.resUrl_),l=a.sinfo_._restInfoDfd;l?l.then(function(c){var d=a.sinfo_;d.adminTokenServiceUrl=d._restInfoDfd.adminUrl_;d._restInfoDfd=null;d.tokenServiceUrl=q.getObject("authInfo.tokenServicesUrl",!1,c)||q.getObject("authInfo.tokenServiceUrl",!1,c)||q.getObject("tokenServiceUrl",!1,c);d.shortLivedTokenValidity=q.getObject("authInfo.shortLivedTokenValidity",
!1,c);d.currentVersion=c.currentVersion;d.owningTenant=c.owningTenant;(c=d.owningSystemUrl=c.owningSystemUrl)&&b._portals.push(c);m&&c?f():e()},function(){a.sinfo_._restInfoDfd=null;var b=Error("Unknown resource - could not find token service endpoint.");b.code="IdentityManagerBase.2";b.log=!!t.isDebug;d(b)}):m&&k?f():a.sinfo_._selfReq?a.sinfo_._selfReq.selfDfd.then(function(c){var d,e,f,h,g={};return c&&(d=c.user&&c.user.username,g.username=d,g.allSSL=c.allSSL,e=c.supportsOAuth,f=c.currentVersion,
"multitenant"===c.portalMode&&(h=c.customBaseUrl)),a.sinfo_.webTierAuth=!!d,d&&b.normalizeWebTierAuth?b.generateToken(a.sinfo_,null,{ssl:g.allSSL}).always(function(a){return g.portalToken=a&&a.token,g.tokenExpiration=a&&a.expires,g}):!d&&e&&4.4<=parseFloat(f)&&!b._doPortalSignIn(a.resUrl_)?b._generateOAuthInfo({portalUrl:a.sinfo_.server,customBaseUrl:h,owningTenant:a.sinfo_._selfReq.owningTenant}).always(function(){return g}):g}).always(function(b){a.sinfo_._selfReq=null;b?e(b.username,b.allSSL,b.portalToken,
b.tokenExpiration):e()}):e()},_generateOAuthInfo:function(a){var b,c,d=this,e=a.portalUrl,f=a.customBaseUrl,g=a.owningTenant;if(a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal){c=window.location.href;var m=c.indexOf("?");-1<m&&(c=c.slice(0,m));m=c.search(/\/(apps|home)\//);c=-1<m?c.slice(0,m):null}return a&&c?(this._hasTestedIfAppIsOnPortal=!0,b=y(c+"/sharing/rest",{query:{f:"json"},responseType:"json"}).then(function(){d.defaultOAuthInfo=new M({appId:"arcgisonline",
popup:!0,popupCallbackUrl:c+"/home/oauth-callback.html"})})):(b=new O,b.resolve(),b=b.promise),b.then(function(){return d.defaultOAuthInfo?(e=e.replace(/^http:/i,"https:"),y(e+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:g,client_id:d.defaultOAuthInfo.appId,redirect_uri:r.makeAbsolute(d.defaultOAuthInfo.popupCallbackUrl),f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(a){if(a.data.valid){var b=d.defaultOAuthInfo.clone();a.data.urlKey&&f?b.portalUrl="https://"+
a.data.urlKey+"."+f:b.portalUrl=e;d.oAuthInfos.push(b)}})):void 0})}});return w=R.createSubclass([K],{declaredClass:"esri.identity.Credential",constructor:function(a){a&&a._oAuthCred&&(this._oAuthCred=a._oAuthCred)},initialize:function(){this.resources=this.resources||[];v.isDefined(this.creationTime)||(this.creationTime=(new Date).getTime())},_oAuthCred:null,properties:{creationTime:{},expires:{},isAdmin:{},oAuthState:{},resources:{},scope:{},server:{},ssl:{},token:{},tokenRefreshBuffer:2,userId:{},
validity:{}},refreshToken:function(){var a,b,c=this,d=this.resources&&this.resources[0],e=m.id.findServerInfo(this.server),f=e&&e.owningSystemUrl,k=!!f&&"server"===this.scope,q=k&&G(e,m.id._legacyFed),l=k&&m.id.findServerInfo(f),h=e.webTierAuth,p=h&&m.id.normalizeWebTierAuth,u=A[this.server],u=u&&u[this.userId],r={username:this.userId,password:u};if((!h||p)&&(k&&!l&&g.some(m.id.serverInfos,function(a){return m.id._isIdProvider(f,a.server)&&(l=a),!!l}),a=l&&m.id.findCredential(l.server,this.userId),
!k||a)){if(q)return void a.refreshToken();if(k)b={serverUrl:d,token:a&&a.token,ssl:a&&a.ssl};else if(p)r=null,b={ssl:this.ssl};else{if(!u){var t;return d&&(d=m.id._sanitizeUrl(d),this._enqueued=1,t=m.id._enqueue(d,e,null,null,this.isAdmin,this),t.then(function(){c._enqueued=0;c.refreshServerTokens()}).then(null,function(){c._enqueued=0})),t}this.isAdmin&&(b={isAdmin:!0})}return m.id.generateToken(k?l:e,k?null:r,b).then(function(a){c.token=a.token;c.expires=v.isDefined(a.expires)?Number(a.expires):
null;c.creationTime=(new Date).getTime();c.validity=a.validity;c.emitTokenChange();c.refreshServerTokens()}).then(null,function(){})}},refreshServerTokens:function(){"portal"===this.scope&&g.forEach(m.id.credentials,function(a){var b=m.id.findServerInfo(a.server),c=b&&b.owningSystemUrl;a!==this&&a.userId===this.userId&&c&&"server"===a.scope&&(m.id._hasSameServerInstance(this.server,c)||m.id._isIdProvider(c,this.server))&&(G(b,m.id._legacyFed)?(a.token=this.token,a.expires=this.expires,a.creationTime=
this.creationTime,a.validity=this.validity,a.emitTokenChange()):a.refreshToken())},this)},emitTokenChange:function(a){clearTimeout(this._refreshTimer);var b=this.server&&m.id.findServerInfo(this.server),c=(b=b&&b.owningSystemUrl)&&m.id.findServerInfo(b);!1!==a&&(!b||"portal"===this.scope||c&&c.webTierAuth&&!m.id.normalizeWebTierAuth)&&(v.isDefined(this.expires)||v.isDefined(this.validity))&&this._startRefreshTimer();this.emit("token-change")},destroy:function(){this.userId=this.server=this.token=
this.expires=this.validity=this.resources=this.creationTime=null;this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);var a=g.indexOf(m.id.credentials,this);-1<a&&m.id.credentials.splice(a,1);this.emitTokenChange();this.emit("destroy")},toJSON:function(){var a=v.fixJson({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),b=this.resources;return b&&0<b.length&&
(a.resources=b.slice()),a},_startRefreshTimer:function(){clearTimeout(this._refreshTimer);var a=6E4*this.tokenRefreshBuffer,b=(this.validity?this.creationTime+6E4*this.validity:this.expires)-(new Date).getTime();0>b&&(b=0);this._refreshTimer=setTimeout(q.hitch(this,this.refreshToken),b>a?b-a:b)}}),z.Credential=w,z});