//>>built
define(["dojo","dijit","dojox","dojo/require!dojox/help/_base"],function(b,l,h){b.provide("dojox.help.console");b.require("dojox.help._base");b.mixin(h.help,{_plainText:function(a){return a.replace(/(<[^>]*>|&[^;]{2,6};)/g,"")},_displayLocated:function(a){b.forEach(a,function(a){})},_displayHelp:function(a,c){if(a){c="Help for: "+c.name;for(var d=0;d<c.length;d++);}else if(c)for(d in c)if(a=c[d],("returns"!=d||"Function"==c.type||"Constructor"==c.type)&&a&&(!b.isArray(a)||a.length))if(a=b.isString(a)?
h.help._plainText(a):a,"returns"==d){var f=b.map(a.types||[],"return item.title;").join("|");a.summary&&(f&&(f+=": "),f+=h.help._plainText(a.summary))}else if("parameters"==d)for(var f=0,g;g=a[f];f++){b.map(g.types,"return item.title").join("|");var e="";g.optional&&(e+="Optional. ");g.repating&&(e+="Repeating. ");if(e+=h.help._plainText(g.summary))for(var e="  - "+e,k=0;k<g.name.length;k++)e=" "+e}}});h.help.init()});