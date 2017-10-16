// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define([],function(){"use strict";function r(r,t){function n(){this.constructor=r}n.prototype=t.prototype,r.prototype=new n}function t(r,n,e,u){this.message=r,this.expected=n,this.found=e,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}function n(r,n){function e(r,t){return{type:"literal",text:r,ignoreCase:t}}function u(r,t,n){return{type:"class",parts:r,inverted:t,ignoreCase:n}}function o(){return{type:"end"}}function i(r){return{type:"other",description:r}}function a(t){var n,e=no[t];if(e)return e;for(n=t-1;!no[n];)n--;for(e=no[n],e={line:e.line,column:e.column};t>n;)10===r.charCodeAt(n)?(e.line++,e.column=1):e.column++,n++;return no[t]=e,e}function s(r,t){var n=a(r),e=a(t);return{start:{offset:r,line:n.line,column:n.column},end:{offset:t,line:e.line,column:e.column}}}function c(r){eo>ro||(ro>eo&&(eo=ro,uo=[]),uo.push(r))}function f(r,n,e){return new t(t.buildMessage(r,n),r,n,e)}function l(){var r,t,n,e;return r=ro,t=qr(),t!==ut?(n=p(),n!==ut?(e=qr(),e!==ut?(to=r,t=at(n),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function v(){var r,t,n,e,u,o,i,a;if(r=ro,t=p(),t!==ut){for(n=[],e=ro,u=qr(),u!==ut?(o=kr(),o!==ut?(i=qr(),i!==ut?(a=p(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);e!==ut;)n.push(e),e=ro,u=qr(),u!==ut?(o=kr(),o!==ut?(i=qr(),i!==ut?(a=p(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);n!==ut?(to=r,t=st(t,n),r=t):(ro=r,r=ut)}else ro=r,r=ut;return r}function p(){var r,t,n,e,u,o,i,a;if(r=ro,t=h(),t!==ut){for(n=[],e=ro,u=qr(),u!==ut?(o=Lr(),o!==ut?(i=qr(),i!==ut?(a=h(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);e!==ut;)n.push(e),e=ro,u=qr(),u!==ut?(o=Lr(),o!==ut?(i=qr(),i!==ut?(a=h(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);n!==ut?(to=r,t=ct(t,n),r=t):(ro=r,r=ut)}else ro=r,r=ut;return r}function h(){var r,t,n,e,u,o,i,a;if(r=ro,t=d(),t!==ut){for(n=[],e=ro,u=qr(),u!==ut?(o=Er(),o!==ut?(i=qr(),i!==ut?(a=d(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);e!==ut;)n.push(e),e=ro,u=qr(),u!==ut?(o=Er(),o!==ut?(i=qr(),i!==ut?(a=d(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);n!==ut?(to=r,t=ct(t,n),r=t):(ro=r,r=ut)}else ro=r,r=ut;return r}function d(){var t,n,e,u,o;return t=ro,n=yr(),n===ut&&(n=ro,33===r.charCodeAt(ro)?(e=ft,ro++):(e=ut,0===oo&&c(lt)),e!==ut?(u=ro,oo++,61===r.charCodeAt(ro)?(o=vt,ro++):(o=ut,0===oo&&c(pt)),oo--,o===ut?u=void 0:(ro=u,u=ut),u!==ut?(e=[e,u],n=e):(ro=n,n=ut)):(ro=n,n=ut)),n!==ut?(e=qr(),e!==ut?(u=d(),u!==ut?(to=t,n=ht(u),t=n):(ro=t,t=ut)):(ro=t,t=ut)):(ro=t,t=ut),t===ut&&(t=b()),t}function b(){var r,t,n,e;return r=ro,t=T(),t!==ut?(n=qr(),n!==ut?(e=A(),e===ut&&(e=null),e!==ut?(to=r,t=dt(t,e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function A(){var r;return r=C(),r===ut&&(r=m(),r===ut&&(r=E(),r===ut&&(r=y(),r===ut&&(r=x())))),r}function C(){var r,t,n,e,u,o,i;if(r=ro,t=[],n=ro,e=qr(),e!==ut?(u=g(),u!==ut?(o=qr(),o!==ut?(i=T(),i!==ut?(e=[e,u,o,i],n=e):(ro=n,n=ut)):(ro=n,n=ut)):(ro=n,n=ut)):(ro=n,n=ut),n!==ut)for(;n!==ut;)t.push(n),n=ro,e=qr(),e!==ut?(u=g(),u!==ut?(o=qr(),o!==ut?(i=T(),i!==ut?(e=[e,u,o,i],n=e):(ro=n,n=ut)):(ro=n,n=ut)):(ro=n,n=ut)):(ro=n,n=ut);else t=ut;return t!==ut&&(to=r,t=bt(t)),r=t}function g(){var t;return r.substr(ro,2)===At?(t=At,ro+=2):(t=ut,0===oo&&c(Ct)),t===ut&&(62===r.charCodeAt(ro)?(t=gt,ro++):(t=ut,0===oo&&c(yt)),t===ut&&(r.substr(ro,2)===Et?(t=Et,ro+=2):(t=ut,0===oo&&c(Lt)),t===ut&&(r.substr(ro,2)===wt?(t=wt,ro+=2):(t=ut,0===oo&&c(xt)),t===ut&&(60===r.charCodeAt(ro)?(t=mt,ro++):(t=ut,0===oo&&c(Tt)),t===ut&&(61===r.charCodeAt(ro)?(t=vt,ro++):(t=ut,0===oo&&c(pt)),t===ut&&(r.substr(ro,2)===Nt?(t=Nt,ro+=2):(t=ut,0===oo&&c(Ft)))))))),t}function y(){var r,t,n,e,u,o;return r=ro,t=Ar(),t!==ut?(n=qr(),n!==ut?(e=yr(),e!==ut?(u=qr(),u!==ut?(o=T(),o!==ut?(to=r,t=Ot(t,o),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r===ut&&(r=ro,t=Ar(),t!==ut?(n=qr(),n!==ut?(e=T(),e!==ut?(to=r,t=_t(t,e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)),r}function E(){var r,t,n,e,u,o,i,a,s,c;return r=ro,t=yr(),t!==ut?(n=qr(),n!==ut?(e=wr(),e!==ut?(u=qr(),u!==ut?(o=T(),o!==ut?(i=qr(),i!==ut?(a=Er(),a!==ut?(s=qr(),s!==ut?(c=T(),c!==ut?(to=r,t=It(e,o,c),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r===ut&&(r=ro,t=wr(),t!==ut?(n=qr(),n!==ut?(e=T(),e!==ut?(u=qr(),u!==ut?(o=Er(),o!==ut?(i=qr(),i!==ut?(a=T(),a!==ut?(to=r,t=St(t,e,a),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)),r}function L(){var r,t,n,e,u;return r=ro,t=ro,n=yr(),n!==ut?(e=qr(),e!==ut?(u=Cr(),u!==ut?(n=[n,e,u],t=n):(ro=t,t=ut)):(ro=t,t=ut)):(ro=t,t=ut),t!==ut&&(to=r,t=Rt(t)),r=t,r===ut&&(r=Cr()),r}function w(){var r,t,n,e,u;return r=ro,t=ro,n=yr(),n!==ut?(e=qr(),e!==ut?(u=br(),u!==ut?(n=[n,e,u],t=n):(ro=t,t=ut)):(ro=t,t=ut)):(ro=t,t=ut),t!==ut&&(to=r,t=Rt(t)),r=t,r===ut&&(r=br()),r}function x(){var r,t,n,e,u,o,i,a;return r=ro,t=L(),t!==ut?(n=qr(),n!==ut?(e=Q(),e!==ut?(u=qr(),u!==ut?(o=gr(),o!==ut?(i=qr(),i!==ut?(a=V(),a!==ut?(to=r,t=Mt(t,e,a),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r===ut&&(r=ro,t=L(),t!==ut?(n=qr(),n!==ut?(e=Q(),e!==ut?(to=r,t=Dt(t,e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)),r}function m(){var r,t,n,e,u,o,i,a;return r=ro,t=w(),t!==ut?(n=qr(),n!==ut?(e=Kr(),e!==ut?(u=qr(),u!==ut?(o=v(),o!==ut?(i=qr(),i!==ut?(a=Xr(),a!==ut?(to=r,t=Ht(t,o),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r===ut&&(r=ro,t=w(),t!==ut?(n=qr(),n!==ut?(e=Kr(),e!==ut?(u=qr(),u!==ut?(o=Xr(),o!==ut?(to=r,t=Ut(t),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r===ut&&(r=ro,t=w(),t!==ut?(n=qr(),n!==ut?(e=B(),e!==ut?(to=r,t=Bt(t,e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut))),r}function T(){var r,t,n,e,u,o,i,a;if(r=ro,t=F(),t!==ut){for(n=[],e=ro,u=qr(),u!==ut?(o=N(),o!==ut?(i=qr(),i!==ut?(a=F(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);e!==ut;)n.push(e),e=ro,u=qr(),u!==ut?(o=N(),o!==ut?(i=qr(),i!==ut?(a=F(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);n!==ut?(to=r,t=ct(t,n),r=t):(ro=r,r=ut)}else ro=r,r=ut;return r}function N(){var t;return 43===r.charCodeAt(ro)?(t=zt,ro++):(t=ut,0===oo&&c(Gt)),t===ut&&(45===r.charCodeAt(ro)?(t=Pt,ro++):(t=ut,0===oo&&c(Zt))),t}function F(){var r,t,n,e,u,o,i,a;if(r=ro,t=_(),t!==ut){for(n=[],e=ro,u=qr(),u!==ut?(o=O(),o!==ut?(i=qr(),i!==ut?(a=_(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);e!==ut;)n.push(e),e=ro,u=qr(),u!==ut?(o=O(),o!==ut?(i=qr(),i!==ut?(a=_(),a!==ut?(u=[u,o,i,a],e=u):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut)):(ro=e,e=ut);n!==ut?(to=r,t=jt(t,n),r=t):(ro=r,r=ut)}else ro=r,r=ut;return r}function O(){var t;return 42===r.charCodeAt(ro)?(t=Wt,ro++):(t=ut,0===oo&&c(Yt)),t===ut&&(47===r.charCodeAt(ro)?(t=kt,ro++):(t=ut,0===oo&&c(Kt))),t}function _(){var r,t,n,e,u,o;return r=k(),r===ut&&(r=z(),r===ut&&(r=G(),r===ut&&(r=P(),r===ut&&(r=j(),r===ut&&(r=W(),r===ut&&(r=$(),r===ut&&(r=I(),r===ut&&(r=B(),r===ut&&(r=ro,t=Kr(),t!==ut?(n=qr(),n!==ut?(e=p(),e!==ut?(u=qr(),u!==ut?(o=Xr(),o!==ut?(to=r,t=Xt(e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)))))))))),r}function I(){var r,t;return r=ro,t=S(),t!==ut&&(to=r,t=qt(t)),r=t}function S(){var r,t;return r=ro,t=R(),t!==ut&&(to=r,t=Jt(t)),r=t}function R(){var r,t,n,e;if(r=ro,t=D(),t!==ut){for(n=[],e=U();e!==ut;)n.push(e),e=U();n!==ut?(to=r,t=Qt(t,n),r=t):(ro=r,r=ut)}else ro=r,r=ut;return r}function M(){var r,t,n,e;if(r=ro,t=D(),t!==ut){for(n=[],e=H();e!==ut;)n.push(e),e=H();n!==ut?(to=r,t=Qt(t,n),r=t):(ro=r,r=ut)}else ro=r,r=ut;return r}function D(){var t;return Vt.test(r.charAt(ro))?(t=r.charAt(ro),ro++):(t=ut,0===oo&&c($t)),t}function H(){var t;return rn.test(r.charAt(ro))?(t=r.charAt(ro),ro++):(t=ut,0===oo&&c(tn)),t}function U(){var t;return nn.test(r.charAt(ro))?(t=r.charAt(ro),ro++):(t=ut,0===oo&&c(en)),t}function B(){var t,n,e,u;return t=ro,n=ro,64===r.charCodeAt(ro)?(e=un,ro++):(e=ut,0===oo&&c(on)),e!==ut?(u=M(),u!==ut?(e=[e,u],n=e):(ro=n,n=ut)):(ro=n,n=ut),n!==ut&&(to=t,n=an(n)),t=n}function z(){var r,t,n,e,u,o,i,a,s,c,f,l;return r=ro,t=Nr(),t!==ut?(n=qr(),n!==ut?(e=Kr(),e!==ut?(u=qr(),u!==ut?(o=Y(),o!==ut?(i=qr(),i!==ut?(a=xr(),a!==ut?(s=qr(),s!==ut?(c=p(),c!==ut?(f=qr(),f!==ut?(l=Xr(),l!==ut?(to=r,t=sn(o,c),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function G(){var r,t,n,e,u,o,i,a,s,c,f,l,v,h,d,b;return r=ro,t=Tr(),t!==ut?(n=qr(),n!==ut?(e=Kr(),e!==ut?(u=qr(),u!==ut?(o=p(),o!==ut?(i=qr(),i!==ut?(a=xr(),a!==ut?(s=qr(),s!==ut?(c=p(),c!==ut?(f=qr(),f!==ut?(l=ro,v=mr(),v!==ut?(h=qr(),h!==ut?(d=p(),d!==ut?(b=qr(),b!==ut?(v=[v,h,d,b],l=v):(ro=l,l=ut)):(ro=l,l=ut)):(ro=l,l=ut)):(ro=l,l=ut),l===ut&&(l=null),l!==ut?(v=Xr(),v!==ut?(to=r,t=cn(o,c,l),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function P(){var r,t,n,e,u,o,i,a,s,c,f,l,v,h;return r=ro,t=Fr(),t!==ut?(n=qr(),n!==ut?(e=Kr(),e!==ut?(u=qr(),u!==ut?(o=Z(),o===ut&&(o=null),o!==ut?(i=qr(),i!==ut?(a=p(),a!==ut?(s=qr(),s!==ut?(c=xr(),c!==ut?(f=qr(),f!==ut?(l=p(),l!==ut?(v=qr(),v!==ut?(h=Xr(),h!==ut?(to=r,t=fn(o,a,l),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r===ut&&(r=ro,t=Fr(),t!==ut?(n=qr(),n!==ut?(e=Kr(),e!==ut?(u=qr(),u!==ut?(o=Z(),o===ut&&(o=null),o!==ut?(i=qr(),i!==ut?(a=p(),a!==ut?(s=qr(),s!==ut?(c=Xr(),c!==ut?(to=r,t=ln(o,a),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)),r}function Z(){var r;return r=Sr(),r===ut&&(r=Rr(),r===ut&&(r=Mr())),r}function j(){var r,t,n,e,u,o,i,a,s,c,f,l;return r=ro,t=Or(),t!==ut?(n=qr(),n!==ut?(e=Kr(),e!==ut?(u=qr(),u!==ut?(o=p(),o!==ut?(i=qr(),i!==ut?(a=br(),a!==ut?(s=qr(),s!==ut?(c=p(),c!==ut?(f=qr(),f!==ut?(l=Xr(),l!==ut?(to=r,t=vn(o,c),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function W(){var r,t,n,e,u,o,i,a;return r=ro,t=Qr(),t!==ut?(n=qr(),n!==ut?(e=Kr(),e!==ut?(u=qr(),u!==ut?(o=v(),o===ut&&(o=null),o!==ut?(i=qr(),i!==ut?(a=Xr(),a!==ut?(to=r,t=pn(t,o),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function Y(){var r;return r=Dr(),r===ut&&(r=Hr(),r===ut&&(r=Ur(),r===ut&&(r=Br(),r===ut&&(r=zr(),r===ut&&(r=Gr()))))),r}function k(){var r;return r=V(),r===ut&&(r=or(),r===ut&&(r=J(),r===ut&&(r=q(),r===ut&&(r=X(),r===ut&&(r=K()))))),r}function K(){var r,t,n,e;return r=ro,t=_r(),t!==ut?(n=qr(),n!==ut?(e=Q(),e!==ut?(to=r,t=hn(e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function X(){var r,t,n,e;return r=ro,t=Ir(),t!==ut?(n=qr(),n!==ut?(e=Q(),e!==ut?(to=r,t=dn(e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function q(){var r,t;return r=ro,t=pr(),t!==ut&&(to=r,t=bn()),r=t}function J(){var r,t;return r=ro,t=hr(),t!==ut&&(to=r,t=An()),r=t,r===ut&&(r=ro,t=dr(),t!==ut&&(to=r,t=Cn()),r=t),r}function Q(){var r;return r=V(),r===ut&&(r=B()),r}function V(){var t,n,e,u,o;if(t=ro,39===r.charCodeAt(ro)?(n=gn,ro++):(n=ut,0===oo&&c(yn)),n===ut&&(r.substr(ro,2)===En?(n=En,ro+=2):(n=ut,0===oo&&c(Ln))),n!==ut){for(e=[],u=ro,r.substr(ro,2)===wn?(o=wn,ro+=2):(o=ut,0===oo&&c(xn)),o!==ut&&(to=u,o=mn()),u=o,u===ut&&(Tn.test(r.charAt(ro))?(u=r.charAt(ro),ro++):(u=ut,0===oo&&c(Nn)));u!==ut;)e.push(u),u=ro,r.substr(ro,2)===wn?(o=wn,ro+=2):(o=ut,0===oo&&c(xn)),o!==ut&&(to=u,o=mn()),u=o,u===ut&&(Tn.test(r.charAt(ro))?(u=r.charAt(ro),ro++):(u=ut,0===oo&&c(Nn)));e!==ut?(39===r.charCodeAt(ro)?(u=gn,ro++):(u=ut,0===oo&&c(yn)),u!==ut?(to=t,n=Fn(e),t=n):(ro=t,t=ut)):(ro=t,t=ut)}else ro=t,t=ut;return t}function $(){var r;return r=rr(),r===ut&&(r=tr()),r}function rr(){var r,t,n,e,u,o,i,a,s,c;if(r=ro,t=Pr(),t!==ut)if(n=qr(),n!==ut)if(e=p(),e!==ut)if(u=qr(),u!==ut){for(o=[],i=er();i!==ut;)o.push(i),i=er();o!==ut?(i=qr(),i!==ut?(a=Zr(),a!==ut?(to=r,t=On(e,o),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)}else ro=r,r=ut;else ro=r,r=ut;else ro=r,r=ut;else ro=r,r=ut;if(r===ut)if(r=ro,t=Pr(),t!==ut)if(n=qr(),n!==ut)if(e=p(),e!==ut)if(u=qr(),u!==ut){for(o=[],i=er();i!==ut;)o.push(i),i=er();o!==ut?(i=qr(),i!==ut?(a=ur(),a!==ut?(s=qr(),s!==ut?(c=Zr(),c!==ut?(to=r,t=_n(e,o,a),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)}else ro=r,r=ut;else ro=r,r=ut;else ro=r,r=ut;else ro=r,r=ut;return r}function tr(){var r,t,n,e,u,o,i,a;if(r=ro,t=Pr(),t!==ut)if(n=qr(),n!==ut){for(e=[],u=nr();u!==ut;)e.push(u),u=nr();e!==ut?(u=qr(),u!==ut?(o=Zr(),o!==ut?(to=r,t=In(e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)}else ro=r,r=ut;else ro=r,r=ut;if(r===ut)if(r=ro,t=Pr(),t!==ut)if(n=qr(),n!==ut){for(e=[],u=nr();u!==ut;)e.push(u),u=nr();e!==ut?(u=qr(),u!==ut?(o=ur(),o!==ut?(i=qr(),i!==ut?(a=Zr(),a!==ut?(to=r,t=Sn(e,o),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)}else ro=r,r=ut;else ro=r,r=ut;return r}function nr(){var r,t,n,e,u,o,i,a;return r=ro,t=jr(),t!==ut?(n=qr(),n!==ut?(e=p(),e!==ut?(u=qr(),u!==ut?(o=Wr(),o!==ut?(i=qr(),i!==ut?(a=p(),a!==ut?(to=r,t=Rn(e,a),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function er(){var r,t,n,e,u,o,i,a;return r=ro,t=jr(),t!==ut?(n=qr(),n!==ut?(e=p(),e!==ut?(u=qr(),u!==ut?(o=Wr(),o!==ut?(i=qr(),i!==ut?(a=p(),a!==ut?(to=r,t=Rn(e,a),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function ur(){var r,t,n,e;return r=ro,t=Yr(),t!==ut?(n=qr(),n!==ut?(e=p(),e!==ut?(to=r,t=Mn(e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r}function or(){var r,t,n,e;return r=ro,t=ir(),t!==ut?(n=ro,oo++,e=D(),oo--,e===ut?n=void 0:(ro=n,n=ut),n!==ut?(to=r,t=Dn(t),r=t):(ro=r,r=ut)):(ro=r,r=ut),r}function ir(){var r,t,n,e;return r=ro,t=ar(),t!==ut?(n=sr(),n!==ut?(e=cr(),e!==ut?(to=r,t=Hn(t,n,e),r=t):(ro=r,r=ut)):(ro=r,r=ut)):(ro=r,r=ut),r===ut&&(r=ro,t=ar(),t!==ut?(n=sr(),n!==ut?(to=r,t=Un(t,n),r=t):(ro=r,r=ut)):(ro=r,r=ut),r===ut&&(r=ro,t=ar(),t!==ut?(n=cr(),n!==ut?(to=r,t=Bn(t,n),r=t):(ro=r,r=ut)):(ro=r,r=ut),r===ut&&(r=ro,t=ar(),t!==ut&&(to=r,t=zn(t)),r=t))),r}function ar(){var t,n,e;return t=fr(),t===ut&&(t=ro,45===r.charCodeAt(ro)?(n=Pt,ro++):(n=ut,0===oo&&c(Zt)),n===ut&&(43===r.charCodeAt(ro)?(n=zt,ro++):(n=ut,0===oo&&c(Gt))),n!==ut?(e=fr(),e!==ut?(to=t,n=Gn(n,e),t=n):(ro=t,t=ut)):(ro=t,t=ut)),t}function sr(){var t,n,e;return t=ro,46===r.charCodeAt(ro)?(n=Pn,ro++):(n=ut,0===oo&&c(Zn)),n!==ut?(e=fr(),e===ut&&(e=null),e!==ut?(to=t,n=jn(e),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function cr(){var r,t,n;return r=ro,t=vr(),t!==ut?(n=fr(),n!==ut?(to=r,t=Wn(t,n),r=t):(ro=r,r=ut)):(ro=r,r=ut),r}function fr(){var r,t,n;if(r=ro,t=[],n=lr(),n!==ut)for(;n!==ut;)t.push(n),n=lr();else t=ut;return t!==ut&&(to=r,t=Yn(t)),r=t}function lr(){var t;return kn.test(r.charAt(ro))?(t=r.charAt(ro),ro++):(t=ut,0===oo&&c(Kn)),t}function vr(){var t,n,e;return t=ro,Xn.test(r.charAt(ro))?(n=r.charAt(ro),ro++):(n=ut,0===oo&&c(qn)),n!==ut?(Jn.test(r.charAt(ro))?(e=r.charAt(ro),ro++):(e=ut,0===oo&&c(Qn)),e===ut&&(e=null),e!==ut?(to=t,n=Vn(n,e),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function pr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===$n?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(re)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(n=[n,e],t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function hr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===te?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(ne)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(n=[n,e],t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function dr(){var t,n,e,u;return t=ro,r.substr(ro,5).toLowerCase()===ee?(n=r.substr(ro,5),ro+=5):(n=ut,0===oo&&c(ue)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(n=[n,e],t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function br(){var t,n,e,u;return t=ro,r.substr(ro,2).toLowerCase()===oe?(n=r.substr(ro,2),ro+=2):(n=ut,0===oo&&c(ie)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=ae(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Ar(){var t,n,e,u;return t=ro,r.substr(ro,2).toLowerCase()===se?(n=r.substr(ro,2),ro+=2):(n=ut,0===oo&&c(ce)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=fe(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Cr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===le?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(ve)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=pe(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function gr(){var t,n,e,u;return t=ro,r.substr(ro,6).toLowerCase()===he?(n=r.substr(ro,6),ro+=6):(n=ut,0===oo&&c(de)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=be(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function yr(){var t,n,e,u;return t=ro,r.substr(ro,3).toLowerCase()===Ae?(n=r.substr(ro,3),ro+=3):(n=ut,0===oo&&c(Ce)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=ge(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Er(){var t,n,e,u;return t=ro,r.substr(ro,3).toLowerCase()===ye?(n=r.substr(ro,3),ro+=3):(n=ut,0===oo&&c(Ee)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Le(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Lr(){var t,n,e,u;return t=ro,r.substr(ro,2).toLowerCase()===we?(n=r.substr(ro,2),ro+=2):(n=ut,0===oo&&c(xe)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=me(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function wr(){var t,n,e,u;return t=ro,r.substr(ro,7).toLowerCase()===Te?(n=r.substr(ro,7),ro+=7):(n=ut,0===oo&&c(Ne)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Fe(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function xr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===Oe?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(_e)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Ie(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function mr(){var t,n,e,u;return t=ro,r.substr(ro,3).toLowerCase()===Se?(n=r.substr(ro,3),ro+=3):(n=ut,0===oo&&c(Re)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Me(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Tr(){var t,n,e,u;return t=ro,r.substr(ro,9).toLowerCase()===De?(n=r.substr(ro,9),ro+=9):(n=ut,0===oo&&c(He)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Ue(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Nr(){var t,n,e,u;return t=ro,r.substr(ro,7).toLowerCase()===Be?(n=r.substr(ro,7),ro+=7):(n=ut,0===oo&&c(ze)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Ge(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Fr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===Pe?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(Ze)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=je(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Or(){var t,n,e,u;return t=ro,r.substr(ro,8).toLowerCase()===We?(n=r.substr(ro,8),ro+=8):(n=ut,0===oo&&c(Ye)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=ke(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function _r(){var t,n,e,u;return t=ro,r.substr(ro,9).toLowerCase()===Ke?(n=r.substr(ro,9),ro+=9):(n=ut,0===oo&&c(Xe)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=qe(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Ir(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===Je?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(Qe)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Ve(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Sr(){var t,n,e,u;return t=ro,r.substr(ro,7).toLowerCase()===$e?(n=r.substr(ro,7),ro+=7):(n=ut,0===oo&&c(ru)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=tu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Rr(){var t,n,e,u;return t=ro,r.substr(ro,8).toLowerCase()===nu?(n=r.substr(ro,8),ro+=8):(n=ut,0===oo&&c(eu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=uu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Mr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===ou?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(iu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=au(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Dr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===su?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(cu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=fu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Hr(){var t,n,e,u;return t=ro,r.substr(ro,5).toLowerCase()===lu?(n=r.substr(ro,5),ro+=5):(n=ut,0===oo&&c(vu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=pu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Ur(){var t,n,e,u;return t=ro,r.substr(ro,3).toLowerCase()===hu?(n=r.substr(ro,3),ro+=3):(n=ut,0===oo&&c(du)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=bu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Br(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===Au?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(Cu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=gu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function zr(){var t,n,e,u;return t=ro,r.substr(ro,6).toLowerCase()===yu?(n=r.substr(ro,6),ro+=6):(n=ut,0===oo&&c(Eu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Lu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Gr(){var t,n,e,u;return t=ro,r.substr(ro,6).toLowerCase()===wu?(n=r.substr(ro,6),ro+=6):(n=ut,0===oo&&c(xu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=mu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Pr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===Tu?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(Nu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Fu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Zr(){var t,n,e,u;return t=ro,r.substr(ro,3).toLowerCase()===Ou?(n=r.substr(ro,3),ro+=3):(n=ut,0===oo&&c(_u)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Iu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function jr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===Su?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(Ru)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Mu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Wr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===Du?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(Hu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Uu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function Yr(){var t,n,e,u;return t=ro,r.substr(ro,4).toLowerCase()===Bu?(n=r.substr(ro,4),ro+=4):(n=ut,0===oo&&c(zu)),n!==ut?(e=ro,oo++,u=H(),oo--,u===ut?e=void 0:(ro=e,e=ut),e!==ut?(to=t,n=Gu(),t=n):(ro=t,t=ut)):(ro=t,t=ut),t}function kr(){var t;return 44===r.charCodeAt(ro)?(t=Pu,ro++):(t=ut,0===oo&&c(Zu)),t}function Kr(){var t;return 40===r.charCodeAt(ro)?(t=ju,ro++):(t=ut,0===oo&&c(Wu)),t}function Xr(){var t;return 41===r.charCodeAt(ro)?(t=Yu,ro++):(t=ut,0===oo&&c(ku)),t}function qr(){var r,t;for(r=[],t=Jr();t!==ut;)r.push(t),t=Jr();return r}function Jr(){var t;return Ku.test(r.charAt(ro))?(t=r.charAt(ro),ro++):(t=ut,0===oo&&c(Xu)),t}function Qr(){var t,n,e,u;if(t=ro,n=M(),n!==ut&&(to=t,n=Jt(n)),t=n,t===ut)if(t=ro,96===r.charCodeAt(ro)?(n=qu,ro++):(n=ut,0===oo&&c(Ju)),n!==ut){if(e=[],Qu.test(r.charAt(ro))?(u=r.charAt(ro),ro++):(u=ut,0===oo&&c(Vu)),u!==ut)for(;u!==ut;)e.push(u),Qu.test(r.charAt(ro))?(u=r.charAt(ro),ro++):(u=ut,0===oo&&c(Vu));else e=ut;e!==ut?(96===r.charCodeAt(ro)?(u=qu,ro++):(u=ut,0===oo&&c(Ju)),u!==ut?(to=t,n=$u(e),t=n):(ro=t,t=ut)):(ro=t,t=ut)}else ro=t,t=ut;return t}function Vr(r,t){return{type:"unary_expr",operator:r,expr:t}}function $r(r,t,n,e){var u={type:"binary_expr",operator:r,left:t,right:n};return void 0!==e&&(u.escape=e),u}function rt(r,t){for(var n=[r],e=0;e<t.length;e++)n.push(t[e][3]);return n}function tt(r,t,n){var e=rt(r,t);return e}function nt(r,t){for(var n=r,e=0;e<t.length;e++)n=$r(t[e][1],n,t[e][3]);return n}n=void 0!==n?n:{};var et,ut={},ot={start:l},it=l,at=function(r){return r},st=function(r,t){var n={type:"expr_list"},e=tt(r,t,n);return n.value=e,n},ct=function(r,t){return nt(r,t)},ft="!",lt=e("!",!1),vt="=",pt=e("=",!1),ht=function(r){return Vr("NOT",r)},dt=function(r,t){if(""==t||void 0==t||null==t)return r;var n=null;return n="arithmetic"==t.type?nt(r,t.tail):$r(t.op,r,t.right,t.escape)},bt=function(r){return{type:"arithmetic",tail:r}},At=">=",Ct=e(">=",!1),gt=">",yt=e(">",!1),Et="<=",Lt=e("<=",!1),wt="<>",xt=e("<>",!1),mt="<",Tt=e("<",!1),Nt="!=",Ft=e("!=",!1),Ot=function(r,t){return{op:r+"NOT",right:t}},_t=function(r,t){return{op:r,right:t}},It=function(r,t,n){return{op:"NOT"+r,right:{type:"expr_list",value:[t,n]}}},St=function(r,t,n){return{op:r,right:{type:"expr_list",value:[t,n]}}},Rt=function(r){return r[0]+" "+r[2]},Mt=function(r,t,n){return{op:r,right:t,escape:n.value}},Dt=function(r,t){return{op:r,right:t,escape:""}},Ht=function(r,t){return{op:r,right:t}},Ut=function(r){return{op:r,right:{type:"expr_list",value:[]}}},Bt=function(r,t){return{op:r,right:t}},zt="+",Gt=e("+",!1),Pt="-",Zt=e("-",!1),jt=function(r,t){return nt(r,t)},Wt="*",Yt=e("*",!1),kt="/",Kt=e("/",!1),Xt=function(r){return r.paren=!0,r},qt=function(r){return{type:"column_ref",table:"",column:r}},Jt=function(r){return r},Qt=function(r,t){return r+t.join("")},Vt=/^[A-Za-z_\x80-\uFFFF]/,$t=u([["A","Z"],["a","z"],"_",["","￿"]],!1,!1),rn=/^[A-Za-z0-9_]/,tn=u([["A","Z"],["a","z"],["0","9"],"_"],!1,!1),nn=/^[A-Za-z0-9_.\x80-\uFFFF]/,en=u([["A","Z"],["a","z"],["0","9"],"_",".",["","￿"]],!1,!1),un="@",on=e("@",!1),an=function(r){var t={type:"param",value:r[1]};return t},sn=function(r,t){return{type:"function",name:"extract",args:{type:"expr_list",value:[{type:"string",value:r},t]}}},cn=function(r,t,n){return{type:"function",name:"substring",args:{type:"expr_list",value:n?[r,t,n[2]]:[r,t]}}},fn=function(r,t,n){var e={type:"string",value:null==r?"BOTH":r};return{type:"function",name:"trim",args:{type:"expr_list",value:[e,t,n]}}},ln=function(r,t){var n={type:"string",value:null==r?"BOTH":r};return{type:"function",name:"trim",args:{type:"expr_list",value:[n,t]}}},vn=function(r,t){return{type:"function",name:"position",args:{type:"expr_list",value:[r,t]}}},pn=function(r,t){return{type:"function",name:r,args:t?t:{type:"expr_list",value:[]}}},hn=function(r){return{type:"timestamp",value:r.value}},dn=function(r){return{type:"date",value:r.value}},bn=function(){return{type:"null",value:null}},An=function(){return{type:"bool",value:!0}},Cn=function(){return{type:"bool",value:!1}},gn="'",yn=e("'",!1),En="N'",Ln=e("N'",!1),wn="''",xn=e("''",!1),mn=function(){return"'"},Tn=/^[^']/,Nn=u(["'"],!0,!1),Fn=function(r){return{type:"string",value:r.join("")}},On=function(r,t){return{type:"case_expression",format:"simple",operand:r,clauses:t,"else":null}},_n=function(r,t,n){return{type:"case_expression",format:"simple",operand:r,clauses:t,"else":n.value}},In=function(r){return{type:"case_expression",format:"searched",clauses:r,"else":null}},Sn=function(r,t){return{type:"case_expression",format:"searched",clauses:r,"else":t.value}},Rn=function(r,t){return{type:"when_clause",operand:r,value:t}},Mn=function(r){return{type:"else_clause",value:r}},Dn=function(r){return{type:"number",value:r}},Hn=function(r,t,n){return parseFloat(r+t+n)},Un=function(r,t){return parseFloat(r+t)},Bn=function(r,t){return parseFloat(r+t)},zn=function(r){return parseFloat(r)},Gn=function(r,t){return r[0]+t},Pn=".",Zn=e(".",!1),jn=function(r){return"."+(null!=r?r:"")},Wn=function(r,t){return r+t},Yn=function(r){return r.join("")},kn=/^[0-9]/,Kn=u([["0","9"]],!1,!1),Xn=/^[eE]/,qn=u(["e","E"],!1,!1),Jn=/^[+\-]/,Qn=u(["+","-"],!1,!1),Vn=function(r,t){return"e"+(null===t?"":t)},$n="null",re=e("NULL",!0),te="true",ne=e("TRUE",!0),ee="false",ue=e("FALSE",!0),oe="in",ie=e("IN",!0),ae=function(){return"IN"},se="is",ce=e("IS",!0),fe=function(){return"IS"},le="like",ve=e("LIKE",!0),pe=function(){return"LIKE"},he="escape",de=e("ESCAPE",!0),be=function(){return"ESCAPE"},Ae="not",Ce=e("NOT",!0),ge=function(){return"NOT"},ye="and",Ee=e("AND",!0),Le=function(){return"AND"},we="or",xe=e("OR",!0),me=function(){return"OR"},Te="between",Ne=e("BETWEEN",!0),Fe=function(){return"BETWEEN"},Oe="from",_e=e("FROM",!0),Ie=function(){return"FROM"},Se="for",Re=e("FOR",!0),Me=function(){return"FOR"},De="substring",He=e("SUBSTRING",!0),Ue=function(){return"SUBSTRING"},Be="extract",ze=e("EXTRACT",!0),Ge=function(){return"EXTRACT"},Pe="trim",Ze=e("TRIM",!0),je=function(){return"TRIM"},We="position",Ye=e("POSITION",!0),ke=function(){return"POSITION"},Ke="timestamp",Xe=e("TIMESTAMP",!0),qe=function(){return"TIMESTAMP"},Je="date",Qe=e("DATE",!0),Ve=function(){return"DATE"},$e="leading",ru=e("LEADING",!0),tu=function(){return"LEADING"},nu="trailing",eu=e("TRAILING",!0),uu=function(){return"TRAILING"},ou="both",iu=e("BOTH",!0),au=function(){return"BOTH"},su="year",cu=e("YEAR",!0),fu=function(){return"YEAR"},lu="month",vu=e("MONTH",!0),pu=function(){return"MONTH"},hu="day",du=e("DAY",!0),bu=function(){return"DAY"},Au="hour",Cu=e("HOUR",!0),gu=function(){return"HOUR"},yu="minute",Eu=e("MINUTE",!0),Lu=function(){return"MINUTE"},wu="second",xu=e("SECOND",!0),mu=function(){return"SECOND"},Tu="case",Nu=e("CASE",!0),Fu=function(){return"CASE"},Ou="end",_u=e("END",!0),Iu=function(){return"END"},Su="when",Ru=e("WHEN",!0),Mu=function(){return"WHEN"},Du="then",Hu=e("THEN",!0),Uu=function(){return"THEN"},Bu="else",zu=e("ELSE",!0),Gu=function(){return"ELSE"},Pu=",",Zu=e(",",!1),ju="(",Wu=e("(",!1),Yu=")",ku=e(")",!1),Ku=/^[ \t\n\r]/,Xu=u([" ","	","\n","\r"],!1,!1),qu="`",Ju=e("`",!1),Qu=/^[^`]/,Vu=u(["`"],!0,!1),$u=function(r){return r.join("")},ro=0,to=0,no=[{line:1,column:1}],eo=0,uo=[],oo=0;if("startRule"in n){if(!(n.startRule in ot))throw new Error("Can't start parsing from rule \""+n.startRule+'".');it=ot[n.startRule]}if(et=it(),et!==ut&&ro===r.length)return et;throw et!==ut&&ro<r.length&&c(o()),f(uo,eo<r.length?r.charAt(eo):null,eo<r.length?s(eo,eo+1):s(eo,eo))}return r(t,Error),t.buildMessage=function(r,t){function n(r){return r.charCodeAt(0).toString(16).toUpperCase()}function e(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+n(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+n(r)})}function u(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+n(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+n(r)})}function o(r){return s[r.type](r)}function i(r){var t,n,e=new Array(r.length);for(t=0;t<r.length;t++)e[t]=o(r[t]);if(e.sort(),e.length>0){for(t=1,n=1;t<e.length;t++)e[t-1]!==e[t]&&(e[n]=e[t],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}function a(r){return r?'"'+e(r)+'"':"end of input"}var s={literal:function(r){return'"'+e(r.text)+'"'},"class":function(r){var t,n="";for(t=0;t<r.parts.length;t++)n+=r.parts[t]instanceof Array?u(r.parts[t][0])+"-"+u(r.parts[t][1]):u(r.parts[t]);return"["+(r.inverted?"^":"")+n+"]"},any:function(r){return"any character"},end:function(r){return"end of input"},other:function(r){return r.description}};return"Expected "+i(r)+" but "+a(t)+" found."},{SyntaxError:t,parse:n}});