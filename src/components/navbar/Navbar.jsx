import React, { useState, useEffect } from "react";
import { Container } from "../container/Container.jsx";
import { Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const menuItems = [
        { label: "À propos", href: "#about" },
        { label: "Parcours", href: "#parcours" },
        { label: "Projets", href: "#projectContainer" },
        { label: "Contact", href: "#contact" },
    ];

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setShowNavbar(false); // Cacher la navbar
        } else {
            setShowNavbar(true); // Afficher la navbar
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div id="navbar" className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Portfolio
                    </Typography>
                    <div className="menu-items">
                        {menuItems.map((item, index) => (
                            <Typography key={index} variant="h6" component="div" sx={{ marginLeft: 2 }}>
                                <a href={item.href} className="navbar-link">{item.label}</a>
                            </Typography>
                        ))}
                    </div>
                    <div className="menuBurger">
                        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen} className="menu-button">
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} onClick={handleMenuClose}>
                                <a href={item.href} className="navbar-link">{item.label}</a>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </Container>

        </div>
    );
};
