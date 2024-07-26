document.addEventListener("DOMContentLoaded", function() {
    let btn_next = document.querySelector('.btn_next');
    let btn_prev = document.querySelector('.btn_prev');

    let Slider = document.querySelector('.slider');
    let SliderList = document.querySelector('.slider .list');
    let Thumb = document.querySelector('.slider .Thumbnail');
    let Thumb_items = document.querySelectorAll('.Thumbnail .item');

    Thumb.appendChild(Thumb_items[0]);

    function MoveSlider(direction){
        let sliderItems = SliderList.querySelectorAll('.item');
        let Thumb_items = document.querySelectorAll('.Thumbnail .item');

        if (direction == 'next') {
            SliderList.appendChild(sliderItems[0]);
            Thumb.appendChild(Thumb_items[0]);
            Slider.classList.add('next');
        } else {
            SliderList.prepend(sliderItems[sliderItems.length - 1]);
            Thumb.prepend(Thumb_items[Thumb_items.length - 1]);
            Slider.classList.add('prev');
        }
        Slider.addEventListener('animationend', function() {
            Slider.classList.remove('next');
            Slider.classList.remove('prev');
        });
    }

    btn_next.addEventListener("click", function() {
        MoveSlider('next');
    });

    btn_prev.addEventListener("click", function() {
        MoveSlider('prev');
    });
});
