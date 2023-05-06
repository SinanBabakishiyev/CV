const li = document.querySelectorAll('.link')
const sec = document.querySelectorAll('section')

function activemenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove('active'))
    li[len].classList.add('active')
}

activemenu()
window.addEventListener("scroll", activemenu)

document.querySelector("#title").innerHTML="Hello"