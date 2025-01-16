import {useState, useEffect} from 'react';
import {Container} from "../container/Container.jsx";
import './Timeline.css';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab';
import {LocationOn, School, Work} from "@mui/icons-material";
import {Button} from '@mui/material';
import events from './events.json';

const iconMap = {
    School: <School/>,
    Work: <Work/>
};

export const ProjectTimeline = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this value as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container title="Mon Parcours" containerId="parcours">
            <div className="timelineContainer">
                <div>
                    <Timeline position={isMobile ? "right" : "alternate"}>
                        {events.map((event, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent
                                    sx={{m: 'auto 0'}}
                                    align="right"
                                    variant="body1"
                                    color="white"
                                >
                                    {event.start} - {event.end}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector/>
                                    <TimelineDot sx={{backgroundColor: "#D8C4B6"}}>
                                        {iconMap[event.icon]}
                                    </TimelineDot>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent sx={{
                                    m: 'auto 0',
                                    py: '12px',
                                    px: 2,
                                }}>
                                    <Container containerId="eventContainerDetails" color="#F5EFE7">
                                        <h3>{event.title}</h3>
                                        {event.establishment && event.location && (
                                            <>
                                                <LocationOn fontSize="medium"/> <a className="locationLink"
                                                                                   href={event.establishment.lien}
                                                                                   target="_blank"
                                                                                   rel="noopener noreferrer">{event.establishment.nom}</a>, {event.location}
                                            </>
                                        )}
                                        <div className="description">
                                            {event.description}
                                        </div>
                                        {event.specialties && (
                                            <div className="specialties">
                                                <strong>{event.specialties.length > 1 ? 'Spécialités' : 'Spécialité'}:</strong> {event.specialties.join(', ')}
                                            </div>
                                        )}
                                        {event.option && (
                                            <div className="option">
                                                <strong>Option:</strong> {event.option}
                                            </div>
                                        )}
                                        {(
                                            <Button
                                                variant="contained"
                                                href={event.detailsLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    backgroundColor: '#3E5879', // Couleur de fond
                                                    color: 'white', // Couleur du texte

                                                    '&:hover': {
                                                        backgroundColor: '#213555', // Couleur au survol
                                                    }
                                                }}
                                            >
                                                Details
                                            </Button>

                                        )}
                                    </Container>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </Container>
    );
}