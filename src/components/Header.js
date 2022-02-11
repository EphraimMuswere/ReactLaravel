import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div
			style={{
				background: "#002045",
				height: 45,
				display: "flex",
				alignItems: "center",
				padding: 10,
				width: "100%",
			}}
		>
			<nav
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<div>
					<h3 style={{ color: "#fff", padding: 10 }}>
						National Biotechnology Authority
					</h3>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "row",
						paddingRight: 20,
					}}
				>
					<Link to="/">
						<h5 style={{ color: "#fff", padding: 10 }}>Home</h5>
					</Link>
					<Link to="/request">
						<h5 style={{ color: "#fff", padding: 10, textDecoration: "none" }}>
							Payment Request
						</h5>
					</Link>
					<Link to="/pettycash">
						<h5 style={{ color: "#fff", padding: 10 }}>PETTY-CASH Request</h5>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Header;
