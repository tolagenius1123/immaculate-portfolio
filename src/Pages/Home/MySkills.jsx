import data from "../../data/index.json";

export default function MySkills() {
	return (
		<section className="skills--section" id="mySkills">
			<div className="portfolio--container">
				<p className="section--title">My Skills</p>
				<h2 className="skills--section--heading">My Expertise</h2>
				<p className="section--title">
					I give practical solutions💡 to help minimize risks and
					maximize quality through:
				</p>
			</div>
			<div className="skills--section--container">
				{data?.skills?.map((item, index) => (
					<div key={index} className="skills--section--card">
						<div
							className="skills--section--img"
							style={{
								display: "flex",
								alignItems: "center",
								gap: "20px",
							}}
						>
							<img src={item.src} alt="Product Chain" />
							<h3 className="skills--section--title">
								{item.title}
							</h3>
						</div>
						<div className="skills--section--card--content">
							<p className="skills--section--description">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
