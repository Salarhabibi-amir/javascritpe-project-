(function(){
  
    const form = document.querySelector(".form-box") 

    form.addEventListener('submit',function(e){
        e.preventDefault()
        const message = document.querySelector('.inputBtn')
        const feedback = document.querySelector('.feedback')
        const messageContent = document.querySelector('.messageContent')
        
        if(message === ""){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            },4000)
        }else{
            messageContent.textContent = message.value 
            message.value = '';
        }

    })
})()