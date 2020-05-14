# CSS布局与定位


## 空标签
meta
input
没有子元素，没有内容的标签

--------------------------

## 伪类

一个div(非空标签)的内部默认有一个::before和一个::after 它们被称为伪元素，下面的代码可以修饰他们

```CSS
div::after{
    content:'！';
}
/* 这样会使得所有的div的内容前多一个“！” */
``` 

## 用CSS画一个阴阳图
```CSS
/* HTML： 
<div id=yinyang> 
    <div class="one">
        <div class="circle"></div>
    </div>
    <div class="two">
        <div class="circle"></div>
    </div>
</div> */


#yinyang{
    width: 200px;
    height: 200px
    /* border: 1px solid red; */
    border-radius: 50%;
    /* 使用CSS gengrator直接获取CSS3的渐变效果代码 */
    background: linear-gradient(to bottom, #ffffff 0%, #ffffff 50%, #000000 50%, #000000 100%);
    position: relative;
    margin: 100px auto;
}
#yinyang > .one{
    /* border: 1px solid red; */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top: 50px;
    left: 0;
}
#yinyang > .one > .circle{
    /* border: 1px solid red; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 40px;
    top: 40px;
    background: #fff;
}
#yinyang > .two{
    /* border: 1px solid red; */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 50px;
    right: 0;
}
#yinyang > .two > .circle{
    /* border: 1px solid red; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 40px;
    top: 40px;
    background: #000;
}
```

优化版：

用before和after代替one和two，通过巧妙地赋予one和two边框代替了两个circle
```CSS
/* HTML： 
  <div id=yinyang> 
    </div>
 */
body{
  background: #444;
}

#yinyang{
    width: 200px;
    height: 200px;
    /* border: 1px solid red; */
    border-radius: 50%;
    /* 使用CSS gengrator直接获取CSS3的渐变效果代码 */
    background: linear-gradient(to bottom, #ffffff 0%, #ffffff 50%, #000000 50%, #000000 100%);
    position: relative;
    margin: 100px auto;
}
#yinyang::before{
    content: '';
    /* border: 1px solid red; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 50px;
    left: 0;
    border: 40px solid #000;
}

#yinyang:after{
    /* border: 1px solid red; */
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top: 50px;
    right: 0;
    border: 40px solid #fff;
}
```

阴阳动画版:
```CSS
/* HTML:
  <div id=yinyang> 
    
    </div>
 */
body{
  background: #444;
}
@keyframes spin{
  from {
    transform: rotate(0deg);
    
  }
  to {
    transform: rotate(360deg);
  }
}

#yinyang{
    width: 200px;
    height: 200px;
    /* border: 1px solid red; */
    border-radius: 50%;
    /* 使用CSS gengrator直接获取CSS3的渐变效果代码 */
    background: linear-gradient(to bottom, #ffffff 0%, #ffffff 50%, #000000 50%, #000000 100%);
    position: relative;
    margin: 100px auto;
    animation-duration: 3s;
    animation-name: spin;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
#yinyang::before{
    content: '';
    /* border: 1px solid red; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 50px;
    left: 0;
    border: 40px solid #000;
}

#yinyang:after{
    /* border: 1px solid red; */
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top: 50px;
    right: 0;
    border: 40px solid #fff;
}
```