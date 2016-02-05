//= require jquery/dist/jquery
//= require bootstrap-sass/assets/javascripts/bootstrap
//= require_tree .

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header').addClass("sticky");
        $('.recent_articles').addClass("show");
    }
    else{
        $('.header').removeClass("sticky");
    }
});