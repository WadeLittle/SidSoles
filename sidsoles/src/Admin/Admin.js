import Layout from "../Layout";
import Create from "./Create";
import Login from "./Login";
import Filler from "./Filler";
import Footer from "../components/Footer";
import "./Admin.css";
const Admin = () => {
    return (
        <>
        <Layout/>
        <div id="filler-and-login" class="columns">
        <Filler/>
        <Login/>
        </div>
        <Create/>
        <Footer/>
        </>
    )
}

export default Admin;