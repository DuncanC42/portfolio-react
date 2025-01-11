import {Container} from "../container/Container.jsx";
import './Timeline.css';
import {Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from '@mui/lab';
import {School} from "@mui/icons-material";

export const ProjectTimeline = () => {
    return (
        <Container title="Mon Parcours">
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <School />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Container>
                            <Typography variant="h6" component="h1">École</Typography>
                            <Typography variant="body1" component="p">École</Typography>
                            <p>ldksjhcvok</p>
                            <p>ldksjhcvok</p>
                            <p>ldksjhcvok</p>
                            <p>ldksjhcvok</p>
                        </Container>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    );
}