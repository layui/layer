/*! layer mobile-v2.0.0 Web弹层组件 MIT License  http://layer.layui.com/mobile  By 贤心 */
 ;!function(e){"use strict";var t=document,n="querySelectorAll",i="getElementsByClassName",a=function(e){return t[n](e)},l={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:"scale",loadingType:0},s={extend:function(e){var t=JSON.parse(JSON.stringify(l));for(var n in e)t[n]=e[n];return t},timer:{},end:{}};s.touch=function(e,t){e.addEventListener("click",function(e){t.call(this,e)},!1)};var r=0,o=["layui-m-layer"],d=function(e){var t=this;t.config=s.extend(e),t.view()};d.prototype.view=function(){var e=this,n=e.config,l=t.createElement("div");e.id=l.id=o[0]+r,l.setAttribute("class",o[0]+" "+o[0]+(n.type||0)),l.setAttribute("index",r);var s=function(){var e="object"==typeof n.title;return n.title?'<h3 style="'+(e?n.title[1]:"")+'">'+(e?n.title[0]:n.title)+"</h3>":""}(),d=function(){"string"==typeof n.btn&&(n.btn=[n.btn]);var e,t=(n.btn||[]).length;return 0!==t&&n.btn?(e='<span yes type="1">'+n.btn[0]+"</span>",2===t&&(e='<span no type="0">'+n.btn[1]+"</span>"+e),'<div class="layui-m-layerbtn">'+e+"</div>"):""}();if(n.fixed||(n.top=n.hasOwnProperty("top")?n.top:100,n.style=n.style||"",n.style+=" top:"+(t.body.scrollTop+n.top)+"px"),2===n.type)if(0===n.loadingType)n.content='<i class="layui-m-layerload-default"></i><i class="layui-m-layerload-default layui-m-layerload"></i><i class="layui-m-layerload-default"></i><p>'+(n.content||"")+"</p>";else{var y="";1!==n.loadingType&&4!==n.loadingType||(y="layui-m-layerload-type1",n.anim=!1),(2===n.loadingType||5===n.loadingType)&&(y="layui-m-layerload-type2"),(3===n.loadingType||6===n.loadingType)&&(y="layui-m-layerload-type3"),n.content='<i class="'+y+'"></i><p>'+(n.content||"")+"</p>"}if(n.skin&&(n.anim="up"),"msg"===n.skin&&(n.shade=!1),l.innerHTML=(n.shade?"<div "+("string"==typeof n.shade?'style="'+n.shade+'"':"")+' class="layui-m-layershade '+(n.loadingType>3?"layui-m-layershade-transparent":"")+'"></div>':"")+'<div class="layui-m-layermain" '+(n.fixed?"":'style="position:static;"')+'><div class="layui-m-layersection"><div class="layui-m-layerchild '+(n.skin?"layui-m-layer-"+n.skin+" ":"")+(n.className?n.className:"")+" "+(n.anim?"layui-m-anim-"+n.anim:"")+" "+(n.loadingType>3?"layui-m-layerchild-transparent":"")+'" '+(n.style?'style="'+n.style+'"':"")+">"+s+'<div class="layui-m-layercont">'+n.content+"</div>"+d+"</div></div></div>",!n.type||2===n.type){var c=t[i](o[0]+n.type),u=c.length;u>=1&&layer.close(c[0].getAttribute("index"))}document.body.appendChild(l);var p=e.elem=a("#"+e.id)[0];n.success&&n.success(p),e.index=r++,e.action(n,p)},d.prototype.action=function(e,t){var n=this;e.time&&(s.timer[n.index]=setTimeout(function(){layer.close(n.index)},1e3*e.time));var a=function(){var t=this.getAttribute("type");0==t?(e.no&&e.no(),layer.close(n.index)):e.yes?e.yes(n.index):layer.close(n.index)};if(e.btn)for(var l=t[i]("layui-m-layerbtn")[0].children,r=l.length,o=0;o<r;o++)s.touch(l[o],a);if(e.shade&&e.shadeClose){var d=t[i]("layui-m-layershade")[0];s.touch(d,function(){layer.close(n.index,e.end)})}e.end&&(s.end[n.index]=e.end)},e.layer={v:"2.0",index:r,open:function(e){var t=new d(e||{});return t.index},close:function(e){var n=a("#"+o[0]+e)[0];n&&(n.innerHTML="",t.body.removeChild(n),clearTimeout(s.timer[e]),delete s.timer[e],"function"==typeof s.end[e]&&s.end[e](),delete s.end[e])},closeAll:function(){for(var e=t[i](o[0]),n=0,a=e.length;n<a;n++)layer.close(0|e[0].getAttribute("index"))}},"function"==typeof define?define(function(){return layer}):function(){var e=document.scripts,n=e[e.length-1],i=n.src,a=i.substring(0,i.lastIndexOf("/")+1);n.getAttribute("merge")||document.head.appendChild(function(){var e=t.createElement("link");return e.href=a+"need/layer.css?2.0",e.type="text/css",e.rel="styleSheet",e.id="layermcss",e}())}()}(window);