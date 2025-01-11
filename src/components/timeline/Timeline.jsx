import {Container} from "../container/Container.jsx";
import './Timeline.css';
import {Typography} from "@mui/material";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab';
import {School, LocationOn} from "@mui/icons-material";

export const ProjectTimeline = () => {
    return (
        <Container title="Mon Parcours">
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body1"
                        color="white"
                    >
                        debut - fin
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <School/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Container>
                            <h3>Titre du Projet</h3>
                            <div className="location">
                                <LocationOn fontSize="small"/>
                                <p>Lieu du Projet</p>
                            </div>
                            <div className="description">
                                Description du projet
                            </div>
                        </Container>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    );
}