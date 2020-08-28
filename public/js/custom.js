

$(document).ready(function () {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.video-marque').css('min-height', windowHeight);
  };

  $(".navigation-toggler").click(function () {
    $(".-closed").toggleClass("-open");
    $("body").toggleClass("body_overflow");
  });

});

jQuery(function ($) {

  //$('.element').responsiveEqualHeightGrid();

  var wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();
});

//   $(window).scroll(function() {
//   if ($(this).scrollTop() > 1){  
//     $('header').addClass("sticky");
//   }
//   else {
//     $('header').removeClass("sticky");
//   }
// });
$(document).ready(function () {

  $('#thumbnail_slider1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop: true,
    smartSpeed: 500,
    autoplay: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText: ["<span class='left_arrow'>&#10148;</span>", "<span class='right_arrow'>&#10148;</span>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  });
  $('#thumbnail_slider2').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop: true,
    smartSpeed: 500,
    autoplay: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText: ["<span class='left_arrow'>&#10148;</span>", "<span class='right_arrow'>&#10148;</span>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  });
  $('#product_slider1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    stagePadding: 50,
    margin: 20,
    loop: true,
    smartSpeed: 500,
    autoplay: true,
    responsiveClass: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2,
        loop: false
      }
    }
  });
  $('#product_slider2').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    smartSpeed: 500,
    autoplay: true,
    dots: true,
    nav: false,
  });
  // popup jquery here
  $("#trigger_popup_fricc").click(function () {
    $('#trigger_popup').show();
  });
  // $('.hover_bkgr_fricc').click(function(){
  //     $('.hover_bkgr_fricc').hide();
  // });
  $('.popupCloseButton').click(function () {
    $('#trigger_popup').hide();
  });

  // hashtag popup
  $("#trigger_hashtag").click(function () {
    $('#trigger_hashtag_popup').show();
  });
  $('.popupCloseButton').click(function () {
    $('#trigger_hashtag_popup').hide();
  });
  // Close popup
  $("#trigger_hashtag_close").click(function () {
    $('#trigger_close_popup').show();
  });
  $('.popupCloseButton').click(function () {
    $('#trigger_close_popup').hide();
  });
  // ChatBox popup
  $("#trigger_chatBox").click(function () {
    $('#trigger_chatBox_popup').show(600);
  });
  $('.popupCloseButton').click(function () {
    $('#trigger_chatBox_popup').hide();
  });

  $("#trigger_gredient").click(function () {
    $('#trigger_gredient_popup').show(600);
  });
  $('.popupCloseButton').click(function () {
    $('#trigger_gredient_popup').hide();
  });

  // add popup
  $("#trigger_add").click(function () {
    $('#trigger_add_popup').show();
  });
  $('.popupCloseButton').click(function () {
    $('#trigger_add_popup').hide();
  });
  // tooltips popup
  $("#heart_notify").click(function () {
    $('#trigger_heart_popup').toggle();
  });
  // popup jquery here
  // post tabs jquery here
  // $('.tab-list a').on('click', function (e) {
  //   $(this).parents('li').addClass('active').siblings().removeClass('active');
  //   var active_tab = $(this).attr('href');
  //   $(active_tab).addClass('active').siblings().removeClass('active');
  // })
});
// jquery dropdown
// $( function() {
//   $( ".dropdown-toggle").on( "click", function() {
//     let currentPanel = $(this).closest(".lps_dropdown")[0];
//     if($(currentPanel).hasClass("show")) $(currentPanel).removeClass( "show" );
//     else {
//     $( ".lps_dropdown" ).removeClass( "show" );
//     $(currentPanel).addClass( "show" );
//     }
//   });
// } );
$(function (e) {
  $('.dropdown-toggle').on("click", function () {
    $('.lps_dropdown').toggleClass('open');
    $('.lps_dropdown-menu').toggleClass('animated fadeInDown');
  });
});

// read more and read less
$(document).ready(function () {
  // Configure/customize these variables.
  var showChar = 135;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "more";
  var lesstext = "less";

  $('.more').each(function () {
    var content = $(this).html();

    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);
      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
      $(this).html(html);
    }
  });
  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});
/**** tabs jquery here ****/
/*Tabs BLock Cst*/
$(document).ready(function () {
  $('.tabs_block_cst li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.tabs_block_cst li').removeClass('current');
    $('.tab-content_cst').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  $('.tabs_block_cst1 li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.tabs_block_cst1 li').removeClass('current');
    $('.tab-content_cst1').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });
});
/* // Tabs BLock Cst*/
/*List View grid*/
const listViewButton = document.querySelector(".list-view-button");
const gridViewButton = document.querySelector(".grid-view-button");
const list = document.querySelector("ol");

listViewButton.onclick = function () {
  list.classList.remove("grid-view-filter");
  list.classList.add("list-view-filter");
};

gridViewButton.onclick = function () {
  list.classList.remove("list-view-filter");
  list.classList.add("grid-view-filter");
};
/* // List View grid*/
$(document).ready(function () {
  $(".grid_list_trigar").click(function () {
    if (!$(this).hasClass('active')) {
      $('.grid_list_trigar').removeClass('active');
      $(this).addClass('active');
    } else $(this).removeClass('active');

  });

  // custom tabs js
});


