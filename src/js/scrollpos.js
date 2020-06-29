document.addEventListener('DOMContentLoaded', function() {
    
    let scroll_pos = window.pageYOffset || window.scrollY,
        out = false;

    const el = document.getElementsByClassName('js-top')[0],
          topbar = document.getElementsByClassName('js-topbar')[0],
          body = document.body;
    
    let down,
    	lastScrollTop = 0,
    	fixed = false,
    	ww = window.innerWidth,
    	topbar_height = topbar.clientHeight;
    
    const action = function() {
        
        scroll_pos = window.pageYOffset || window.scrollY;
        ww = window.innerWidth;
        topbar_height = topbar.clientHeight;

        if (scroll_pos >= topbar_height) {
	        if (fixed === false) {
                el.classList.add('is-sticked');
                body.style.paddingTop = topbar_height + 'px';
                fixed = true;
            }
        }
                    
        else {
            if (fixed === true) {
	            el.classList.remove('is-sticked');
	            body.removeAttribute('style');
	            fixed = false;
	        }
        }
    };
    
    el ? window.addEventListener('scroll', action) : false;
    

}, false);