$(function () {
  var timer = carousel()
  trunback()
  $('.point-wrap').on('click', 'a', function () {
    changeImg($(this).index())
  })

  $('.point-wrap').hover(
      function () {
        console.log('in')
        clearInterval(timer)
      },
      function () {
        console.log('out')
        timer = carousel()
      }
  );

  function carousel() {
    var num = 0
    var interID = setInterval(function () {
      changeImg(num)
      num++
      if(num>=3){
        num = 0
      }
    }, 5000)
    return interID
  }

  function changeImg(num) {
    var $points = $('.point-wrap a')
    var $carousels = $('.carousel-item')
    $points.css({'background': 'rgba(0,0,0,.2)'})
    $carousels.css({'opacity': 0})
    $($points[num]).css({'background': '#fff'})
    $($carousels[num]).css({'opacity': 1})
  }

  function trunback() {
    $(window).scroll(function (ev) {
      if($('body').scrollTop()>70){
        $('.header_nav').addClass('show')
      } else if($('body').scrollTop()<100){
        $('.header_nav').removeClass('show')
      }
    })
  }

})