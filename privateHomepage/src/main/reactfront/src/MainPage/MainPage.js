/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import { Fade } from 'react-awesome-reveal';
import './MainPage.scss';

import About from './About/About';
import Skills from './Skills/Skills';
import Mysite from './Mysite/Mysite';

const MainPage = () => {
	const [userInfo, setUserInfo] = useState([]);

	useEffect(() => {
		fetch(`https://dongsseop2.com/privateHomepage/user`)
			.then(res => res.json())
			.then(data => {
				setUserInfo(data[0]);
				console.log(data);
			});
	}, []);

	return (
		<div>
			{userInfo === [] ? null : (
				<div className="container">
					<div className="intro1">
						<div className="intro-table">
							<ImageCarousel />
							<div className="right-table">
								<Fade triggerOnce>
									<div className="profile-content">Hello</div>
								</Fade>
								<Fade triggerOnce delay={1500}>
									<div className="profile-content">Frontend Developer</div>
								</Fade>
								<Fade triggerOnce delay={3000}>
									<div className="profile-content">{userInfo.user_name}</div>
								</Fade>
							</div>
						</div>
					</div>
					<About
						name={userInfo.user_name}
						location={userInfo.location}
						birthday={userInfo.birthday}
						email={userInfo.email_address}
						phone_number={userInfo.phone_number}
						university={userInfo.university}
						dept={userInfo.dept}
					/>
					<Skills />
					<Mysite git={userInfo.git_url} />
				</div>
			)}
		</div>
	);
};

export default MainPage;
