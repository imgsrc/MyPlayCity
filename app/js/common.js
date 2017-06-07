$(function () {
  $('#show-rules').on('click', function (e) {
    e.preventDefault();
    $('.rules').removeClass('hidden');
  });
  $('.btn-back').on('click', function (e) {
    e.preventDefault();
    $('.rules').addClass('hidden');
  });
});
