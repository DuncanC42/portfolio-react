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
                                    <TimelineDot>
                                        {iconMap[event.icon]}
                                    </TimelineDot>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent sx={{
                                    m: 'auto 0',
                                    py: '12px',
                                    px: 2,
                                }}>
                                    <Container containerId="eventContainerDetails" color="white">
                                        <h3>{event.title}</h3>

                                        <LocationOn fontSize="medium"/> <a href={event.establishment.lien}
                                                                           target="_blank"
                                                                           rel="noopener noreferrer">{event.establishment.nom}</a>, {event.location}
                                        <div className="description">
                                            {event.description}
                                        </div>
                                        {event.specialties && (
                                            <div className="specialties">
                                                <strong>Specialties:</strong> {event.specialties.join(', ')}
                                            </div>
                                        )}
                                        {event.option && (
                                            <div className="option">
                                                <strong>Option:</strong> {event.option}
                                            </div>
                                        )}
                                        {event.detailsLink && (
                                            <Button variant="contained" href={event.detailsLink} target="_blank"
                                                    rel="noopener noreferrer">
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