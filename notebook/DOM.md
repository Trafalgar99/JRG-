# DOM API

> Document Object Model

XML

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

### Node 的接口

**属性**

childNodes,firstChild,innerText,lastChild,nextSibling,nodeName,nodeType,nodeValue,outerText,ownerDocument,parentElement,parentNode,previousSibling,textContent

- child/children/parent
- node
- first/last
- next/previous
- sibling/siblings
- type
- value/text/content
- inner/outer
- element

**方法**

•appendChild()
•cloneNode() //true
•contains()
•hasChildNodes()
•insertBefore()
•isEqualNode()
•isSameNode() ===
•removeChild()
•replaceChild()
•normalize() // 常规化

### document 接口

**属性**

- anchors //不推荐使用，原因详见 MDN
- body
- characterSet //字符编码
- childElementCount
- children
- doctype
- documentElement
- domain //域名
- fullscreen //
- head
- hidden
- images
- links //推荐
- location
- onxxxxxxxxx //一系列的事件监听
- origin
- plugins // 插件
- readyState
- referrer //引荐者
- scripts
- scrollingElement
- styleSheets
- title
- visibilityState

**方法**

- close()
- createDocumentFragment()
- createElement()
- createTextNode()
- execCommand()
- exitFullscreen()
- getElementById()
- getElementsByClassName()
- getElementsByName()
- getElementsByTagName()
- getSelection()
- hasFocus()
- open()
- querySelector()
- querySelectorAll()
- registerElement()
- write()
- writeln()

### element 接口
