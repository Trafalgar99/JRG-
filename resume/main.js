// 使加载动画最少展示1s
setTimeout(function () {
  siteWelcome.classList.remove("active");
}, 1000);

// 监听窗口滚动，改变topNavBar的样式
window.onscroll = function (xxx) {
  if (window.scrollY > 0) {
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }
  let specialTags = document.querySelectorAll("[data-x]");
  let minIndex = 0;
  for (let i = 1; i < specialTags.length; ++i) {
    if (
      Math.abs(specialTags[i].offsetTop - window.scrollY) <
      Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
    ) {
      minIndex = i;
    }
  }
  for (let i = 0; i < specialTags.length; ++i) {
    specialTags[i].classList.remove("active");
  }
  specialTags[minIndex].classList.add("active");
  let id = specialTags[minIndex].id;
  let a = document.querySelector("a[href='#" + id + "']");
  let li = a.parentNode;

  let brothersAndMe = li.parentNode.children;
  for (let i = 0; i < brothersAndMe.length; ++i) {
    brothersAndMe[i].classList.remove("active");
  }
  li.classList.add("active");
};
let liTags = document.querySelectorAll("nav.menu > ul > li");
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function (x) {
    x.currentTarget.classList.add("active");
  };

  liTags[i].onmouseleave = function (x) {
    x.currentTarget.classList.remove("active");
  };
}
// 锚点跳转
let aTags = document.querySelectorAll("nav.menu > ul > li > a");

// 淡入淡出效果
// Setup the animation loop.
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (x) {
    x.preventDefault();
    let a = x.currentTarget;
    let href = a.getAttribute("href");
    let element = document.querySelector(href);
    let top = element.offsetTop;

    // 设置跳转动画

    let currentTop = window.scrollY;
    let targetTop = top - 80;
    let s = targetTop - currentTop;
    var coords = { y: currentTop };
    var t = Math.abs((s / 100) * 300);
    if (t > 500) {
      t = 500;
    }
    var tween = new TWEEN.Tween(coords)
      .to({ y: targetTop }, t)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function () {
        window.scrollTo(0, coords.y);
      })
      .start();
  };
}
