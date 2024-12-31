(function ($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function (event) {
      if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        let target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            "easeInOutExpo"
          );
          // Collapse the navbar
          $(".navbar-collapse").collapse("hide");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  
    // Ensure ScrollSpy is active to highlight current section
    // $("body").scrollspy({
    //   target: "#sideNav",
    //   offset: 100, // Adjust based on navbar height
    // });
  
    // Optional: Handle "See More" and "See Less" button functionality
    $(document).ready(function () {
      const seeMoreBtn = $("#see-more-btn");
      const seeLessBtn = $("#see-less-btn");
      const hiddenProjects = $(".hidden-project");
  
      // "See More" Button Click
      seeMoreBtn.on("click", function () {
        if (hiddenProjects.length > 0) {
          hiddenProjects.each(function () {
            $(this).fadeIn(500).css("display", "block");
          });
  
          // Show "See Less" button and hide "See More" button
          seeMoreBtn.hide();
          seeLessBtn.show();
        } else {
          console.error("No hidden projects found.");
        }
      });
  
      // "See Less" Button Click
      seeLessBtn.on("click", function () {
        hiddenProjects.each(function () {
          $(this).fadeOut(500, function () {
            $(this).css("display", "none");
          });
        });
  
        // Show "See More" button and hide "See Less" button
        seeLessBtn.hide();
        seeMoreBtn.show();
      });
    });
  })(jQuery);
  