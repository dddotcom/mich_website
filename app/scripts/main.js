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
    template: '<a href="{{link}}"><img src="{{image}}" width="200" height="200"/></a>'
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
