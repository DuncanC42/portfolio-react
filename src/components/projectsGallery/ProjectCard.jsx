import { Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Tooltip, Typography } from "@mui/material";
import './ProjectCard.css';
import { School, Terminal, Work, WorkspacePremium } from "@mui/icons-material";

const iconMap = {
    school: <School fontSize="large" />,
    professional: <Work fontSize="large" />,
    personal: <Terminal fontSize="large" />
};

export const ProjectCard = ({ image, title, description, languages, projectType, tooltipContent, buttonLink }) => {
    return (
        <div className="projectCard">
            <Card sx={{ maxWidth: 345, position: 'relative' }}>
                <div className="cornerIcon">
                    {iconMap[projectType]}
                </div>
                <CardMedia
                    component="img"
                    alt={title}
                    height="300"
                    image={image} // L'image est dynamique
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                    <div className="projectsTechnologies">
                        <Stack direction="row" spacing={1}>
                            {languages.map((language, index) => (
                                <Chip key={index} label={language} size="small" />
                            ))}
                        </Stack>
                    </div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" href={buttonLink}>Read More</Button>
                    <Tooltip title={tooltipContent} arrow>
                        <span className="iconContainer">
                            <WorkspacePremium fontSize="large" />
                        </span>
                    </Tooltip>
                </CardActions>
            </Card>
        </div>
    );
};
