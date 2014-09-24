

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
