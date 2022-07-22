/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';

import './NavBar.scss';
import hamburger from '../images/icons/hamburger.svg';

const NavBar = () => {
	function useWindowSize() {
		const [windowSize, setWindowSize] = useState({
			width: undefined,
			height: undefined,
		});

		useEffect(() => {
			function handleResize() {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}
			window.addEventListener('resize', handleResize);
			handleResize();
			return () => window.removeEventListener('resize', handleResize);
		}, []);

		return windowSize;
	}

	const size = useWindowSize();

	const ScrollTop = () => {
		setIstoggle(false);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const ScrollAbout = () => {
		setIstoggle(false);
		let position = 0;
		if (size.width > 1228) {
			position = 780;
		} else {
			position = 640;
		}

		window.scrollTo({
			top: position,
			behavior: 'smooth',
		});
	};

	const ScrollSkills = () => {
		setIstoggle(false);
		let position = 0;
		if (size.width < 513) {
			position = 1650;
		} else if (size.width < 614) {
			position = 1640;
		} else if (size.width < 878) {
			position = 1310;
		} else if (size.width > 877 && size.width < 1228) {
			position = 1200;
		} else if (size.width > 1228) {
			position = 1340;
		}

		window.scrollTo({
			top: position,
			behavior: 'smooth',
		});
	};

	const ScrollMysite = () => {
		setIstoggle(false);
		let position = 0;
		if (size.width < 513) {
			position = 2990;
		} else if (size.width < 614) {
			position = 2990;
		} else if (size.width < 878) {
			position = 2660;
		} else if (size.width > 877 && size.width < 1228) {
			position = 1840;
		} else if (size.width > 1228) {
			position = 1980;
		}

		window.scrollTo({
			top: position,
			behavior: 'smooth',
		});
	};

	const [Istoggle, setIstoggle] = useState(false);
	const handleToggle = () => {
		setIstoggle(!Istoggle);
	};

	return (
		<div className="Nav">
			<div className="Nav-left">
				<div className="Nav-title">XXX의 홈페이지입니다.</div>
			</div>
			<div className="Nav-center" />
			<div className="Nav-right">
				<div className="Nav-menu" onClick={ScrollTop}>
					Home
				</div>
				<div className="Nav-menu" onClick={ScrollAbout}>
					About
				</div>
				<div className="Nav-menu" onClick={ScrollSkills}>
					Skills
				</div>
				<div className="Nav-menu" onClick={ScrollMysite}>
					My Site
				</div>

				<div
					onClick={() => {
						handleToggle();
					}}
					className="hamburger-wrap"
				>
					<div className="hamburger" />
					<div className="hamburger" />
					<div className="hamburger" />
				</div>

				{/* <img
					onClick={() => {
						handleToggle();
					}}
					className="hamburger"
					src={hamburger}
				/> */}
			</div>
			{Istoggle ? (
				<div className="menu-list">
					<div className="menu-title" onClick={ScrollTop} style={{ marginTop: '1rem' }}>
						Home
					</div>
					<div className="menu-title" onClick={ScrollAbout}>
						About
					</div>
					<div className="menu-title" onClick={ScrollSkills}>
						Skills
					</div>
					<div className="menu-title" onClick={ScrollMysite} style={{ marginBottom: '1rem' }}>
						My Site
					</div>
				</div>
			) : null}
		</div>
	);
};

export default NavBar;
