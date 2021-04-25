// nav to multiple pages ends
$.get("nav.html", function(data){
  $("#nav-placeholder").replaceWith(data);
});
// nav to multiple pages ends

// footer to multiple pages ends
$.get("footer.html", function(data){
  $("#footer-end").replaceWith(data);
});
// footer to multiple pages ends





// slider starts


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
// slider stops

// <!-- animation starts -->

AOS.init();

// <!-- animation ends -->


// ////////////////////testimonial starts
// ///////////////////////corasals starts
$('.owl-carousel').owlCarousel({
  items:1,
  merge:true,
  loop:true,
  margin:10,
  video:true,
  lazyLoad:true,
  center:true,
  responsive:{
      480:{
          items:2
      },
      600:{
          items:4
      }
  }
})


// //////////////////////carosals stops

// ////////////////////trestimonils stops




// //////////////////////contact starts
// $('.txt1').on('click', function(e){
//   e.preventDefault();
//   $(this).toggleClass('txt5');
// });

// $('.txt1').on('click', function(e){
//   e.preventDefault();
//   $(this).css('border', '2px solid blue');
// });
// //////////////////////contact stops