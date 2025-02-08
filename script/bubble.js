const container = document.querySelector(".bubble-container");
const maxBubbles = 14; // 最大气泡数量
let bubbleCount = 0; // 当前气泡数量

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random() * 0.4 + 0.3;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function createBubble() {
  if (bubbleCount >= maxBubbles) return;

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // 随机初始位置、大小和颜色
  bubble.style.left = `${Math.random() * 80 + 10}%`; // 横向位置
  bubble.style.width = `${Math.random() * 50 + 30}px`; // 大小
  bubble.style.height = bubble.style.width; // 高度等于宽度
  bubble.style.backgroundColor = generateRandomColor();
  bubble.style.animationDuration = `${Math.random() * 5 + 7}s`; // 动画持续时间

  // 动画结束后移除气泡
  bubble.addEventListener("animationend", () => {
    bubble.remove();
    bubbleCount--;
  });

  container.appendChild(bubble);
  bubbleCount++;
}

// 每隔一定时间生成一个气泡
setInterval(createBubble, 1400);
