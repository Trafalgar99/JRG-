let n = 1;
init();

let timer = setInterval(() => {
  makeLeave($(getImage(n))).one("transitionend", (e) => {
    makeEnter($(e.currentTarget));
  });

  makeCurrent($(getImage(n + 1)));

  n++;
}, 1000);

document.addEventListener("visibilitychange", function (e) {
  if (document.hidden) {
    window.clearInterval(timer);
  } else {
    timer = setInterval(() => {
      makeLeave($(getImage(n))).one("transitionend", (e) => {
        makeEnter($(e.currentTarget));
      });

      makeCurrent($(getImage(n + 1)));

      n++;
    }, 1000);
  }
});

//=================================================================
function x(n) {
  if (n > 3) {
    n %= 3;
    if (n === 0) {
      n = 3;
    }
  }
  return n;
}
function init() {
  n = 1;
  $(`.images> img:nth-child(${n})`)
    .addClass("current")
    .siblings()
    .addClass("enter");
}

function makeCurrent($node) {
  $node.removeClass("enter leave").addClass("current");
  return $node;
}
function makeLeave($node) {
  $node.removeClass("enter current").addClass("leave");
  return $node;
}
function makeEnter($node) {
  $node.removeClass("leave current").addClass("enter");
  return $node;
}
function getImage(n) {
  return $(`.images>img:nth-child(${x(n)})`);
}
