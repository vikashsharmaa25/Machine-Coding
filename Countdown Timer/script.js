(function () {
  var hour = document.getElementById("hour");
  var min = document.getElementById("minute");
  var sec = document.getElementById("second");

  var start = document.getElementById("start");
  var reset = document.getElementById("reset");

  var countDownTimer = null;

  start.addEventListener("click", () => {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

    countDownTimer = setInterval(() => {
      timer();
    }, 1000);
  });

  function stopInterval() {
    clearInterval(countDownTimer);
  }

  var timer = () => {
    if (sec.value > 60) {
      min.value++;
      sec.value = parseInt(sec.value) - 59;
    }
    if (min.value > 60) {
      hour.value++;
      min.value = parseInt(min.value) - 59;
    }

    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      stopInterval();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    } else if (hour.value != 0 && min.value == 0) {
      min.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
  };

  reset.addEventListener("click", () => {
    hour.value = "";
    min.value = "";
    sec.value = "";
  });
})();
