jQuery(document).ready(function() {
  var typed = new Typed("#words", {
    strings: ["Web Developer", "Designer", "Musician", "Balisong"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
  });
});


jQuery(document).ready(function() {


  let percentValues = []
  let percentTxt = document.querySelectorAll('.skills_row-txt > h6');

  for (value of percentTxt) {
    percentValues.push(value.dataset.target + "%");
  }

  let percentLine = document.querySelectorAll('.progress-percent');
  let percentFlag = true;

$('#check-menu').on('click', function() {
  $('.page-menu').toggleClass('main-menu');
  $('.main-menu').slideRight(1000);
    //$('.head').css("background-color", "#000")
});
    

$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 100) {
    $(".head").toggleClass("head-r");
    $(".head-r").removeClass("head");
  }
  else {
    $(".head").removeClass("head-r");
    $(".head-r").addClass("head");
  }
        
  if ($(this).scrollTop() >= 220) {
    $(".about-me").animate({"left" : "0%", 
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
  document.getElementById("preloader").style.display = "none";
}, 2500);  


let countWrap = document.querySelector('.counter');
let counter = document.querySelectorAll('.counter-wrap > h2');
let count_trigger = false;
// console.log(counter);


window.addEventListener('scroll', function() {
  if (this.pageYOffset > countWrap.getBoundingClientRect().top + 1200 && !count_trigger) {
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
        }, parseInt(item.dataset.target / (item.dataset.target * item.dataset.target / 1000)));
      })
    }
  }
})

const checkCounter = (item, i) => {
  item.innerHTML = Math.round(i);
}

  