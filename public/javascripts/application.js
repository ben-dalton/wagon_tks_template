//= require jquery
//= require bootstrap-sprockets
//= require browser-detect
//= require jquery.fittext

function isElementVisible(elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $(elementToBeChecked).offset().top;
    var BotElement = TopElement + $(elementToBeChecked).height()-150;
    return ((BotElement <= BotView) && (TopElement >= TopView));
}


function adaptiveheight(a) {
    $(a).height(0);
    var scrollval = $(a)[0].scrollHeight;
    $(a).height(scrollval);
    if (parseInt(a.style.height) > $(window).height() - 2) {
        $(document).scrollTop(parseInt(a.style.height));
    }
}

$('.messageBtn').on('click', function(){
  var sendTo = $(this).data('messageto');
  $('#contact-modal').find('#Field4').val(sendTo);
});

var hideTwitterAttempts = 0;
function hideTwitterBoxElements() {
    setTimeout( function() {
        if ( $('[id*=twitter]').length ) {
        $('[id*=twitter]').each( function(){
            var ibody = $(this).contents().find( 'body' );

            if ( ibody.find( '.timeline .stream .h-feed li.tweet' ).length ) {
            // ibody.find( '.customisable-border' ).css( 'border', 0 );
            // ibody.find( '.timeline' ).css( 'background-color', '#004A7B' ); //theme: shell: background:
            // ibody.find( 'ol.h-feed' ).css( 'background-color', '#0575A1' ); //theme: tweets: background:
            // ibody.find( 'ol.h-feed' ).css( 'border-radius', '5px 5px 5px 5px' );
            // ibody.find( 'li.tweet' ).css( 'border-bottom', '1px dotted #FFFFFF' ); //theme: tweets: color:
            // ibody.find( 'li.tweet' ).css( 'color', '#FFFFFF' ); //theme: tweets: color:
            // ibody.find( '.customisable:link' ).css( 'color', '#07E0EB' ); //theme: tweets: links:
            // ibody.find( '.footer' ).css( 'visibility', 'hidden' ); //hide reply, retweet, favorite images
            // ibody.find( '.footer' ).css( 'min-height', 0 ); //hide reply, retweet, favorite images
            // ibody.find( '.footer' ).css( 'height', 0 ); //hide reply, retweet, favorite images
            ibody.find( '.avatar' ).css({'top': '-8px', 'left': '8px', 'padding': '12px 12px 0px 12px'} ); //hide avatar
            // ibody.find( '.avatar' ).css( 'width', 0 ); //hide avatar
            // ibody.find( '.p-nickname' ).css( 'font-size', 0 ); //hide @name of tweet
            // ibody.find( '.p-nickname' ).css( 'margin', '3px 12px 0px 20px' ); //hide @name of tweet
            // ibody.find( '.p-nickname' ).css( 'visibility', 'hidden' ); //hide @name of tweet
            ibody.find( '.p-nickname' ).css({'padding': '0', 'margin': '-12px 0px -5px 30px', 'display': 'block'} ); 
            ibody.find( '.e-entry-content' ).css( 'padding', '6px 20px' ); //move tweet up (over @name of tweet)
            // ibody.find( '.dt-updated' ).css( 'color', '#07E0EB' ); //theme: tweets: links:
            ibody.find( '.full-name' ).css( 'padding', '12px 12px 0px 30px' ); //move name of tweet to left (over avatar)
            // ibody.find( 'h1.summary' ).replaceWith( '<h1 class="summary"><a class="customisable-highlight" title="Tweets from fundSchedule" href="https://twitter.com/fundschedule" style="color: #FFFFFF;">fundSchedule</a></h1>' ); //replace Tweets text at top
            // ibody.find( '.p-name' ).css( 'color', '#07E0EB' ); //theme: tweets: links:
            }
            else {
                $(this).hide();
            }
        });
        }
        hideTwitterAttempts++;
        if ( hideTwitterAttempts < 3 ) {
            hideTwitterBoxElements();
        }
    }, 1500);
}

function equalizeHeights(items) {
  var maxHeight = 0;
  items.each(function() {
    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  });
  items.each(function() { $(this).css('min-height', (maxHeight + 10) + 'px'); });
}

function formatPostListings() {
  var posts = $('body.page-news div.post-listing div.thumbnail');
  posts.each(function(){ $(this).css('min-height', "0px"); });
  if( $(window).width() >= 992 ) {
    for(var i = 0; i < posts.length; i+=3) { equalizeHeights( posts.slice(i, i+3) ); }
  } else if ( $(window).width() >= 768 ) {
    for(var i = 0; i < posts.length; i+=2) { equalizeHeights( posts.slice(i, i+2) ); }
  }
}


$(document).ready(function(){
  $(window).on('load', formatPostListings);
  $(window).on('resize', formatPostListings);
  $(".responsive-headline").fitText(0.78);
  $(".fade-content")
    .css({
        opacity: 0,
        visibility: 'visible',
        position: 'relative',
        bottom: '-20px'
        })
    .delay(1000)
    .animate(
        {opacity: 1, bottom: 0},
        {queue: true, duration: 500});

});


