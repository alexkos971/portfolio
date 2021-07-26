jQuery(document).ready(function() {
  var typed = new Typed("#words", {
    strings: ["", "Web Developer", "Designer", "Front - End", "JS", "ReactJS"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
  });
});


jQuery(document).ready(function() {

  let percentValues = []
  let percentTxt = document.querySelectorAll('.about-skills_wrap-txt > h6');

  for (value of percentTxt) {
    percentValues.push(value.dataset.target + "%");
  }

  let percentLine = document.querySelectorAll('.about-skills_progress-percent');
  let percentFlag = true;

$('#check-menu').on('click', function() {
  $('.present').toggleClass("hidden");
  $('.arrow').toggleClass('hidden');
  $('.head-menu').toggleClass('head-menu-active');
  $('.main-menu').slideRight(1000);
    //$('.head').css("background-color", "#000")
});

  
$('.head-menu > li').on('click', () => {
  $('.head-menu').removeClass('head-menu-active');
  $('#check-menu').prop('checked', false);
})

$("#toHome").on('click', function() {
  $(".head").removeClass("head-r");
  $(".head-r").addClass("head");

})


$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 100) {
    $(".head").toggleClass("head-r");
    $(".head-r").removeClass("head");
  }
  else {
    $(".head").removeClass("head-r");
    $(".head-r").addClass("head");
  }
     
  // About 
  if ($(this).scrollTop() >= 250) {
    $(".about").animate({"bottom" : "0px", 
      "opacity" : "1"}, 450);
  }

  if ($(this).scrollTop() >= 420 && percentFlag) { 
    percentFlag = false;

    percentValues.map((item, index) => {
      percentTxt[index].innerHTML = item;
      $(percentLine[index]).animate({"width": item}, 700)
    })
  }

  if ($(this).scrollTop() >= 900) {
    $(".slider").animate({"margin-top" : "100px"}, 550);
    $(".rec").animate({"opacity" : "1"}, 450);
  }
  });

  
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false
  });
});

    
    //password for logon
    /*var user_asw = prompt("Введите пароль")
      
      if(user_asw == "20"){
        alert("правильно");
        document.getElementById('body').style.display = "block";
  
      } else {
        alert("неверно")
    }*/
    

//preloader
setTimeout(function() {
  // window.pageYOffset = 0;
  document.getElementById("preloader").style.display = "none";
  document.body.style.overflowY = 'scroll';
  // console.log(window.pageYOffset)
  // document.body.offsetY = '0px';
}, 2500);  


// Card
const card = document.querySelector('.about-wrap');
card.addEventListener('mousemove', startRotate);
card.addEventListener('mouseout', stopRotate);
// const img = document.querySelector(card)

function startRotate(e) {
  const half = card.offsetHeight / 2;
  card.style.transform = 'rotateX(' + - (e.offsetY - half) / 8 + 'deg) rotateY(' + (e.offsetX - half)/8 + 'deg';
}

function stopRotate (e) {
  card.style.transform = 'rotate(0';
}


// Counter
let countWrap = document.querySelector('.counter');
let counter = document.querySelectorAll('.counter-wrap > h2');
let count_trigger = false;
// console.log(counter);


window.addEventListener('scroll', function() {
  if (this.pageYOffset > countWrap.getBoundingClientRect().top + 100 && !count_trigger) {
    count_trigger = true;

    // array of values of counterWrap
    let cnt = [];
    counter.forEach((item, index) => cnt.push(Math.round(item.dataset.target / 4)));

    countLoop();

    function countLoop() {  
      counter.forEach((item, index) => {
        
        setTimeout(() => {
          if (parseInt(item.textContent) !== parseInt(item.dataset.target)) {
            checkCounter(item, cnt[index]);
            cnt[index] = parseInt(cnt[index] + 1);
            countLoop();
          }
          return false;
        }, parseInt(item.dataset.target / (item.dataset.target * 0.1)));
      })
    }
  }
})

const checkCounter = (item, i) => {
  item.innerHTML = Math.round(i);
}

  