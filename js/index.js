var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var imglist = document.querySelector("#imglist");
var isolist = document.querySelector("#isolist").getElementsByTagName("li");
var eisolist = document.querySelector("#isolist");
var left = 0;
var timer;
run();
function run() {
  //重复播放
  if (left <= -4000) {
    left = 0;
  }
  //m为当前图片编号
  var m = Math.floor(-left / 800);
  //向左移动
  isolistChange(m);
  imglist.style.marginLeft = left - 10 + "px";
  left -= 10;
  //如果正好一张图，就停多一点时间
  var n = left % 800 == 0 ? 1200 : 10;
  timer = setTimeout(run, n);
}

//图片定位
function imgchange(n) {
  let lt = -(n * 800);
  imglist.style.marginLeft = lt + "px";
  left = lt;
}

prev.onclick = function () {
  //获取当前位置，减去宽度就是前一张
  let prevgo = Math.floor(-left / 800) - 1;
  if (prevgo == -1) {
    prevgo = 5;
  }
  imgchange(prevgo);
};

next.onclick = function () {
  //获取当前位置，减去宽度就是前一张
  let nextgo = Math.floor(-left / 800) + 1;
  if (nextgo == 5) {
    nextgo = 0;
  }
  imgchange(nextgo);
};

function isolistChange(m) {
  for (let index = 0; index < isolist.length; index++) {
    isolist[index].style.backgroundColor = "";
  }
  if (m < isolist.length) {
    isolist[m].style.backgroundColor = "red";
  }
}

eisolist.onclick = function () {
  var tar = event.target;
  let ico = tar.innerHTML - 1;
  imgchange(ico);
  isolistChange(ico);
};
