
var arr = [
    { dp: "https://media.istockphoto.com/id/1345121223/photo/young-beautiful-woman-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=H7SuMjLiOzm78vNDb_cGGke5Qsp_94pFugV2Adzs9Eo=", story: "https://media.istockphoto.com/id/1345121223/photo/young-beautiful-woman-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=H7SuMjLiOzm78vNDb_cGGke5Qsp_94pFugV2Adzs9Eo=" },

    { dp: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { dp: "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { dp: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { dp: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { dp: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
];

var clutter = "";
arr.forEach(function (elem, e) {
    console.log(arr);
    clutter += `<div class="story">
    <img id="${e}" src="${elem.story}" alt="">
    </div>`

    
});
var storiya = document.querySelector(".storiya");
storiya.innerHTML = clutter;



storiya.addEventListener("click", function (dets) {
    document.querySelector("#storiya").style.display = "block";
    document.querySelector("#storiya").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    setTimeout(function(){
        
        document.querySelector("#storiya").style.display = "none";
        
    },3000)

})
