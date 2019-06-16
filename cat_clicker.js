
//display the cat when clicked

var cats = ["cat1","cat2","cat3","cat4","cat5"];


for (var i = 0; i < cats.length; i++) {
    var elem = document.getElementById(cats[i]);
    var name = cats[i];
    var elem = document.getElementById(name);


    //show the cat and change the name
    elem.addEventListener('click', (function(nameCopy) {
           return function() {
               document.getElementsByClassName("display_cat")[0].src = nameCopy + ".jpg";
               document.getElementsByClassName("display_name")[0].innerText = nameCopy;
               document.getElementsByClassName("display_time")[0].innerText = " ";
           };
       })(name));
}

//change the clicked time
var display_elem = document.getElementsByClassName("display")[0];
var display_elem_name = document.getElementsByClassName("display_name")[0].innerText;
var times = document.getElementsByClassName("display_time")[0].innerText;

display_elem.addEventListener('click', function(){

    //change the stored time
    display_elem_name = document.getElementsByClassName("display_name")[0].innerText;
    times = document.getElementById(display_elem_name + '_times').innerText;
    times = parseInt(times) + 1;
    document.getElementById(display_elem_name + '_times').innerText=times;

    //show in the display
    document.getElementsByClassName("display_time")[0].innerText = times;
}, false);
