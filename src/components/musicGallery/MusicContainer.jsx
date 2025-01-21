import {Container} from "../container/Container.jsx";

export const MusicContainer = () => {
    return (
        <Container title="Musiques">
            <h3>Selon moi, les goûts musicaux ça en dit beaucoup alors je les partage avec vous !</h3>
            <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="500"
                width="100%"
                style={{
                    width: "100%",
                    // maxWidth: "660px",
                    overflow: "hidden",
                    borderRadius: "10px",
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/fr/playlist/in-tune-with-myself/pl.u-WabZv3PSRZlz2DP?l=en-GB"
            ></iframe>
        </Container>
    );
};
