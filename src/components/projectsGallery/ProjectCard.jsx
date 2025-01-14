import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Modal, Stack, Tooltip, Typography, Box } from "@mui/material";
import './ProjectCard.css';
import { School, Terminal, Work, WorkspacePremium } from "@mui/icons-material";

import defaultImage from "../../assets/defaultImage.jpg";

const iconMap = {
    school: <School fontSize="large" />,
    professional: <Work fontSize="large" />,
    personal: <Terminal fontSize="large" />
};

export const ProjectCard = ({ image, title, description, languages, projectType, tooltipContent, buttonLink }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const renderTooltipText = (text, maxLength) => {
        const isOverflowing = text.length > maxLength;
        return (
            <Tooltip title={isOverflowing ? text : ""} arrow>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: 'block',
                        maxWidth: '300px'
                    }}
                >
                    {text}
                </Typography>
            </Tooltip>
        );
    };

    return (
        <div>
            {/* Carte cliquable */}
            <div className="projectCard" onClick={handleOpen}>
                <Card sx={{ maxWidth: 345, position: 'relative', cursor: 'pointer' }}>
                    <div className="cornerIcon">
                        {iconMap[projectType]}
                    </div>
                    <CardMedia
                        component="img"
                        alt={title}
                        height="300"
                        image={image || defaultImage}
                    />
                    <CardContent sx={{backgroundColor: '#F5EFE7'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        {renderTooltipText(description, 100)}
                        <div className="projectsTechnologies">
                            <Stack direction="row" spacing={1}>
                                {languages.map((language, index) => (
                                    <Chip key={index} label={language} size="small" />
                                ))}
                            </Stack>
                        </div>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "flex-end",
                                        backgroundColor: "#F5EFE7"
                                    }}>
                        <Button variant="outlined">
                            Détails
                        </Button>
                    </CardActions>
                </Card>
            </div>

            {/* Modal */}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '8px'
                    }}
                >
                    <Typography id="modal-title" variant="h5" component="h2" gutterBottom>
                        {title}
                    </Typography>
                    <Typography id="modal-description" variant="body1" sx={{ mb: 2 }}>
                        {description}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Informations supplémentaires
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {tooltipContent}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Technologies Used:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {languages.map((language, index) => (
                            <Chip key={index} label={language} size="small" />
                        ))}
                    </Stack>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Project Type:
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {projectType.charAt(0).toUpperCase() + projectType.slice(1)}
                    </Typography>
                    {buttonLink && (
                        <Button variant="contained" href={buttonLink} fullWidth>
                            Visit Project
                        </Button>
                    )}
                </Box>
            </Modal>
        </div>
    );
};
