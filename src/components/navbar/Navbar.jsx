import { Container } from "../container/Container.jsx";
import { Toolbar, Typography } from "@mui/material";
import React from "react";

export const Navbar = () => {
    const menuItems = ['Home', 'About', 'Contact'];

    return (
        <Container>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Portfolio
                </Typography>
                {menuItems.map((item, index) => (
                    <Typography key={index} variant="h6" component="div" sx={{ marginLeft: 2 }}>
                        {item}
                    </Typography>
                ))}
            </Toolbar>
        </Container>
    );
}