const hover1 = document.getElementById("hover1")
const hover2 = document.getElementById("hover2")
const hover3 = document.getElementById("hover3")
const hover4 = document.getElementById("hover4")

const navigation1 = document.getElementById("navigation1")
const navigation2 = document.getElementById("navigation2")
const navigation3 = document.getElementById("navigation3")
const navigation4 = document.getElementById("navigation4")

const popup1 = document.getElementById("popup1")
const popup2 = document.getElementById("popup2")
const popup3 = document.getElementById("popup3")
const popup4 = document.getElementById("popup4")

navigation1.addEventListener ("mouseover", function(){
    hover1.classList.add("hover-farve");
    popup1.classList.add("popup-farve");
})

navigation1.addEventListener ("mouseout", function(){
    hover1.classList.remove("hover-farve");
    popup1.classList.remove("popup-farve");
})

navigation2.addEventListener ("mouseover", function(){
    hover2.classList.add("hover-farve");  
    popup2.classList.add("popup-farve");
})

navigation2.addEventListener ("mouseout", function(){
    hover2.classList.remove("hover-farve");
    popup2.classList.remove("popup-farve");
})

navigation3.addEventListener ("mouseover", function(){
    hover3.classList.add("hover-farve");  
    popup3.classList.add("popup-farve");
})

navigation3.addEventListener ("mouseout", function(){
    hover3.classList.remove("hover-farve");
    popup3.classList.remove("popup-farve");
})

navigation4.addEventListener ("mouseover", function(){
    hover4.classList.add("hover-farve");  
    popup4.classList.add("popup-farve");
})

navigation4.addEventListener ("mouseout", function(){
    hover4.classList.remove("hover-farve");
    popup4.classList.remove("popup-farve");
})