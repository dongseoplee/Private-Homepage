/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import { Fade } from 'react-reveal';
import './MainPage.scss';

import About from './About/About';
import Skills from './Skills/Skills';
import Mysite from './Mysite/Mysite';

const MainPage = () => {
	const [line2, setline2] = useState(false);
	const [line3, setline3] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setline2(true);
		}, 1500);
		setTimeout(() => {
			setline3(true);
		}, 3000);
	}, []);

	return (
		<div className="container">
			<div className="intro1">
				<div className="intro-table">
					<ImageCarousel />
					<div className="right-table">
						<Fade top>
							<div className="profile-content">안녕하세요.</div>
						</Fade>
						{line2 ? (
							<Fade top>
								<div className="profile-content">가천대학교 AI·소프트웨어학부(소프트웨어전공)</div>
							</Fade>
						) : null}
						{line3 ? (
							<Fade top>
								<div className="profile-content">이동섭입니다.</div>
							</Fade>
						) : null}
					</div>
				</div>
			</div>
			<About />
			<Skills />
			<Mysite />
		</div>
	);
};

export default MainPage;
