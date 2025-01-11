import {Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import './ProjectCard.css';
import {WorkspacePremium} from "@mui/icons-material";

export const ProjectCard = () => {
    return (
        <div className="projectCard">
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image="/public/projectDefaultImage.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Titre du projet
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        Courte description du projet
                    </Typography>
                    <div className="projectsTechnologies">
                        <Stack direction="row" spacing={1}>
                            <Chip label="language" size="small"/>
                        </Stack>
                    </div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">Read More</Button>
                    <span className="iconContainer">
                        <WorkspacePremium fontSize="large"></WorkspacePremium>
                    </span>
                </CardActions>
            </Card>
        </div>
    );
}