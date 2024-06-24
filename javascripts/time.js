function updateMoscowTime() {

  var moscowTimeElements = document.getElementsByClassName('moscow-time');

  for (var i = 0; i < moscowTimeElements.length; i++) {
    var moscowTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
    moscowTimeElements[i].textContent = 'Moscow Time: ' + moscowTime;
  }
}

setInterval(updateMoscowTime, 1000);

updateMoscowTime();
