function setDate () {
  const months = ['Января', 'Февраля', 'Мара', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const date = new Date();
  const month = months[date.getMonth()];
  const day = days[date.getDay()];

  return `${day} ${date.getDate()} ${month}`;
}

export default setDate;
