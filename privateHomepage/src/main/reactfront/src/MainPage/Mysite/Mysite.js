/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, Conponent } from 'react';
import Fade from 'react-reveal/Fade';
import './Mysite.scss';

import github from '../../images/icons/github.png';
import favicon from '../../images/icons/favicon.png';

const Mysite = () => {
	return (
		<div className="mysite">
			<Fade top>
				<div className="title">My Site</div>
			</Fade>
			<div className="site-table">
				<Fade left>
					<div className="each-table">
						<img className="site-image" src={github} />
						<a href="https://github.com/ChoiGyeongJu" className="site-url">
							github.com/ChoiGyeongJu
						</a>
						<li className="site-desc">각종 소스 코드 저장소</li>
					</div>
				</Fade>
				<Fade left>
					<div className="each-table">
						<img className="site-image" src={favicon} />
						<div className="site-title">CGJ's Portfolio</div>
						<a href="https://GyeongJuChoi.com" className="site-url">
							https://GyeongJuChoi.com
						</a>
						<li className="site-desc">포트폴리오 용도로 제작한 웹사이트</li>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Mysite;
