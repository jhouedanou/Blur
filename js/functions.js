$(window).load(function(){
   $('#dvLoading').fadeOut(2000);
 });

(function($){})(window.jQuery);
   $(function(){
      $('#slider-1').codaSlider({
          dynamicTabs:false,
           dynamicArrows: true
      });
      //make that badboy slide



$(document).ready(function (){

        $(document.documentElement).keyup(function (event) {
        var direction = null;
    // handle cursor keys
    if (event.keyCode == 37) {
      // go left
      alert('text');
      direction = 'prev';
    } else if (event.keyCode == 39) {
      // go right
      direction = 'next';
    }

    if (direction != null) {
      $('.coda-slider-wrapper ul a.current').parent()[direction]().find('a').click();
    }
  });

});

  $(".coda-slider-wrapper .coda-nav-left a").html("&larr;");
  $(".coda-slider-wrapper .coda-nav-right a").html("&rarr;");
Cufon.replace('#titrez',{
          fontWeight: 'normal',
          textShadow: '0 0 10px #514E45'
});
Cufon.replace('.title',{
          fontWeight: 'normal',
          textShadow: '0 0 10px #514E45'
});
	     Cufon.replace('#nom',{
          fontWeight: 'bold',
          textShadow: '0 0 10px #514E45'
});
         Cufon.replace('#prenom',{
            color:'#292928',
            textShadow: '0 0 10px #514E45',
           fontWeight: 'normal'
});
          Cufon.replace('#forkongithub a',{
            color:'#FFF',
           fontWeight: 'normal'
});
   $(document).ready(function() {
    jQuery.backstretch("images/DSC02763.png");
});
   WebFontConfig = {
    google: { families: [ 'Droid+Sans::latin', 'Oswald::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
//$('.coda-slider-wrapper .coda-slider').slimScroll({
  //      height: '410px'
    //});


});

/* optional triggers

$(window).load(function() {

});

$(window).resize(function() {

});

*/
