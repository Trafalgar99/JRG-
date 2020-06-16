# jQuery

## 封装一个函数

> 获取一个节点的所有兄弟姐妹

```js
function getSiblings(node){
    var allChildren = node.parentNode.children;

    var array = {
        length : 0;
    }
    for (let i = 0; i < allChildren.length; i++){
        if (allChildren[i] !== node){
            array[array.length] = allChildren[i];
            array.length += 1;
        }
    }
    return array
}
```

> 添加多个 class

```js
function addClass(node, classes) {
  for (let key in classes) {
    var value = classes[key];
    var methodName = value ? "add" : "remove";
    node.classList[methodName](key);
  }
}
```

## 命名空间

```js
window.trafal = {};
trafal.getSiblings = getSiblings;
trafal.addClass = addClass;
```

## this

## jQuery API

api.jquery.com

接受一个节点,返回一个带很多新 api 的节点

```js
node2 = jQuery(node1);
```

```js
var $nodes = $("ul>li");
```
