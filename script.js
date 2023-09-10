const form=document.querySelector('.input');
const username=document.querySelector('#uname');
const email=document.querySelector('#email');
const password=document.querySelector('#pwd');
const confirmpwd=document.querySelector('#cf');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateinput();
});
function validateinput(){
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const confirmpwdval=confirmpwd.value.trim();
    if(usernameval===''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }
    if(emailval===''){
        setError(email,'email is required');
    }
    else if(!validateEmail(emailval)){
            setError(email,'please enter a valid mail');
    }
    else{
        setSuccess(email);
    }
    if(passwordval===''){
        setError(password,'password must be required');
    }
    else if(passwordval.length<8){
        setError(password,'password must be atleast 8 characters');
    }
    else{
        setSuccess(password);
    }
    if(confirmpwdval===''){
        setError(confirmpwd,'confirm password is required')
    }
    else if(confirmpwdval!==passwordval){
        setError(confirmpwd,'password does not match')
    }
    else{
        setSuccess(confirmpwd)
    }

}
function setError(element,message){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error');
    errorElement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');

}
function setSuccess(element){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error');
    errorElement.innerText = '';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');

}
const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
}