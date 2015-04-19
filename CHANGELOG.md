<<<<<<< HEAD
﻿
【1.9.0】

> 新增laye.open(options)，抛弃了之前的$.layer(options)调用方法，目的是与layer mobile保持统一。
> 新增layer.config(options)方法，用于进行全局化配置。除了用于展现弹层的基础参数外，还支持path，用于模块化加载layer时设定目录以便加载所需配件，如layer.config({path: '所在路径', extend: ''});
> 新增content参数，用于统一传入内容。支持string类型和jquery dom对象。如果是type:2，即iframe的url。
> 新增icon参数，用于统一配置对话框和loading的icon类型。
> 新增cancel参数，用于统一取消回调。
> 新增skin参数，用于控制层的不同外观。
> 新增layer.ready(path, callback)，用于页面加载时即调用弹层。如果通过layer.config配置了path，此方法的path可以不填，即直接layer.ready(callback);
> 新增tipsMore，用于开启多个tips
> 新增scrollbar，用于设定是否屏蔽浏览器滚动条

> 完善offset参数，除了跟之前一样，[Y坐标, X坐标]，还支持传入'rd'，表示右下角。另外还支持只传入Y坐标，如offset: '120px'。默认'auto',即垂直水平居中。
> 完善自适应，只要设定了固定高度，任何层都会自适应出现滚动条
> 完善shift，全新的CSS3动画模式，支持传入0-6。
> 完善area，支持传入宽度、[宽，高],默认'auto'，表示自适应
> 完善time，传入值改为毫秒，比如2秒关闭，time: 2000
> 完善use方法，修复之前初始调用时部分浏览器一些不稳定因素
> 完善layer.full/layer.min方法，只要传入index即可，不用跟之前一样还要传入area和offset。。。
> layer.alert/confirm/msg/load/tips五种快捷引用重写，更灵活，更易使用。

> 剔除border参数，因为它没有本质的作用，自定义层样式可以通过新增的skin参数
> 剔除dialog的msg，page的html/url/dom，统一采用content
> 剔除dialog和loading的type，统一采用icon
> 剔除dialog中用于配置按钮数的btns，因为可直接通过btn本身来获取。
> 剔除no和close回调，统一采用cancel取代，不过仍然对前两者兼容。
> 剔除layer.closeLoad()、layer.closeTips()方法，统一用layer.closeAll('loading/tips')来对指定类型层进行关闭
> 剔除bgcolor参数，因为自定义的样式一律采用skin参数控制
> 剔除tips一些列子元素，只保留自身，并且支持number和object形，用于设定方向和显示箭头。
> 剔除layer.getIndex方法，获取索引统一用返回值
> 剔除layer.autoArea方法，因为已经采取更好的自适应方案。

> 默认不显示dialog图标，需要显示配置dialog指定的type即可
> 很多不可见只可感受的细节改动

<< 拓展模块 >>
> layer.prompt/layer.tab/layer.photos重写，代码更强健，功能更强大，详见Api。


总之！总之…layer1.9.0有着太多的调整，爱她，就认真去感受她！么么哒

——贤心 2015/4/15
=======

>>>>>>> 8a053b3d525317e048bd2f777d2392b4a62d27e8

【1.8.5】
* 新增对title样式的自定义控制
* 修复layer.prompt多行文本，设置默认值无效的bug

【1.8.4】
* 新增浏览器窗口尺寸改变时的自适应定位
* 新增属性shift，用于配置动画弹出（需要注意的是，之前的layer.shift()方法将在layer1.9遗弃，用shift属性取代）
* 新增方法layer.title(name, index); 用于动态改变层的标题。
* 修改弹出层默认初始坐标为垂直左右居中。
* 开放多个tips，可通过配置tips: {more: true}开启。
* 进一步完善tips的智能定位。
* 放弃layer.ready方法，用jQuery的ready取代。
* 进一步优化内部代码

== 拓展模块 ==
* layer.prompt支持给表单传入默认值，如layer.prompt({val:'默认'}); 新增yes回调函数第二个参数为索引、第三个参数为表单元素。
* 相册层新增tab回调函数，用于切换图片时进行相关操作
* 相册层内部代码优化。
