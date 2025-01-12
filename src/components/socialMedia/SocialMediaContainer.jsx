import { Container } from "../container/Container.jsx";
import defaultImage from '../../assets/vite.svg';

import './SocialMediaContainer.css';

export const SocialMediaContainer = () => {
    return (
        <Container>
            <div className="socialbar">
                <Container containerId="socialMedia" color="white">
                    <a href="#">
                        <img src={defaultImage} alt="" width="50px" height="50px"/>
                        <div className="socialText">
                            <span>Duncan</span>
                        </div>
                    </a>
                </Container>
                <Container containerId="socialMedia" color="white">
                    <a href="#">
                        <img src={defaultImage} alt="" width="50px" height="50px"/>
                        <div className="socialText">
                            <span>Duncan</span>
                        </div>
                    </a>
                </Container>
                <Container containerId="socialMedia" color="white">
                    <a href="#">
                        <img src={defaultImage} alt="" width="50px" height="50px"/>
                        <div className="socialText">
                            <span>Duncan</span>
                        </div>
                    </a>
                </Container>
            </div>
        </Container>
    );
}