import Banner from "./pages/Banner/Banner";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";
import Feedbacks from "./pages/Feedbacks/Feedbacks";
import Footer from "./pages/Footer/Footer";
import NavBar from "./pages/NavBar/NavBar";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import Teams from "./pages/Teams/Teams";
import WhoWeAre from "./pages/whoWeAre/WhoWeAre";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services />
      <WhoWeAre />
      <Teams />
      <Projects />
      <FAQs />
      <Feedbacks />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;