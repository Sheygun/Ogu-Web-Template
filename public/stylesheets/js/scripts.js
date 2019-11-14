let body = document.getElementById('dateFunction');
body.onload = function(){
         var d = new Date();
        //  var days = ["January","February","March","April","May","June","July","August","September","October","November","Decenber"];
        //  document.getElementById("day").innerHTML = days[d.getMonth()];
        //  document.getElementById("date").innerHTML = d.getDate();
         document.getElementById("year").innerHTML = d.getFullYear();
}
