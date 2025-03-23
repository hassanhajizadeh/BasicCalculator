// define variables
const dark_light_bullet = document.getElementById('dark-light-bullet');
const dark_light_checkbox = document.getElementById("dark-light-checkbox");
const buttons = document.getElementById("buttons")
const io = document.getElementById("io");
const data = document.getElementById("data");


//dark-light function
function toggle_dark_light(){
    if (!dark_light_checkbox.checked){
        document.documentElement.style.setProperty("--primary-color", getComputedStyle(document.documentElement).getPropertyValue("--dark-primary-color"));
        document.documentElement.style.setProperty("--secondary-color", getComputedStyle(document.documentElement).getPropertyValue("--secondary-color"));
        document.documentElement.style.setProperty("--bg-color", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        document.documentElement.style.setProperty("--calculator-bg", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        document.documentElement.style.setProperty("--screen-bg", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        document.documentElement.style.setProperty("--screen-text", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        document.documentElement.style.setProperty("--button-bg", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        document.documentElement.style.setProperty("--button-text", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        document.documentElement.style.setProperty("--operator-bg", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        document.documentElement.style.setProperty("--operator-text", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        document.documentElement.style.setProperty("--hover-bg", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        document.documentElement.style.setProperty("--hover-text", getComputedStyle(document.documentElement).getPropertyValue("--dark-background"));
        dark_light_bullet.style.transform = 'none';
    }
    else{
        document.documentElement.style.setProperty("--primary-color", getComputedStyle(document.documentElement).getPropertyValue("--light-primary-color"));
        document.documentElement.style.setProperty("--secondary-color", getComputedStyle(document.documentElement).getPropertyValue("--light-secondary-color"));
        document.documentElement.style.setProperty("--bg-color", getComputedStyle(document.documentElement).getPropertyValue("--light-bg-color"));
        document.documentElement.style.setProperty("--calculator-bg", getComputedStyle(document.documentElement).getPropertyValue("--light-calculator-bg"));
        document.documentElement.style.setProperty("--screen-bg", getComputedStyle(document.documentElement).getPropertyValue("--light-screen-bg"));
        document.documentElement.style.setProperty("--screen-text", getComputedStyle(document.documentElement).getPropertyValue("--light-screen-text"));
        document.documentElement.style.setProperty("--button-bg", getComputedStyle(document.documentElement).getPropertyValue("--light-button-bg"));
        document.documentElement.style.setProperty("--button-text", getComputedStyle(document.documentElement).getPropertyValue("--light-button-text"));
        document.documentElement.style.setProperty("--operator-bg", getComputedStyle(document.documentElement).getPropertyValue("--light-operator-bg"));
        document.documentElement.style.setProperty("--operator-text", getComputedStyle(document.documentElement).getPropertyValue("--light-operator-text"));
        document.documentElement.style.setProperty("--hover-bg", getComputedStyle(document.documentElement).getPropertyValue("--light-hover-bg"));
        document.documentElement.style.setProperty("--hover-text", getComputedStyle(document.documentElement).getPropertyValue("--light-hover-text"));
        dark_light_bullet.style.transform = 'translateX(20px)';
    }
}

// factorial function
function factorial(x){
    res = 1
    for(let i =1;i<=x;i++){
        res*=i;
    }
    return res;  
} 

//adding to io funtion
function add_char(char){
    if (io.innerHTML.length>=21)
        alert('not enough space!')
    else
        io.innerHTML+=char;
}

//calculating data section function
function evaluate(){

    // controling if last input is a operator
    let data_last_letters = data.innerHTML.slice(data.innerHTML.length-3,data.innerHTML.length);
    if( data_last_letters == ' + ' || data_last_letters == ' - ' || data_last_letters == ' × ' || data_last_letters == ' ÷ ' ){
        data.innerHTML = data.innerHTML.slice(0,data.innerHTML.length-3);
    }

    // converting multiply and divide icons to * and / for evaluating
    let data_array = data.innerHTML.split(' ');
    console.log(data_array);
    for(let i=0 ; i<data_array.length;i++){
        if(data_array[i]=='×'){
            data_array[i] = '*';
        }
        else if (data_array[i]=='÷'){
            data_array[i]='/'
        }
    }
    return eval(data_array.join(' '));
}

//operator handler
function add_op(op){
    //cheking that data is not too big
    if(data.innerHTML.length>=25){
        alert('Not Enough Space');
    }
    else{
        if(io.innerHTML!=''){
            data.innerHTML += io.innerHTML;
            io.innerHTML = '';
            if (!isNaN(data.innerHTML.at(-1))){
                data.innerHTML += op; 
            }
        }
        //checking and handeling if last input of the data is operator
        else{
            last_char = data.innerHTML.slice(data.innerHTML.length-3,data.innerHTML.length);
            if(last_char ==' + ' || last_char ==' - ' || last_char ==' × ' || last_char ==' ÷ ' )
            data.innerHTML = data.innerHTML.slice(0,data.innerHTML.length-3)+op;
        }
    }
    
}


// event listener to know which button clicked and what sould do
buttons.addEventListener('click',function(event){

    if(event.target.closest('#key-AC')){
        io.innerHTML = '';
        data.innerHTML = '';
    }
    
    else if(event.target.closest('#key-C')){
        io.innerHTML = io.innerHTML.slice(0,io.innerHTML.length-1);
    }
    
    else if(event.target.closest('#key-plus-minus')){
        io.innerHTML *= -1;
    }

    else if(event.target.closest('#factorial')){
        if(Number(io.innerHTML)>=60){
            alert("can not calculate : This number will be to big.")
        }
        else{
            io.innerHTML = factorial(io.innerHTML)
        }
    }
    
    else if(event.target.closest('#one-divide-x')){
        io.innerHTML = 1/io.innerHTML;
    }
    
    else if(event.target.closest('#key-sin')){
        io.innerHTML = Math.sin(io.innerHTML);
    }
    
    else if(event.target.closest('#key-cos')){
        io.innerHTML = Math.cos(io.innerHTML);
    }
    
    else if(event.target.closest('#key-tan')){
        io.innerHTML = Math.tan(io.innerHTML);
    }
    
    else if(event.target.closest('#key-cot')){
        io.innerHTML = 1/Math.tan(io.innerHTML);
    }
    
    else if(event.target.closest('#key-log')){
        io.innerHTML = Math.log10(io.innerHTML);
    }
    
    else if(event.target.closest('#key-sqrt')){
        io.innerHTML = Math.sqrt(io.innerHTML);
    }
    
    else if(event.target.closest('#key-square')){
        io.innerHTML = io.innerHTML*io.innerHTML;
    }
    
    else if(event.target.closest('#key-divide')){
        add_op(' ÷ ');
    }
    
    else if(event.target.closest('#key-multiply')){
        add_op(' × ');
    }
    
    else if(event.target.closest('#key-minus')){
        add_op(' - ');
    }
    
    else if(event.target.closest('#key-plus')){
        add_op(' + ');
    }
    
    else if(event.target.closest('#key-equal')){
        data.innerHTML+=io.innerHTML;
        io.innerHTML = evaluate();
    }
    
    else if(event.target.closest('#key-dot')){
        add_char('.')
    }
    
    else if(event.target.closest('#key-0')){
        add_char('0');
    }
    
    else if(event.target.closest('#key-00')){
        add_char('00');
    }
    
    else if(event.target.closest('#key-1')){
        add_char('1');
    }
    
    else if(event.target.closest('#key-2')){
        add_char('2');
    }
    
    else if(event.target.closest('#key-3')){
        add_char('3');
    }
    
    else if(event.target.closest('#key-4')){
        add_char('4');
    }
    
    else if(event.target.closest('#key-5')){
        add_char('5');
    }
    
    else if(event.target.closest('#key-6')){
        add_char('6');
    }
    
    else if(event.target.closest('#key-7')){
        add_char('7');
    }
    
    else if(event.target.closest('#key-8')){
        add_char('8');
    }
    
    else if(event.target.closest('#key-9')){
        add_char('9');
    }
});