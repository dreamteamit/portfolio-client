
import Banner from "./pages/Banner/Banner";
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

      <section id="home">
        <NavBar />
      </section>
      <section><Banner /></section>
      <section id="service">
         <Services />
         <WhoWeAre />
         </section>


      <section id="about">
        <Teams />
      </section>

      <section id="portfolio">
        <Projects />
      </section>
     

      <section id="testimonial">
      <Feedbacks />
      </section>

      <section id="testimonial">
      <FAQs />
      </section>
 
   <section className="contact">
   <Contact />
   </section>
      <Footer />
    </div>
  );
};

export default App;
