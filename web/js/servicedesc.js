document.querySelectorAll(".servicecard").forEach(service => {
    service.style.cursor="pointer"
service.addEventListener("click",()=>{
    document.querySelector(".servicedesc").style.display="flex"
})
})

function back(){
    document.querySelector(".servicedesc").style.display="none"
}