/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Fade from 'react-reveal/Fade';
import './About.scss';

import calendar from '../../images/icons/calendar.svg';
import home from '../../images/icons/home.svg';
import mail from '../../images/icons/mail.svg';
import phone from '../../images/icons/phone.svg';
import school from '../../images/icons/school.svg';
import user from '../../images/icons/user.svg';

const About = () => {
	return (
		<div>
			<div className="about">
				<Fade top>
					<div className="title">About</div>
				</Fade>
				<Fade top>
					<div className="about-table">
						<div className="each-table">
							<img className="icon" src={user} />
							<div className="description">이름</div>
							<div className="answer">이동섭</div>
						</div>
						<div className="each-table">
							<img className="icon" src={calendar} />
							<div className="description">생년월일</div>
							<div className="answer">1998.01.08</div>
						</div>
						<div className="each-table">
							<img className="icon" src={home} />
							<div className="description">주소지</div>
							<div className="answer">경기도 성남시</div>
						</div>
						<div className="each-table">
							<img className="icon" src={phone} />
							<div className="description">연락처</div>
							<div className="answer">010-xxxx-9371</div>
						</div>
						<div className="each-table">
							<img className="icon" src={mail} />
							<div className="description">이메일</div>
							<div className="answer">dongxieli@naver.com</div>
						</div>
						<div className="each-table">
							<img className="icon" src={school} />
							<div className="description">학력</div>
							<div className="answer">
								가천대학교 <br /> AI·소프트웨어학부(소프트웨어전공)
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default About;
