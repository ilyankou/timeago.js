var timeago = require('../../');

module.exports = function(t) {
  var tm = timeago('2016-06-20 12:30:00', 'ru');
  tm.register('ru', require('../../locales/ru'));

  // test second
  t.equal(tm.format('2016-06-20 12:30:00'), 'только что');
  t.equal(tm.format('2016-06-20 12:29:50'), '10 секунд назад');
  t.equal(tm.format('2016-06-20 12:29:39'), '21 секунду назад');
  t.equal(tm.format('2016-06-20 12:29:38'), '22 секунды назад');
  t.equal(tm.format('2016-06-20 12:30:01'), 'через несколько секунд');
  t.equal(tm.format('2016-06-20 12:30:10'), 'через 10 секунд');
  t.equal(tm.format('2016-06-20 12:30:21'), 'через 21 секунду');
  t.equal(tm.format('2016-06-20 12:30:22'), 'через 22 секунды');

  // test minute
  t.equal(tm.format('2016-06-20 12:29:00'), 'минуту назад');
  t.equal(tm.format('2016-06-20 12:28:00'), '2 минуты назад');
  t.equal(tm.format('2016-06-20 12:25:00'), '5 минут назад');
  t.equal(tm.format('2016-06-20 12:9:00'), '21 минуту назад');
  t.equal(tm.format('2016-06-20 12:31:00'), 'через минуту');
  t.equal(tm.format('2016-06-20 12:32:00'), 'через 2 минуты');
  t.equal(tm.format('2016-06-20 12:35:00'), 'через 5 минут');
  t.equal(tm.format('2016-06-20 12:51:00'), 'через 21 минуту');

  // test hour
  t.equal(tm.format('2016-06-20 11:30:00'), 'час назад');
  t.equal(tm.format('2016-06-20 10:30:00'), '2 часа назад');
  t.equal(tm.format('2016-06-20 7:30:00'), '5 часов назад');
  t.equal(tm.format('2016-06-19 15:30:00'), '21 час назад');
  t.equal(tm.format('2016-06-20 13:30:00'), 'через час');
  t.equal(tm.format('2016-06-20 14:30:00'), 'через 2 часа');
  t.equal(tm.format('2016-06-20 17:30:00'), 'через 5 часов');
  t.equal(tm.format('2016-06-21 9:30:00'), 'через 21 час');

  // test day
  t.equal(tm.format('2016-06-19 12:30:00'), 'вчера');
  t.equal(tm.format('2016-06-18 12:30:00'), '2 дня назад');
  t.equal(tm.format('2016-06-15 12:30:00'), '5 дней назад');
  t.equal(tm.format('2016-06-21 12:30:00'), 'завтра');
  t.equal(tm.format('2016-06-22 12:30:00'), 'через 2 дня');
  t.equal(tm.format('2016-06-25 12:30:00'), 'через 5 дней');

  // test week
  t.equal(tm.format('2016-06-13 12:30:00'), 'неделю назад');
  t.equal(tm.format('2016-06-06 12:30:00'), '2 недели назад');
  t.equal(tm.format('2016-06-27 12:30:00'), 'через неделю');
  t.equal(tm.format('2016-07-04 12:30:00'), 'через 2 недели');

  // test month
  t.equal(tm.format('2016-05-20 12:30:00'), 'месяц назад');
  t.equal(tm.format('2016-04-20 12:30:00'), '2 месяца назад');
  t.equal(tm.format('2016-01-19 12:30:00'), '5 месяцев назад');
  t.equal(tm.format('2016-07-21 12:30:00'), 'через месяц');
  t.equal(tm.format('2016-08-20 12:30:00'), 'через 2 месяца');
  t.equal(tm.format('2016-11-20 12:30:00'), 'через 5 месяцев');

  // test year
  t.equal(tm.format('2015-06-20 12:30:00'), 'год назад');
  t.equal(tm.format('2014-06-20 12:30:00'), '2 года назад');
  t.equal(tm.format('2011-06-20 12:30:00'), '5 лет назад');
  t.equal(tm.format('1995-06-20 12:30:00'), '21 год назад');
  t.equal(tm.format('2017-06-20 12:30:00'), 'через год');
  t.equal(tm.format('2018-06-20 12:30:00'), 'через 2 года');
  t.equal(tm.format('2021-06-20 12:30:00'), 'через 5 лет');
  t.equal(tm.format('2037-06-20 12:30:00'), 'через 21 год');
};
