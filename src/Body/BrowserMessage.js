import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export default function BrowserMessage(props) {
	const [ isHidden, setIsHidden ] = useState(true);
	useEffect(
		() => {
			const allowedVersions = {
				chrome: 76,
				firefox: 44,
				opera: 63,
				edge: 0
			};
			const browser = (props.browser || '').toLowerCase();
			const version = props.browserVersion;
			if (!browser) return;
			const needUpdate = browser in allowedVersions ? allowedVersions[browser] >= version : true;
			setIsHidden(!needUpdate);
		},
		[ props.browser, props.browserVersion ]
	);
	if (isHidden) return null;
	return (
		<div className="browser-message" role="status">
			<img
				src={`https://cdn1.iconfinder.com/data/icons/logotypes/32/${(props.browser || '').toLowerCase()}-512.png`}
				alt=""
				width="40"
				height="40"
			/>
			<span>
				Vaš pretraživač vjerovatno neće najbolje učitati lekcije ili prikazivati spajanje harfova. Potrebno je da
				ažurirate postojeći ili koristite drugi pretraživač. <Link to="/obavijest">Više informacija</Link>
			</span>
			<div className="close" onClick={() => setIsHidden(true)} role="button" aria-label="Zatvori">
				<FaTimes />
			</div>
		</div>
	);
}
