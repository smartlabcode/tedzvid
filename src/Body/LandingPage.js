import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	FaBookOpen,
	FaHeadphones,
	FaTable,
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
	FaPaperPlane
} from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import BrowserMessage from './BrowserMessage';
import { Ornament } from './Logo';
import { detect } from '../Helpers/BrowserDetect';

const FEATURES = [
	{ icon: <FaBookOpen />, tone: 'navy', title: 'Sva pravila', text: 'pregledno i sistematično' },
	{ icon: <FaVolumeUp />, tone: 'green', title: 'Praktične vježbe', text: 'za provjeru znanja' },
	{ icon: <FaGraduationCap />, tone: 'purple', title: 'Prilagođeno nastavi', text: 'idealno za mektebe i časove' },
	{ icon: <FaMobileAlt />, tone: 'teal', title: 'Dostupno svuda', text: 'na računaru, tabletu i telefonu' },
	{ icon: <FaSyncAlt />, tone: 'gold', title: 'Uči, vježbaj, ponavljaj', text: 'napreduj svaki dan' }
];

const BENEFITS = [
	{
		icon: <FaBookOpen />,
		tone: 'navy',
		title: 'Jasna objašnjenja',
		text: 'tedžvidskih pravila bez komplikovanih izraza'
	},
	{ icon: <FaHeadphones />, tone: 'green', title: 'Audio primjeri', text: 'poslušaj i odmah primijeni' },
	{
		icon: <FaPencilAlt />,
		tone: 'gold',
		title: 'Interaktivne vježbe',
		text: 'svaku riječ možeš preslušati klikom na nju'
	},
	{
		icon: <FaUsers />,
		tone: 'purple',
		title: 'Za sve generacije',
		text: 'koristan sadržaj za djecu, odrasle i nastavnike'
	},
	{
		icon: <FaMosque />,
		tone: 'teal',
		title: 'Pomoć u praksi',
		text: 'materijal koji olakšava učenje, podučavanje i ponavljanje'
	}
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
	const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);
	const [ showErrorMessage, setShowErrorMessage ] = useState(false);
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ message, setMessage ] = useState('');
	const timer = useRef(null);
	const [ browserVersion, setBrowserVersion ] = useState('');
	const [ browser, setBrowser ] = useState('');
	const location = useLocation();

	useEffect(() => {
		const [ b, v ] = detect().split(' ');
		setBrowser(b);
		setBrowserVersion(v);
		return () => clearTimeout(timer.current);
	}, []);

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
							<p className="eyebrow">Interaktivni priručnik za tedžvid</p>
							<h1 className="h-display">
								Uči <em>tedžvid</em>
							</h1>
							<p className="hero__sub">Jednostavno, interaktivno, korak po korak</p>
							<Ornament />
							<p className="hero__lead">
								<strong>Tedzvid.ba</strong> je moderna, interaktivna i elektronska verzija tedžvida autora
								mr. Sejida Strike – stvorena da pomogne početnicima, polaznicima mektepske nastave,
								mu'allimima i svim ljubiteljima Kur'ana.
							</p>
							<div className="hero__cta">
								<Link to="/lekcije" className="btn-t btn-t--gold">
									Počni učiti <FaArrowRight />
								</Link>
								<Link to="/#o-nama" className="btn-t btn-t--outline">
									Saznaj više
								</Link>
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
									<h2 className="mock__title">Tedžvid</h2>
									<div className="mock__subtitle">Interaktivni priručnik</div>
									<p className="mock__arabic" lang="ar">
										وَرَتِّلِ الْقُرْاٰنَ تَرْت۪يلًا
									</p>
								</div>
								<div className="mock__tiles">
									<Link to="/lekcije" className="mock__tile">
										<FaBookOpen /> Pravila
									</Link>
									<Link to="/lekcije" className="mock__tile">
										<FaHeadphones /> Audio
									</Link>
									<Link to="/lekcija1#tabela" className="mock__tile">
										<FaTable /> Tabele
									</Link>
									<Link to="/lekcija1#vjezba" className="mock__tile">
										<FaPencilAlt /> Vježbe
									</Link>
								</div>
							</div>
							<div className="hero__badge">
								Za djecu i odrasle, početnike i naprednije učače
							</div>
						</div>
					</div>
				</section>

				{/* ---------- ŠTA ĆETE PRONAĆI ---------- */}
				<section className="features">
					<div className="wrap">
						<p className="eyebrow">Sadržaj</p>
						<h2 className="h-section">Šta ćete pronaći na tedzvid.ba?</h2>
						<Ornament className="ornament--center" />
						<div className="features__grid">
							{FEATURES.map((f) => (
								<div className="feature" key={f.title}>
									<span className={'icon-circle icon-circle--' + f.tone}>{f.icon}</span>
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
							<p className="eyebrow">O nama</p>
							<h2 className="h-section">Tedžvid dostupan svima</h2>
							<Ornament light />
							<p>
								<strong>Tedzvid.ba</strong> je elektronska, interaktivna verzija printanog tedžvida autora
								mr. Sejida ef. Strike. Ovaj tedžvid ima za cilj da pomogne novim učačima Kur'ana, kako
								polaznicima mektepske nastave tako i odraslima, u lakšem savladavanju osnovnih tedžvidskih
								pravila.
							</p>
							<p>
								Jednostavan rječnik i izbjegavanje stručnih termina, koliko je to bilo moguće, čine ga
								pristupačnijim široj čitalačkoj populaciji.
							</p>
							<p>
								Posebnost stranice su <strong>interaktivni primjeri</strong> čiji audio zapis možete
								preslušati klikom na riječ. Nadamo se da će tedzvid.ba pomoći mu'allimima pri objašnjavanju
								tedžvidskih pravila, kako djeci u mektebu tako i odraslima nakon završetka sufare.
							</p>
							<blockquote className="quote">
								<p>„Najbolji među vama su oni koji uče Kur'an i podučavaju ga.“</p>
								<cite>Buharija</cite>
							</blockquote>
						</div>
						<div className="benefits">
							{BENEFITS.map((b) => (
								<div className="benefit" key={b.title}>
									<span className={'icon-circle icon-circle--sm icon-circle--' + b.tone}>{b.icon}</span>
									<div>
										<h5>{b.title}</h5>
										<p>{b.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ---------- PRINTANO IZDANJE ---------- */}
				<section className="print" id="printano">
					<div className="wrap print__grid">
						<div className="print__book">
							<img src={process.env.PUBLIC_URL + '/assets/svg/book.png'} alt="Printano izdanje tedžvida" />
						</div>
						<div className="print__text">
							<p className="eyebrow">Printano izdanje</p>
							<h2 className="h-section">Želim printano izdanje</h2>
							<Ornament />
							<p>
								Tedžvid – priručnik za pravilno učenje Kur'ana sa vježbama dostupan je i u štampanom obliku.
								Informacije vezane za printano izdanje možete dobiti kod autora:
							</p>
							<div className="chips">
								<span className="chip">
									<span className="icon-circle icon-circle--navy">
										<FaUser />
									</span>
									mr. Sejid ef. Strika
								</span>
								<a className="chip" href="mailto:sejidstrika@tedzvid.ba">
									<span className="icon-circle icon-circle--teal">
										<FaEnvelope />
									</span>
									sejidstrika@tedzvid.ba
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
							<p className="eyebrow">Kontakt</p>
							<h2 className="h-section">Pišite nam</h2>
							<Ornament className="ornament--center" />
							<p>
								Ukoliko imate sugestije, zapažanja ili impresije, budite slobodni da ih napišete kako bismo
								unaprijedili ovu stranicu.
							</p>

							<form className="contact__form" onSubmit={handleSubmit}>
								<input
									className="field"
									type="text"
									placeholder="Ime i prezime"
									name="ime i prezime"
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									required
								/>
								<input
									className="field"
									type="email"
									placeholder="Email"
									name="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									className="field span-2"
									type="tel"
									placeholder="Broj telefona (opcionalno)"
									name="broj telefona"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
								<textarea
									className="field span-2"
									placeholder="Unesite sadržaj poruke"
									name="poruka"
									required
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
								{showSuccessMessage && (
									<div className="notice notice--ok" role="status">
										<span>
											<strong>Uspješno</strong> ste poslali vašu poruku!
										</span>
										<button type="button" aria-label="Zatvori" onClick={() => setShowSuccessMessage(false)}>
											&times;
										</button>
									</div>
								)}
								{showErrorMessage && (
									<div className="notice notice--err" role="alert">
										<span>Došlo je do greške prilikom slanja poruke!</span>
										<button type="button" aria-label="Zatvori" onClick={() => setShowErrorMessage(false)}>
											&times;
										</button>
									</div>
								)}
								<button type="submit" className="btn-t btn-t--navy span-2 pageclip-form__submit">
									<FaPaperPlane /> Pošalji
								</button>
							</form>
						</div>
					</div>
				</section>
			</main>

			<SiteFooter />
			<BrowserMessage browser={browser} browserVersion={browserVersion} />
		</React.Fragment>
	);
}

export default LandingPage;
