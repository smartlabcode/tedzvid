import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeFirst from '../Body/HomeFirst';

function Home() {
	const [ otherpage, pageClick ] = useState(false);
	const [ isHidden, toggleIsHidden ] = useState(true);

	const pageClickHandler = () => {
		return pageClick(!otherpage);
	};
	const toggleIsHiddenHandler = () => {
		console.log('CLICK!');
		toggleIsHidden(!isHidden);
	};
	return (
		<React.Fragment>
			<div className="topNav">
				<div className="logoNavBox">
					<Link to="/">
						<img className="logoUrl" src={process.env.PUBLIC_URL + '/assets/svg/logoUrl.png'} />
					</Link>
				</div>
				<div className="nav">
					<ul>
						<Link to={'/'}>
							<img
								style={{ marginTop: '11px' }}
								src={process.env.PUBLIC_URL + '/assets/svg/ic_trending_flat_24px.png'}
							/>
							<li style={{ color: 'black' }}>NAZAD NA NASLOVNU</li>
						</Link>
					</ul>
				</div>
			</div>
			<div className="topMobileNav">
				<img
					className="hamburger"
					src={process.env.PUBLIC_URL + '/assets/svg/hamburger.svg'}
					onClick={toggleIsHiddenHandler}
				/>

				<Link to="/">
					<img className="mobileLogo" src={process.env.PUBLIC_URL + '/assets/svg/mobileLogo.png'} />
				</Link>
				<div>
					<Link to={'/lekcije'}>
						<svg
							className="mobNavSearch"
							xmlns="http://www.w3.org/2000/svg"
							width="17.49"
							height="17.49"
							viewBox="0 0 17.49 17.49"
						>
							<path
								id="ic_search_24px"
								d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"
								transform="translate(-3 -3)"
								fill="#fce3aa"
							/>
						</svg>
					</Link>
				</div>
				<div className={isHidden ? 'hide' : 'fullMenu'}>
					<h3 className="closeBTN" onClick={toggleIsHiddenHandler}>
						X
					</h3>
					<center>
						<ul>
							<li className="selectedBtn">NASLOVNA</li>
							<li>IMPRESUM</li>
							<li>KONTAKT</li>
							<li>LEKCIJE</li>
						</ul>
					</center>
				</div>
			</div>
			<Container>{<HomeFirst start={0} stop={23} />}</Container>

			<br />
			<br />
		</React.Fragment>
	);
}

export default Home;
