
$(document).ready(function() {
  //Docs at http://simpleweatherjs.com
  $.simpleWeather({
    location: 'tbilisi',
    woeid: '',
    unit: 'C',
    success: function(weather) {
      html = '<span ><i class="animated fadeIn infinite icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</span>';
      html += '<ul><li class="animated slideInLeft ">'+weather.city+', '+weather.country+'</li>';
      html += '<li class="currently animated slideInUp">'+weather.currently+'</li>';
      html += '<li class="wind animated slideInRight">'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });


  /* =========
    velocity animations
  ============= */
  //
  // $("#weather").velocity({
  //   scale:1.1,
  // }, {
  //   duration: 3000,
  //   loop:true,
  //   delay: 500,
  // })
});
