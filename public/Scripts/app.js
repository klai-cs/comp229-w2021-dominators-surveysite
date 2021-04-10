/*
  --COMP229-w2021-TeamProject public/Scripts/app.js;
  --Group Name:  Dominators 
  --Date Created: 02, April, 2021 
  --Student Name: Ho Yin Lai - 301162000
  --Student Name: Laxman Gothe - 301102988
  --Student Name: Sissi Kan - 301170042
  --Student Name: Arpit Kamal - 301152116
  --Student Name: Janesha Sharma - 301093302
  */

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