import "./App.css";

function App() {
	const projects = [
		{
			title: "LeafColor - Leaf Color Analyzer",
			description:
				"Python/Cython application for agricultural leaf image analysis to estimate nitrogen content, with segmentation and RGB extraction workflows.",
			impact: "Tested on 300+ images and achieved 92% accuracy against expert ratings.",
			link: "https://github.com/pranavrbm/leafcolor",
			stack: "Python, Cython, Image Processing",
		},
		{
			title: "Deceptive AI Review Detection",
			description:
				"Research-driven ML pipeline to detect AI-generated deceptive reviews using NLP preprocessing, feature engineering, and classifier experimentation.",
			impact: "Presented at IEEE DISCOVER 2024 with peer-reviewed publication.",
			link: "https://github.com/MLProjectTeam3/Fake_Review_Prediction",
			stack: "Python, TensorFlow, NLP, Scikit-learn",
		},
		{
			title: "FurEver - Dog Adoption System",
			description:
				"Full-stack adoption platform connecting shelters and adopters with secure role-based workflows.",
			impact: "Built with production-style authentication and database-backed adoption lifecycle.",
			link: "https://github.com/pranavrbm/FurEver",
			stack: "Next.js, Prisma, PostgreSQL, NextAuth",
		},
		{
			title: "Restaurant Menu Web App",
			description:
				"Dynamic menu management app with real-time updates, authentication, and media management.",
			impact: "Optimized for mobile/desktop UX with modular architecture for scale.",
			link: "https://github.com/MLProjectTeam3/restaurant-menu",
			stack: "SvelteKit, Tailwind CSS, Firebase, Cloudinary",
		},
		{
			title: "Amazon Review Scraper",
			description:
				"Notebook-based automation for scraping and structuring Amazon review data for downstream analytics.",
			impact: "Produces export-ready datasets for sentiment analysis and BI workflows.",
			link: "https://github.com/pranavrbm/Amazon-review-scraping",
			stack: "Python, Jupyter Notebook, Data Extraction",
		},
	];

	const skillGroups = [
		{
			label: "Programming",
			items: "Python, C++, JavaScript, SQL, HTML, CSS",
		},
		{
			label: "Web/Frameworks",
			items: "React, Django, Next.js, Prisma, SvelteKit, Tailwind, Firebase, Flask, Express, REST APIs",
		},
		{
			label: "Databases",
			items: "MySQL, PostgreSQL, MongoDB",
		},
		{
			label: "ML/Data Science",
			items: "TensorFlow, Scikit-learn, Pandas, NumPy, PyTorch",
		},
		{
			label: "DevOps/Cloud",
			items: "Docker, Git, Linux, GitHub Actions, AWS, Vercel, Netlify",
		},
		{
			label: "Blockchain",
			items: "Solidity, Ethereum, Web3.js",
		},
	];

	return (
		<main className="portfolio">
			<section className="hero-section">
				<p className="eyebrow">AI & Data Science Undergraduate</p>
				<h1>Pranav R Bhat</h1>
				<p className="hero-copy">
					Passionate AI and Data Science undergraduate with hands-on
					experience in machine learning, web development, and
					automation. Eager to contribute technical expertise and
					creativity to innovative teams and research projects.
				</p>
				<div className="meta-row">
					<span>Mangalore, India</span>
					<span>pranavbm05@gmail.com</span>
					<span>+91 80737 14200</span>
				</div>
				<div className="hero-actions">
					<a
						href="#projects"
						className="btn btn-primary">
						View Projects
					</a>
					<a
						href="https://www.linkedin.com/in/pranav-bhat-018319338/"
						target="_blank"
						rel="noreferrer"
						className="btn btn-secondary">
						LinkedIn
					</a>
					<a
						href="https://github.com/pranavrbm"
						target="_blank"
						rel="noreferrer"
						className="btn btn-secondary">
						GitHub
					</a>
				</div>
			</section>

			<section
				className="section"
				id="qualifications">
				<h2>Summary of Qualifications</h2>
				<ul className="bullet-list">
					<li>
						Practical experience in AI/ML model development, web app
						architecture, and cloud deployment.
					</li>
					<li>
						Led and published peer-reviewed research in AI-generated
						text detection (IEEE DISCOVER 2024).
					</li>
					<li>
						Developed and contributed to 7+ open-source projects in
						automation, NLP, and web infrastructure.
					</li>
					<li>
						Skilled in Python, TensorFlow, React, Next.js,
						PostgreSQL, and AWS.
					</li>
				</ul>
			</section>

			<section
				className="section"
				id="objective">
				<h2>Career Objective</h2>
				<p>
					I am motivated to work in Japan to contribute AI and data
					science skills in a disciplined, innovation-driven
					environment. I aim to build impactful products with global
					teams while continuing to improve my Japanese language
					proficiency.
				</p>
			</section>

			<section
				className="section"
				id="education">
				<h2>Education</h2>
				<div className="timeline-card">
					<div className="timeline-head">
						<h3>NMAM Institute of Technology</h3>
						<span>2022 – Present</span>
					</div>
					<p>
						B.Tech in AI and Data Science • Expected Graduation 2026
					</p>
				</div>
			</section>

			<section
				className="section"
				id="projects">
				<h2>Projects</h2>
				<div className="project-grid">
					{projects.map((project) => (
						<article
							className="project-card"
							key={project.title}>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<p className="impact">{project.impact}</p>
							<span>{project.stack}</span>
							<a
								href={project.link}
								target="_blank"
								rel="noreferrer"
								className="project-link">
								Source Code
							</a>
						</article>
					))}
				</div>
			</section>

			<section
				className="section"
				id="experience">
				<h2>Professional Experience</h2>
				<article className="timeline-card">
					<div className="timeline-head">
						<h3>Full-Stack Developer Intern • Krishitantra</h3>
						<span>Jun 2024 – Aug 2024</span>
					</div>
					<ul className="bullet-list">
						<li>
							Built and deployed a web app for farmers to analyze
							leaf images and estimate crop nitrogen.
						</li>
						<li>
							Developed React frontend, Django REST API backend,
							and Python image-processing algorithms.
						</li>
						<li>
							Automated report generation to compare outputs with
							agricultural standards.
						</li>
					</ul>
				</article>
				<article className="timeline-card">
					<div className="timeline-head">
						<h3>Artificial Intelligence Intern • CodeAlpha</h3>
						<span>Jun 2025 – Jul 2025</span>
					</div>
					<ul className="bullet-list">
						<li>
							Completed a Government of India-recognized
							internship focused on core AI techniques and
							applications.
						</li>
						<li>
							Developed foundational AI models through practical,
							collaborative assignments.
						</li>
					</ul>
				</article>
			</section>

			<section
				className="section"
				id="publication">
				<h2>Publication</h2>
				<div className="timeline-card">
					<div className="timeline-head">
						<h3>
							Identifying Deceptive AI Reviews: A Machine Learning
							Approach
						</h3>
						<span>IEEE DISCOVER 2024</span>
					</div>
					<p>
						Authors: Pranav R. Bhat, Nidhish Shettigar, Venugopala
						P. S., Amrith R. Naik, Vaishnavi.
					</p>
					<a
						href="https://ieeexplore.ieee.org/document/10750586"
						target="_blank"
						rel="noreferrer"
						className="project-link">
						Read Paper
					</a>
				</div>
			</section>

			<section
				className="section"
				id="affiliations">
				<h2>Professional Affiliations</h2>
				<ul className="bullet-list">
					<li>Student Member, IEEE Computer Society</li>
					<li>Member, ACM India Chapter</li>
				</ul>
			</section>

			<section
				className="section"
				id="skills">
				<h2>Technical Skills</h2>
				<div className="skill-grid">
					{skillGroups.map((group) => (
						<article
							className="timeline-card"
							key={group.label}>
							<h3>{group.label}</h3>
							<p>{group.items}</p>
						</article>
					))}
				</div>
			</section>

			<section
				className="section"
				id="languages">
				<h2>Languages</h2>
				<div className="chip-wrap">
					<span className="chip">English (Fluent)</span>
					<span className="chip">Kannada (Native)</span>
					<span className="chip">Hindi (Intermediate)</span>
					<span className="chip">Japanese (Learning)</span>
				</div>
			</section>

			<section
				className="section"
				id="contact">
				<h2>Contact</h2>
				<p>
					Email:{" "}
					<a href="mailto:pranavbm05@gmail.com">
						pranavbm05@gmail.com
					</a>
				</p>
				<p>
					Phone: <a href="tel:+918073714200">+91 80737 14200</a>
				</p>
				<p>
					LinkedIn:{" "}
					<a
						href="https://www.linkedin.com/in/pranav-bhat-018319338/"
						target="_blank"
						rel="noreferrer">
						linkedin.com/in/pranav-bhat-018319338
					</a>
				</p>
				<p>
					GitHub:{" "}
					<a
						href="https://github.com/pranavrbm"
						target="_blank"
						rel="noreferrer">
						github.com/pranavrbm
					</a>
				</p>
			</section>
		</main>
	);
}

export default App;
