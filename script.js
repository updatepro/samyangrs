
var lastScrollTop = 0;
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    var currentScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (currentScrollTop < lastScrollTop) {
      // Scrolling up
      document.getElementById("navbar").style.top = "0";
    } else {
      // Scrolling down
      document.getElementById("navbar").style.top = "-70px";
    }
    lastScrollTop = currentScrollTop;
  }

  
  


