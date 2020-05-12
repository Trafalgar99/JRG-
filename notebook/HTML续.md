# HTML

> section标签：章节

## 几个比较难的标签

**iframe**

嵌套页面
```HTML
<iframe src="https://www.baidu.com" name="xxx"></iframe>
```

iframe与a的混合使用：

可以给a标签一个target属性，再给iframe标签一个name属性，并且是这两个属性相对应，
可以实现在指定的iframe窗口打开a标签的链接

所有iframe都有一个border 应该用frameborder=“0”属性将其取消

**a标签**

a标签target属性：_blank _self _parent _ top

_blank：在空页面打开
_self：在自己的页面打开
_parent：在他父页面打开
_top：在最顶层打开

a标签download属性：开启后会下载链接的内容
（如果http响应的content-type为：application/octet-stream，浏览器也会下载内容）

a标签的href属性：

1. 当href属性为：href="qq.com"时，会造成访问失败，浏览器会把qq.com当成一个相对路径下文件，要在前面加上http://
2. 当href属性为：href="//qq.com"时，会跳转到file://qq.com（当前页面的协议）（这是被禁止使用的），可以下载http-server工具（npm i -g http-server）（命令行运行：http-server -c-1），使之支持file协议
3. 当href属性为：href="#45"（一个锚点），对自动跳转到当前页面的链接后加上锚点后对应的网页（但是不会发起请求，因为锚点代表的是页面内的跳转）
4. 当href属性为：href="?name=trafal"时，浏览器会把name=trafal添加到当前页面网址的后面，发起一个get请求
5. 当href属性为：href="javascript: alert(1);"时（javascript伪协议），点击时会直接执行javascript代码

应用：href="javascript:;" 可以实现点击a标签但是不跳转页面（# 会回到页面的顶部， ## 不会使页面变动，与javascript一样）

**form标签**

跳转页面（HTTP POST请求）

如果form内没有提交按钮，就无法提交

method只能是get或者post
```HTML
<form action="users" method="post">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="提交">
</form>
```
在提交时会附带两个字段 username password

get会默认把参数（username，passeord）放到查询参数里

post会默认把参数放到数据段(第四部分)里

可以在post时手动添加查询参数（action="users？name=trafal"）

无法让get请求拥有第四部分

form标签也有target属性，与a标签的行为一致

**input/button**
```HTML
<input type="button" value="button">
<input type="submit" value="提交">
```
type="button" 和 type="submit" 的区别：

+ 如果一个form里只有一个按钮（button标签）且没有指定type，那么它会自动升级为提交按钮（type="submit"）  ，如果只有一个input（且type="button"）则不会升级

```HTML
<input type="checkbox">yes
```
如果希望点击文字也能实现勾选：
```html
<input type="checkbox" id="xxx"><label for="xxx">yes<label>
```
还可以进行其他的关联：点击文字会自动准备输入
```html
<label for="username"><label><input type="text" name="xxx" id="xxx">
```

如果把label标签把input标签包起来，会自动建立关联，避免了取id
```html
<label>username<input type="text" name="xxx"></label>
``

如果没有设置input标签的name属性，在提交的时候是收不到相关的内容的，可以设置value从而改变提交后的键值对的值

type="radio"与checkbox类似，只不过是单选框，同一个name的radio为一组

**下拉列表select**

如下所示
```HTML
<select name="group" id="" multiple>
  <option value="">-</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3" disabled>3</option>
  <option value="4" selected>4</option>
</select>
```

**多行文本textarea**

如下所示
```html
<textarea style="resize:none"; width:200px; height:100px;  name="hobby" ></textarea>

<!-- 还可以 -->
<textarea style="resize:none" name="hobby" cols="100" rows="10">
```
**table标签**

table里只有三种元素：

+ thead：表头
    + th：table header
+ tbody: 表主体
    + tr：table row
    + td：table data
+ tfoot：表脚
    + tr：table row
    + td：table data

tbody和tfoot里也可以由th，用于构建更复杂的表

table还有一个元素：
```HTML
<colgroup>
    <col width=100>
    <col width=200>
    <col width=70>    
</colgroup>
```
thead tbody tfoot 的顺序可以打乱，不影响

更多：

[a标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)

[form表签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form)

[input](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)

[button](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button)

[table](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table)