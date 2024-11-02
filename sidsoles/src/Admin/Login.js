import "./Login.css";

const Login = () => {
    return(
        <section id="login">
            <h1>Login</h1>
            <form action="/action_page.php">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"/><br></br>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password"/><br></br>
                <button>Login </button>
            </form>
        </section>
    )
}

export default Login;