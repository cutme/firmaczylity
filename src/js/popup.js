const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded', function() {
    
    const el = document.getElementsByClassName('js-popup');
    
    const init = function() {

        const overlay = document.getElementById('overlay'),
              inside = overlay.getElementsByClassName('js-inside')[0],
              popup = document.getElementsByClassName('js-popup')[0],
              trigger = document.getElementsByClassName('js-showPopup')[0];
              
        let target;
              
        let status = false;

        const checkHeight = function() {
            
            let wh = window.innerHeight,
                oh = popup.clientHeight;
            
            // if height of obj is bigger than window 
                        
            if (oh + 80 > wh) {
                if (status === false) {
                    inside.classList.add('is-block');
                    status = true;
                }
                
            } else {
                if (status = true) {
                    inside.classList.remove('is-block');
                    status = false;
                }
            }            
        }
        
        const clickOutside = function(e) {
            
            if (e.target.closest('.js-popup') === null) {
                hidePopup();
        	}
        };

        const showPopup = function(e) {

            target = e.currentTarget.getAttribute('data-target');
    
            disableBodyScroll(inside);
            
            // overlay
            overlay.classList.add('is-active');
            
            setTimeout(function() {
                overlay.classList.add('is-visible');

                document.addEventListener('click', clickOutside);
            }, 1);
            
            // popup
            document.getElementById(target).classList.add('is-active');  
            setTimeout(function() {
                document.getElementById(target).classList.add('is-visible');
            }, 1);
                


            window.addEventListener('resize', checkHeight);
            
            checkHeight();
        };
        
        const hidePopup = function(e) {
            enableBodyScroll(inside);

            overlay.classList.remove('is-active');
            overlay.classList.remove('is-visible');
            
            document.getElementById(target).classList.remove('is-active');
            document.getElementById(target).classList.remove('is-visible');

            
            document.removeEventListener('click', clickOutside);
            window.removeEventListener('resize', checkHeight);
            
        	//e.preventDefault() ? e.preventDefault() : e.preventDefault = false;          
        };


        trigger.addEventListener('click', showPopup);

     
        // Hide menu on ESC
        
        document.addEventListener('keydown', function(evt) {
           // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hidePopup();
            }
        });       
    }
    
    el.length > 0 ? init() : false;
    
    
    
}, false);
