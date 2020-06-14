# JS 函数

## 函数的基本形式

- 普通函数
- 匿名函数
- var x = function y(){}
- f = new Funtion('x','y','return x+y')
- (x, y) => {return x+y}

## 函数的 name 属性

f.name

- 普通函数，该属性是函数名
- 匿名函数，该属性是被赋值的名字
- var a = function b(){} name 为 b
- f = new Function() name 为“anonymous”

f() = f.call()

## this 和 arguments

```js
f = function () {
  console.log(this);
  console.log(arguments);
};
f.call(undefined, 1, 2);
```

在普通模式下默认 this == window

## 作用域
