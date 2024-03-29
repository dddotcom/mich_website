// jshint devel:true
console.log('\'Allo \'Allo!');

//source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*=#]:not([href=#])').click(function() {
    'use strict';
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

//http://instafeedjs.com/#user
var feed = new Instafeed({
    get: 'user',
    userId: 837712,
    filter: function(image) {
      // console.log(image.tags);
      'use strict';
      return image.tags.indexOf('100daysofwordart') >= 0;
    },
    sortBy: 'most-liked',
    resolution: 'low_resolution',
    accessToken: '696631061.467ede5.4affd3bcc6f04c9583cf9cbe17c79e19',
    template: '<a href="{{link}}"><img src="{{image}}" class="insta-pics img-responsive img-rounded"/></a>'
    // template: '<li><a href="{{link}}"><img src="{{image}}" width="200" height="200"/></a></li>'
});
feed.run();

//http://logicbox.net/jquery/simplyscroll/horizontal.html
(function($) {
  'use strict';
	$(function() { //on DOM ready
    		$('#scroller').simplyScroll();
	});
 })(jQuery);

//http://www.telegraphicsinc.com/2013/07/how-to-use-animate-css/
 function animationHover(element, animation){
    'use strict';
     element = $(element);
     element.hover(
         function() {
             element.addClass('animated ' + animation);
         },
         function(){
             //wait for animation to finish before removing classes
             window.setTimeout( function(){
                 element.removeClass('animated ' + animation);
             }, 500);
         });
 }

 $(document).ready(function(){
   'use strict';
    $('#for-hire').each(function() {
        animationHover(this, 'tada');
    });
});

function changeFontClick(element, style){
   'use strict';
    $(element).removeClass('times trebuchetms tahoma lucida courier verdana');
    $(element).addClass(style);
}

$(document).ready(function(){
  'use strict';
  $('a[ff]').click(
    function(){
      $('a[ff]').removeClass('font-selected');
      var style = $(this).attr('ff');
      $(this).addClass('font-selected');
      $('p, :header').each(function() {
        // console.log('style = ' + style);
        changeFontClick(this, style);
      });
    });
});
