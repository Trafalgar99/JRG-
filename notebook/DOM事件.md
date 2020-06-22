# DOM 事件

**DOM Level 2**

```
xxx.onclick = function(){
    ...
}
```

与

```
xxx.addEventListener('click',function(){
    ...
})
```

前者唯一，容易被覆盖

后者可以不唯一，事件会先后执行
