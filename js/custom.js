var arr = [
    {dp:"https://images.pexels.com/photos/20536723/pexels-photo-20536723/free-photo-of-a-woman-in-a-black-lace-top-and-skirt-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600", story:"https://images.pexels.com/photos/573295/pexels-photo-573295.jpeg?auto=compress&cs=tinysrgb&w=600"},

    {dp:"https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=600", story:"https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=600"},

    {dp:"https://images.pexels.com/photos/821414/pexels-photo-821414.jpeg?auto=compress&cs=tinysrgb&w=600", story:"https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?auto=compress&cs=tinysrgb&w=600"},

    {dp:"https://images.pexels.com/photos/4155487/pexels-photo-4155487.jpeg?auto=compress&cs=tinysrgb&w=600", story:"https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600"},
]



var clutter = ""
arr.forEach(function(elem, idx){
    // console.log(elem,idx)

    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}}" alt="">
</div>`
});

var storyian =  document.querySelector(".storiyan")

storyian.innerHTML = clutter

var storiyan =  document.querySelector(".storiyan");

let storyFull = document.querySelector(".story-full");

storiyan.addEventListener("click", function(e){
storyFull.style.display = "block"
storyFull.style.backgroundImage = `url(${arr[e.target.id].story})`;
setTimeout(function(){
    storyFull.style.display = "none"
},2000);
});