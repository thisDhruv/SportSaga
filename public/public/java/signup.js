const fn=document.querySelector("#fn");
fn.addEventListener('change',()=>{
   
    for(let firstName of fn.value)
{
    if(!((firstName>='a'&&firstName<='z')||(firstName>='A'&&firstName<='Z')))
    {
        alert("sorry,only letters(a-z) are allowerd in firstname");
        fn.value='';
        break;
        
    }
}
})
const ln=document.querySelector("#ln");
ln.addEventListener('change',()=>{
   
    for(let lastName of ln.value)
{
    if(!((lastName>='a'&&lastName<='z')||(lastName>='A'&&lastName<='Z')))
    {
        alert("sorry,only letters(a-z) are allowerd in lastName");
        ln.value='';
        break;
        
    }
}
})
const un=document.querySelector("#un");
un.addEventListener('change',()=>{
    
    for(let username of un.value)
    {
        if(un.value.length<7)
    {
        alert("username should contain atleast 7 characters ");
        un.value="";
        break;
    }
        if(!((username>='a'&&username<='z')||(username>='A'&&username<='Z')||(username>=0&&username<=9)||username=='.'))
        {
            alert("username must contain letter(a-z),numbers(0-9) or period(.) ");
            un.value="";
            break;
        }
    }
    
})
const checkP=document.querySelector("#password");
function showPassword()
{
    if(checkP.type=="password")
    {
        checkP.type="text";
    }
    else
    {
        checkP.type="password";
    }
}




