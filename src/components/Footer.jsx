import React from "react";

const year = new Date().getFullYear();


function Footer() {
    return (
	<footer>
	    <p>Copyright<span>&copy</span>{year}</p>
	</footer>
    );
}

export default Footer;
