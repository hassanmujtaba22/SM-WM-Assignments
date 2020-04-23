function scrollAppear(){
  var text = document.querySelector(".text");
  var textPosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (textPosition < screenPosition){
      text.classList.add('text-appear')
  }
}
window.addEventListener("scroll",scrollAppear)
