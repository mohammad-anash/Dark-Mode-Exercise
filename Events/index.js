const text = document.getElementById("time");
const [s, l] = ["75%", "75%"];

const updateTime = () => {
  const leftOffSet = Math.random() * 100;
  const h = Math.random() * 360;
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString();
  text.innerText = timeString;
  text.setAttribute(
    "style",
    `color: hsl(${h} ${s}, ${l}); top: ${
      Math.random() * 100
    }%; left: ${leftOffSet}%`
  );
};

updateTime();
setInterval(updateTime, 3000);
