

# v3.0.2 2017.02.25

* 新增 resizing 回调，用于监听窗口的调整大小
* 增加自动ready处理机制，即如果你页面一打开就执行弹层，无需放入layer.ready中
* 对moveEnd回调返回一个参数为当前容器的DOM对象
* 添加一个amd条件,避免 define出错（Merge pull request #42 from wangyateng/master）
* 修复tab,photos,prompt弹层默认success回调被覆盖导致功能不正常的问题（来自github用户 @waychan23 的友情提醒）
* 完善多按钮场景换行的间距（之前是紧贴在一起，略不雅观）
* 弹出图片层的动画时间改为800ms
* 修复按方向键切换图片层过快时重复弹出的bug
* 修复与animate.css可能存在的动画冲突


---


# v3.0 2016.11.07

* 新增拖动弹层右下角可调节弹层尺寸的功能，由参数resize控制，默认开启。对loading、tips层无效
* offset参数新增 t、r、b、l、lt、lb、rt、rb、的赋值，可快捷实现上、右、下、左、左上角、左下角、右上角、右下角的边缘定位
* 新增btnAlign参数，支持三个参数：l/c/r，分别用于控制按钮居左、居中、居右的快捷设置（默认r，即居右）
* 点击最小化时，自动定位到页面左下角，在出现多个最小化时，会依次排列，这是一次较为重大的完善。
* 新增关闭层的过度动画（可通过 anim: -1 统一取消动画）

* 重写拖拽核心代码，性能大幅度提升
* layer.config核心调整
* layer.config中的extend参数只提供加载一个css皮肤文件（详见文档）
* 处理在head标签中执行layer弹层无效的情况
* 瘦身layer.ready方法
* 修改iframe层的loading动画
* 捕获页类型的弹层在关闭时，会根据所捕获元素的初始display值，进行不同处理，即不再强制隐藏。

* 剔除moveType参数，只提供默认的一种拖拽风格
* 剔除语义欠佳的fix参数，改为fixed取代
* 剔除语义欠佳的shift参数，改为anim取代，不过仍然对shift参数兼容

* 完善tips层细节
* 将prompt层改成页面层结构，即当你弹出prompt层时，再弹出msg，不会将prompt销毁。
* prompt层的textarea模式支持area参数来设定宽高
* layer.css大面积改善
* 降解IE6的fixed支持，不过仍然对ie6兼容（话说现在全浏览器兼容的组件已经不多了，layer后续会整理出不兼容ie6/7的版本）

* 修改图片超出屏幕后，重新计算大小的算法（Merge pull request from 390029659/master）
* 修复iframe层在用于iPhone设备时，无法触发滚动的Bug


---


# v2.4 2016.07.03

* 兼容jQuery3.0
* 优化tips，可支持配置参数fix（之前是强制fix: false），用于决定是固定的tips还是非固定的。
* min回调可通过return false来设定不执行默认最小化。
* 修复在移动端使用iframe，IOS下无法滑动的bug。
* 细节优化及样式微调

# 【v2.3】2016.05.18
* 通过对使用频率的调查，将layer.ext.js（拓展模块）合并到了layer.js，即不用再通过layer.config来加载调用。
* cancel回调不再对第二个按钮有效，只作为右上角关闭按钮触发。并且除yes回调外，所以按钮的回调都可以通过return false来设定不默认关闭。
* 修复相册层，点击任意图片查看，弹出的并非当前图片的bug。
* 修复相册层在移动端显示不佳的bug。
* 修复msg、alert等对话框类型的弹层，在手机使用时未水平居中的bug。

# 【v2.2】2016.03.18
* 增加参数id，用于控制弹层唯一标识。如不想重复弹出，可设置该值。
* layer.tips允许出现遮罩，即不对shade参数做限制。
* 对layer.photos方法直接弹出页面图片进行了事件委托，修复了之前由于动态插入的img而无法执行弹出的bug，并且修复了当图片信息改变时，仍然弹出了之前的图片的bug
* layer.photos方法多处代码进行了优化
* 对layer.tab方法新增回调函数change，用于监听选项卡的切换事件，返回一个选项卡索引参数。
* 样式微调


# 【v2.1】2015.11.04
* 修复在使用seajs或者requirejs后，layer.ext.js报layer未定义的错误。
* 修复弹出层后，回车键无效的bug。
* 修复iframe层的success回调在ie8以下浏览器无效的bug
* 修复只有一张图片时，并且该图片地址异常，不断弹出提示的bug。
* 修复当设定moveEnd回调，即便层关闭，仍然触发该回调的bug
* 即便采用模块加载，layer对象仍然保留全局，原因是layer自有模块需要。
* 优化图标锯齿消的回调除了yes和cancel外，还可用btn1/btn2。 btn2可解决取消遇右上角关闭共用cancel回调的问题。即如果你只需要接受取消的回调，可以使用 btn2: function(){}


# 【v2.0】2015.09.01
* 全新的默认皮肤
* 修复按住Enter键时，出现不断弹层的bug。
* 修复模块加载时，layer仍然暴露给了全局的bug。
* 修复拖拽完毕回调moveEnd，在层关闭后拖拽鼠标仍然触发该回调的bug。
* 确认和取消的回调除了yes和cancel外，还可用btn1/btn2。 btn2可解决取消遇右上角关闭共用cancel回调的问题。即如果你只需要接受取消的回调，可以使用 btn2: function(){}

### 拓展模块
* 修复通过script标签引入layer.ext.js时，出现Cannot read property 'skin' of undefined的报错问题。（虽然我们更推荐用layer.config()方式加载layer.ext.js）。
* 如果相册只有一张图片，则不触发上/下一张。


---


# 【v1.9.3】2015.05.23
* 修复全局设置皮肤时，部分类型层未起作用的bug。
* 增加skin值：layui-layer-rim，用于给层加边框（类似1.85的风格）
* 样式微调

### 拓展模块
* 修复相册层设定基础参数时，只有首次有效的bug。


# 【v1.9.2】2015.05.08
* 增加关闭动画样式：layui-layer-close
* 优化默认弹出动画
* 优化默认图标，默认的icon支持缩减到0-6（拓展皮肤可自己任意设定支持的数目）
* 优化部分样式
* 机智地修复了一个隐藏得非常深的但是不是太重要的bug。
* 剔除了一些图片。

# 【v1.9.1】2015.04.29
* btn设定多个按钮时，新增对应的回调（支持只有yes和cancel回调）,如btn: ['按钮一','按钮二','按钮三']，按钮一和按钮二还是之前的yes和cancel，按钮三，则回调为 btn3: function(){}，以此类推。
* 对cancel回调进行了微完善，如果不想关闭，return false即可，如cancel: function(){return false}，取消则不会关闭。
* 修复当设置了fix:false时,offset的设置无效的bug
* 为低版本IE回收iframe占用的内存，从而修复偶尔无法获焦的bug
* 修复当设置了btn时，最小化不能愉快地呈现的bug。
* 修复全局设置skin时，某些层类型出现样式异常的bug。
* 修复area设置了百分比时，maxmin参数无效的bug。
* 完善当采用script标签合并路径的方式引入layer，加载了错误的css路径的问题。这种情况需在script标签上加一个自定义属性merge="true",然后通过layer.config({path: 'layer所在目录'})来完成初始化的配置
* 样式微调

# 【v1.9.0】2015.04.19

* 新增laye.open(options)，抛弃了之前的$.layer(options)调用方法，目的是与layer mobile保持统一。
* 新增layer.config(options)方法，用于进行全局化配置。除了用于展现弹层的基础参数外，还支持path，用于模块化加载layer时设定目录以便加载所需配件，如layer.config({path: '所在路径', extend: ''});
* 新增content参数，用于统一传入内容。支持string类型和jquery dom对象。如果是type:2，即iframe的url。
* 新增icon参数，用于统一配置对话框和loading的icon类型。
* 新增cancel参数，用于统一取消回调。
* 新增skin参数，用于控制层的不同外观。
* 新增layer.ready(path, callback)，用于页面加载时即调用弹层。如果通过layer.config配置了path，此方法的path可以不填，即直接layer.ready(callback);
* 新增tipsMore，用于开启多个tips
* 新增scrollbar，用于设定是否屏蔽浏览器滚动条

* 完善offset参数，除了跟之前一样，[Y坐标, X坐标]，还支持传入'rd'，表示右下角。另外还支持只传入Y坐标，如offset: '120px'。默认'auto',即垂直水平居中。
* 完善自适应，只要设定了固定高度，任何层都会自适应出现滚动条
* 完善shift，全新的CSS3动画模式，支持传入0-6。
* 完善area，支持传入宽度、[宽，高],默认'auto'，表示自适应
* 完善time，传入值改为毫秒，比如2秒关闭，time: 2000
* 完善use方法，修复之前初始调用时部分浏览器一些不稳定因素
* 完善layer.full/layer.min方法，只要传入index即可，不用跟之前一样还要传入area和offset。。。
* layer.alert/confirm/msg/load/tips五种快捷引用重写，更灵活，更易使用。

* 剔除border参数，因为它没有本质的作用，自定义层样式可以通过新增的skin参数
* 剔除dialog的msg，page的html/url/dom，统一采用content
* 剔除dialog和loading的type，统一采用icon
* 剔除dialog中用于配置按钮数的btns，因为可直接通过btn本身来获取。
* 剔除no和close回调，统一采用cancel取代，不过仍然对前两者兼容。
* 剔除layer.closeLoad()、layer.closeTips()方法，统一用layer.closeAll('loading/tips')来对指定类型层进行关闭
* 剔除bgcolor参数，因为自定义的样式一律采用skin参数控制
* 剔除tips一些列子元素，只保留自身，并且支持number和object形，用于设定方向和显示箭头。
* 剔除layer.getIndex方法，获取索引统一用返回值
* 剔除layer.autoArea方法，因为已经采取更好的自适应方案。

* 默认不显示dialog图标，需要显示配置dialog指定的type即可
* 很多不可见只可感受的细节改动

###  拓展模块 
* layer.prompt/layer.tab/layer.photos重写，代码更强健，功能更强大，详见Api。


总之！总之…layer1.9.0有着太多的调整，爱她，就认真去感受她！么么哒

——贤心 2015/4/15


---



# 【v1.8.5】
* 新增对title样式的自定义控制
* 修复layer.prompt多行文本，设置默认值无效的bug

# 【v1.8.4】
* 新增浏览器窗口尺寸改变时的自适应定位
* 新增属性shift，用于配置动画弹出（需要注意的是，之前的layer.shift()方法将在layer1.9遗弃，用shift属性取代）
* 新增方法layer.title(name, index); 用于动态改变层的标题。
* 修改弹出层默认初始坐标为垂直左右居中。
* 开放多个tips，可通过配置tips: {more: true}开启。
* 进一步完善tips的智能定位。
* 放弃layer.ready方法，用jQuery的ready取代。
* 进一步优化内部代码

###  拓展模块 
* layer.prompt支持给表单传入默认值，如layer.prompt({val:'默认'}); 新增yes回调函数第二个参数为索引、第三个参数为表单元素。
* 相册层新增tab回调函数，用于切换图片时进行相关操作
* 相册层内部代码优化。
