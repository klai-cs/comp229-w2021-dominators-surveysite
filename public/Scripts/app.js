/*--COMP229-w2021-TeamProject public/Scripts/app.js; Dominators; 19Mar2021 */

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        //Ask if the user is sure about the deletion of contact
        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/surveylist');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();