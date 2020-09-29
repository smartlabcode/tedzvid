import React,{useState} from 'react';
import { FaTimes } from 'react-icons/fa';

export default function BrowserMessage(props) {
	const [ isHidden, setIsHidden ] = useState(false);

	return (
		<div className={isHidden ? 'hide' : 'browser-message'}>
			<img src="https://www.iconfinder.com/data/icons/logotypes/32/chrome-512.png" alt="browser icon"/>
			<span>We use cookies to provide you the best possible experience. But don't panic - we won't share any of your data. You can find more informations about our cookies <a href="/">here</a>.
			Browser:{props.browser} {' '}
			Version:{props.browserVersion} {' '}
			OS:{props.OS} {' '}
			</span>
			
			<div className="close" onClick={e=>setIsHidden(true)} >
				<FaTimes />
			</div>	
		</div>
	);
}
