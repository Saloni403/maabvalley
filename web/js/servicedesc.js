document.querySelectorAll(".servicecard").forEach(service => {
service.addEventListener("click",()=>{
    document.querySelector(".servicedesc").style.display="flex"
})
})

function back(){
    document.querySelector(".servicedesc").style.display="none"
}