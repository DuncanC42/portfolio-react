import {Container} from "../container/Container.jsx";
import './MusicContainer.css';
export const MusicContainer = () => {
    return (
        <div className="musicContainer">
            <h2 className="font-bold mb-4">Musiques</h2>
            <h3>Chaque morceau de cette playlist est une page de mon histoire, une bande-son qui transforme le quotidien en scènes de film. La musique n'est pas juste ce que j'écoute, c'est ce que je vis.</h3>
            <div className="playerContainer">
                <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder="0"
                    height="500"
                    style={{
                        width: "100%",
                        borderRadius: "10px",
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/fr/playlist/in-tune-with-myself/pl.u-WabZv3PSRZlz2DP?l=en-GB"
                />
            </div>

        </div>
    );
};
