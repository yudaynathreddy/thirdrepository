import './logreg.css'
function login(){
    return (
<div className = "login">
        <h1>LOGIN</h1>
        <form>
            <input type = "text" id = "username" placeholder= "username"></input><br></br>
            <input type = "password" id = "password" placeholder= "password"></input><br></br>
            <input type = "submit" id = "submit" value="Submit"></input>
        </form>
</div>
    );
}

export default login;