 function login()
{
    user =document.getElementById("user").value;
    pwd =document.getElementById("pwd").value;
    console.log(user)
    url ='http://localhost:8080/login?user='+user+'&pwd='+pwd;
      fetch(url).then(response=>{
        alert('ok');
        if(response.ok){
            //let data=response.json();
        alert('login sucess');
        window.location.replace("success.html");
    }
    else
    {
     alert('login faild');
     window.location.replace("index.html");
    }
     }).catch(e => console.log(e));
    
}

function register(){

    user =document.getElementById("user").value;
    pwd =document.getElementById("pwd").value;

    fn =document.getElementById("fn").value;
    ln =document.getElementById("ln").value;

    mn =document.getElementById("mn").value;
    id =document.getElementById("id").value;

    fetch("http://localhost:8080/register", { 
        // Adding method type 
        method: "POST", 
        // Adding body or contents to send 
        body: JSON.stringify({
            id:id, 
            firstName:fn,
            lastName: ln, 
            userName:user,
            password:pwd,
            mobile: mn 
        }),   
        // Adding headers to the request 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }).then(response => {
        if(response.ok){
            alert('registration successful');
            window.location.replace("index.html"); 
        }else{
            alert('registration failed! try again');
            window.location.replace("registration.html")
        }
    }); 
}-788