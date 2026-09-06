import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function SiteFooter() {
	const year = new Date().getFullYear();
	return (
		<footer className="site-footer">
			<div className="wrap">
				<div className="site-footer__cta">
					<p className="eyebrow">Posjeti</p>
					<a className="site-footer__url" href="https://www.tedzvid.ba">
						www.tedzvid.ba
					</a>
					<p>i započni svoje putovanje ka pravilnijem učenju Allahove knjige.</p>
				</div>

				<div className="site-footer__cols">
					<div className="site-footer__about">
						<Logo light />
						<p>
							Interaktivni priručnik za učenje tedžvidskih pravila – jednostavno, korak po korak, za djecu i
							odrasle, početnike i naprednije učače.
						</p>
					</div>
					<div>
						<h6>Navigacija</h6>
						<ul>
							<li>
								<Link to="/">Početna</Link>
							</li>
							<li>
								<Link to="/lekcije">Lekcije</Link>
							</li>
							<li>
								<Link to="/#o-nama">O nama</Link>
							</li>
							<li>
								<Link to="/#printano">Printano izdanje</Link>
							</li>
							<li>
								<Link to="/#kontakt">Kontakt</Link>
							</li>
						</ul>
					</div>
					<div>
						<h6>Prijatelji projekta</h6>
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
					<span>© {year} tedzvid.ba · Autor: mr. Sejid ef. Strika</span>
					<span>„Najbolji među vama su oni koji uče Kur'an i podučavaju ga.“ (Buharija)</span>
				</div>
			</div>
		</footer>
	);
}
