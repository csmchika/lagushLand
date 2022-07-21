$navNext = $('#bb-nav-next');
$navPrev = $( '#bb-nav-prev' );
$navNext2 = $( '#bb-nav-next-2' );
$navNext3 = $( '#bb-nav-next-3' );
$again = $( '#again' );
$startGame = $( '#start-game');
$endGame = $( '#end-game');
$right = $( '.rightAnswer');
$right1 = $( '.rightAnswer1');
$wrong = $( '.wrongAnswer');
$wrong1 = $( '.wrongAnswer1');
$rightNext = $( '.rightAnswer-1');
$rightNext1 = $( '.rightAnswer-2');
$rightNext2 = $( '.rightAnswer-3');
$rightNext3 = $( '.rightAnswer-4');
$wrongAgain = $( '.wrongAnswer-2');
$wrongAgain1 = $( '.wrongAnswer-3');
$wrongAgain2 = $( '.wrongAnswer-4');
$sound = $( '.sound' );
$lag2 = $( '.lag-2' );
$lag3 = $( '.lag-3' );
$lag4 = $( '.lag-4' );
$lag5 = $( '.lag-5' );
$lag6 = $( '.lag-6' );
$lag7 = $( '.lag-7' );
$lag1 = $( '.lag-1' );
$noClick = $( '.no-click' );
$clickKrasn = $( '.click-krasn' );

let au = document.getElementById("fone");
au.volume = 0.2;

let slideIndex = 1;


showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

$navNext.on('click', function() {
    plusSlide();
    return false;
} );

$navNext2.on('click', function() {
    plusSlide();
    return false;
} );

$navNext3.on('click', function() {
    slideIndex = 12;
    showSlides(12);
    return false;
} );

$navPrev.on('click', function() {
    minusSlide();
    return false;
} );

$startGame.on('click', function() {
    plusSlide();
    return false;
} );

$again.on('click', function() {
    slideIndex = 1;
    showSlides(1);
    return false;
} );

$endGame.on('click', function() {
    slideIndex = 17;
	showSlides(17);
	return false;
} );

$rightNext.on('click', function() {
    let Wansw = document.querySelector('#aibolit_wrong');
    Wansw.style.display = 'none';
    plusSlide();
    return false;
} );

$rightNext1.on('click', function() {
    let Wansw = document.querySelector('#hide_wrong');
    Wansw.style.display = 'none';
    plusSlide();
    return false;
} );

$right.on('click', function () {
    let audio = new Audio('audio/13.wav');
    audio.play();
    let Ransw = document.querySelector('#aibolit_right');
    Ransw.style.display = 'block';
    let Kek = document.querySelector('#q1');
    Kek.style.filter = 'brightness(40%)';
    let Kekes = document.querySelector('#q11');
    Kekes.style.filter = 'brightness(40%)';
    return false;
})

$right1.on('click', function () {
    let audio = new Audio('audio/15.wav');
    audio.play();
    let Ransw = document.querySelector('#hide_right');
    Ransw.style.display = 'block';
    let Kek = document.querySelector('#q2');
    Kek.style.filter = 'brightness(40%)';
    let Kekes = document.querySelector('#q21');
    Kekes.style.filter = 'brightness(40%)';
    return false;
})

$wrong.on('click', function () {
    let audio = new Audio('audio/12.wav');
    audio.play();
    let Wansw = document.querySelector('#aibolit_wrong');
    Wansw.style.display = 'block';
    let Kek = document.querySelector('#q1');
    Kek.style.filter = 'brightness(40%)';
    let Kekes = document.querySelector('#q11');
    Kekes.style.filter = 'brightness(40%)';
    return false;
})

$wrong1.on('click', function () {
    let audio = new Audio('audio/12.wav');
    audio.play();
    let Wansw = document.querySelector('#hide_wrong');
    Wansw.style.display = 'block';
    let Kek = document.querySelector('#q2');
    Kek.style.filter = 'brightness(40%)';
    let Kekes = document.querySelector('#q21');
    Kekes.style.filter = 'brightness(40%)';
    return false;
})

$wrongAgain.on('click', function() {
    let Wansw = document.querySelector('#aibolit_wrong');
    Wansw.style.display = 'none';
    let Kek = document.querySelector('#q1');
    Kek.style.filter = 'brightness(100%)';
    let Kekes = document.querySelector('#q11');
    Kekes.style.filter = 'brightness(100%)';
    return false;
} );

$wrongAgain1.on('click', function() {
    let Wansw = document.querySelector('#hide_wrong');
    Wansw.style.display = 'none';
    let Kek = document.querySelector('#q2');
    Kek.style.filter = 'brightness(100%)';
    let Kekes = document.querySelector('#q21');
    Kekes.style.filter = 'brightness(100%)';
    return false;
} );


$lag2.on('mousedown', function() {
    let Wansw = document.querySelector('.click-2');
    let audio = new Audio('audio/game_sound/lag_s_1.mp3');
    audio.play();
    Wansw.style.display = 'block';
    return false;
} );

$lag2.on('mouseup', function() {
    let Wansw = document.querySelector('.click-2');
    Wansw.style.display = 'none';
    return false;
} );

$lag3.on('mousedown', function() {
    let Wansw = document.querySelector('.click-3');
    let audio = new Audio('audio/game_sound/lag_s_2.mp3');
    audio.play();
    Wansw.style.display = 'block';
    return false;
} );

$lag3.on('mouseup', function() {
    let Wansw = document.querySelector('.click-3');
    Wansw.style.display = 'none';
    return false;
} );

$lag4.on('mousedown', function() {
    let Wansw = document.querySelector('.click-4');
    let audio = new Audio('audio/game_sound/lag_s_6.mp3');
    audio.play();
    Wansw.style.display = 'block';
    return false;
} );

$lag4.on('mouseup', function() {
    let Wansw = document.querySelector('.click-4');
    Wansw.style.display = 'none';
    return false;
} );

$lag5.on('mousedown', function() {
    let Wansw = document.querySelector('.click-5');
    let audio = new Audio('audio/game_sound/lag_s_7.mp3');
    audio.play();
    Wansw.style.display = 'block';
    return false;
} );

$lag5.on('mouseup', function() {
    let Wansw = document.querySelector('.click-5');
    Wansw.style.display = 'none';
    return false;
} );

$lag6.on('mousedown', function() {
    let Wansw = document.querySelector('.click-6');
    let audio = new Audio('audio/game_sound/lag_s_4.mp3');
    audio.play();
    Wansw.style.display = 'block';
    return false;
} );

$lag6.on('mouseup', function() {
    let Wansw = document.querySelector('.click-6');
    Wansw.style.display = 'none';
    return false;
} );

$lag7.on('mousedown', function() {
    let Wansw = document.querySelector('.click-7');
    let audio = new Audio('audio/game_sound/lag_s_3.mp3');
    audio.play();
    Wansw.style.display = 'block';
    return false;
} );

$lag7.on('mouseup', function() {
    let Wansw = document.querySelector('.click-7');
    Wansw.style.display = 'none';
    return false;
} );

$lag1.on('mousedown', function() {
    let Wansw = document.querySelector('.click-1');
    let audio = new Audio('audio/game_sound/lag_s_5.mp3');
    audio.play();
    Wansw.style.display = 'block';
    return false;
} );

$lag1.on('mouseup', function() {
    let Wansw = document.querySelector('.click-1');
    Wansw.style.display = 'none';
    return false;
} );

$noClick.on('click', function() {
    let Wansw = document.querySelector('#krasn_wrong');
    Wansw.style.display = 'block';
    let Kek = document.querySelector('#q3');
    Kek.style.filter = 'brightness(40%)';
    let Kekes = document.querySelector('#q31');
    Kekes.style.filter = 'brightness(40%)';
    return false;
} );

$clickKrasn.on('click', function() {
    let Wansw = document.querySelector('#krasn_right');
    Wansw.style.display = 'block';
    let Kek = document.querySelector('#q3');
    Kek.style.filter = 'brightness(40%)';
    let Kekes = document.querySelector('#q31');
    Kekes.style.filter = 'brightness(40%)';
    return false;
} );

$rightNext2.on('click', function() {
    let Wansw = document.querySelector('#krasn_right');
    Wansw.style.display = 'none';
    plusSlide();
    return false;
} );

$noClick.on('click', function() {
    let audio = new Audio('audio/not_krasn.mp3');
    audio.play();});
$clickKrasn.on('click', function() {
    let audio = new Audio('audio/krasn_sound.wav');
    audio.play();});

$wrongAgain2.on('click', function() {
    let Wansw = document.querySelector('#krasn_wrong');
    Wansw.style.display = 'none';
    let Kek = document.querySelector('#q3');
    Kek.style.filter = 'brightness(100%)';
    let Kekes = document.querySelector('#q31');
    Kekes.style.filter = 'brightness(100%)';
    return false;
} );

$rightNext3.on('click', function() {
    let Wansw = document.querySelector('#questSound');
    Wansw.style.display = 'none';
    let Kek = document.querySelector('#q4');
    Kek.style.filter = 'brightness(100%)';
    let lg = document.querySelector('.lagush-main');
    lg.style.filter = 'brightness(100%)';
    let lag1 = document.querySelector('.lag-1');
    lag1.style.filter = 'brightness(100%)';
    let lag2 = document.querySelector('.lag-2');
    lag2.style.filter = 'brightness(100%)';
    let lag3 = document.querySelector('.lag-3');
    lag3.style.filter = 'brightness(100%)';
    let lag4 = document.querySelector('.lag-4');
    lag4.style.filter = 'brightness(100%)';
    let lag5 = document.querySelector('.lag-5');
    lag5.style.filter = 'brightness(100%)';
    let lag6 = document.querySelector('.lag-6');
    lag6.style.filter = 'brightness(100%)';
    let lag7 = document.querySelector('.lag-7');
    lag7.style.filter = 'brightness(100%)';

    return false;
} );

function soundPlay() {
    if (slideIndex === 2) {
        let audio = new Audio('audio/1.wav');
        audio.play();
    }
    if (slideIndex === 3) {
        let audio = new Audio('audio/2.wav');
        audio.play();
    }
    if (slideIndex === 4) {
        let audio = new Audio('audio/3.wav');
        audio.play();
    }
    if (slideIndex === 5) {
        let audio = new Audio('audio/4.wav');
        audio.play();
    }
    if (slideIndex === 6) {
        let audio = new Audio('audio/5.wav');
        audio.play();
    }
    if (slideIndex === 7) {
        let audio = new Audio('audio/6.wav');
        audio.play();
    }
    if (slideIndex === 8) {
        let audio = new Audio('audio/7.wav');
        audio.play();
    }
    if (slideIndex === 9) {
        let audio = new Audio('audio/8.wav');
        audio.play();
    }
    if (slideIndex === 10) {
        let audio = new Audio('audio/9.wav');
        audio.play();
    }
    if (slideIndex === 11) {
        let audio = new Audio('audio/10.wav');
        audio.play();
    }
    if (slideIndex === 12) {
        let audio = new Audio('audio/11.wav');
        audio.play();
    }
    if (slideIndex === 13) {
        let audio = new Audio('audio/14.wav');
        audio.play();
    }
    if (slideIndex === 14) {
        let audio = new Audio('audio/16.wav');
        audio.play();
    }
    if (slideIndex === 15) {
        let audio = new Audio('audio/sound-krasn-main.wav');
        audio.play();
    }
    if (slideIndex === 16) {
        let audio = new Audio('audio/colors_sound.mp3');
        audio.play();
    }



}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if( n === 1 ) {
        $navNext.hide();
        $navPrev.hide();
        $sound.hide();
    }
    else if( n === 11 ) {
        $navNext.hide();
        $navPrev.hide();
        $sound.show()
    }
    else if( n === 12) {
        $navNext.hide();
        $navPrev.hide();
        $sound.show()
    }
    else if( n === 13) {
        $navNext.hide();
        $navPrev.hide();
        $sound.show()
    }
    else if( n === 15) {
        $navNext.hide();
        $navPrev.hide();
        $sound.show()
    }
    else if( n === slides.length ) {
        $navNext.hide();
        $navPrev.hide();
        $sound.hide()
    }
    else {
        $navNext.show();
        $navPrev.show();
        $sound.show()
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
