const register = async (e) =>{
    try {
        // prevenDefault();
    let firstName = document.getElementById("firstName").value
    let lastname = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirm = document.getElementById("confirm").value

    if(!firstName || firstName === ""){
        alert("firstname is required");
    }else if(!lastname || lastname === ""){
        alert("lastname is required");
    }else if(!email || email === ""){
        alert("email is required")
    }else if(!password || password === "" || password.length <=3){
        alert("password should be 4 characters short")
    }else if(password !== confirm){
        alert("password mismatched")
    }
        const info = {
            firstName,
            lastname,
            email,
            password,
            loggedIn: false,
            checkbox: false,
        };

        const url = `${baseUrl}${routes.register}`;  
             console.log(url);
             const res = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(info),
             });
              const result = await res.json();
             if(!res.ok){
                throw new Error(result.error);            
             }
             window.location.href = ("../function/login.html");
    } catch (error) {
       alert(error)
       console.log(error); 
    }
}