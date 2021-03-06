

class DigitalClock {
  constructor(t) {
    this.element = t;
  }
  start() {
    this.update(),
      setInterval(() => {
        this.update();
      }, 500);
  }
  update() {
    const t = this.getTimeParts(),
      e = t.minute.toString().padStart(2, "0"),
      n = `${t.hour}:${e}`,
      o = t.isAm ? "AM" : "PM";
    (this.element.querySelector(".clock-time").textContent = n),
      (this.element.querySelector(".clock-ampm").textContent = o);
  }
  getTimeParts() {
    const t = new Date();
    return {
      hour: t.getHours() % 12 || 12,
      minute: t.getMinutes(),
      isAm: t.getHours() < 12,
    };
  }
}
const clockElement = document.querySelector(".clock"),
  clockObject = new DigitalClock(clockElement);
clockObject.start();
var today = new Date(),
  dd = String(today.getDate()).padStart(2, "0"),
  mm = String(today.getMonth() + 1).padStart(2, "0"),
  yyyy = today.getFullYear();
(today = mm + "/" + dd + "/" + yyyy),
  (document.getElementById("date").innerHTML = today);
var countDownDate = new Date("May 27, 2022 12:00:00").getTime(),
  x = setInterval(function () {
    var t = new Date().getTime(),
      e = countDownDate - t,
      n = Math.floor(e / 864e5),
      o = Math.floor((e % 864e5) / 36e5),
      a = Math.floor((e % 36e5) / 6e4),
      r = Math.floor((e % 6e4) / 1e3);
    (document.getElementById("countdown").innerHTML =
      n + "d " + o + "h " + a + "m " + r + "s "),
      e < 0 &&
        (clearInterval(x),
        (document.getElementById("countdown").innerHTML = "EXPIRED"));
  }, 1e3);

