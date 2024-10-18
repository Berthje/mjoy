"use client";

import React, { useState } from "react";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <p>Navbar</p>
    );
};

export default Navbar;
