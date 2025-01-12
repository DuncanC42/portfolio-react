import { useState, useEffect } from 'react';
import { Container } from "../container/Container.jsx";
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
import { LocationOn, School, Work } from "@mui/icons-material";
import events from './events.json';

const iconMap = {
    School: <School />,
    Work: <Work />
};

export const ProjectTimeline = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Vous pouvez ajuster cette valeur
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
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body1"
                                    color="white"
                                >
                                    {event.start} - {event.end}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        {iconMap[event.icon]}
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{
                                    m: 'auto 0',
                                    py: '12px',
                                    px: 2,
                                }}>
                                    <Container containerId="eventContainerDetails" color="white">
                                        <h3>{event.title}</h3>
                                        <LocationOn fontSize="medium" />{event.location}
                                        <div className="description">
                                            {event.description}
                                        </div>
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
