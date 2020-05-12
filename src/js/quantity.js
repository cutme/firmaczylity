document.addEventListener('DOMContentLoaded',function() {
            
    const el = document.getElementsByClassName('js-quantity');
    
    
    const init = function() {
    
        for (let i = 0; i < el.length; i ++) {
            const minus = el[i].getElementsByClassName('js-minus')[0],
        		  input = el[i].getElementsByClassName('js-num')[0],
        		  plus = el[i].getElementsByClassName('js-plus')[0];

            let index = input.getAttribute('value');
        		
        	const changeNum = function() {
        	    input.setAttribute('value', index);	
        	};
        	
        	minus.addEventListener('click', function() {
            	if (index > 1) {
        			index --;
        			changeNum();
                }
        	});
        	
            plus.addEventListener('click', function() {
        		index ++;
        		changeNum();
        	});
        }
    };
    
	
	el.length > 0 ? init() : false;

}, false);
