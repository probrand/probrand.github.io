(function(){
    
    var modal = document.querySelector('.modal'),
    btn = document.querySelectorAll('.contact'),
    cancel = document.querySelector('.cancel'),
    form = document.querySelector('#gform'),
    feedback = document.querySelector('.feedback');

    const showModal = () => {
        if(!modal.classList.contains('open')) {
            modal.classList.add('open')
        }
    }
    
    const hideModal = () => {
        if(modal.classList.contains('open')) {
            modal.classList.remove('open')
        }
    }

    const submitForm = (e) => {
        hideModal();
        fireFeedBack();
    }   

    const fireFeedBack = () => {
        feedback.classList.add('present');

        setTimeout(function(){
            feedback.classList.remove('present');
        }, 4000);
    }

    for(x = 0; x < btn.length; x++){
        btn[x].addEventListener('click', showModal);
    }

    cancel.addEventListener('click', hideModal);

    form.addEventListener('submit', submitForm)
})();
