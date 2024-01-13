map = new mappls.Map('map', {center:{lat:17.2777,lng:74.1844} });
let back = document.querySelector('.forward');// Due to some error forward is actually backward
    back.addEventListener('click',function(){
    window.history.go(-1);
});

let home = document.querySelector('.home');
    home.addEventListener('click',function(){
        alert("Pressed HOme");
        location.href = "main.html";
    });
