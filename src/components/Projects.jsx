import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ecureuil from './img/Projet1.png';
import projet0 from './img/Projet0.png';
import projet2 from './img/projet2.png';
import projectbanner from './img/banner7proj.jpg';
import EpicRecip from './img/AvatarEpicRecip.png';

const Projects = styled.div`
	display: flex;
	align-content: center;
	flex-wrap: wrap;
	justify-content: center;
`;

const ProjectNum = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 30px;
	color: white;
	height: fit-content;
	a {
		margin-top: 30px;
		font-size: 25px;
		padding: 0;
		text-decoration: none;
		text-decoration: underline;
		color: white;
	}
`;

const Thumbnail = styled.img`
	width: 300px;
	height: 300px;
`;

const Description = styled.div`
	width: 300px;
	height: 300px;
	background-color: #1e1e1f;
	color: white;
	border: 1px solid black rgba(0, 0, 0, 0.8);
	h2,
	p {
		margin: 1rem;
	}
`;

const TitleProjects = styled.div`
	border: 1px solid black rgba(0, 0, 0, 0.3);
	box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
	font-size: 30px;
	margin: 40px 0 30px 0;
	width: fit-content;
	display: flex;
	align-content: center;
	justify-content: center;
	background-image: url(${projectbanner});
	background-position: center;
	background-size: cover;
	color: white;

	div {
		background-color: rgba(0, 0, 0, 0.4);
	}
`;

const Firstdiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-attachment: fixed;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url('./components/img/fond.jpg');
`;

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.stage = { projet1: false, projet2: false, projet3: false };
	}
	render() {
		AOS.init();
		return (
			<Firstdiv>
				<TitleProjects id='Projects'>
					<div>
						<h2>
							{this.props.langFr ? 'Projets réalisés' : 'Some achievements'}
						</h2>
					</div>
				</TitleProjects>
				<Projects>
					<ProjectNum data-aos='fade-right'>
						<Thumbnail src={EpicRecip}></Thumbnail>
						<Description>
							<h2>Epic Recip</h2>
							<p>
								{this.props.langFr
									? "Lors de notre 1er HACKATHON, au sein d'un groupe de 4 personnes, on s'est lancé dans le monde du jeux. On a réussit a produire un jeu (non responsive) qui pose une réelle difficulté pour gagner! Vous pouvez essayer si vous osez!"
									: 'During som few crazy nights, we did an Epic game for an Epic Recip! As four I guess we did some great job. If you are brave enought you can try to win!'}
							</p>
							<a href='https://epicrecip.netlify.app/'>
								<p>{this.props.langFr ? 'En savoir plus' : "Let's check!"}</p>
							</a>
						</Description>
					</ProjectNum>
					<ProjectNum data-aos='fade-right'>
						<Thumbnail src={projet0}></Thumbnail>
						<Description>
							<h2>Atlantic Box Office</h2>
							<p>
								{this.props.langFr
									? "Ce site web une refonte complète d'un site d'une entreprise. Je l'ai commencé avant de rentrer à la WildCodeSchool. "
									: "It's a rework of an old web site of an entreprise. I did this before I came to the WildCodeSchool"}
							</p>
							<p>
								{this.props.langFr
									? 'Ce site nécessite encore quelques ajustements pour pouvoir le mettre en fonctionnement pour son entreprise.'
									: 'This web site needs some work to be finished to be ableto put it on a web host'}
							</p>
							<a href='https://atlanticboxoffice.eu'>
								{' '}
								<p>
									{this.props.langFr ? 'En savoir plus' : "Let's check!"}
								</p>{' '}
							</a>
						</Description>
					</ProjectNum>
					<ProjectNum data-aos='fade-right'>
						<Thumbnail src={ecureuil}></Thumbnail>
						<Description>
							<h2>AdopteUnEcureuil.com</h2>
							<p>
								{this.props.langFr
									? "Ce projet a été réalisé dans le cadre de la formation WildCodeSchool. Au cour du premier mois de formation on a dù créer un site fictif. Notre thème à été l'adoption d'écureuil, issu de refuge."
									: "It's a fake web site for a projet, during the first month of the WildCodeSchool. The goal of this web site is to give the oportunity to give a good life for some squirrels wounded, and catch by association for medicine. People can adopt a squirrel if they want!!"}
							</p>
							<a href='https://rouxxi.github.io/AdopteUnEcureuil.github.io/index.html'>
								{' '}
								<p>{this.props.langFr ? 'En savoir plus' : "Let's check!"}</p>
							</a>
						</Description>
					</ProjectNum>
					<ProjectNum data-aos='fade-right'>
						<Thumbnail src={projet2}></Thumbnail>
						<Description>
							<h2>VegeNantes Go</h2>
							<p>
								{' '}
								{this.props.langFr
									? 'Ce site possède le même fonctionnement que pokémon Go. Des passionnés de plantes peuvent arpenter les parcs de Nantes afin de scanner des QR Code placé devant les plantes/arbres/arbustes.'
									: "It's a web site similar to pokemon GO, but with plants/trees/flowers !! The users can try to catch them all with QR Code"}
							</p>
							<a href='https://vegenantesgo.netlify.app/'>
								<p>{this.props.langFr ? 'En savoir plus' : "Let's check!"}</p>
							</a>
						</Description>
					</ProjectNum>
				</Projects>
			</Firstdiv>
		);
	}
}

export default Project;
