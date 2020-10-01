import React,{useState,useEffect} from 'react';
import { FaTimes } from 'react-icons/fa';

export default function BrowserMessage(props) {
	const [ isHidden, setIsHidden ] = useState(false);
	useEffect(() => {
		const allowedVersions={
			'chrome':76,
			'firefox':44,
			'opera':63,
			'edge':0,
		}
	let browser=props.browser.toLowerCase();
	let version=props.browserVersion;
	let needUpdate = browser in allowedVersions?allowedVersions[browser]>=version:true;
	setIsHidden(!needUpdate)
	}, [props.browser,props.browserVersion]);
	return (
		<div className={isHidden ? 'hide' : 'browser-message'}>
			<img src={`https://cdn1.iconfinder.com/data/icons/logotypes/32/${props.browser.toLowerCase()}-512.png`} alt="browser icon" width="32" height="32"/>
			<span>Vaš pretraživač vjerovatno neće najbolje učitati lekcije ili prikazivati spajanje harfova.
			Potrebno je da ažurirate postojeći ili  koristite drugi pretraživač. 
			<a href="/obavijest">Više informacija</a>
			</span>
			
			<div className="close" onClick={e=>setIsHidden(true)} >
				<FaTimes />
			</div>	
		</div>
	);
}
