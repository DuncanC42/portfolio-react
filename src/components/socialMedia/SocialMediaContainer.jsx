import { Container } from "../container/Container.jsx";
import './SocialMediaContainer.css';
import {socialMediaLinks} from "./SocialMediaLinks.js";

export const SocialMediaContainer = () => {
    return (
        <Container>
            <div className="socialbar">
                {socialMediaLinks.map((link) => (
                    <Container key={link.id} containerId="socialMedia" color="#F5EFE7">
                        <a href={link.link} target="_blank" rel="noopener noreferrer">
                            <img src={link.image} alt={link.name} width="50px" height="50px" />
                            <div className="socialText">
                                <span>{link.name}</span>
                            </div>
                        </a>
                    </Container>
                ))}
            </div>
        </Container>
    );
};
