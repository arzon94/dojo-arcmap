//>>built
define(["require","exports"],function(e,b){function c(a){return a?72*a/b.DPI:0}Object.defineProperty(b,"__esModule",{value:!0});var d=/^(\d+(\.\d+)?)\s*((px)|(pt))?$/i;b.DPI=96;b.pt2px=function(a){return a?a/72*b.DPI:0};b.px2pt=c;b.toPt=function(a){if("string"==typeof a){if(d.test(a)){a=a.match(d);var b=Number(a[1]);return"px"===(a[3]&&a[3].toLowerCase())?c(b):b}return console.warn("screenUtils.toPt: input not recognized!"),null}return a}});