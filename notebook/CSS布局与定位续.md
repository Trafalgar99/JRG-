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

## 设置usercard的位置

+ 给div一个负的外边距可以使div整体移动
+ 对一个内联元素来说，设置左右padding起作用，上下padding不起作用
+ 内联元素居中要在其父元素上加text-align：center 
+ 圆角：border-radiu：xx；
+ 阴影的做法：goole：css shadow generator
+ 为一个属性添加过度：transition: box-shadow 0.5s; 指box-shadow效果用0.5s完成
+ 当父元素的高度一定时，子元素的高度要想与父元素一直，可以直接写成100%，当父元素变动时，子元素会和父元素保持一致
+ 在 CSS 盒子模型的默认定义里，你对一个元素所设置的 width 与 height 只会应用到这个元素的内容区。如果这个元素有任何的 border 或 padding ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。box-sizing 属性可以被用来调整这些表现:border-box 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。*border-box不包含margin*
+ :nth-child(an+b) 这个 CSS 伪类首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从1开始排序，选择的结果为CSS伪类:nth-child括号中表达式（an+b）匹配到的元素集合
+ 赋予display：inline-block；时一半都要加vertical-align：top；以消除缝隙
+ 在一个元素赋予cursor：xx；可以控制鼠标悬浮的样式 