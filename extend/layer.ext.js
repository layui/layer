/**
 
 @Name: layer拓展类，依赖于layer
 @Date: 2014.07.04
 @Author: 贤心
 @Versions：1.8.4-ext
 @Api：http://sentsin.com/jquery/layer
 @Desc: 本拓展会持续更新

 **/
 
layer.use('skin/layer.ext.css', function(){
    layer.ext && layer.ext();
});


/**

 系统prompt
 By 贤心
 
**/

layer.prompt = function(parme, yes, no){
    var log = {}, parme = parme || {}, conf = {
        area: ['auto', 'auto'],
        offset: [parme.top || '', ''],
        title: parme.title || '信息',
        dialog: {
            btns: 2,
            type: -1,
            msg: '<input type="'+ function(){
                if(parme.type === 1){ //密码
                    return 'password';
                } else if(parme.type === 2) {
                    return 'file';
                } else {
                    return 'text';
                }
            }() +'" class="xubox_prompt xubox_form" id="xubox_prompt" value="'+ (parme.val || '') +'" />',
            yes: function(index){
                var val = log.prompt.val();
                if(val === ''){
                    log.prompt.focus();
                } else if(val.replace(/\s/g, '').length > (parme.length || 1000)) {
                    layer.tips('最多输入'+ (parme.length || 1000) +'个字数', '#xubox_prompt', 2);
                } else {
                    yes && yes(val, index, log.prompt);
                }
                
            }, no: no
        }, success: function(){
            log.prompt = $('#xubox_prompt');
        }
    };
    if(parme.type === 3){
        conf.dialog.msg = '<textarea class="xubox_prompt xubox_form xubox_formArea" id="xubox_prompt"></textarea>'
    }
    return $.layer(conf);
};


/**

 tab层
 By 贤心
 
**/

layer.tab = function(parme){
    var log = {}, parme = parme || {}, data = parme.data || [], conf = {
        type: 1,
        border: [0],
        area: ['auto', 'auto'],
        bgcolor: '',
        title: false,
        shade : parme.shade,
        offset: parme.offset,
        move: '.xubox_tabmove',
        closeBtn: false,
        page: {html: '<div class="xubox_tab" style="'+ function(){
            parme.area = parme.area || [];
            return 'width:'+ (parme.area[0] || '500px') +'; height:'+ (parme.area[1] || '300px') +'">';
        }()
        +'<span class="xubox_tabmove"></span>'
        +'<div class="xubox_tabtit">'
        +function(){
            var len = data.length, ii = 1, str = '';
            if(len > 0){
                str = '<span class="xubox_tabnow">'+ data[0].title +'</span>';
                for(; ii < len; ii++){
                    str += '<span>'+ data[ii].title +'</span>';
                }
            }
            return str;
        }() +'</div>'
        +'<ul class="xubox_tab_main">'+ function(){
            var len = data.length, ii = 1, str = '';
            if(len > 0){
                str = '<li class="xubox_tabli xubox_tab_layer">'+ (data[0].content || 'content未传入') +'</li>';
                for(; ii < len; ii++){
                    str += '<li class="xubox_tabli">'+ (data[ii].content || 'content未传入') +'</li>';
                }
            }
            return str;
        }() +'</ul>'
        +'<span class="xubox_tabclose" title="关闭">X</span>'
        +'</div>'
        }, success: function(layerE){
            //切换事件
            var btn = $('.xubox_tabtit').children(), main = $('.xubox_tab_main').children(), close = $('.xubox_tabclose');
            btn.on('click', function(){
                var othis = $(this), index = othis.index();
                othis.addClass('xubox_tabnow').siblings().removeClass('xubox_tabnow');
                main.eq(index).show().siblings().hide();
            });
            //关闭层
            close.on('click', function(){
                layer.close(layerE.attr('times'));
            });
        }
    };
    return $.layer(conf);
};



/**

 相册层
 By 贤心
 
**/


layer.photos = function(options){
    options = options || {};
    var log = {
        imgIndex: 1,
        end: null,
        html: $('html')
    }, win = $(window), json = options.json, page = options.page;
    
    if(json){
        var data = json.data;
        if(json.status === 1){
            log.imgLen = data.length;
            if(data.length > 0){
                log.thissrc = data[json.start].src;
                log.pid = data[json.start].pid;
                log.imgsname = (json.title || '');
                log.name = data[json.start].name;
                log.imgIndex = json.start + 1;
            } else {
                layer.msg('没有任何图片', 2, 8);
                return;
            }
            
        } else {
            layer.msg('未请求到数据', 2, 8);
            return;
        }
    } else {
        var imgs = $(page.parent).find('img'), nowimg = imgs.eq(page.start);
        log.thissrc = (nowimg.attr('layer-img') || nowimg.attr('src'));
        log.pid = nowimg.attr('pid');
        log.imgLen = imgs.length;
        log.imgsname = (page.title || '');
        log.name = nowimg.attr('alt');
        log.imgIndex = page.start + 1;
    }
    
    var conf = {
        type: 1,
        border: [0],
        area: [(options.html ? 915 : 600) + 'px', 'auto'],
        title: false,
        shade: [0.9, '#000', true],
        shadeClose: true,
        offset: ['25px', ''],
        bgcolor: '',
        page: {
            html: '<div class="xubox_bigimg"><img src="'+ log.thissrc +'" alt="'+ (log.name || '') +'" layer-pid="'+ (log.pid || '') +'"><div class="xubox_imgsee">'+ function(){
                if(log.imgLen > 1){
                    return '<a href="" class="xubox_iconext xubox_prev"></a><a href="" class="xubox_iconext xubox_next"></a>'
                } else {
                    return '';
                }   
            }() +'<div class="xubox_imgbar"><span class="xubox_imgtit"><a href="javascript:;">'+ log.imgsname +' </a><em>'+ log.imgIndex +'/'+ log.imgLen +'</em></span></div></div></div>'+ function(){
                if(options.html){
                    return '<div class="xubox_intro">'+ options.html +'</div>';
                } else {
                    return '';
                }
            }()
        }, success: function(layero){
            log.bigimg = layero.find('.xubox_bigimg');
            log.imgsee = log.bigimg.find('.xubox_imgsee');
            log.imgbar = log.imgsee.find('.xubox_imgbar');
            log.imgtit = log.imgbar.find('.xubox_imgtit');
            log.layero = layero;
            
            var img = log.imgs = log.bigimg.find('img');
            
            clearTimeout(log.timerr);
            log.timerr = setTimeout(function(){
                $('html').css('overflow', 'hidden').attr('layer-full', log.index);
            }, 10);
            
            img.load(function(){
                log.imgarea = [img.outerWidth(), img.outerHeight()];
                log.resize(layero);
            });
            
            log.event();
            
        }, end: function(){
            layer.closeAll();
            log.end = true;
        }
    };
    
    //一些动作
    log.event = function(){
        log.bigimg.hover(function(){
            log.imgsee.show();
        }, function(){
            log.imgsee.hide();
        });
        
        //上一张
        conf.imgprev = function(){
            log.imgIndex--;
            if(log.imgIndex < 1){
                log.imgIndex = log.imgLen;
            }
            log.tabimg();
        };
        log.bigimg.find('.xubox_prev').on('click', function(event){
            event.preventDefault();
            conf.imgprev();
        });
        
        //下一张
        conf.imgnext = function(){
            log.imgIndex++;
            if(log.imgIndex > log.imgLen){
                log.imgIndex = 1;
            }
            log.tabimg()
        };
        log.bigimg.find('.xubox_next').on('click', function(event){         
            event.preventDefault();
            conf.imgnext();
        });
        
        //方向键
        $(document).keyup(function(event){
            if(!log.end){
                var code = event.keyCode;
                event.preventDefault();
                if(code === 37){
                    conf.imgprev();
                } else if(code === 39) {
                    conf.imgnext();
                } else if(code === 27) {
                    layer.close(log.index);
                }
            }
        });
        
        
        log.tabimg = function(){
            var timer, src, pid, name;
            log.imgs.removeAttr('style');
            if(json){
                var nowdata = data[log.imgIndex - 1];
                src = nowdata.src;
                pid = nowdata.pid;
                name = nowdata.name;
            } else {
                var thisimg = imgs.eq(log.imgIndex - 1);
                src = thisimg.attr('layer-img') || thisimg.attr('src');
                pid = thisimg.attr('layer-pid') || '';
                name = thisimg.attr('alt') || '';
            }
            log.imgs.attr({
                src: src,
                'layer-pid': pid,
                alt: name
            });
            log.imgtit.find('em').text(log.imgIndex + '/' + log.imgLen);
            log.imgsee.show();
            options.tab && options.tab({pid: pid, name: name});
        }
    };
    
    //相册响应式
    log.resize = function(layero){
        var relog = {}, wa = [win.width(), win.height()];
        relog.limit = wa[0] - wa[0]/wa[1]*(60*wa[0]/wa[1]);
        if(relog.limit < 600){
            relog.limit = 600;
        }
        var area = [relog.limit,  wa[1] > 400 ? wa[1] - 50 : 400];
        area[0] = options.html ? area[0] : (area[0] - 300);
        layer.area(log.index, {
            width: area[0] + (options.html ? 15 : 0),
            height: area[1]
        });
        relog.flwidth = area[0] - (options.html ? 300 : 0);
        if(log.imgarea[0] > relog.flwidth){
            log.imgs.css({width: relog.flwidth});
        } else {
            log.imgs.css({width: log.imgarea[0]});
        }
        if(log.imgs.outerHeight() < area[1]){
            log.imgs.css({top: (area[1] - log.imgs.outerHeight())/2});
        }
        log.imgs.css({visibility: 'visible'});
        log.bigimg.css({width: relog.flwidth, height: area[1], 'background-color': options.bgcolor});
        if(options.html){
            layero.find('.xubox_intro').css({height: area[1]});
        }
        relog = null;
        wa = null;
        area = null;
    };
    
    win.on('resize', function(){
        if(log.end){
            return;
        }
        if(log.timer){
            clearTimeout(log.timer); 
        }
        log.timer = setTimeout(function(){
            log.resize(log.layero);
        }, 200); 
    });
    
    log.index = $.layer(conf);
    return log.index;
};

//获取页面元素包含的所有图片，快捷调用
layer.photosPage = function(options){
    var log = {};
    log.run = function(index){
        layer.photos({
            html: options.html,
            success: options.success,
            page: {
                title: options.title,
                id: options.id,
                start: index,
                parent: options.parent
            }
        });
    };
    options = options || {};
    $(options.parent).find('img').each(function(index){
        $(this).on('click', function(){
            log.run(index);
        });
    });
};
