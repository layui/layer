
## 简要
layer是一款口碑非常不错的web弹层组件，她具备全方位的解决方案，致力于服务各个水平段的开发人员，您的页面会轻松地拥有丰富而友好的操作体验。

在与同类弹出层插件的比较中，layer总是能轻易获胜。她尽可能地在以更少的代码展现更强健的功能，且格外注重性能的提升、易用和实用性，正因如此，越来越多的开发者将媚眼投上了layer。layer兼容了包括IE6在内的所有主流浏览器。 她数量可观的接口，使得您可以自定义太多您需要的风格，每一种弹层模式各具特色，皆广受欢迎。当然，这种“王婆卖瓜”的陈述听起来总是有点难受，因此你需要进一步了解她是否真的如你所愿。

[文档与演示](http://sentsin.com/layui/layer/) 

## 愿景
致力于打造国内最盛行的弹层组件，为web开发提供强劲动力。

## 现状
从两年前初出茅庐，到后来成为小众组件，再发展到今天，已为数以万计的人所熟知。
据不完全统计，截至到2014年5月13号，layer已服务于15万多家web平台。
其中包括：
* [中国联通](http://app.10010.com/)
* [蚂蚁短租](http://www.mayi.com/)
* [phpyun](http://www.phpyun.com/)
* [卡牌网](http://www.kapai.com/)
* [八圆包](http://www.bayuanbao.com/)


事实上我们无法获取到更多案例，所以如果您有大型项目也在使用layer，您可以联系作者，以便在layer官网展现，也为您的品牌推广尽一些绵薄之力。

## 日志
【1.8.5更新日志】
* 新增对title样式的自定义控制
* 修复layer.prompt多行文本，设置默认值无效的bug

【1.8.4更新日志】
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


## 备注
[官网](http://sentsin.com/jquery/layer/)、[更新日志](https://github.com/sentsin/layer/blob/master/Update%20Notes.txt)、[Say交流](http://say.sentsin.com/home-48.html)