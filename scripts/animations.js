function addHoverEffect(elementId) {
    var element = document.getElementById(elementId);

    element.addEventListener("mouseover", function(){
        element.style.backgroundColor = "#2b2b2b";
        element.style.cursor = "pointer";
    });

    element.addEventListener("mouseout", function(){
        element.style.backgroundColor = "#131313";
    });
}

addHoverEffect("Home");
addHoverEffect("Shorts");
addHoverEffect("Subscription");
