const register = async (e) =>{
    try {
        // e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(!username || username === ""){
        throw new Error("Enter username")
    }else if(!email || email === ""){
        throw new Error("Enter email")
    }else if(!password || password === "" || password.length <=3){
        throw new Error("password should be 4 characters short")
    }else if(password !== confirm){
        throw new Error("password mismatched")
    }
        const info = {
            username,
            email,
            password,
            loggedIn: false,
            checkbox: false,
        };

        const url = `${baseUrl}${routes.register}`;
        console.log("URL is:", url);
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(info),
        });
        console.log('here',res);
        const result = await res.json();
        if(!res.ok){
            throw new Error(result.error)
        }
             window.location.href = ("./login.html");
    } catch (error) {
       alert(error)
       console.log(error); 
    }
}

const login = async (e) =>{
    try {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if(!email){
            throw new Error("Enter email")
        }else if(email === ""){
            throw new Error("email is invalid")
        }else if(!password){
            throw new Error("Enter password")
        }else if(password === ""){
            throw new Error("invalid password")
        }else if(password.length <3){
            throw new Error("password should have 4 character above")
        }

            const info = {
                email,
                password,
            }

            const url = `${baseUrl}${routes.login}`
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
            console.log("success", true);
            window.location.href = ("../dashboard/dashboard.html");
    } catch (error) {
        alert(error);
        console.log(error);
    }
}