let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider",{
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider",
{
    loop:true,
    spaceBetween: 20,
    autoHeight:true,
    grapCursor:true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


var btnn = document.getElementById('btnn')
var pack1 = document.getElementById('pack1')
var pack2 = document.getElementById('pack2')

function leftClick() {
    
    btnn.style.left ='0'
    pack1.style.display="grid"
    pack2.style.display="none"
}

function rightClick() {
    btnn.style.left = '311px'
    pack2.style.display="grid"
    pack1.style.display="none"
}

function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
    var school = document.getElementById('school').value;
    var clas = document.getElementById('clas').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email +
    "<br/> School" + school +
    "<br/> Class" + clas
    ;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sahilmohammed209@gmail.com",
    Password : "B34A901022F9A044F311B5D3F36216F260F3",
    To : 'sahil99pro@gmail.com',
    From : "sahilmohammed209@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}