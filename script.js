


function open_img(element){

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

modal.style.display = "block";
modalImg.src = element.src;
captionText.innerHTML = element.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function close_img() {

    document.getElementById("myModal").style.display = "none";
}



function zoom(element){
    var content = document.getElementById('img01')
    if (element.classList.contains("modal2")) {
        element.classList.remove("modal2");
        content.style.cursor = "zoom-in";
    } else {
        element.classList.add("modal2");
        content.style.cursor = "zoom-out";
    }
    
}




