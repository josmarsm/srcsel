(function(b)
{b.gritter={};
b.gritter.options={fade_in_speed:"medium",fade_out_speed:1000,time:6000};
b.gritter.add=function(f){try{return a.add(f||{})}catch(d){var c="Gritter Error: "+d;
(typeof(console)!="undefined"&&console.error)?console.error(c,f):alert(c)}};
b.gritter.remove=function(d,c){a.removeSpecific(d,c||{})};
b.gritter.removeAll=function(c){a.stop(c||{})};
var a={fade_in_speed:"",
fade_out_speed:"",
time:"",
_custom_timer:0,
_item_count:0,
_is_setup:0,
_tpl_close:'<div class="ui-growl-icon-close ui-icon ui-icon-closethick"></div>',
_tpl_item:'<div id="gritter-item-[[number]]" class="ui-growl-item-container ui-widget-content ui-corner-all [[item_class]]" style="display:none"><div class="ui-growl-item">[[image]]<div class="[[class_name]]"><span class="ui-growl-title">[[username]]</span><p>[[text]]</p></div><div style="clear:both"></div></div></div>',_tpl_wrap:'<div class="ui-growl ui-widget"></div>',
add:function(f){if(!this._is_setup){this._runSetup()}var i=f.title,m=f.text,e=f.image||"",
k=f.sticky||false,l=f.class_name||"",d=f.time||"";
this._verifyWrapper();this._item_count++;var g=this._item_count,j=this._tpl_item;b(["before_open","after_open","before_close","after_close"]).each(function(o,p){a["_"+p+"_"+g]=(b.isFunction(f[p]))?f[p]:function(){}});this._custom_timer=0;if(d){this._custom_timer=d}var c=(e!="")?'<img src="'+e+'" class="ui-growl-image" />':"",h="ui-growl-message";j=this._str_replace(["[[username]]","[[text]]","[[image]]","[[number]]","[[class_name]]","[[item_class]]"],[i,m,c,this._item_count,h,l],j);this["_before_open_"+g]();b(".ui-growl").append(j);var n=b("#gritter-item-"+this._item_count);n.fadeIn(this.fade_in_speed,function(){a["_after_open_"+g](b(this))});if(!k){this._setFadeTimer(n,g)}b(n).bind("mouseenter mouseleave",function(o){if(o.type=="mouseenter"){if(!k){a._restoreItemIfFading(b(this),g)}}else{if(!k){a._setFadeTimer(b(this),g)}}a._hoverState(b(this),o.type)});return g},_countRemoveWrapper:function(c,d){d.remove();this["_after_close_"+c](d);if(b(".ui-growl-item-container").length==0){b(".ui-growl").remove()}},_fade:function(f,c,h,d){var h=h||{},g=(typeof(h.fade)!="undefined")?h.fade:true;fade_out_speed=h.speed||this.fade_out_speed;this["_before_close_"+c](f);if(d){f.unbind("mouseenter mouseleave")}if(g){f.animate({opacity:0},fade_out_speed,function(){f.animate({height:0},300,function(){a._countRemoveWrapper(c,f)})})}else{this._countRemoveWrapper(c,f)}},_hoverState:function(f,d){if(d=="mouseenter"){f.addClass("hover");var c=f.find("img");(c.length)?c.before(this._tpl_close):f.find("span").before(this._tpl_close);f.find(".ui-growl-icon-close").click(function(){var e=f.attr("id").split("-")[2];a.removeSpecific(e,{},f,true)})}else{f.removeClass("hover");f.find(".ui-growl-icon-close").remove()}},removeSpecific:function(c,g,f,d){if(!f){var f=b("#gritter-item-"+c)}this._fade(f,c,g||{},d)},_restoreItemIfFading:function(d,c){clearTimeout(this["_int_id_"+c]);d.stop().css({opacity:""})},_runSetup:function(){for(opt in b.gritter.options){this[opt]=b.gritter.options[opt]}this._is_setup=1},_setFadeTimer:function(f,d){var c=(this._custom_timer)?this._custom_timer:this.time;this["_int_id_"+d]=setTimeout(function(){a._fade(f,d)},c)},stop:function(e){var c=(b.isFunction(e.before_close))?e.before_close:function(){};var f=(b.isFunction(e.after_close))?e.after_close:function(){};var d=b(".ui-growl");c(d);d.fadeOut(function(){b(this).remove();f()})},_str_replace:function(v,e,o,n){var k=0,h=0,t="",m="",g=0,q=0,l=[].concat(v),c=[].concat(e),u=o,d=c instanceof Array,p=u instanceof Array;u=[].concat(u);if(n){this.window[n]=0}for(k=0,g=u.length;k<g;k++){if(u[k]===""){continue}for(h=0,q=l.length;h<q;h++){t=u[k]+"";m=d?(c[h]!==undefined?c[h]:""):c[0];
    u[k]=(t).split(l[h]).join(m);
    if(n&&u[k]!==t){this.window[n]+=(t.length-u[k].length)/l[h].length}}}return p?u:u[0]},
    _verifyWrapper:function(){if(b(".ui-growl").length==0){b("body").append(this._tpl_wrap)}}}})(jQuery);