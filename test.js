function login(){
    let real_user = "Admin";    
    let user = document.getElementById("user").value;
    let password = "TheMaster";
    if (user == real_user){
        let input = document.createElement("INPUT");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "password");
        input.setAttribute("id", "password");
        document.body.appendChild(input);
        let button = document.createElement("button");
        button.setAttribute("id", "password");
        button.setAttribute("text", "BUTTON");
        button.setAttribute("value", "Submit");
        document.body.appendChild(button);
        button.addEventListener("click", checkpassword, false);

    function checkpassword(){
        let given_password = document.getElementById("password").value;
        if (given_password == password){
            let output = document.getElementById("output")
            output.innerHTML = "Welcome!";
            }
        }

    }



}

let submit = document.getElementById("Submit");
submit.addEventListener("click", login, false)