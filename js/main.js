var preloader = document.getElementById('loader');
var loginform = document.getElementById('loginform');
var forgotform = document.getElementById('forgotform');
function rem(){
	preloader.style.display = "none";
}
function forgotclick() {
	loginform.style.display = "none";
	forgotform.style.display = "block";
}
function loginclick() {
	forgotform.style.display = "none";
	loginform.style.display = "block";

}

 
const stepper = new mdb.Stepper(document.getElementById('stepper-form-example'));

            document.getElementById('form-example-next-step').addEventListener('click', () => {
              stepper.nextStep();
            });

            document.getElementById('form-example-prev-step').addEventListener('click', () => {
              stepper.previousStep();
            }); 

var planinfo = document.getElementById('planinfo').value;
var plandetails = document.getElementById('plandetails');
var billingcycle = document.getElementById('billingcycle');
function planchange() {
	var planinfo = document.getElementById('planinfo').value;
	if(planinfo == "FREE"){
	    plandetails.innerText = "Forever Free Plan is Selected";
    }else if(planinfo == "STARTER"){
    	plandetails.innerText = "Starter Plan is Selected";
    }else if(planinfo == "PREMIUM"){
    	plandetails.innerText = "Premium Plan is Selected";
    }
}

function billtimechg() {
	var billtime = document.getElementById('billtime').value;
	if(billtime == 1){
	    billingcycle.innerText = "1 Month";
    }else if(billtime == 3){
    	billingcycle.innerText = "3 Month";
    }else if(billtime == 6){
    	billingcycle.innerText = "6 Month";
    }else if(billtime == 12){
    	billingcycle.innerText = "12 Month";
    }else if(billtime == 99){
    	billingcycle.innerText = "One-Time";
    }
}
           
var accbtn = document.getElementById("accbtn");
var clickbtn = document.getElementById("clickbtn");
var alertop = document.getElementById("alert-success")

function createacc() {
	accbtn.style.display = "block";
	clickbtn.style.display = "none";
	const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})
Toast.fire({
  icon: 'success',
  title: 'Account Created Sucessfull'
});
}

function flagit() {
  const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'black',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})
Toast.fire({
  icon: 'warning',
  title: 'Article Reported to Admin'
});
}

var w = window.innerWidth;
console.log(w);
if(w>800){
  alert("Phone");
}else{
  alert("PC");
}