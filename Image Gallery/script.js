(function(){
    const btn = document.querySelectorAll('.btn')
    const img = document.querySelectorAll('.images')
    
    btn.forEach(function(button){
        button.addEventListener('click',function(e){
            e.preventDefault()
            const filter = e.target.dataset.filter
            
            img.forEach(function(item){
                if(filter =='All'){
                    item.style.display = 'block'
                    
                }else {
                    if(item.classList.contains(filter)){
                        item.style.display='block'
                    }else{
                        item.style.display='none'
                    }

                }
            })
        })
    }) 
})()   

