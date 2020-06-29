const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded', function() {
    
    const el = document.getElementsByClassName('js-hamburger')[0];
    
    const init = function() {
    
        let ww = window.innerWidth;
        
        const nav = document.getElementsByClassName('js-nav')[0],
              menu = document.getElementsByClassName('js-menu')[0],
              link = menu.getElementsByTagName('a');

        const checkWindowWidth = function() {
            ww = window.innerWidth;
            
            if (ww > 1024) {
                hideMenu();
            }
        };
        
        const checkWindowHeight = function() {
            wh = window.innerHeight;           
            
            if (wh <= menu.clientHeight) {
				nav.classList.add('is-block');
            } else {
	            nav.classList.remove('is-block');
            }
        };            
            
        const hideMenu = function() {
            
            enableBodyScroll(nav);
            nav.classList.remove('is-visible');
            nav.classList.remove('is-block');
            el.classList.remove('is-active');
            document.body.classList.remove('mobile-menu');
        };
    
        const showMenu = function(e) {  

            // Menu is open
            if (e.currentTarget.classList.contains('is-active')) {
                
                hideMenu();
                
            } else {
                
                disableBodyScroll(nav);

                setTimeout(function() {
                    nav.classList.add('is-visible');
                    document.body.classList.add('mobile-menu');
                    checkWindowHeight();

                }, 1);

                el.classList.add('is-active');                
            }

            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        }
        
        
        const openLink = function() {
            
            for (let i = 0; i < link.length; i ++) {
                
                link[i].addEventListener('click', function(e) {
                    
                    let url = this.getAttribute('href');
                    
                    window.open(url, '_self');
                    hideMenu();
                    
                    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
                });
                
            }
        };

 
        el.addEventListener('click', showMenu);
        openLink();
     
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
                hideMenu();
            }
        });
       
        window.addEventListener('resize', checkWindowWidth);
        window.addEventListener('resize', checkWindowHeight);
        
        checkWindowWidth();
    }
    
    el ? init() : false;
    
    
    
}, false);
