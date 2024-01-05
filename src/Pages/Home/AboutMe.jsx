export default function AboutMe() {
	return (
		<section id="AboutMe" className="about--section">
			<div className="about--section--img">
				<img
					src="./img/portrait3.JPG"
					alt="About Me"
					style={{
						borderRadius: "20px",
					}}
				/>
			</div>
			<div className="hero--section--content--box about--section--box">
				<div className="hero--section--content">
					{/* <p className="section--title">About</p> */}
					<h1 className="skills-section--heading">About Me</h1>

					<p className="hero--section-description">
						Immaculate Uzoamaka Nwajagu is a Food Consultant with
						keen interest in food safety, food security, product
						development and nutrition. She is the Managing
						Principal/Founder of Food Maestro.
					</p>
					<p className="hero--section-description">
						Immaculate holds a Master of Science in Nutrition from
						Ahmadu Bello University Zaria, Nigeria. She received her
						BSc. (Hons) in Food Science and Technology from the
						Enugu State University of Science and Technology.
						Immaculate is a professional member of the Nigerian
						Institute of Food Science and Technology (NIFST),
						Nutrition Society of Nigeria (NSN) and The Nutrition
						Society (NS).
					</p>
				</div>
			</div>
		</section>
	);
}
