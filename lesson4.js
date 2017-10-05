$(document).ready(function() { 
    $(".menu li").click(function() { 
        if (!$(this).hasClass("active")) { 
            var i = $(this).index(); 
            $(".menu li.active").removeClass("active"); 
            $(".tabs .active").hide().removeClass("active"); 
            $(this).addClass("active"); 
            $($(".tabs").children(".about")[i]).fadeIn(1000).addClass("active");
        }
    });
});
