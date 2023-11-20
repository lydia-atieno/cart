let list = document.querySelectorAll('.list .item');
list.forEach(item =>{
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
           let checkIssert = false;

           let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart =>{
               if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                   checkIssert = true;
                   cart.classList.add('danger');
                     setTimeout(function() {
                        cart.classList.remove('danger');
                        
                    },1000)
                    
                }
               
            })
            if(checkIssert == false ){
                document.querySelector('.listCart').appendChild(itemNew)
            }
            
        }
    })
})
function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item =>{
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}

