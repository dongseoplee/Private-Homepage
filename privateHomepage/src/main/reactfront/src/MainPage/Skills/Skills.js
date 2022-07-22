/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useRef } from 'react';
import Fade from 'react-reveal/Fade';
import './Skills.scss';

import backend from '../../images/tech/backend.png';
import frontend from '../../images/tech/frontend.png';
import restTech from '../../images/tech/else.png';

const Skills = () => {
	return (
		<div className="skills">
			<Fade top>
				<div className="title">Skills</div>
			</Fade>
			<div className="skills-table">
				<Fade left>
					<div className="each-table">
						<div className="tech-desc">Frontend</div>
						<div className="underline" />
						<img className="tech-image" src={frontend} />
					</div>
				</Fade>
				<Fade left>
					<div className="each-table">
						<div className="tech-desc">Backend</div>
						<div className="underline" />
						<img className="tech-image" src={backend} />
					</div>
				</Fade>
				<Fade left>
					<div className="each-table">
						<div className="tech-desc">etc</div>
						<div className="underline" />
						<img className="tech-image" src={restTech} />
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Skills;
