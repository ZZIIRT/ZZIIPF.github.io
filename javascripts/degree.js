function getMoscowTemperature() {
  fetch('https://wttr.in/Moscow?format=%t')
    .then(response => response.text())
    .then(temperature => {
      document.getElementById('moscow-temperature').textContent = `Weather in Moscow: ${temperature}`;
    })
    .catch(error => {
      console.error('Ошибка при получении данных о погоде:', error);
      document.getElementById('moscow-temperature').textContent = 'Невозможно получить данные о погоде';
    });
}

setInterval(getMoscowTemperature, 600000);
getMoscowTemperature();