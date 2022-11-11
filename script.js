var choose = document.getElementById("choose");
var myimage = document.getElementById("image");
var back = document.getElementById("back");
var fore = document.getElementById("fore");

myimage.style.width = "400px";
myimage.style.height = "500px";

var imagelist = ["Flowginger.PNG", "flowstrawbery.PNG",
    "Flowpineapple.PNG", "Flowspinach.PNG",
    "Flowstrawberry.PNG", "Flowalmond.PNG"];

var index = 0;
    myimage.src = "Images/" + imagelist[index];

fore.onclick = function () {
    if (index < 5) {
        
    index++;
    myimage.src = "Images/" + imagelist[index];

    } else {
        index = 0;
        myimage.src = "Images/" + imagelist[index];

        
    }

}

back.onclick = function () {
    if (index > 0) {
       
    index--;
    myimage.src = "Images/" + imagelist[index];
    } else {
        index = 5;
    myimage.src = "Images/" + imagelist[index];

   }

}
