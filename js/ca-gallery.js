(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict

function init() {
  console.log('lala');
  
    // renderProjs()
}

function renderProjs() {
    var strHTMLs = []
    gProjs.forEach(function (proj) {
        var strHTML = `<div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${proj.name}', '${proj.desc}', '${proj.id}')">
         <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">  
        <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
            </a> 
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`
        strHTMLs.push(strHTML)
    })
    $('.portfolio-container').html(strHTMLs.join(''))
}


function renderModal(projName, projDesc, progId) {
    var strHTML = `<div class="portfolio-modal modal fade show" id="portfolioModal1" style="display: block" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2>${projName}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${progId}-full.jpg" alt="">
                <p>${projDesc}</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i> Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`
    $('.modal-container').html(strHTML)
}

function onSubmitClicked(){
  var mail = $("input.mail").val()
  var subject = $("input.subject").val()
  var message = $("textarea.message").val()
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=factor.dana@gmail.com&su=${subject}&body=${message}`, '_blank');
}
