import React from 'react';
import './Container.css';
import {Typography} from "@mui/material";

export const Container = ({title, containerId ,color, children}) => {
    const containerStyle = {
        backgroundColor: color || 'rgba(0, 0, 0, 0.6)', // Default color if no prop is provided
    };

    return (
        <div className="container" style={containerStyle} id={containerId}>
            {title &&
                <Typography variant="h4" component="h4">
                    {title}
                </Typography>}
            {children}
        </div>
    );
};