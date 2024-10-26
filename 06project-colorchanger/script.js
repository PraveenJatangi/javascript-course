const red=document.querySelector(".red");
const blue=document.querySelector(".blue");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");

const center=document.querySelector(".center");

const getBGcolor=(selectedElement)=>{
return window.getComputedStyle(selectedElement).backgroundColor
};

// var color = getBGcolor(pink);
// pink.addEventListener("mouseenter",()=>{
//     center.style.background=color;
// });

const magicColorChanger=(element,color)=>{
    element.addEventListener("mouseenter",()=>{
        center.style.background=color;
})};

magicColorChanger(red,getBGcolor(red));
magicColorChanger(blue,getBGcolor(blue));
magicColorChanger(violet,getBGcolor(violet));
magicColorChanger(orange,getBGcolor(orange));
magicColorChanger(pink,getBGcolor(pink));