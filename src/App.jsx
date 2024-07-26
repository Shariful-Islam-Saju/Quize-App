import "./style.css";

//import Home from "./Components/pages/Home";
import SignUp from "./Components/pages/Sign/SignUp";
import Layout from "./Layout";
function App() {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        <SignUp />
      </Layout>
    </>
  );
}

export default App;
