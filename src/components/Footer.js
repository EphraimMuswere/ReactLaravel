import React from "react";

function Footer() {
	return (
		<div
			style={{
				background: "#000",
				height: 15,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "fixed",
				bottom: 0,
				width: "100%",
			}}
		>
			<h3 style={{ color: "#fff" }}>Biotechnology Working for you!!!</h3>
		</div>
	);
}

export default Footer;
