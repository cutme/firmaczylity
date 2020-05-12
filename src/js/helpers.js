import { TweenLite, ScrollToPlugin } from "gsap/all";
const scrollPlugin = ScrollToPlugin;
//import customSelect from 'custom-select';
 
(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
        	isInView: isInView,
        };
    };
    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };

    cutme.Helpers = new Helpers();
    
    
    // Select
    
/*
    (function() {
        
        const select = document.getElementsByTagName('select');
    
        const init = function() {
    
            const cstSel = customSelect(select);
            
            for (let i = 0; i < select.length; i ++) {
                cstSel[i].container.addEventListener('custom-select:open', (e) => { 
                    e.target.style.position = 'relative';
                    e.target.style.zIndex = '5';
                });
                
                cstSel[i].container.addEventListener('custom-select:close', (e) => { 
                    e.target.removeAttribute('style');
                });
            }
        };
                
        select ? init() : false;
        
    })();
*/
    

}(window, document, window.cutme = window.cutme  || {}));