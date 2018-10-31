
## 概要
layer是一款近年来备受青睐的web弹层组件，这完全得益于她全方位的解决方案。她致力于服务各个水平段的开发人员，您的页面会轻松地拥有丰富友好的操作体验。在与同类组件的比较中，layer总是能轻易获胜。她尽可能地在以更少的代码展现更强健的功能，且格外注重性能的提升、易用和实用性，正因如此，越来越多的开发者将媚眼投上了layer。layer兼容了包括IE6在内的所有主流浏览器。 她数量可观的接口，使得您可以自定义太多您需要的风格，每一种弹层模式各具特色，皆广受欢迎。当然，这种“王婆卖瓜”的陈述听起来总是有点难受，因此你需要进一步了解她是否真的如你所愿。

[文档与演示](http://layer.layui.com/) 

## 愿景
layer致力于打造国内最盛行的弹层组件，为web开发提供强劲动力。

## 现状
因着数年的坚持维护，截至到2017年03月21日，已运用在超过30万家Web平台，其中不乏众多知名大型网站。目前layer已经成为国内乃至全世界最多人使用的Web弹层解决方案，并且她仍在与Layui一并高速发展。

## 相关
[官网](http://layer.layui.com/)、[社区](http://fly.layui.com)

## 二次开发
主要是对移动版的 `layer` 增加一些自己需要的功能，[点击体验](https://fxss5201.github.io/layer/)：
 1. loading 增加了多种新的样式，只需要在原有的 `layer.open` 基础上参数上设置 `loadingType` 参数就可以调用新的 loading 样式
     * `loadingType: 1`：全页面的新 loading
     * `loadingType: 2`：全页面的 loading 成功样式
     * `loadingType: 3`：全页面的 loading 失败样式
     * `loadingType: 4`：小区域的新 loading
     * `loadingType: 5`：小区域的 loading 成功样式
     * `loadingType: 6`：小区域的 loading 失败样式