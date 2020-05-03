function validateForm(e)
{
    var Fname=document.forms["Form1"]["FirstName"].value;
    var Mobile=document.forms["Form1"]["Moble"].value;
    var Message=document.forms["Form1"]["message"].value;
    var email=document.forms["Form1"]["Email"].value;
     Mobile=Number(Mobile);
    if(!Fname)
    {
        document.forms["Form1"]["FirstName"].style.border="2px solid red";   
        document.querySelector("p1").style.visibility="visible";
    }
    else
    {
        document.forms["Form1"]["FirstName"].style.border="2px solid #c4d2e7";   
        document.querySelector("p1").style.visibility="hidden";  
    }

    if(!Mobile )
    {
        document.forms["Form1"]["Moble"].style.border="2px solid red";   
        document.querySelector("p2").style.visibility="visible";  
        console.log(typeof(Mobile)); 
    }
    else
    {
        document.forms["Form1"]["Moble"].style.border="2px solid #c4d2e7";   
        document.querySelector("p2").style.visibility="hidden";  
    }

    if(!Message)
    {
        document.forms["Form1"]["message"].style.border="2px solid red";
        document.querySelector("p4").style.visibility="visible";
           
    }
    else
    {
        document.forms["Form1"]["message"].style.border="2px solid #c4d2e7";   
        document.querySelector("p4").style.visibility="hidden";  
    }

    if(!email)
    {
        document.forms["Form1"]["Email"].style.border="2px solid red";  
        document.querySelector("p3").style.visibility="visible";   
    }
    else
    {
        document.forms["Form1"]["Email"].style.border="2px solid #c4d2e7";   
        document.querySelector("p3").style.visibility="hidden";  
    }

    event.preventDefault();
}

