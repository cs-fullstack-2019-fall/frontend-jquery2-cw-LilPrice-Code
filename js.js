/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
let classhey = $(".hello");
classhey.on("click", function () {
    classhey.css("background-color","white");
});

/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
let style = {
    width:"20px",
    height:"20px"
};
let style2 = {
    width: "100%",
    height: "35px"
};
let head2 = $("h1");
head2.mouseover(function () {
    head2.css(style);
});
head2.mouseout(function () {
   head2.css(style2)
});
// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
$("#challenge").on("click",function () {
    $("#challenge").append(".");
});