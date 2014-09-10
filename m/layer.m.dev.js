/****************************************

 @Name：layer v1.1 弹层组件移动版
 @Author：贤心
 @Date：2014-08-24
 @Copyright：Sentsin Xu(贤心)
 @官网：http://sentsin.com/layui/layer
 @License：MIT
        
 */

;!function(win){        
"use strict";

var path = '' //所在路径，如果非模块加载不用配置
? path : document.scripts[document.scripts.length-1].src.match(/[\s\S]*\//)[0];

var doc = document, elem = 'createElement', byid = 'getElementById', claname = 'getElementsByClassName';

document.head.appendChild((function(){
    var link = doc[elem]('link');
    link.href = path + 'need/layer.css';
    link.type="text/css";
    link.rel="styleSheet"
    link.id = 'layermcss';
    return link;
}()));

var config = {
     type: 0,
     shade: true,
     shadeClose: true,
     fixed: true,
     anim: true
};

var ready = {
    extend: function(obj){
        var newobj = JSON.parse(JSON.stringify(config));
        for(var i in obj){
            newobj[i] = obj[i];
        }
        return newobj;
    }, timer: {}
};

var index = 0, classs = ['layermbox'];

function Layer(options){
    var that = this;
    that.config = ready.extend(options);
    that.view();
};

Layer.prototype.view = function(){
    var that = this, config = that.config, layerbox = doc[elem]('div');

    that.id = layerbox.id = classs[0] + index;
    layerbox.setAttribute('class', classs[0] + ' ' + classs[0]+(config.type || 0));
    layerbox.setAttribute('index', index);

    var title = (function(){
        var titype = typeof config.title === 'object';
        return config.title
        ? '<h3 style="'+ (titype ? config.title[1] : '') +'">'+ (titype ? config.title[0] : config.title)  +'</h3><button class="layermend">x</button>'
        : '';
    }());
    
    var button = (function(){
        var btns = (config.btn || []).length, btndom;
        if(btns === 0 || !config.btn){
            return '';
        }
        btndom = '<span type="1">'+ config.btn[0] +'</span>'
        if(btns === 2){
            btndom = '<span type="0">'+ config.btn[1] +'</span>' + btndom;
        }
        return '<div class="layermbtn">'+ btndom + '</div>';
    }());
    
    if(!config.fixed){
        config.top = config.hasOwnProperty('top') ?  config.top : 100;
        config.style = config.style || '';
        config.style += ' top:'+ ( doc.body.scrollTop + config.top) + 'px';
    }
    
    if(config.type === 2){
        config.content = '<i></i><i class="laymloadtwo"></i><i></i><div>' + (config.content||'') + '</div>';
    }
    
    layerbox.innerHTML = (config.shade ? '<div class="laymshade"></div>' : '')
    +'<div class="layermmain" '+ (!config.fixed ? 'style="position:static;"' : '') +'>'
        +'<section>'
            +'<div class="layermchild '+ (config.anim ? 'layermanim' : '') +'" ' + ( config.style ? 'style="'+config.style+'"' : '' ) +'>'
                + title
                +'<div class="layermcont">'+ config.content +'</div>'
                + button
            +'</div>'
        +'</section>'
    +'</div>';
    
    if(!config.type || config.type === 2){
        var dialogs = doc[claname](classs[0] + config.type), dialen = dialogs.length;
        if(dialen >= 1){
            layer.close(dialogs[0].getAttribute('index'))
        }
    }
    
    document.body.appendChild(layerbox);
    
    setTimeout(function(){
        try{
            doc[byid](that.id).className = doc[byid](that.id).className + ' layermshow';
        }catch(e){
            return;
        }
        config.success && config.success(doc[byid](that.id));
    }, 1);
    
    that.index = index++;
    that.action(config);
};

Layer.prototype.action = function(config){
    var that = this;
    
    //自动关闭
    if(config.time){
        ready.timer[that.index] = setTimeout(function(){
            layer.close(that.index);
        }, config.time*1000);
    }
    
    //关闭按钮
    if(config.title){
        doc[byid](that.id)[claname]('layermend')[0].onclick = function(){
            config.cancel && config.cancel();
            layer.close(that.index, config.end);
        };
    }
    
    //确认取消
    if(config.btn){
        doc[byid](that.id)[claname]('layermbtn')[0].onclick = function(event){
            var type = event.target.getAttribute('type');
            if(type == 0){
                config.no && config.no();
                layer.close(that.index, config.end);
            } else {
                config.yes ? config.yes(that.index) : layer.close(that.index, config.end);
            }
        };
    }
    
    //点遮罩关闭
    if(config.shade && config.shadeClose){
        var shade = doc[byid](that.id)[claname]('laymshade')[0];
        shade.onclick = function(){
            layer.close(that.index, config.end);
        };
        shade.ontouchmove = function(){
            layer.close(that.index, config.end);
        };
    }
};

var layer = {
    v: '1.1',
    index: index,
    
    //核心方法
    open: function(options){
        var o = new Layer(options || {});
        return o.index;
    },
    
    close: function(index, callback){
        var ibox = doc[byid](classs[0]+index);
        if(!ibox) return;
        ibox.innerHTML = '';
        doc.body.removeChild(ibox);
        clearTimeout(ready.timer[index]);
        delete ready.timer[index];
        callback && callback();
    },
    
    //关闭所有layer层
    closeAll: function(){
        var boxs = document.getElementsByClassName(classs[0]);
        for(var i = 0, len = boxs.length; i < len; i++){
            layer.close(boxs[i].getAttribute('index'));
        }
    }
};

"function" === typeof define ? define(function() {
    return layer;
}) : win.layer = layer;

}(window);