//>>built
define("dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style dojo/html dojo/keys dojo/on dojo/query dojo/sniff dojo/string dstore/Memory dijit/focus dijit/form/TextBox dijit/registry dijit/Tooltip dijit/_OnDijitClickMixin dijit/_TemplatedMixin ./Widgette dgrid/OnDemandGrid dgrid/Selection dgrid/Keyboard ../core/lang dojo/i18n!./Tags/nls/Tags dojo/NodeList-traverse dojo/NodeList-manipulate".split(" "),function(e,r,f,d,h,t,k,p,g,u,q,v,m,y,z,w,A,B,C,D,E,F,x,G){return C.createSubclass([A,
B],{declaredClass:"esri.widgets.Tags",templateString:'\x3cdiv class\x3d"${baseClass}"\x3e\x3c/div\x3e',baseClass:"esri-tags",constructor:function(a){this._idProperty="tag";this._tags=[];this._selRows=[];this._CHOICE_ALL_SELECTOR=this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE+this._CSS_STYLES.ALL_SELECTOR;this._CHOICE_FOCUS=this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.SEARCH_CHOICE_FOCUS;this._CHOICE_FOCUS_ALL=this._CHOICE_FOCUS+this._CSS_STYLES.ALL_SELECTOR},postMixInProperties:function(){this.inherited(arguments);
var a=(new Date).getTime();this._tagsId="userTags-"+a;this._gridId="grid-"+a;this._filterId="filter-"+a;this.i18n=G},postCreate:function(){this._attachmentNode=d.create("div",{id:this._tagsId,className:"grid_1"},this.domNode);this._createContainerNode();this._createTagList();this._createDropDownList();this._createInput();var a=[{field:this._idProperty}],b=[{property:this._idProperty,ascending:!0}];this._store=new v({idProperty:this._idProperty,data:[]});this._grid=new (D.createSubclass([E,F]))({collection:this._store,
showHeader:!1,noDataMessage:this.i18n.noTagsFound,selectionMode:"extended",allowSelectAll:!0,cellNavigation:!1,columns:a,sort:b,renderRow:this._renderItem},this._dropDownList);this._grid.startup();f.add(this._grid.domNode,"grid-height-limiter");var c;this.own(this._inputTextBox.watch("value",function(){c&&(clearTimeout(c),c=null);this._grid.refresh()}.bind(this)));this.own(this._grid.on(".dgrid-row:click",function(a){var b="";this._shiftKeyPressed||this._metaKeyPressed?a.shiftKey||a.metaKey||a.ctrlKey||
(b=this._selRows[0],this._createTags(b),this._store.remove(b),this._grid.refresh(),this._resetInputTextBox()):(b=this._grid.row(a).data.tag,this._createTags(b),this._store.remove(b),this._grid.refresh(),this._resetInputTextBox())}.bind(this)));this.own(this._grid.on("dgrid-deselect",function(a){this._selRows=[];for(var b in this._grid.selection)this._grid.selection.hasOwnProperty(b)&&this._selRows.push(b)}.bind(this)));this.own(this._grid.on("dgrid-select",function(a){this._selRows=[];for(var b in this._grid.selection)this._grid.selection.hasOwnProperty(b)&&
this._selRows.push(b)}.bind(this)));this.own(p(this.domNode,"keydown",this._keydownHandler.bind(this)));this.own(p(this.domNode,"keyup",this._keyupHandler.bind(this)));window.onkeydown=function(a){(a.shiftKey||a.ctrlKey||224===a.keyCode)&&(this._metaKeyPressed=!0)}.bind(this);this.own(p(document,"onkeydown",function(a){this._metaKeyPressed=this._shiftKeyPressed=!0}.bind(this)))},_attachmentNode:"",_autocompleteList:"",_grid:"",_store:"",_idProperty:"",_gridId:"",_filterId:"",_placeHolder:"",_noDataMsg:"",
_inputTextBox:"",_gridHasFocus:!1,_metaKeyPressed:!1,_shiftKeyPressed:!1,_CSS_STYLES:{CLASS_SELECTOR:".",ALL_SELECTOR:"\x3e",MULTI:"select2-container select2-container-multi",CHOICES:"select2-choices",CHOICE:"select2-search-choice",SEARCH_CHOICE_FOCUS:"select2-search-choice-focus",SEARCH_FIELD:"select2-search-field",CLOSE_ICON:"select2-search-choice-close"},_selRows:[],_CHOICE_SELECTOR:"",_CHOICE_FOCUS:"",_CHOICE_FOCUS_ALL:"",properties:{knownTags:{set:function(a){var b,c=[],l=this._tags;for(b=0;b<
a.length;b++)0>l.indexOf(a[b])&&c.push(a[b]);this._store=new v({idProperty:this._idProperty,data:c});this._grid.set("collection",this._store);this._grid.refresh()}},matchParam:{value:"first",cast:function(a){return a?a:"first"}},maxWidth:{value:"auto",cast:function(a){return a?a:"auto"}},minWidth:{value:"auto",cast:function(a){return a?a:"auto"}},required:!1,value:{set:function(a){this._setTagValues(a)},get:function(){return this._getTagValues()}}},isValid:function(){return!this.required||x.isDefined(this._tags)&&
0<this._tags.length},validate:function(){this._created&&!this.isValid()?(r.set(this.domNode,"aria-invalid","true"),this._displayMessage(this.i18n.required)):(r.set(this.domNode,"aria-invalid","false"),this._clearMessage())},reset:function(){this.clearTags()},focus:function(){m.focus(this.domNode);this._inputTextBox.focus()},prepopulate:function(a){a.forEach(function(a,c){this._createTags(a);this._store.remove(a)},this)},clearTags:function(){var a,b=g(this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE,
e.byId(this.id));0<b.length&&(b.forEach(function(b,l){try{a=g(this._CHOICE_ALL_SELECTOR,e.byId(this.id))[0].title,this._store.add({tag:a})}catch(H){}d.destroy(b)},this),this._tags=[],this._set("value",""))},addStyledTags:function(a,b){f.add(e.byId(b),this._CSS_STYLES.MULTI);var c=d.create("ul",null,e.byId(b));f.add(c,this._CSS_STYLES.CHOICES);h.set(c,"border","none");a.forEach(function(a,b){b=d.create("li",null,c);h.set(b,"padding","3px 5px 3px 5px");f.add(b,"select2-search-resultSet");b=d.create("div",
{title:a},b);t.set(b,a)})},_setTagValues:function(a){var b;"string"==typeof a?b=a.split(","):a&&Array.isArray(a)&&(b=a);this.clearTags();this.prepopulate(b?this._getUniqueTags(b):[])},_getTagValues:function(){return this._tags?this._tags.join(","):""},_clearMessage:function(){this._displayMessage(null)},_displayMessage:function(a){var b=e.byId(this._tagsId);a&&this.focused?w.show(a,b,["after"]):w.hide(b)},_resetInputTextBox:function(){this._inputTextBox.set("value","")},_isEmpty:function(a){return 0===
a.trim().length},_navigate:function(a,b,c,l){0<a.length&&1>b?("right"===l?this._hightlightTag(a.next()):this._hightlightTag(a.prev()),this._unhighlightTag(a)):1>b&&this._hightlightTag(c)},_contains:function(a,b){return 0<=a.indexOf(b)},_hightlightTag:function(a){a.addClass(this._CSS_STYLES.SEARCH_CHOICE_FOCUS)},_unhighlightTag:function(a){a.removeClass(this._CSS_STYLES.SEARCH_CHOICE_FOCUS)},_removeTag:function(a){a&&-1!==this._tags.indexOf(a)&&(this._tags.splice(this._tags.indexOf(a),1),this._set("value",
this._tags.join(",")))},_hideGrid:function(){e.byId(this._gridId)&&h.set(e.byId(this._gridId),"display","none");this._gridHasFocus=!1},_showGrid:function(){h.set(e.byId(this._gridId),"display","block");var a=h.get(e.byId(this._attachmentNode),"width");h.set(e.byId(this._gridId),"width",a+"px")},_setFocusOnFirstRow:function(a,b){return g(".dgrid-content .dgrid-cell",this._grid.domNode)[b]||g(".dgrid-content .dgrid-row",this._grid.domNode)[b]},_createTags:function(a){g(this._CHOICE_FOCUS,e.byId(this.id)).removeClass("select2-search-choice-focus");
var b=d.create("li",null,this._autocompleteList);f.add(b,this._CSS_STYLES.CHOICE);b=d.create("div",{title:a},b);t.set(b,this._htmlEncode(a));b=d.create("a",{href:"#"},b);f.add(b,this._CSS_STYLES.CLOSE_ICON);p(b,"click",function(a){var b=a.target.parentElement.innerText||a.target.parentElement.textContent;try{this._store.add({tag:b})}catch(H){}this._grid.refresh();this._removeTag(b);d.destroy(a.target.parentNode.parentNode);a.preventDefault()}.bind(this));b=z.byId(this._filterId);d.place(b.domNode,
this._autocompleteList,"last");this._hideGrid();this._tags.push(a);this._set("value",this._tags.join(","))},_renderItem:function(a){return d.create("div",{innerHTML:a.tag})},_createContainerNode:function(){this._containerNode=d.create("div",null,this._attachmentNode);f.add(this._containerNode,this._CSS_STYLES.MULTI);h.set(this._containerNode,{maxWidth:this.maxWidth,minWidth:this.minWidth})},_createTagList:function(){this._autocompleteList=d.create("ul",null,this._containerNode);f.add(this._autocompleteList,
this._CSS_STYLES.CHOICES)},_createInput:function(){var a=d.create("li",null,this._autocompleteList,"last");f.add(a,this._CSS_STYLES.SEARCH_FIELD);this._inputTextBox=new y({id:this._filterId,placeHolder:this.i18n.addTags,intermediateChanges:!0,trim:!0,style:{border:"none"}},a);f.add(this._inputTextBox,"input-text-box");h.set(this._inputTextBox,"width",this.minWidth);(8<u("ie")||4<u("trident"))&&f.add(this._inputTextBox.domNode,"ie-style");this.own(m.watch("curNode",this._blurHandler.bind(this)))},
_createDropDownList:function(){this._dropDownList=d.create("div",{id:this._gridId},this._containerNode);f.add(this._dropDownList,"drop-down-list");h.set(this._dropDownList,"width",this.minWidth)},_getUniqueTags:function(a){var b,c=[];return a.forEach(function(a){b=this._stripHTML(a);x.isDefined(b)&&0<b.length&&c.push(b)},this),c.filter(function(a,b){return c.indexOf(a)===b},this)},_stripHTML:function(a){return a&&a.replace(/<(?:.|\s)*?>/g,"")},_htmlEncode:function(a){return a?q.escape(a):a},_keyupHandler:function(a){0<
(this._inputTextBox?this._inputTextBox.get("value").length:0)?this._applyFilter():this._removeFilter()},_keydownHandler:function(a){this._clearMessage();var b,c,l=g(this._CHOICE_FOCUS,e.byId(this.id)),f=g(this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE,e.byId(this.id)).last();switch(void 0!==m.curNode.value&&(b=m.curNode.value.length),a.keyCode){case k.RIGHT_ARROW:this._navigate(l,b,f,"right");this._hideGrid();break;case k.LEFT_ARROW:this._navigate(l,b,f,"left");this._hideGrid();break;case k.DOWN_ARROW:a.preventDefault();
this._unhighlightTag(l);"none"===h.get(this._gridId,"display")&&this._showGrid();this._gridHasFocus||(this._grid.focus(this._setFocusOnFirstRow(this._grid,0)),this._gridHasFocus=!0);break;case k.UP_ARROW:break;case k.BACKSPACE:var n;if(0===b&&0===g(this._CHOICE_FOCUS_ALL).length&&void 0!==g(this._CHOICE_ALL_SELECTOR)[g(this._CHOICE_ALL_SELECTOR).length-1]&&(n=g(this._CHOICE_ALL_SELECTOR)[g(this._CHOICE_ALL_SELECTOR).length-1].title,0<g("li",this._attachmentNode).length&&(d.destroy(f[0]),void 0!==
n)))try{this._store.add({tag:n})}catch(I){}if(0<g(this._CHOICE_FOCUS_ALL).length&&(n=g(this._CHOICE_FOCUS_ALL).text(),d.destroy(l[0]),void 0!==n))try{this._store.add({tag:n})}catch(I){}this._grid.refresh();0===b&&this._hideGrid();this._removeTag(n);this.validate();break;case k.CTRL:this._metaKeyPressed=!0;break;case k.META:this._metaKeyPressed=!0;break;case k.SHIFT:this._shiftKeyPressed=!0;break;case k.ENTER:if(0<b)b=this._stripHTML(m.curNode.value),b=b.split(","),c=[],b.forEach(function(a,b){-1===
c.indexOf(a)&&c.push(q.trim(a))}),c.forEach(function(a,b){this._isEmpty(a)||this._contains(this._tags,a)||this._createTags(a)},this);else{for(b=0;b<this._selRows.length;b++)this._createTags(this._selRows[b]),this._store.remove(this._selRows[b]);this._metaKeyPressed=this._shiftKeyPressed=!1}this._resetInputTextBox();a.preventDefault();m.focus(e.byId(this._filterId));break;case k.TAB:if(m.curNode.id!==this._filterId||0!==b){if(0<b)b=this._stripHTML(m.curNode.value),b=b.split(","),c=[],b.forEach(function(a,
b){-1===c.indexOf(a)&&c.push(q.trim(a))}),c.forEach(function(a,b){this._isEmpty(a)||this._contains(this._tags,a)||this._createTags(a)},this);else{for(b=0;b<this._selRows.length;b++)this._createTags(this._selRows[b]),this._store.remove(this._selRows[b]);this._metaKeyPressed=this._shiftKeyPressed=!1}this._resetInputTextBox();a.preventDefault();m.focus(e.byId(this._filterId))}break;case k.ESCAPE:this._hideGrid();break;default:-1<b&&("none"===h.get(e.byId(this._gridId),"display")&&this._showGrid(),this._unhighlightTag(l)),
this._metaKeyPressed=!1}},_applyFilter:function(){var a;a=new this._store.Filter;var b=this._inputTextBox?this._inputTextBox.get("value")+"":"",c=new RegExp("^"+b.toLowerCase(),"i"),b=new RegExp(b.toLowerCase(),"i");a="first"===this.matchParam?a.match(this._idProperty,c):a.match(this._idProperty,b);this._grid.set("collection",this._store.filter(a));this._grid.refresh()},_removeFilter:function(){this._grid.set("collection",this._store);this._grid.refresh()},_blurHandler:function(a,b,c){if(!this.focused){a=
this._stripHTML(this._inputTextBox.value);if(0<a.length){var d=[];a.split(",").forEach(function(a,b){-1===d.indexOf(a)&&d.push(q.trim(a))});d.forEach(function(a,b){this._isEmpty(a)||this._contains(this._tags,a)||this._createTags(a)},this);this._resetInputTextBox()}this._hideGrid()}this.validate()}})});