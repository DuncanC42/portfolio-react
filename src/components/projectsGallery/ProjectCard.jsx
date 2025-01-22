import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Modal, Stack, Tooltip, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import './ProjectCard.css';
import { School, Terminal, Work } from "@mui/icons-material";

import defaultImage from "../../assets/defaultImage.jpg";

const iconMap = {
    school: <School fontSize="large" />,
    professional: <Work fontSize="large" />,
    personal: <Terminal fontSize="large" />
};

export const ProjectCard = ({ image, title, description, languages, projectType, tooltipContent, buttonLink }) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? '85%' : 400,
        maxHeight: isMobile ? '80vh' : '90vh',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: isMobile ? 2 : 4,
        borderRadius: '8px',
        overflow: 'auto',
        '&:focus': {
            outline: 'none'
        }
    };

    return (
        <div data-aos="fade-down">
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography
                        id="modal-title"
                        variant={isMobile ? "h6" : "h5"}
                        component="h2"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography id="modal-description" variant="body1" sx={{ mb: 2 }}>
                        {description}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Informations supplémentaires
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        <ul style={{
                            paddingLeft: isMobile ? '1.2rem' : '2rem',
                            margin: isMobile ? '0.5rem 0' : '1rem 0'
                        }}>
                            {tooltipContent.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Technologies Used:
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mb: 2 }}
                        flexWrap="wrap"
                        gap={1}
                    >
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