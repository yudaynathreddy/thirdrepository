import './logreg.css'
function Register(){
 return (
    <div className="reg" >
        <h1>REGISTER</h1>
        <form>
            <input type = "text" id = "username" placeholder= "username"></input><br></br>
            <input type = "Test" id = "password" placeholder= "password"></input><br></br>
            <input type = "Test" id = "password" placeholder= "confirm password"></input><br></br>
            <input type = "submit" id = "submit" value="Submit"></input>
        </form>
    </div>
 )   
}
export default Register;