//>>built
define(["require","exports","./propUtils"],function(e,a,d){Object.defineProperty(a,"__esModule",{value:!0});a.vmEvent=function(c){return function(b){b._delegatedEventNames||(b._delegatedEventNames=[]);var a=Array.isArray(c)?c:d.splitProps(c);b._delegatedEventNames=b._delegatedEventNames.concat(a)}}});