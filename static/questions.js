document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelectorAll('.question-btn');
    const q = document.querySelectorAll('.question')

    
    btn.forEach(function(btn) {
        btn.addEventListener('click', (e) =>{
            const question = e.currentTarget.parentElement.parentElement;
            console.log(question);
            //questions.
            q.forEach((element) =>{
                if (element.classList.contains('show-text')){
                    element.classList.remove('show-text');
                }
            })
            question.classList.toggle('show-text');
        })
     })
})