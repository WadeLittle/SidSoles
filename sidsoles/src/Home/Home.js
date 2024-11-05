import Layout from "../Layout";
import "./Home.css";
import DunksPicks from "./DunksPicks";
import JordanPicks from "./JordanPicks";
import YeezyPicks from "./YeezyPicks";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Layout />
      <JordanPicks />
      <YeezyPicks />
      <DunksPicks />
      <Footer />
    </>
  );
}


export default Home;