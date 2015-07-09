
【1.9.3】2015.05.23
> 修复全局设置皮肤时，部分类型层未起作用的bug。
> 增加skin值：layui-layer-rim，用于给层加边框（类似1.85的风格）
> 样式微调

== 拓展模块 ==
> 修复相册层设定基础参数时，只有首次有效的bug。


【1.9.2】2015.05.08
> 增加关闭动画样式：layui-layer-close
> 优化默认弹出动画
> 优化默认图标，默认的icon支持缩减到0-6（拓展皮肤可自己任意设定支持的数目）
> 优化部分样式
> 机智地修复了一个隐藏得非常深的但是不是太重要的bug。
> 剔除了一些图片。

【1.9.1】2015.04.29
> btn设定多个按钮时，新增对应的回调（支持只有yes和cancel回调）,如btn: ['按钮一','按钮二','按钮三']，按钮一和按钮二还是之前的yes和cancel，按钮三，则回调为 btn3: function(){}，以此类推。
> 对cancel回调进行了微完善，如果不想关闭，return false即可，如cancel: function(){return false}，取消则不会关闭。
> 修复当设置了fix:false时,offset的设置无效的bug
> 为低版本IE回收iframe占用的内存，从而修复偶尔无法获焦的bug
> 修复当设置了btn时，最小化不能愉快地呈现的bug。
> 修复全局设置skin时，某些层类型出现样式异常的bug。
> 修复area设置了百分比时，maxmin参数无效的bug。
> 完善当采用<script>合并路径的方式引入layer，加载了错误的css路径的问题。这种情况需在script标签上加一个自定义属性merge="true",然后通过layer.config({path: 'layer所在目录'})来完成初始化的配置
> 样式微调

【1.9.0】2015.04.19

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
