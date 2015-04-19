<<<<<<< HEAD
/*! layer-v1.9.0 弹层组件 License LGPL  http://sentsin.com/jquery/layer/ By 贤心 */
;!function(a,b){"use strict";var c,d,e={getPath:function(){var a=document.scripts,b=a[a.length-1].src;return b.substring(0,b.lastIndexOf("/")+1)}(),config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]};a.layer={v:"1.9.0",ie6:!!a.ActiveXObject&&!a.XMLHttpRequest,index:0,path:e.getPath,config:function(a,b){var d=0;return a=a||{},e.config=c.extend(e.config,a),layer.path=e.config.path||layer.path,"string"==typeof a.extend&&(a.extend=[a.extend]),layer.use("skin/layer.css",a.extend&&a.extend.length>0?function f(){var c=a.extend;layer.use(c[c[d]?d:d-1],d<c.length?function(){return++d,f}():b)}():b),this},use:function(a,b,d){var e=c("head")[0],a=a.replace(/\s/g,""),f=/\.css$/.test(a),g=document.createElement(f?"link":"script"),h="layui_layer_"+a.replace(/\.|\//g,"");return f&&(g.rel="stylesheet"),g[f?"href":"src"]=/^http:\/\//.test(a)?a:layer.path+a,g.id=h,c("#"+h)[0]||e.appendChild(g),function i(){(f?1989===parseInt(c("#"+h).css("width")):layer[d||h])?function(){b&&b();try{f||e.removeChild(g)}catch(a){}}():setTimeout(i,100)}(),this},ready:function(a,b){var d="function"==typeof a;return d&&(b=a),layer.config(c.extend(e.config,function(){return d?{}:{path:a}}()),b),this},alert:function(a,b,d){var e="function"==typeof b;return e&&(d=b),layer.open(c.extend({content:a,yes:d},e?{}:b))},confirm:function(a,b,d,f){var g="function"==typeof b;return g&&(f=d,d=b),layer.open(c.extend({content:a,btn:e.btn,yes:d,cancel:f},g?{}:b))},msg:function(a,d,e){var f="function"==typeof d,h="layui-layer-msg",i=g.anim.length-1;return f&&(e=d),layer.open(c.extend({content:a,time:3e3,shade:!1,skin:h,title:!1,closeBtn:!1,btn:!1,end:e},f?{skin:h+" layui-layer-hui",shift:i}:function(){return d=d||{},(-1===d.icon||d.icon===b)&&(d.skin=h+" "+(d.skin||"layui-layer-hui")),d}()))},load:function(a,b){return layer.open(c.extend({type:3,icon:a||0,shade:.01},b))},tips:function(a,b,d){return layer.open(c.extend({type:4,content:[a,b],closeBtn:!1,time:3e3,maxWidth:210},d))}};var f=function(a){var b=this;b.index=++layer.index,b.config=c.extend({},b.config,a,e.config),b.creat()};f.pt=f.prototype;var g=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];g.anim=["layui-anim-01","layui-anim-02","layui-anim-03","layui-anim-04","layui-anim-05","layui-anim-06","layui-anim-07"],f.pt.config={type:0,shade:.3,fix:!0,move:g[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},f.pt.vessel=function(a,b){var c=this,d=c.index,f=c.config,h=f.zIndex+d,i="object"==typeof f.title,j=!(!f.maxmin||1!==f.type&&2!==f.type||/^\d+%$/.test(f.area[0])&&/^\d+%$/.test(f.area[1])),k=f.title?'<div class="layui-layer-title" style="'+(i?f.title[1]:"")+'">'+(i?f.title[0]:f.title)+"</div>":"";return f.zIndex=h,b([f.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+d+'" times="'+d+'" style="'+("z-index:"+(h-1)+"; background-color:"+(f.shade[1]||"#000")+"; opacity:"+(f.shade[0]||f.shade)+"; filter:alpha(opacity="+(100*f.shade[0]||100*f.shade)+");")+'"></div>':"",'<div class="'+g[0]+" "+(g.anim[f.shift]||"")+(" layui-layer-"+e.type[f.type])+(0!=f.type&&2!=f.type||f.shade?"":" layui-layer-border")+" "+(f.skin||"")+'" id="'+g[0]+d+'" type="'+e.type[f.type]+'" times="'+d+'" showtime="'+f.time+'" conType="'+(a?"object":"string")+'" style="z-index: '+h+"; width:"+f.area[0]+";height:"+f.area[1]+(f.fix?"":";position:absolute;")+'">'+(a&&2!=f.type?"":k)+'<div class="layui-layer-content'+(0==f.type&&-1!==f.icon?" layui-layer-padding":"")+(3==f.type?" xubox_loading_"+f.icon:"")+'">'+(0==f.type&&-1!==f.icon?'<i class="layui-layer-ico layui-layer-ico'+f.icon+'"></i>':"")+(1==f.type&&a?"":f.content||"")+'</div><span class="layui-layer-setwin">'+function(){var a=j?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return f.closeBtn&&(a+='<a class="layui-layer-ico '+g[7]+" "+g[7]+(f.title?f.closeBtn:4==f.type?"1":"2")+'" href="javascript:;"></a>'),a}()+"</span>"+(f.btn?function(){var a="";"string"==typeof f.btn&&(f.btn=[f.btn]);for(var b=0,c=f.btn.length;c>b;b++)a+='<a class="'+g[6]+b+'">'+f.btn[b]+"</a>";return'<div class="'+g[6]+'">'+a+"</div>"}():"")+"</div>"],k),c},f.pt.creat=function(){var a=this,b=a.config,f=a.index,h=b.content,i="object"==typeof h;switch("string"==typeof b.area&&(b.area="auto"===b.area?["",""]:[b.area,""]),b.type){case 0:b.btn="btn"in b?b.btn:e.btn[0],layer.close(c("div."+g[0]+"[type=dialog]").attr("times"));break;case 2:var h=b.content=i?b.content:[b.content||"http://sentsin.com?from=layer","auto"];b.content='<iframe scrolling="'+(b.content[1]||"auto")+'" allowtransparency="true" id="'+g[5]+f+'" name="'+g[5]+f+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+b.content[0]+'"></iframe>';break;case 3:b.title=!1,b.closeBtn=!1,-1===b.icon&&0===b.icon,layer.closeAll("loading");break;case 4:i||(b.content=[b.content,"body"]),b.follow=b.content[1],b.content=b.content[0]+'<i class="layui-layer-TipsG"></i>',b.title=!1,b.shade=!1,b.fix=!1,b.tips="object"==typeof b.tips?b.tips:[b.tips,!0],b.tipsMore||layer.closeAll("tips")}a.vessel(i,function(d,e){c("body").append(d[0]),i?function(){2==b.type||4==b.type?function(){c("body").append(d[1])}():function(){h.parents("."+g[0])[0]||(h.show().addClass("layui-layer-wrap").wrap(d[1]),c("#"+g[0]+f).find("."+g[5]).before(e))}()}():c("body").append(d[1]),a.layero=c("#"+g[0]+f),b.scrollbar||g.html.css("overflow","hidden").attr("layer-full",f)}).auto(f),2==b.type&&layer.ie6&&a.layero.find("iframe").attr("src",h[0]),4==b.type?a.tips():a.offset(),b.fix&&d.on("resize",function(){a.offset(),(/^\d+%$/.test(b.area[0])||/^\d+%$/.test(b.area[1]))&&a.auto(f),4==b.type&&a.tips()}),b.time<=0||setTimeout(function(){layer.close(a.index)},b.time),a.move().callback()},f.pt.auto=function(a){function b(a){a=h.find(a),a.height(i[1]-j-k-2*(0|parseFloat(a.css("padding"))))}var e=this,f=e.config,h=c("#"+g[0]+a);""===f.area[0]&&f.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&f.btn&&h.width(h.innerWidth()),h.outerWidth()>f.maxWidth&&h.width(f.maxWidth));var i=[h.innerWidth(),h.innerHeight()],j=h.find(g[1]).outerHeight()||0,k=h.find("."+g[6]).outerHeight()||0;switch(f.type){case 2:b("iframe");break;default:""===f.area[1]?f.fix&&i[1]>d.height()&&(i[1]=d.height(),b("."+g[5])):b("."+g[5])}return e},f.pt.offset=function(){var a=this,b=a.config,c=a.layero,e=[c.outerWidth(),c.outerHeight()],f="object"==typeof b.offset;a.offsetTop=(d.height()-e[1])/2,a.offsetLeft=(d.width()-e[0])/2,f?(a.offsetTop=b.offset[0],a.offsetLeft=b.offset[1]):"auto"!==b.offset&&(a.offsetTop=b.offset,"rb"===b.offset&&(a.offsetTop=d.height()-e[1],a.offsetLeft=d.width()-e[0])),b.fix||(a.offsetTop+=d.scrollTop(),a.offsetLeft+=d.scrollLeft()),c.css({top:a.offsetTop,left:a.offsetLeft})},f.pt.tips=function(){var a=this,b=a.config,e=a.layero,f=[e.outerWidth(),e.outerHeight()],h=c(b.follow);h[0]||(h=c("body"));var i={width:h.outerWidth(),height:h.outerHeight(),top:h.offset().top,left:h.offset().left},j=e.find(".layui-layer-TipsG"),k=b.tips[0];b.tips[1]||j.remove(),i.autoLeft=function(){i.left+f[0]-d.width()>0?(i.tipLeft=i.left+i.width-f[0],j.css({right:12,left:"auto"})):i.tipLeft=i.left},i.where=[function(){i.autoLeft(),i.tipTop=i.top-f[1]-10,j.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left+i.width+10,i.tipTop=i.top,j.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",b.tips[1])},function(){i.autoLeft(),i.tipTop=i.top+i.height+10,j.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left-f[0]-10,i.tipTop=i.top,j.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",b.tips[1])}],i.where[k-1](),1===k?i.top-(d.scrollTop()+f[1]+16)<0&&i.where[2]():2===k?d.width()-(i.left+i.width+f[0]+16)>0||i.where[3]():3===k?i.top-d.scrollTop()+i.height+f[1]+16-d.height()>0&&i.where[0]():4===k&&f[0]+16-i.left>0&&i.where[1](),e.find("."+g[5]).css({"background-color":b.tips[1],"padding-right":b.closeBtn?"30px":""}),e.css({left:i.tipLeft,top:i.tipTop})},f.pt.move=function(){var a=this,b=a.config,e={setY:0,moveLayer:function(){var a=e.layero,b=parseInt(a.css("margin-left")),c=parseInt(e.move.css("left"));0===b||(c-=b),"fixed"!==a.css("position")&&(c-=a.parent().offset().left,e.setY=0),a.css({left:c,top:parseInt(e.move.css("top"))-e.setY})}},f=a.layero.find(b.move);return b.move&&f.attr("move","ok"),f.css({cursor:b.move?"move":"auto"}),c(b.move).on("mousedown",function(a){if(a.preventDefault(),"ok"===c(this).attr("move")){e.ismove=!0,e.layero=c(this).parents("."+g[0]);var f=e.layero.offset().left,h=e.layero.offset().top,i=e.layero.width()-6,j=e.layero.height()-6;c("#layui-layer-moves")[0]||c("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+f+"px; top:"+h+"px; width:"+i+"px; height:"+j+'px; z-index:2147483584"></div>'),e.move=c("#layui-layer-moves"),b.moveType&&e.move.css({visibility:"hidden"}),e.moveX=a.pageX-e.move.position().left,e.moveY=a.pageY-e.move.position().top,"fixed"!==e.layero.css("position")||(e.setY=d.scrollTop())}}),c(document).mousemove(function(a){if(e.ismove){var c=a.pageX-e.moveX,f=a.pageY-e.moveY;if(a.preventDefault(),!b.moveOut){e.setY=d.scrollTop();var g=d.width()-e.move.outerWidth(),h=e.setY;0>c&&(c=0),c>g&&(c=g),h>f&&(f=h),f>d.height()-e.move.outerHeight()+e.setY&&(f=d.height()-e.move.outerHeight()+e.setY)}e.move.css({left:c,top:f}),b.moveType&&e.moveLayer(),c=f=g=h=null}}).mouseup(function(){try{e.ismove&&(e.moveLayer(),e.move.remove()),e.ismove=!1}catch(a){e.ismove=!1}b.moveEnd&&b.moveEnd()}),a},f.pt.callback=function(){var a=this,b=a.layero,d=a.config;a.openLayer(),d.success&&(2==d.type?b.find("iframe")[0].onload=function(){this.className="",d.success(b,a.index)}:d.success(b,a.index)),layer.ie6&&a.IE6(b),b.find("."+g[6]+"0").on("click",function(){d.yes?d.yes(a.index):layer.close(a.index)}),b.find("."+g[7]+",."+g[6]+"1").on("click",function(){d.cancel&&d.cancel(a.index),layer.close(a.index)}),d.shadeClose&&c("#layui-layer-shade"+a.index).on("click",function(){layer.close(a.index)}),b.find(".layui-layer-min").on("click",function(){layer.min(a.index,d),d.min&&d.min(b)}),b.find(".layui-layer-max").on("click",function(){c(this).hasClass("layui-layer-maxmin")?(layer.restore(a.index),d.restore&&d.restore(b)):(layer.full(a.index,d),d.full&&d.full(b))}),d.end&&(e.end[a.index]=d.end)},e.reselect=function(){c.each(c("select"),function(){var a=c(this);a.parents("."+g[0])[0]||1==a.attr("layer")&&c("."+g[0]).length<1&&a.removeAttr("layer").show(),a=null})},f.pt.IE6=function(a){function b(){a.css({top:f+(e.config.fix?d.scrollTop():0)})}var e=this,f=a.offset().top;b(),d.scroll(b),c("select").each(function(){var a=c(this);a.parents("."+g[0])[0]||"none"===a.css("display")||a.attr({layer:"1"}).hide(),a=null})},f.pt.openLayer=function(){var a=this;layer.zIndex=a.config.zIndex,layer.setTop=function(a){var b=function(){layer.zIndex++,a.css("z-index",layer.zIndex+1)};return layer.zIndex=parseInt(a[0].style.zIndex),a.on("mousedown",b),layer.zIndex}},e.record=function(a){var b=[a.outerWidth(),a.outerHeight(),a.position().top,a.position().left+parseFloat(a.css("margin-left"))];a.find(".layui-layer-max").addClass("layui-layer-maxmin"),a.attr({area:b})},e.rescollbar=function(a){g.html.attr("layer-full")==a&&(g.html[0].style.removeProperty?g.html[0].style.removeProperty("overflow"):g.html[0].style.removeAttribute("overflow"),g.html.removeAttr("layer-full"))},layer.getChildFrame=function(a,b){return b=b||c("."+g[4]).attr("times"),c("#"+g[0]+b).find("iframe").contents().find(a)},layer.getFrameIndex=function(a){return c("#"+a).parents("."+g[4]).attr("times")},layer.iframeAuto=function(a){if(a){var b=layer.getChildFrame("body",a).outerHeight(),d=c("#"+g[0]+a),e=d.find(g[1]).outerHeight()||0,f=d.find("."+g[6]).outerHeight()||0;d.css({height:b+e+f}),d.find("iframe").css({height:b})}},layer.iframeSrc=function(a,b){c("#"+g[0]+a).find("iframe").attr("src",b)},layer.style=function(a,b){var d=c("#"+g[0]+a),f=d.attr("type"),h=d.find(g[1]).outerHeight()||0,i=d.find("."+g[6]).outerHeight()||0;(f===e.type[1]||f===e.type[2])&&(d.css(b),f===e.type[2]&&d.find("iframe").css({height:parseFloat(b.height)-h-i}))},layer.min=function(a){var b=c("#"+g[0]+a),d=b.find(g[1]).outerHeight()||0;e.record(b),layer.style(a,{width:180,height:d}),b.find(".layui-layer-min").hide(),"page"===b.attr("type")&&b.find(g[4]).hide(),e.rescollbar(a)},layer.restore=function(a){{var b=c("#"+g[0]+a),d=b.attr("area").split(",");b.attr("type")}layer.style(a,{width:parseFloat(d[0]),height:parseFloat(d[1]),top:parseFloat(d[2]),left:parseFloat(d[3])}),b.find(".layui-layer-max").removeClass("layui-layer-maxmin"),b.find(".layui-layer-min").show(),"page"===b.attr("type")&&b.find(g[4]).show(),e.rescollbar(a)},layer.full=function(a){var b,f=c("#"+g[0]+a);e.record(f),g.html.attr("layer-full")||g.html.css("overflow","hidden").attr("layer-full",a),clearTimeout(b),b=setTimeout(function(){var b="fixed"===f.css("position");layer.style(a,{top:b?0:d.scrollTop(),left:b?0:d.scrollLeft(),width:d.width(),height:d.height()}),f.find(".layui-layer-min").hide()},100)},layer.title=function(a,b){var d=c("#"+g[0]+(b||layer.index)).find(g[1]);d.html(a)},layer.close=function(a){var b=c("#"+g[0]+a),d=b.attr("type");if(b){if(d==e.type[1]&&"object"===b.attr("conType")){b.children(":not(."+g[5]+")").remove();for(var f=0;2>f;f++)b.find(".layui-layer-wrap").unwrap().hide()}else b.innerHTML="",b.remove();c("#layui-layer-moves, #layui-layer-shade"+a).remove(),layer.ie6&&e.reselect(),e.rescollbar(a),"function"==typeof e.end[a]&&e.end[a](),delete e.end[a]}},layer.closeAll=function(a){c.each(c("."+g[0]),function(){var b=c(this),d=a?b.attr("type")===a:1;d&&layer.close(b.attr("times")),d=null})},e.run=function(){c=jQuery,d=c(a),g.html=c("html"),layer.open=function(a){var b=new f(a);return b.index}},"function"==typeof define?define(function(){return e.run(),layer}):function(){e.run(),layer.use("/skin/layer.css")}()}(window);
=======
﻿/****************************************

 @Name：layer v1.8.5 弹层组件开发版
 @Author：贤心
 @Date：2014-08-13
 @Blog：http://sentsin.com
 @Copyright：Sentsin Xu(贤心)
 @官网：http://sentsin.com/jquery/layer
        
 */

;!function(window, undefined){        
"use strict";

var path = '', //组件存放目录，为空表示自动获取(不用填写host，相对站点的根目录即可)。

$, win, ready = {
    getPath: function(){
        var js = document.scripts, jsPath = js[js.length - 1].src;
        return path ? path : jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
    },
    
    //五种原始层模式
    type: ['dialog', 'page', 'iframe', 'loading', 'tips']
};

//默认内置方法。
window.layer = {
    v: '1.8.5',
    ie6: !!window.ActiveXObject&&!window.XMLHttpRequest,
    index: 0,
    path: ready.getPath(),
    
    //载入模块
    use: function(module, callback){
        var i = 0, head = $('head')[0];
        var module = module.replace(/\s/g, '');
        var iscss = /\.css$/.test(module);
        var node = document.createElement(iscss ? 'link' : 'script');
        var id = module.replace(/\.|\//g, '');
        if(iscss){
            node.type = 'text/css';
            node.rel = 'stylesheet';
        }
        node[iscss ? 'href' : 'src'] = /^http:\/\//.test(module) ? module : layer.path + module;
        node.id = id;
        if(!$('#'+ id)[0]){
            head.appendChild(node);
        }
        if(callback){
            if(document.all){
                $(node).ready(callback);
            } else {
                $(node).load(callback);
            }
        }
    },
    
    alert: function(msg, icon, fn, yes){
        var isfn = (typeof fn === 'function'), conf = {
            dialog: {msg: msg, type: icon, yes: isfn ? fn : yes},
            area: ['auto', 'auto']
        };
        isfn || (conf.title = fn);
        return $.layer(conf);
    }, 
    
    confirm: function(msg, yes, fn, no){ 
        var isfn = (typeof fn === 'function'), conf = {
            dialog: {msg: msg, type: 4, btns: 2, yes: yes, no: isfn ? fn : no}
        };
        isfn || (conf.title = fn);
        return $.layer(conf); 
    },
    
    msg: function(msg, time, parme, end){
        var conf = {
            title: false, 
            closeBtn: false,
            time: time === undefined ? 2 : time,
            dialog: {msg: (msg === '' || msg === undefined) ? '&nbsp;' : msg},
            end: end
        };
        if(typeof parme === 'object'){
            conf.dialog.type = parme.type;
            conf.shade = parme.shade;
            conf.shift = parme.rate;
        } else if(typeof parme === 'function') {
            conf.end = parme
        } else {
            conf.dialog.type = parme;
        }
        return $.layer(conf);    
    }, 
    
    //加载层快捷引用
    load: function(parme, icon){
        if(typeof parme === 'string'){
            return layer.msg(parme, icon || 0, 16);
        } else {
            return $.layer({
                time: parme,
                loading: {type : icon},
                bgcolor: icon ? '#fff' : '',
                shade: icon ? [0.1, '#000'] : [0],
                border: (icon === 3 || !icon) ? [0] : [6, 0.3, '#000'],
                type : 3,
                title : ['',false],
                closeBtn : [0 , false]
            });
        }
    }, 
    
    //tips层快捷引用
    tips: function(html, follow, parme, maxWidth, guide, style){
        var conf = {
            type: 4, shade: false, 
            success: function(layero){
                if(!this.closeBtn){
                    layero.find('.xubox_tips').css({'padding-right': 10});
                }
            }, 
            bgcolor:'', tips: {msg: html, follow: follow}    
        };
        conf.time = typeof parme === 'object' ? parme.time : (parme|0);
        parme = parme || {};
        conf.closeBtn = parme.closeBtn || false
        conf.maxWidth = parme.maxWidth || maxWidth;
        conf.tips.guide = parme.guide || guide;
        conf.tips.style = parme.style || style;
        conf.tips.more = parme.more;
        return $.layer(conf);
    }
};

//缓存常用字符
var doms = ['xubox_layer', 'xubox_iframe', '.xubox_title', '.xubox_text', '.xubox_page', '.xubox_main'];

var Class = function(setings){    
    var that = this, config = that.config;
    layer.index++;
    that.index = layer.index;
    that.config = $.extend({} , config , setings);
    that.config.dialog = $.extend({}, config.dialog , setings.dialog);
    that.config.page = $.extend({}, config.page , setings.page);
    that.config.iframe = $.extend({}, config.iframe , setings.iframe);    
    that.config.loading = $.extend({}, config.loading , setings.loading);
    that.config.tips = $.extend({}, config.tips , setings.tips);
    that.creat();
};

Class.pt = Class.prototype;

//默认配置
Class.pt.config = {
    type: 0,
    shade: [0.3, '#000'],
    fix: true,
    move: '.xubox_title',
    title: '&#x4FE1;&#x606F;',
    offset: ['', '50%'],
    area: ['310px', 'auto'],
    closeBtn: [0, true],
    time: 0,
    bgcolor: '#fff',
    border: [6, 0.3, '#000'],
    zIndex: 19891014, 
    maxWidth: 400,
    dialog: {btns: 1, btn: ['&#x786E;&#x5B9A;','&#x53D6;&#x6D88;'], type : 8, msg: '', yes: function(index){layer.close(index);}, no: function(index){layer.close(index);}},
    page: {dom: '#xulayer', html: '', url: ''},
    iframe: {src: 'http://sentsin.com', scrolling: 'auto'},
    loading: {type: 0},
    tips: {msg: '', follow: '', guide: 0, isGuide: true, style: ['background-color:#FF9900; color:#fff;', '#FF9900']},
    success: function(layer){}, //创建成功后的回调
    close: function(index){ layer.close(index);}, //右上角关闭回调
    end: function(){} //终极销毁回调
};

//容器
Class.pt.space = function(html){
    var that = this, html = html || '', times = that.index, config = that.config, dialog = config.dialog,
    ico = dialog.type === -1 ? '' : '<span class="xubox_msg xulayer_png32 xubox_msgico xubox_msgtype' + dialog.type + '"></span>',
    frame = [
    '<div class="xubox_dialog">'+ ico +'<span class="xubox_msg xubox_text" style="'+ (ico ? '' : 'padding-left:20px') +'">' + dialog.msg + '</span></div>',    
    '<div class="xubox_page">'+ html +'</div>',
    '<iframe scrolling="'+ config.iframe.scrolling +'" allowtransparency="true" id="'+ doms[1] +''+ times +'" name="'+ doms[1] +''+ times +'" onload="this.className=\''+ doms[1] +'\'" class="'+ doms[1] +'" frameborder="0" src="' + config.iframe.src + '"></iframe>',                
    '<span class="xubox_loading xubox_loading_'+ config.loading.type +'"></span>',
    '<div class="xubox_tips" style="'+ config.tips.style[0] +'"><div class="xubox_tipsMsg">'+ config.tips.msg +'</div><i class="layerTipsG"></i></div>'
    ],
    shade = '' , border = '', zIndex = config.zIndex + times,
    shadeStyle = 'z-index:'+ zIndex +'; background-color:'+ config.shade[1] +'; opacity:'+ config.shade[0] +'; filter:alpha(opacity='+ config.shade[0]*100 +');';
    config.shade[0] && (shade = '<div times="'+ times +'" id="xubox_shade' + times + '" class="xubox_shade" style="'+ shadeStyle +'"></div>');

    config.zIndex = zIndex;
    var title = '', closebtn = '', borderStyle = "z-index:"+ (zIndex-1) +";  background-color: "+ config.border[2] +"; opacity:"+ config.border[1] +"; filter:alpha(opacity="+ config.border[1]*100 +"); top:-"+ config.border[0] +"px; left:-"+ config.border[0] +"px;";
    config.border[0] && (border = '<div id="xubox_border'+ times +'" class="xubox_border" style="'+ borderStyle +'"></div>');

    if(config.maxmin && (config.type === 1 || config.type === 2) && (!/^\d+%$/.test(config.area[0]) || !/^\d+%$/.test(config.area[1]))){
        closebtn = '<a class="xubox_min" href="javascript:;"><cite></cite></a><a class="xubox_max xulayer_png32" href="javascript:;"></a>';
    }
    config.closeBtn[1] && (closebtn += '<a class="xubox_close xulayer_png32 xubox_close' + config.closeBtn[0] +'" href="javascript:;" style="'+ (config.type === 4 ? 'position:absolute; right:-3px; _right:7px; top:-4px;' : '') +'"></a>'); 
    var titype = typeof config.title === 'object';
    config.title && (title = '<div class="xubox_title" style="'+ (titype ? config.title[1] : '') +'"><em>' + (titype ? config.title[0] : config.title) + '</em></div>');
    return [shade, 
    '<div times="'+ times +'" showtime="'+ config.time +'" style="z-index:'+ zIndex +'" id="'+ doms[0] +''+ times 
    +'" class="'+ doms[0] +'">'    
    + '<div style="background-color:'+ config.bgcolor +'; z-index:'+ zIndex +'" class="xubox_main">'
    + frame[config.type]
    + title
    + '<span class="xubox_setwin">'+ closebtn + '</span>'
    + '<span class="xubox_botton"></span>'
    + '</div>'+ border + '</div>'
    ];
};

//创建骨架
Class.pt.creat = function(){
    var that = this , space = '', config = that.config, dialog = config.dialog, times = that.index;
    var page = config.page, body = $("body"), setSpace = function(html){
        var html = html || '';
        space = that.space(html);
        body.append($(space[0]));
    };

    switch(config.type){
        case 0: 
            config.title || (config.area = ['auto','auto']);
            $('.xubox_dialog')[0] && layer.close($('.xubox_dialog').parents('.'+ doms[0]).attr('times'));
        break;
        
        case 1:
            if(page.html !== ''){
                setSpace('<div class="xuboxPageHtml">'+ page.html +'</div>');
                body.append($(space[1]));
            } else if (page.url !== ''){
                setSpace('<div class="xuboxPageHtml" id="xuboxPageHtml'+ times +'">'+ page.html +'</div>');
                body.append($(space[1]));
                $.get(page.url, function(datas){
                    $('#xuboxPageHtml'+ times).html(datas.toString());
                    page.ok && page.ok(datas);
                });
            } else {
                if($(page.dom).parents(doms[4]).length == 0){
                    setSpace();
                    $(page.dom).show().wrap($(space[1]));
                } else {
                    return;    
                }
            }
        break;
        
        case 3:
            config.title = false;
            config.area = ['auto', 'auto']; 
            config.closeBtn = ['', false];
            $('.xubox_loading')[0] && layer.closeLoad();
        break;
        
        case 4:
            config.title = false;
            config.area = ['auto', 'auto'];
            config.fix = false;
            config.border = [0];
            config.tips.more || layer.closeTips();
        break;
    };
    if(config.type !== 1){
        setSpace();
        body.append($(space[1]));
    }

    var layerE = that.layerE = $('#'+ doms[0] + times);
    
    layerE.css({width: config.area[0], height: config.area[1]});
    config.fix || layerE.css({position: 'absolute'});    

    //配置按钮
    if(config.title && (config.type !== 3 || config.type !== 4)){
        var confbtn = config.type === 0 ? dialog : config, layerBtn = layerE.find('.xubox_botton');
        confbtn.btn = config.btn || dialog.btn;
        switch(confbtn.btns){
            case 0:
                layerBtn.html('').hide();
            break;
            case 1:
                layerBtn.html('<a href="javascript:;" class="xubox_yes xubox_botton1">'+ confbtn.btn[0] +'</a>');
            break;
            case 2:
                layerBtn.html('<a href="javascript:;" class="xubox_yes xubox_botton2">'+ confbtn.btn[0] +'</a>' + '<a href="javascript:;" class="xubox_no xubox_botton3">'+ confbtn.btn[1] + '</a>');
            break;                
        }
    }

    if(layerE.css('left') === 'auto'){
        layerE.hide();
        setTimeout(function(){
            layerE.show();
            that.set(times);
        }, 500);
    }else{
        that.set(times);
    }
    config.time <= 0 || that.autoclose();
    that.callback();
};

ready.fade = function(obj, time, opa){
    obj.css({opacity: 0}).animate({opacity: opa}, time);
};

//计算坐标
Class.pt.offset = function(){
    var that = this, config = that.config, layerE = that.layerE, laywid = layerE.outerHeight();
    if(config.offset[0] === '' && laywid < win.height()){
        that.offsetTop = (win.height() - laywid - 2*config.border[0])/2;
    }else if(config.offset[0].indexOf("px") != -1){
        that.offsetTop = parseFloat(config.offset[0]);
    } else {
        that.offsetTop = parseFloat(config.offset[0]||0)/100 * win.height();
    }
    that.offsetTop = that.offsetTop + config.border[0] + (config.fix ? 0 : win.scrollTop());
    if(config.offset[1].indexOf("px") != -1){
        that.offsetLeft = parseFloat(config.offset[1]) + config.border[0];
    } else {
        config.offset[1] = config.offset[1] === '' ? '50%' : config.offset[1];
        if(config.offset[1] === '50%'){
            that.offsetLeft = config.offset[1];
        }else{
            that.offsetLeft =  parseFloat(config.offset[1])/100 * win.width() + config.border[0];
        }
    }; 
};

//初始化骨架
Class.pt.set = function(times){
    var that = this;
    var config = that.config;
    var dialog = config.dialog;
    var page = config.page;
    var loading = config.loading;
    var layerE = that.layerE;
    var layerTitle = layerE.find(doms[2]);
    
    that.autoArea(times);
    
    if(config.title){
        if(config.type === 0){
            layer.ie6 && layerTitle.css({width : layerE.outerWidth()});
        }
    }else{
        config.type !== 4 && layerE.find('.xubox_close').addClass('xubox_close1');
    };

    layerE.attr({'type' :  ready.type[config.type]});
    that.offset();
    
    //判断是否动画弹出
    if(config.type !== 4){
        if(config.shift && !layer.ie6){
            if(typeof config.shift === 'object'){
                that.shift(config.shift[0], config.shift[1]||500, config.shift[2]);
            } else {
                that.shift(config.shift, 500);
            }
        } else {
            layerE.css({top: that.offsetTop, left: that.offsetLeft});
        }
    }
    
    switch(config.type){
        case 0:
            layerE.find(doms[5]).css({'background-color': '#fff'});
            if(config.title){
                layerE.find(doms[3]).css({paddingTop: 18 + layerTitle.outerHeight()});
            }else{
                layerE.find('.xubox_msgico').css({top: 8});
                layerE.find(doms[3]).css({marginTop : 11});    
            }
        break;
        
        case 1:     
            layerE.find(page.dom).addClass('layer_pageContent');
            config.shade[0] && layerE.css({zIndex: config.zIndex + 1});
            config.title && layerE.find(doms[4]).css({top: layerTitle.outerHeight()});
        break;
        
        case 2:
            var iframe = layerE.find('.'+ doms[1]), heg = layerE.height();
            iframe.addClass('xubox_load').css({width: layerE.width()});
            config.title ? iframe.css({top: layerTitle.height(), height: heg - layerTitle.height()}) : iframe.css({top: 0, height : heg});
            layer.ie6 && iframe.attr('src', config.iframe.src);
        break;

        case 4:
            var layArea = [0, layerE.outerHeight()], fow = $(config.tips.follow), fowo = {
                width: fow.outerWidth(),
                height: fow.outerHeight(),
                top: fow.offset().top,
                left: fow.offset().left
            }, tipsG = layerE.find('.layerTipsG');

            config.tips.isGuide || tipsG.remove();
            layerE.outerWidth() > config.maxWidth && layerE.width(config.maxWidth);
            
            fowo.tipColor = config.tips.style[1];
            layArea[0] = layerE.outerWidth();
            
            fowo.autoLeft = function(){
                if(fowo.left + layArea[0] - win.width() > 0){
                    fowo.tipLeft = fowo.left + fowo.width - layArea[0];
                    tipsG.css({right: 12, left: 'auto'});
                } else {
                    fowo.tipLeft = fowo.left;
                };
            };
            
            //辨别tips的方位
            fowo.where = [function(){ //上                
                fowo.autoLeft();
                fowo.tipTop = fowo.top - layArea[1] - 10;
                tipsG.removeClass('layerTipsB').addClass('layerTipsT').css({'border-right-color': fowo.tipColor});  
            }, function(){ //右
                fowo.tipLeft = fowo.left + fowo.width + 10;
                fowo.tipTop = fowo.top;
                tipsG.removeClass('layerTipsL').addClass('layerTipsR').css({'border-bottom-color': fowo.tipColor}); 
            }, function(){ //下
                fowo.autoLeft();
                fowo.tipTop = fowo.top + fowo.height + 10;
                tipsG.removeClass('layerTipsT').addClass('layerTipsB').css({'border-right-color': fowo.tipColor});
            }, function(){ //左
                fowo.tipLeft = fowo.left - layArea[0] + 10;
                fowo.tipTop = fowo.top;
                tipsG.removeClass('layerTipsR').addClass('layerTipsL').css({'border-bottom-color': fowo.tipColor});
            }];
            fowo.where[config.tips.guide]();
            
            /* 8*2为小三角形占据的空间 */
            if(config.tips.guide === 0){
                fowo.top - (win.scrollTop() + layArea[1] + 8*2) < 0 && fowo.where[2]();
            } else if(config.tips.guide === 1){
                win.width() - (fowo.left + fowo.width + layArea[0] + 8*2) > 0 || fowo.where[3]()
            } else if(config.tips.guide === 2){
                (fowo.top - win.scrollTop() + fowo.height + layArea[1] + 8*2) - win.height() > 0 && fowo.where[0]();
            } else if(config.tips.guide === 3){
               layArea[0] + 8*2 - fowo.left > 0 && fowo.where[1]()
            } else if(config.tips.guide === 4){
                
            }
            layerE.css({left: fowo.tipLeft, top: fowo.tipTop});
        break;
    };
    
    if(config.fadeIn){
        ready.fade(layerE, config.fadeIn, 1);
        ready.fade($('#xubox_shade'+ times), config.fadeIn, config.shade[0]);
    }
    
    //坐标自适应浏览器窗口尺寸
    if(config.fix && config.offset[0] === '' && !config.shift){
        win.on('resize', function(){
            layerE.css({top: (win.height() - layerE.outerHeight())/2});
        });
    }
    
    that.move();
};

//动画进入
Class.pt.shift = function(type, rate, stop){
    var that = this, config = that.config;
    var layerE = that.layerE;
    var cutWth = 0, ww = win.width();
    var wh = win.height() + (config.fix ? 0 : win.scrollTop());
    
    if(config.offset[1] == '50%' || config.offset[1] == ''){
        cutWth = layerE.outerWidth()/2;
    } else {
        cutWth = layerE.outerWidth();
    }
    
    var anim = {
        t: {top: that.offsetTop},
        b: {top : wh - layerE.outerHeight() - config.border[0]},
        cl: cutWth + config.border[0],
        ct: -layerE.outerHeight(),
        cr: ww - cutWth - config.border[0]
    };
    
    switch(type){
        case 'left-top': 
            layerE.css({left: anim.cl, top: anim.ct}).animate(anim.t, rate);
        break; 
        case 'top': 
            layerE.css({top: anim.ct}).animate(anim.t, rate);
        break;
        case 'right-top': 
            layerE.css({left: anim.cr, top: anim.ct}).animate(anim.t, rate);
        break;
        case 'right-bottom': 
            layerE.css({left: anim.cr, top: wh}).animate(stop ? anim.t : anim.b, rate);
        break;
        case 'bottom': 
            layerE.css({top: wh}).animate(stop ? anim.t : anim.b, rate);
        break;
        case 'left-bottom': 
            layerE.css({left: anim.cl, top: wh}).animate(stop ? anim.t : anim.b, rate);
        break;
        case 'left': 
            layerE.css({left: -layerE.outerWidth()}).animate({left: that.offsetLeft}, rate);
        break;
    } 
};

//自适应宽高
Class.pt.autoArea = function(times){
    var that = this, times = times || that.index, config = that.config, page = config.page;
    var layerE = $('#'+ doms[0] + times), layerTitle = layerE.find(doms[2]), layerMian = layerE.find(doms[5]);
    var titHeight = config.title ? layerTitle.innerHeight() : 0, outHeight, btnHeight = 0;
    if(config.area[0] === 'auto' && layerMian.outerWidth() >= config.maxWidth){    
        layerE.css({width : config.maxWidth});
    }
    switch(config.type){
        case 0:
            var aBtn = layerE.find('.xubox_botton>a');
            outHeight = layerE.find(doms[3]).outerHeight() + 20;
            if(aBtn.length > 0){
                btnHeight = aBtn.outerHeight() +  20;
            }
        break;
        case 1:
            var layerPage = layerE.find(doms[4]);
            outHeight = $(page.dom).outerHeight();
            config.area[0] === 'auto' && layerE.css({width : layerPage.outerWidth()});
            if(page.html !== '' || page.url !== ''){
                outHeight = layerPage.outerHeight();
            }
        break;
        case 2:
            layerE.find('iframe').css({width: layerE.outerWidth(), height: layerE.outerHeight() - (config.title ? layerTitle.innerHeight() : 0)});
        break;
        case 3:
            var load = layerE.find(".xubox_loading");
            outHeight = load.outerHeight(); 
            layerMian.css({width: load.width()});
        break;
    };
    (config.area[1] === 'auto') && layerMian.css({height: titHeight + outHeight + btnHeight});
    $('#xubox_border' + times).css({width: layerE.outerWidth() + 2*config.border[0] , height: layerE.outerHeight() + 2*config.border[0]});
    (layer.ie6 && config.area[0] !== 'auto') && layerMian.css({width : layerE.outerWidth()});
    (config.offset[1] === '50%' || config.offset[1] == '') && (config.type !== 4) ? layerE.css({marginLeft : -layerE.outerWidth()/2}) : layerE.css({marginLeft : 0});
};

//拖拽层
Class.pt.move = function(){
    var that = this, config = that.config, conf = {
        setY: 0,
        moveLayer: function(){
            if(parseInt(conf.layerE.css('margin-left')) == 0){
                var lefts = parseInt(conf.move.css('left'));
            }else{
                var lefts = parseInt(conf.move.css('left')) + (-parseInt(conf.layerE.css('margin-left')))
            }
            if(conf.layerE.css('position') !== 'fixed'){
                lefts = lefts - conf.layerE.parent().offset().left;
                conf.setY = 0
            }
            conf.layerE.css({left: lefts, top: parseInt(conf.move.css('top')) - conf.setY});
        }
    };
    
    var movedom = that.layerE.find(config.move);
    config.move && movedom.attr('move','ok');
    config.move ? movedom.css({cursor: 'move'}) : movedom.css({cursor: 'auto'});
    
    $(config.move).on('mousedown', function(M){    
        M.preventDefault();
        if($(this).attr('move') === 'ok'){
            conf.ismove = true;
            conf.layerE = $(this).parents('.'+ doms[0]);
            var xx = conf.layerE.offset().left, yy = conf.layerE.offset().top, ww = conf.layerE.width() - 6, hh = conf.layerE.height() - 6;
            if(!$('#xubox_moves')[0]){
                $('body').append('<div id="xubox_moves" class="xubox_moves" style="left:'+ xx +'px; top:'+ yy +'px; width:'+ ww +'px; height:'+ hh +'px; z-index:2147483584"></div>');
            }
            conf.move = $('#xubox_moves');
            config.moveType && conf.move.css({opacity: 0});
           
            conf.moveX = M.pageX - conf.move.position().left;
            conf.moveY = M.pageY - conf.move.position().top;
            conf.layerE.css('position') !== 'fixed' || (conf.setY = win.scrollTop());
        }
    });
    
    $(document).mousemove(function(M){
        if(conf.ismove){
            var offsetX = M.pageX - conf.moveX, offsetY = M.pageY - conf.moveY;
            M.preventDefault();

            //控制元素不被拖出窗口外
            if(!config.moveOut){
                conf.setY = win.scrollTop();
                var setRig = win.width() - conf.move.outerWidth() - config.border[0], setTop = config.border[0] + conf.setY;               
                offsetX < config.border[0] && (offsetX = config.border[0]);
                offsetX > setRig && (offsetX = setRig); 
                offsetY < setTop && (offsetY = setTop);
                offsetY > win.height() - conf.move.outerHeight() - config.border[0] + conf.setY && (offsetY = win.height() - conf.move.outerHeight() - config.border[0] + conf.setY);
            }
            
            conf.move.css({left: offsetX, top: offsetY});    
            config.moveType && conf.moveLayer();
            
            offsetX = null;
            offsetY = null;
            setRig = null;
            setTop = null
        }                                                 
    }).mouseup(function(){
        try{
            if(conf.ismove){
                conf.moveLayer();
                conf.move.remove();
            }
            conf.ismove = false;
        }catch(e){
            conf.ismove = false;
        }
        config.moveEnd && config.moveEnd();
    });
};

//自动关闭layer
Class.pt.autoclose = function(){
    var that = this, time = that.config.time, maxLoad = function(){
        time--;
        if(time === 0){
            layer.close(that.index);
            clearInterval(that.autotime);
        }
    };
    that.autotime = setInterval(maxLoad , 1000);
};

ready.config = {
    end: {}
};

Class.pt.callback = function(){
    var that = this, layerE = that.layerE, config = that.config, dialog = config.dialog;
    that.openLayer();
    that.config.success(layerE);
    layer.ie6 && that.IE6(layerE);

    layerE.find('.xubox_close').on('click', function(){
        config.close(that.index);
        layer.close(that.index);
    });
    
    layerE.find('.xubox_yes').on('click',function(){
        config.yes ? config.yes(that.index) : dialog.yes(that.index);
    });
    
    layerE.find('.xubox_no').on('click',function(){
        config.no ? config.no(that.index) : dialog.no(that.index);
        layer.close(that.index);
    });
    
    if(that.config.shadeClose){
        $('#xubox_shade'+ that.index).on('click', function(){
            layer.close(that.index);
        });
    } 
    
    //最小化
    layerE.find('.xubox_min').on('click', function(){
        layer.min(that.index, config);
        config.min && config.min(layerE);
    });
    
    //全屏/还原
    layerE.find('.xubox_max').on('click', function(){
        if($(this).hasClass('xubox_maxmin')){
            layer.restore(that.index);
            config.restore && config.restore(layerE);
        } else {
            layer.full(that.index, config);
            config.full && config.full(layerE);
        }
    });

    ready.config.end[that.index] = config.end;
};

//恢复select
ready.reselect = function(){
    $.each($('select'), function(index , value){
        var sthis = $(this);
        if(!sthis.parents('.'+doms[0])[0]){
            (sthis.attr('layer') == 1 && $('.'+doms[0]).length < 1) && sthis.removeAttr('layer').show(); 
        }
        sthis = null;
    });
}; 

Class.pt.IE6 = function(layerE){
    var that = this;
    var _ieTop = layerE.offset().top;    
    //ie6的固定与相对定位
    if(that.config.fix){
        var ie6Fix = function(){
            layerE.css({top : win.scrollTop() + _ieTop});
        };    
    }else{
        var ie6Fix = function(){
            layerE.css({top : _ieTop});    
        };
    }
    ie6Fix();
    win.scroll(ie6Fix);

    //隐藏select
    $.each($('select'), function(index , value){
        var sthis = $(this);
        if(!sthis.parents('.'+doms[0])[0]){
            sthis.css('display') == 'none' || sthis.attr({'layer' : '1'}).hide();
        }
        sthis = null;
    });
};

//给layer对象拓展方法
Class.pt.openLayer = function(){
    var that = this, layerE = that.layerE;

    //自适应宽高
    layer.autoArea = function(index){
        return that.autoArea(index);
    };

    //兼容旧版出场动画
    layer.shift = function(type, rate, stop){
        that.shift(type, rate, stop);
    };

    //初始化拖拽元素
    layer.setMove = function(){
        return that.move();
    };
    
    //置顶当前窗口
    layer.zIndex = that.config.zIndex;
    layer.setTop = function(layerNow){
        var setZindex = function(){
            layer.zIndex++;
            layerNow.css('z-index', layer.zIndex + 1);
        };
        layer.zIndex = parseInt(layerNow[0].style.zIndex);
        layerNow.on('mousedown', setZindex);
        return layer.zIndex;
    };
    
};

ready.isauto = function(layero, options, offset){
    options.area[0] === 'auto' && (options.area[0] = layero.outerWidth());
    options.area[1] === 'auto' && (options.area[1]  = layero.outerHeight());
    layero.attr({area: options.area + ',' + offset});
    layero.find('.xubox_max').addClass('xubox_maxmin');
};

ready.rescollbar = function(index){
    if(doms.html.attr('layer-full') == index){
        if(doms.html[0].style.removeProperty){
            doms.html[0].style.removeProperty('overflow');
        } else {
            doms.html[0].style.removeAttribute('overflow');
        }
        doms.html.removeAttr('layer-full');
    }
};


/**
 * 集成属性/方法
 **/
 

//获取page层所在索引
layer.getIndex = function(selector){
    return $(selector).parents('.'+doms[0]).attr('times');    
};

//获取子iframe的DOM
layer.getChildFrame = function(selector, index){
    index = index || $('.'+ doms[1]).parents('.'+doms[0]).attr('times');
    return $('#'+ doms[0] + index).find('.'+ doms[1]).contents().find(selector);    
};

//得到当前iframe层的索引，子iframe时使用
layer.getFrameIndex = function(name){
    return $(name ? '#'+ name : '.'+ doms[1]).parents('.'+doms[0]).attr('times');
};

//iframe层自适应宽高
layer.iframeAuto = function(index){
    index = index || $('.'+ doms[1]).parents('.'+doms[0]).attr('times');
    var heg = layer.getChildFrame('body', index).outerHeight(),
    layero = $('#'+ doms[0] + index), tit = layero.find(doms[2]), titHt = 0;
    tit && (titHt = tit.height());
    layero.css({height: heg + titHt});
    var bs = -parseInt($('#xubox_border'+ index).css('top'));
    $('#xubox_border'+ index).css({height: heg + 2*bs + titHt});
    $('#'+ doms[1] + index).css({height: heg});
};

//重置iframe url
layer.iframeSrc = function(index, url){
    $('#'+ doms[0] + index).find('iframe').attr('src', url);
};

//重置层
layer.area = function(index, options){
    var layero = [$('#'+ doms[0] + index), $('#xubox_border'+ index)],
    type = layero[0].attr('type'), main = layero[0].find(doms[5]),
    title = layero[0].find(doms[2]);
    
    if(type === ready.type[1] || type === ready.type[2]){
        layero[0].css(options);
        main.css({width: options.width, height: options.height});
        if(type === ready.type[2]){
            var iframe = layero[0].find('iframe');
            iframe.css({width: options.width, height: title ? options.height - title.innerHeight() : options.height});
        }
        if(layero[0].css('margin-left') !== '0px') {
            options.hasOwnProperty('top') && layero[0].css({top: options.top - (layero[1][0] ? parseFloat(layero[1].css('top')) : 0)});
            options.hasOwnProperty('left') && layero[0].css({left: options.left + layero[0].outerWidth()/2 - (layero[1][0] ? parseFloat(layero[1].css('left')) : 0)});
            layero[0].css({marginLeft : -layero[0].outerWidth()/2});
        }
        if(layero[1][0]){
            layero[1].css({
                width: parseFloat(options.width) - 2*parseFloat(layero[1].css('left')), 
                height: parseFloat(options.height) - 2*parseFloat(layero[1].css('top'))
            });
        }
    }
};

//最小化
layer.min = function(index, options){
    var layero = $('#'+ doms[0] + index), offset = [layero.position().top, layero.position().left + parseFloat(layero.css('margin-left'))];
    ready.isauto(layero, options, offset);
    layer.area(index, {width: 180, height: 35});
    layero.find('.xubox_min').hide();
    layero.attr('type') === 'page' && layero.find(doms[4]).hide();
    ready.rescollbar(index);
};

//还原
layer.restore = function(index){
    var layero = $('#'+ doms[0] + index), area = layero.attr('area').split(',');
    var type = layero.attr('type');
    layer.area(index, {
        width: parseFloat(area[0]), 
        height: parseFloat(area[1]), 
        top: parseFloat(area[2]), 
        left: parseFloat(area[3])
    });
    layero.find('.xubox_max').removeClass('xubox_maxmin');
    layero.find('.xubox_min').show();
    layero.attr('type') === 'page' && layero.find(doms[4]).show();
    ready.rescollbar(index);
};

//全屏
layer.full = function(index, options){
    var layero = $('#'+ doms[0] + index), borders = options.border[0]*2 || 6, timer;
    var offset = [layero.position().top, layero.position().left + parseFloat(layero.css('margin-left'))];
    ready.isauto(layero, options, offset);
    if(!doms.html.attr('layer-full')){
        doms.html.css('overflow','hidden').attr('layer-full', index);
    }
    clearTimeout(timer);
    timer = setTimeout(function(){
        layer.area(index, {
             top: layero.css('position') === 'fixed' ? 0 : win.scrollTop(),
             left: layero.css('position') === 'fixed' ? 0 : win.scrollLeft(),
             width: win.width() - borders,
             height: win.height() - borders
        });
    }, 100);
};

//改变title
layer.title = function(name, index){
    var title = $('#'+ doms[0] + (index||layer.index)).find('.xubox_title>em');
    title.html(name);
};

//关闭layer总方法
layer.close = function(index){
    var layero = $('#'+ doms[0] + index), type = layero.attr('type'), shadeNow = $('#xubox_moves, #xubox_shade' + index);
    if(!layero[0]){
        return;
    }
    if(type == ready.type[1]){
        if(layero.find('.xuboxPageHtml')[0]){
            layero[0].innerHTML = '';
            layero.remove();
        }else{
            layero.find('.xubox_setwin,.xubox_close,.xubox_botton,.xubox_title,.xubox_border').remove();
            for(var i = 0 ; i < 3 ; i++){
                layero.find('.layer_pageContent').unwrap().hide();
            }
        }
    }else{
        layero[0].innerHTML = '';
        layero.remove();
    }
    shadeNow.remove();
    layer.ie6 && ready.reselect();
    ready.rescollbar(index);
    typeof ready.config.end[index] === 'function' && ready.config.end[index]();
    delete ready.config.end[index]; 
};

//关闭loading层
layer.closeLoad = function(){
    layer.close($('.xubox_loading').parents('.'+doms[0]).attr('times'));
};

//关闭tips层
layer.closeTips = function(){
    layer.closeAll('tips');
};

//关闭所有层
layer.closeAll = function(type){
    $.each($('.'+doms[0]), function(){
        var othis = $(this);
        var is = type ? (othis.attr('type') === type) : 1;
        if(is){
            layer.close(othis.attr('times'));
        }
        is = null;
    });
};

//主入口
ready.run = function(){
    $ = jQuery; 
    win = $(window);
    doms.html = $('html');
    layer.use('skin/layer.css');
    $.layer = function(deliver){
        var o = new Class(deliver);
        return o.index;
    };
    (new Image()).src = layer.path + 'skin/default/xubox_ico0.png';
};

if("function" === typeof define){
    define(function(){
        ready.run();
        return layer;
    });
}else{
    ready.run();
}

}(window);
>>>>>>> 8a053b3d525317e048bd2f777d2392b4a62d27e8
