document.addEventListener("DOMContentLoaded", function () {
  // Получаем кнопку
  var button = document.querySelector('.try_me');

  // Добавляем обработчик события клика на кнопку
  button.addEventListener('click', function () {
    // Получаем элемент body
    var body = document.body;

    // Проверяем текущий фон и переключаем между классами 'background1' и 'background2'
    if (body.classList.contains('background1')) {
      // Если есть 'background1', то удаляем его и добавляем 'background2'
      body.classList.remove('background1');
      body.classList.add('background2');
      console.log('Текущий фон: background2');
    } else {
      // Если есть 'background2' или нет классов вообще, то удаляем 'background2' и добавляем 'background1'
      body.classList.remove('background2');
      body.classList.add('background1');
      console.log('Текущий фон: background1');
    }
  });
});
