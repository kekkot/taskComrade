function switchMobilMenu(e){
    e.children[0].classList.toggle("hidden");
    e.children[1].classList.toggle("hidden");
    document.querySelector(".mobNav").classList.toggle("hidden")
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horisontal',
    loop: true,
  });
swiper.params.direction = "horizontal"; //для horizontal 
swiper.changeDirection('horizontal');
swiper.update();