/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, Conponent } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ImageCarousel.scss';

import prevImage from '../../images/arrows/prevArrow.svg';

const ImageCarousel = () => {
	const images = [
		{
			id: 1,
			src: 'https://blog.kakaocdn.net/dn/LhjTv/btrBsuEWxKZ/QL88HW1O9Q8BrqiwlIBdu1/img.jpg',
			alt: 'pr1',
		},
		{
			id: 2,
			src: 'https://t1.daumcdn.net/cfile/tistory/9935CD355A818D6E1B',
			alt: 'pr2',
		},
		{
			id: 3,
			src: 'https://images.khan.co.kr/article/2022/03/24/l_2022032402001438000274241.jpg',
			alt: 'pr3',
		},
	];

	const carousel = useRef();
	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		pointOnHover: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,

		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	function NextArrow(props) {
		const { style, onClick } = props;
		return (
			<div onClick={onClick}>
				<img className="nextButton" src={prevImage} />
			</div>
		);
	}

	function PrevArrow(props) {
		const { style, onClick } = props;
		return (
			<div onClick={onClick}>
				<img className="prevButton" src={prevImage} style={{ transform: 'rotate(180deg)' }} />
			</div>
		);
	}

	return (
		<div className="image-slider">
			<Slider {...settings} ref={carousel}>
				{images.map(item => (
					<div key={item.id}>
						<img className="profile-image" src={item.src} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ImageCarousel;
