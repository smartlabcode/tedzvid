import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	FaBookOpen,
	FaHeadphones,
	FaPencilAlt,
	FaVolumeUp,
	FaGraduationCap,
	FaMobileAlt,
	FaSyncAlt,
	FaUsers,
	FaMosque,
	FaUser,
	FaEnvelope,
	FaViber,
	FaArrowRight,
	FaPaperPlane,
	FaPlayCircle,
	FaGooglePlay,
	FaApple
} from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import { Ornament, LOGO_SRC } from './Logo';
import { VideoEmbed } from './LessonVideo';
import videos from '../Data/videos.json';
import { APP_LINKS } from './SiteFooter';
import { useUI } from '../i18n/ui';

/* Ikone i boje su iste za sve jezike; naslovi i opisi dolaze iz i18n/ui.js */
const FEATURE_STYLE = [
	{ icon: <FaBookOpen />, tone: 'navy' },
	{ icon: <FaVolumeUp />, tone: 'green' },
	{ icon: <FaGraduationCap />, tone: 'purple' },
	{ icon: <FaMobileAlt />, tone: 'teal' },
	{ icon: <FaSyncAlt />, tone: 'gold' }
];

const BENEFIT_STYLE = [
	{ icon: <FaBookOpen />, tone: 'navy' },
	{ icon: <FaHeadphones />, tone: 'green' },
	{ icon: <FaPlayCircle />, tone: 'gold' },
	{ icon: <FaUsers />, tone: 'purple' },
	{ icon: <FaMosque />, tone: 'teal' }
];

function scrollToHash(hash) {
	const id = (hash || '').replace('#', '');
	if (!id) return;
	const el = document.getElementById(id);
	if (el) {
		const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
		window.scrollTo({ top, behavior: 'smooth' });
	}
}

function LandingPage() {
	const ui = useUI();
	const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);
	const [ showErrorMessage, setShowErrorMessage ] = useState(false);
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ message, setMessage ] = useState('');
	const timer = useRef(null);
	const location = useLocation();

	useEffect(() => () => clearTimeout(timer.current), []);

	useEffect(
		() => {
			if (location.hash) {
				// sačekaj da se sadržaj iscrta
				const t = setTimeout(() => scrollToHash(location.hash), 60);
				return () => clearTimeout(t);
			}
			window.scrollTo(0, 0);
		},
		[ location.hash ]
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = { 'Ime i Prezime': fullName, Email: email, 'Broj Telefona': phone, Poruka: message };
		if (!window.Pageclip) {
			setShowErrorMessage(true);
			timer.current = setTimeout(() => setShowErrorMessage(false), 4000);
			return;
		}
		window.Pageclip.send('wRH1bp6IBZe5paTzYnZGFFEt4NhsZmh9', 'default', data, function(error) {
			if (!error) {
				setShowSuccessMessage(true);
				timer.current = setTimeout(() => setShowSuccessMessage(false), 4000);
			} else {
				setShowErrorMessage(true);
				timer.current = setTimeout(() => setShowErrorMessage(false), 4000);
			}
			setFullName('');
			setEmail('');
			setPhone('');
			setMessage('');
		});
	};

	return (
		<React.Fragment>
			<SiteNav active="home" />

			<main>
				{/* ---------- HERO ---------- */}
				<section className="hero">
					<div className="hero__glow" aria-hidden="true" />
					<div className="wrap hero__grid">
						<div className="hero__text">
							{/* na mobitelu: naslovni blok → mockup → ornament → ostatak teksta (display: contents + order) */}
							<div className="hero__head">
								<p className="eyebrow">{ui.heroEyebrow}</p>
								<h1 className="h-display">{ui.heroTitle}</h1>
								<p className="hero__sub">{ui.heroSub}</p>
							</div>
							<Ornament />
							<div className="hero__body">
								<p className="hero__lead">{ui.heroLead}</p>
								<div className="hero__cta">
									<Link to="/lekcije" className="btn-t btn-t--gold">
										{ui.heroCtaStart} <FaArrowRight />
									</Link>
									<Link to="/#o-nama" className="btn-t btn-t--outline">
										{ui.heroCtaMore}
									</Link>
								</div>
								<div className="store-links">
									<span className="store-links__label">{ui.storeIntro}</span>
									<a className="store-badge" href={APP_LINKS.android} target="_blank" rel="noopener noreferrer">
										<FaGooglePlay />
										<span>
											<small>{ui.storeGet}</small>
											<b>Google Play</b>
										</span>
									</a>
									<a className="store-badge" href={APP_LINKS.ios} target="_blank" rel="noopener noreferrer">
										<FaApple />
										<span>
											<small>{ui.storeGet}</small>
											<b>App Store</b>
										</span>
									</a>
								</div>
							</div>
						</div>

						<div className="hero__visual">
							<div className="mock">
								<div className="mock__bar" aria-hidden="true">
									<i />
									<i />
									<i />
								</div>
								<div className="mock__screen">
									<img className="mock__logo" src={LOGO_SRC} alt="" aria-hidden="true" />
									<h2 className="mock__title">{ui.mockTitle}</h2>
									<div className="mock__subtitle">{ui.mockSubtitle}</div>
									<p className="mock__arabic" lang="ar">
										وَرَتِّلِ الْقُرْاٰنَ تَرْت۪يلًا
									</p>
								</div>
								<div className="mock__tiles">
									<Link to="/lekcije" className="mock__tile">
										<FaBookOpen /> {ui.mockRules}
									</Link>
									<Link to="/lekcije" className="mock__tile">
										<FaHeadphones /> {ui.mockAudio}
									</Link>
									<Link to="/lekcija1#video" className="mock__tile">
										<FaPlayCircle /> {ui.mockVideo}
									</Link>
									<Link to="/lekcija1#vjezba" className="mock__tile">
										<FaPencilAlt /> {ui.mockVjezbe}
									</Link>
								</div>
							</div>
							<div className="hero__badge">{ui.heroBadge}</div>
						</div>
					</div>
				</section>

				{/* ---------- ŠTA ĆETE PRONAĆI ---------- */}
				<section className="features">
					<div className="wrap">
						<p className="eyebrow">{ui.featEyebrow}</p>
						<h2 className="h-section">{ui.featTitle}</h2>
						<Ornament className="ornament--center" />
						<div className="features__grid">
							{ui.features.map((f, i) => (
								<div className="feature" key={f.title}>
									<span className={'icon-circle icon-circle--' + FEATURE_STYLE[i].tone}>
										{FEATURE_STYLE[i].icon}
									</span>
									<h4>{f.title}</h4>
									<p>{f.text}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ---------- O NAMA ---------- */}
				<section className="about" id="o-nama">
					<div className="wrap about__grid">
						<div>
							<p className="eyebrow">{ui.aboutEyebrow}</p>
							<h2 className="h-section">{ui.aboutTitle}</h2>
							<Ornament light />
							<p>{ui.aboutP1}</p>
							<p>{ui.aboutP2}</p>
							<p>{ui.aboutP3}</p>
							<blockquote className="quote">
								<p>{ui.quoteText}</p>
								<cite>{ui.quoteCite}</cite>
							</blockquote>
						</div>
						<div className="benefits">
							{ui.benefits.map((b, i) => (
								<div className="benefit" key={b.title}>
									<span className={'icon-circle icon-circle--sm icon-circle--' + BENEFIT_STYLE[i].tone}>
										{BENEFIT_STYLE[i].icon}
									</span>
									<div>
										<h5>{b.title}</h5>
										<p>{b.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="wrap about__video">
						<p className="eyebrow">{ui.aboutVideoEyebrow}</p>
						<h3>{ui.aboutVideoTitle}</h3>
						<VideoEmbed video={videos.about} title={ui.aboutVideoAlt} />
					</div>
				</section>

				{/* ---------- PRINTANO IZDANJE ---------- */}
				<section className="print" id="printano">
					<div className="wrap print__grid">
						<div className="print__book">
							<img src={process.env.PUBLIC_URL + '/assets/svg/book.png'} alt={ui.printAlt} />
						</div>
						<div className="print__text">
							<p className="eyebrow">{ui.printEyebrow}</p>
							<h2 className="h-section">{ui.printTitle}</h2>
							<Ornament />
							<p>{ui.printText}</p>
							<div className="chips">
								<span className="chip">
									<span className="icon-circle icon-circle--navy">
										<FaUser />
									</span>
									{ui.author}
								</span>
								<a className="chip" href="mailto:tedzvidba@gmail.com">
									<span className="icon-circle icon-circle--teal">
										<FaEnvelope />
									</span>
									tedzvidba@gmail.com
								</a>
								<a className="chip" href="viber://chat?number=0038761617606">
									<span className="icon-circle icon-circle--purple">
										<FaViber />
									</span>
									+387 61 617 606
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* ---------- KONTAKT ---------- */}
				<section className="contact" id="kontakt">
					<div className="wrap">
						<div className="contact__card">
							<p className="eyebrow">{ui.contactEyebrow}</p>
							<h2 className="h-section">{ui.contactTitle}</h2>
							<Ornament className="ornament--center" />
							<p>{ui.contactText}</p>

							<form className="contact__form" onSubmit={handleSubmit}>
								<input
									className="field"
									type="text"
									placeholder={ui.fieldName}
									name="ime i prezime"
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									required
								/>
								<input
									className="field"
									type="email"
									placeholder={ui.fieldEmail}
									name="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									className="field span-2"
									type="tel"
									placeholder={ui.fieldPhone}
									name="broj telefona"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
								<textarea
									className="field span-2"
									placeholder={ui.fieldMessage}
									name="poruka"
									required
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
								{showSuccessMessage && (
									<div className="notice notice--ok" role="status">
										<span>{ui.formOk}</span>
										<button type="button" aria-label={ui.formClose} onClick={() => setShowSuccessMessage(false)}>
											&times;
										</button>
									</div>
								)}
								{showErrorMessage && (
									<div className="notice notice--err" role="alert">
										<span>{ui.formErr}</span>
										<button type="button" aria-label={ui.formClose} onClick={() => setShowErrorMessage(false)}>
											&times;
										</button>
									</div>
								)}
								<button type="submit" className="btn-t btn-t--navy span-2 pageclip-form__submit">
									<FaPaperPlane /> {ui.formSend}
								</button>
							</form>
						</div>
					</div>
				</section>
			</main>

			<SiteFooter />
		</React.Fragment>
	);
}

export default LandingPage;
