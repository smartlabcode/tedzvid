import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import Logo from './Logo';
import { useUI } from '../i18n/ui';

export const APP_LINKS = {
	android: 'https://play.google.com/store/apps/details?id=com.tedzvidba.app',
	ios: 'https://apps.apple.com/rs/app/tedzvid-ba/id1561588495'
};

export default function SiteFooter() {
	const ui = useUI();
	const year = new Date().getFullYear();
	return (
		<footer className="site-footer">
			<div className="wrap">
				<div className="site-footer__cta">
					<p className="eyebrow">{ui.footVisit}</p>
					<a className="site-footer__url" href="https://www.tedzvid.ba">
						www.tedzvid.ba
					</a>
					<p>{ui.footVisitText}</p>
				</div>

				<div className="site-footer__cols">
					<div className="site-footer__about">
						<Logo light />
						<p>{ui.footAbout}</p>
						<div className="store-links store-links--light">
							<a href={APP_LINKS.android} target="_blank" rel="noopener noreferrer">
								<FaGooglePlay /> Google Play
							</a>
							<a href={APP_LINKS.ios} target="_blank" rel="noopener noreferrer">
								<FaApple /> App Store
							</a>
						</div>
					</div>
					<div>
						<h6>{ui.footNav}</h6>
						<ul>
							<li>
								<Link to="/">{ui.navHome}</Link>
							</li>
							<li>
								<Link to="/lekcije">{ui.navLekcije}</Link>
							</li>
							<li>
								<Link to="/#o-nama">{ui.navONama}</Link>
							</li>
							<li>
								<Link to="/#printano">{ui.navPrintano}</Link>
							</li>
							<li>
								<Link to="/#kontakt">{ui.navKontakt}</Link>
							</li>
						</ul>
					</div>
					<div>
						<h6>{ui.footPartners}</h6>
						<div className="partners">
							<a className="partner" href="https://imtec.ba/" target="_blank" rel="noopener noreferrer">
								<img src={process.env.PUBLIC_URL + '/assets/svg/imtec_logo.png'} alt="Imtec" />
							</a>
							<a className="partner" href="https://smartlab.ba/" target="_blank" rel="noopener noreferrer">
								<img src={process.env.PUBLIC_URL + '/assets/svg/smartlab_logo.svg'} alt="SmartLab" />
							</a>
						</div>
					</div>
				</div>

				<div className="site-footer__bottom">
					<span>
						© {year} tedzvid.ba · {ui.footAuthor}
					</span>
					<span>
						{ui.quoteText} ({ui.quoteCite})
					</span>
				</div>
			</div>
		</footer>
	);
}
