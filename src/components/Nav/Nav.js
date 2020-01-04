import React from "react";
import "./Nav.css";

const Nav = (props) => (
    <nav>
        <ul class="left-nav">
            <li><a href="#">Product</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Pricing</a></li>
        </ul>
        <ul class="right-nav">
            <li><a href="#">Help</a></li>
            <li><a href="#">Get started for free</a></li>
            <li><a href="#">Sign in</a></li>
        </ul>
    </nav>
);

export default Nav;