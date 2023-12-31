// 获取元素
const photoLink = document.getElementById("photo");
const click1Icon = document.querySelector(".click1");
// 添加鼠标移入事件监听器
photoLink.addEventListener("mouseenter", function () {
  // 修改 click1 的颜色
  click1Icon.style.color = "#f5c518";
});

// 添加鼠标移出事件监听器
photoLink.addEventListener("mouseleave", function () {
  // 恢复 click1 的颜色
  click1Icon.style.color = "currentColor";
});

click1Icon.addEventListener("mouseenter", function () {
  // 修改 click1 的颜色
  click1Icon.style.color = "#f5c518";
});

// 添加鼠标移出事件监听器
click1Icon.addEventListener("mouseleave", function () {
  // 恢复 click1 的颜色
  click1Icon.style.color = "currentColor";
});

var stars = document.getElementsByClassName("fa-solid");

stars[0].onclick = function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#e4e4e4";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
};

stars[1].onclick = function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
};

stars[2].onclick = function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
};

stars[3].onclick = function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#e4e4e4";
};

stars[4].onclick = function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#ffd93b";
};
