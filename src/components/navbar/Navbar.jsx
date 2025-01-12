import { Container } from "../container/Container.jsx";
import { Toolbar, Typography } from "@mui/material";
import React from "react";
import './Navbar.css';

export const Navbar = () => {
    const menuItems = [
        { label: 'À propos', href: '#about' },
        { label: 'Parcours', href: '#parcours' },
        { label: 'Projets', href: '#projectContainer' },
        { label: 'Contact', href: '#contact' }
    ];

    return (
        <Container containerId="navbar">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Portfolio
                </Typography>
                {menuItems.map((item, index) => (
                    <Typography key={index} variant="h6" component="div" sx={{ marginLeft: 2 }}>
                        <a href={item.href} className="navbar-link">{item.label}</a>
                    </Typography>
                ))}
            </Toolbar>
        </Container>
    );
}