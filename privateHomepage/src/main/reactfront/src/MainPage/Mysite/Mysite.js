/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Mysite.scss';

import github from '../../images/icons/github.png';
import favicon from '../../images/icons/favicon.png';

const Mysite = ({ git }) => {
	return (
		<div className="mysite">
			<Fade triggerOnce direction="up">
				<div className="title">My Site</div>
			</Fade>
			<div className="site-table" direction="up">
				<Fade triggerOnce direction="up">
					<div className="each-table">
						<img className="site-image" src={github} />
						<a href="https://github.com/ChoiGyeongJu" className="site-url">
							{git}
						</a>
						<li className="site-desc">각종 소스 코드 저장소</li>
					</div>
				</Fade>
				<Fade triggerOnce direction="up">
					<div className="each-table">
						<img className="site-image" src={favicon} />
						<div className="site-title">Portfolio Site</div>
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
