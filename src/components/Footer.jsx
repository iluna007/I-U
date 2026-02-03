import "../styles/theme-borders.css"; // Ya incluye colores y bordes por tema

const Footer = () => {
	return (
		<footer className="custom-footer mt-auto py-3 text-center">
			
				<p className="text-body-secondary">
					© 2024 Investigación Urgente. All rights reserved. Web design by{" "}
					<a
						href="mailto:arquitectoikerluna@gmail.com"
						className="text-secondary"
						style={{ textDecoration: "none" }}
					>
						Iker Luna
					</a>
				</p>
		</footer>
	);
};

export default Footer;
