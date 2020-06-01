
var gProjs = [{
    id: "mine-sweeper",
    name: "Mine-Sweeper",
    title: "Try not to blow up",
    desc: "The objective of the game is to clear a board containing hidden mines without detonating any of them, with help from clues about the number of neighboring mines in each field.",
    url: "https://dana-factor.github.io/Mine-Sweeper-Project-/",
    publishedAt: 'May 2020',
    labels: ["Matrixes", "Mouse events"]
}, {
    id: "in-picture",
    name: "Guess The Flag",
    title: "Are u the king of the world?",
    desc: "The objective of the game is to recognize the countries only by their flags",
    url: "https://dana-factor.github.io/in-picture/",
    publishedAt: 'May 2020',
    labels: ["game", "CSS"]

}, {
    id: "books-shop",
    name: "Books Shop",
    title: "Manage your stock",
    desc: "An app to help you manage your book-shoop, add/ remove books, update prices, review ratings and get all the info you need",
    url: "projs/books-shop",
    publishedAt: 'May 2020',
    labels: ["MVC", "CRUDL"]
}]

$(document).ready(init);

function init() {
  
    renderProjs()
}

function renderProjs() {
    var strHTMLs = []
    gProjs.forEach(function (proj) {
        var strHTML = `<div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${proj.name}', '${proj.desc}', '${proj.id}', '${proj.title}', '${proj.url}', '${proj.publishedAt}', '${proj.labels.join(' ')}')">
         <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">  
        <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="">
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


function renderModal(projName, projDesc, projId, projTitle, projURL, projPublished, projLables) {
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
              <a href=${projURL} target="_blank"><h2>${projName}</h2></a>
                <p class="item-intro text-muted">${projDesc}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${projId}-full.png" alt="">
                <p>${projTitle}</p>
                <ul class="list-inline">
                  <li>Date: ${projPublished}</li>
                  <li><a href=${projURL} target="_blank">explore</a></li>
                  <li>Category: ${projLables}</li>
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
