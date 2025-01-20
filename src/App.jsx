import './App.css'
import {Navbar} from "./components/navbar/Navbar.jsx";
import {ProjectTimeline} from "./components/timeline/Timeline.jsx";
import {Introduction} from "./components/introduction/Introduction.jsx";
import {ProjectGallery} from "./components/projectsGallery/ProjectGallery.jsx";
import {SkillsSection} from "./components/skills/SkillsSection.jsx";
import ContactForm from "./components/contact/Contact.jsx";
import {SocialMediaContainer} from "./components/socialMedia/SocialMediaContainer.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";



function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <>
        <Navbar></Navbar>
        <Introduction></Introduction>
        <ProjectTimeline></ProjectTimeline>
        <ProjectGallery></ProjectGallery>
        <SkillsSection></SkillsSection>
        <ContactForm></ContactForm>
        <SocialMediaContainer></SocialMediaContainer>
    </>
  )
}

export default App
