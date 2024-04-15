document.addEventListener('DOMContentLoaded',function(){
    var stella = document.querySelectorAll('.immagine_stella input');
    stella.forEach(function(star){
        star.addEventListener('click', function(){
            console.log('You rated this: ' + star.value);
        });
    });
});
