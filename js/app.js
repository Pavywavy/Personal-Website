
const myself = document.getElementById("me");

myself.addEventListener('mouseover', function() {
        myself.style.transition= "all .5s ease-in";
        myself.style.outline="thick solid #FFFFFF";
});
      
myself.addEventListener('mouseleave', function() {
        myself.style.transition= "all .5s ease-out";
        myself.style.outline="solid 0px";
});
