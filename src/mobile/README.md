
## layer mobile 改
>layer mobile是为移动设备（手机、平板等webkit内核浏览器/webview）量身定做的弹层支撑，采用Native JavaScript编写，完全独立于PC版的layer，您需要按照场景选择使用。

在layer mobile基础上，增加方便调用的msg、confirm、alert等方法。让layer mobile像pc端一样方便使用。


>1. 无需依赖任何库，只加载layer.m.js即可
>2. 小巧玲珑，性能卓越、柔情似水…
>3. 具备无以伦比的自适应功能
>4. 灵活的皮肤自定义支撑，充分确保弹层风格多样化
>5. 丰富、科学的接口，让弹弹弹层无所不能
  
## 使用方法
本版本在原始api基础上做了一下常用方法的整理。让调用效率更高。原则是尽量和PC端layer调用方法保持一致。
  
如果需要，仍可调用原版api。具体方式请参考 [layer mobile api文档](http://layer.layui.com/mobile/api.html)
  
新增方法如下：
1. layer.msg() 提示框
```
  //msg:弹出的文字
  //end:提示框自动关闭后的回调方法
  layer.msg(msg,end) 
  
  //可以仅提示，不传递end
  layer.msg('你知道么？')
   
  //也可以同时都传递
  layer.msg('你知道么？',function(){
      layer('不知道！');
  });
```
2. layer.confirm() 或 layer.cf() 询问框
```
  layer.confirm(content,opt,yes,no)
  //或
  layer.confirm(content,yes,no)

  //可以带opt，opt可以包含 按钮名字，及标题名。默认没有标题，按钮名为 ['确定', '取消']
  layer.confirm('能给我画只羊么？',{
      btn:['好的', '不会画']
      , title:'他问你'
  },function(){
      //点击 好的 的回调
  },function(){
      //点击 不会画 的回调
  });
```
3. layer.alert() 消息框
```
layer.alert(content,opt,yes)
//或
layer.alert(content,yes)
//同样opt可以带也可以不带
//opt可以设置 按钮名 及 标题名

layer.alert('恒纪元到啦~！',{
    btn:'知道了'
    , title: '重要通知'
},function(){
    //点击‘知道了’ 回调
})
```
4. layer.btmMsg() 底部提示框
```
layer.btnMsg(content,end)
\\或
layer.btnMsg(content)

\\ content 为提示内容
\\ end 为提示框自动关闭后 回调
```

5. layer.btmConfirm 底部询问框
  
   用法参考2 layer.confirm.




 