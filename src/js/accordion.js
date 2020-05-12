document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-accordion')[0];
    
    const init = function() {
        
        const title = el.getElementsByClassName('js-title'),
              mores = el.getElementsByClassName('js-more'),
              content = el.getElementsByClassName('js-content');
        
        const showHideMore = function(e) {
            
            let that = e.currentTarget,
                more = that.nextElementSibling;
            
            if (that.classList.contains('is-open')) {
                that.classList.remove('is-open') ;
            } else {
                
                for (let i = 0; i < title.length; i++)  {
                    title[i].classList.remove('is-open');
                }
                
                for (let i = 0; i < mores.length; i++)  {
                    mores[i].classList.add('is-hidden');
                }
                
                for (let i = 0; i < content.length; i++)  {
                    content[i].classList.remove('fade-in');
                }
                
                that.classList.add('is-open');
            }
            
            if (more.classList.contains('is-hidden')) {
                more.classList.remove('is-hidden');
                
                setTimeout(function() {
                    more.getElementsByClassName('js-content')[0].classList.add('fade-in');                    
                }, 10);
                
            } else {
                more.classList.add('is-hidden');
            }
            
        };
        
        for( let i = 0; i < title.length; i ++ ) {
            title[i].addEventListener('click', showHideMore);
        }
        
    };

    el ? init() : false;
    
}, false);
