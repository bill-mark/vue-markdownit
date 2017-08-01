----

### 2. 接口文档

#### 2.1. ui
界面组件

#### 类别：界面提示
#### 2.1.1 ui.alert



``` 
ui.alert(options: object, callback: function)
```
a) options 参数说明 

| 名称 |	类型 |	必填|	描述| 
|-|-|-|-|
|title|	String|	否|	alert框的标题|
|content|	String|	否|	alert框的内容|
|buttonText|	String	|否|	按钮文字，默认"确定"|

b) callback 参数说明

点击按钮后调用

c) 代码示例
``` js
<script>
var btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
bridge.alert({
title: '亲',
content: '您有新的快递消息',
buttonText: '我知道了'
}, function(){
//可直接传入一个字符串当作 OPTION.content 参数
bridge.alert('用户点击了「我知道了」');
});
});
</script>
```

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```