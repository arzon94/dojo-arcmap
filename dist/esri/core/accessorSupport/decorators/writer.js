//>>built
define(["require","exports","dojo/_base/lang","./property"],function(f,c,g,h){Object.defineProperty(c,"__esModule",{value:!0});c.writer=function(a,d){var e;return void 0===d?(d=a,e=[void 0]):e=Array.isArray(a)?a:[a],function(a,c,f){var k=a.constructor.prototype;e.forEach(function(b){b=h.propertyJSONMeta(a,b,d);b.write&&"object"!=typeof b.write&&(b.write={});g.setObject("write.writer",k[c],b)})}}});