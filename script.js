var  button =document.querySelector('#icon')
var div =document.querySelector('#nbar5')

var on =true;
icon.addEventListener('click',function(){
    if(on){
        document.querySelector("#nbar5").style.display="initial"
        on=false
    }
    else{
        document.querySelector("#nbar5 ").style.display="none"
        on=true
    }
})