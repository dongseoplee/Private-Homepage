/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import './Skills.scss';
import reactImg from '../../images/tech/react.png';
import djangoImg from '../../images/tech/django.png';
import gitImg from '../../images/tech/git.png';
import githubImg from '../../images/tech/github.jpg';
import pythonImg from '../../images/tech/python.png';
import javascriptImg from '../../images/tech/javascript.png';

const Skills = () => {
	const techList = {
		react: reactImg,
		django: djangoImg,
		git: gitImg,
		github: githubImg,
		python: pythonImg,
		javascript: javascriptImg,
	};
	const techStr = 'react,django,git,github';
	const [tech, setTech] = useState([]);

	useEffect(() => {
		// DB에서 str 형태로 온 스킬들을 배열 형태로 저장
		let tmp = techStr.split(',');
		setTech(tmp);
	}, [techStr]);

	return (
		<div className="skills">
			<Fade triggerOnce direction="up">
				<div className="title">Skills</div>
			</Fade>
			<Fade triggerOnce direction="up">
				<div className="skills-table">
					{tech.map(com => {
						return (
							<div className="each-table">
								<img className="tech-image" src={techList[com]} />
								<div className="tect-title">{com}</div>
							</div>
						);
					})}
				</div>
			</Fade>
		</div>
	);
};

export default Skills;
