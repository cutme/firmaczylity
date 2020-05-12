import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const other = document.getElementById('otherCarousel');
    
    const otherCarousel = function() {
    
        const glide = new Glide(other, {
            animationDuration: 600,
            autoplay: false,
            hoverpause: true,
            gap: 0,
            perView: 4,
            type: 'carousel',
            breakpoints: {
                640: {
                    perView: 2
                },
                
                1024: {
                    perView: 3
                }
            }
            
        })

        setTimeout(function() {
            glide.mount();
        }, 100)
    };

    other ? otherCarousel() : false;

}, false)