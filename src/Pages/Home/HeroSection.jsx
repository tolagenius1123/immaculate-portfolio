export default function HeroSection() {
	return (
		<section id="heroSection" className="hero--section">
			<div className="hero--section--content--box">
				<div className="hero--section--content">
					{/* <p className="section--title">
						Hey, I'm Immaculate Uzoamaka Nwajagu
					</p> */}
					<h1 className="hero--section--title">
						<span
							className="hero--section-title--color"
							style={{
								fontSize: "60px",
							}}
						>
							Hey! I'm Immaculate
						</span>{" "}
						<br />
						<span
							style={{
								color: "#5e3bee",
								fontSize: "50px",
							}}
						>
							Uzoamaka Nwajagu
						</span>
					</h1>
					<p className="hero--section-description">
						A Food Consultant with keen interest in food safety,
						food security, product development and nutrition. I am
						the Managing Principal/Founder of Food Maestro.
					</p>
				</div>
				<button className="btn btn-primary">Get In Touch</button>
			</div>
			<div className="hero--section--img">
				<img
					style={{
						borderRadius: "50%",
						height: "400px",
						width: "400px",
					}}
					src="./img/imma.jpg"
					alt="Hero Section"
				/>
			</div>
		</section>
	);
}
