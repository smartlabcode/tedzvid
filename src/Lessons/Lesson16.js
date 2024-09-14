import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson16_bs from '../Components/Lesson16_bs';
import Lesson16_en from '../Components/Lesson16_en';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';
import { scrollToHash } from "./Lesson1";


function L16() {
	const { i18n } = useTranslation();
	const [show, setShow] = React.useState(false);
	const [showL, setShowL] = React.useState(false);

	const handleCloseL = () => setShowL(false);
	const handleShowL = () => setShowL(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
		<React.Fragment>
			<>
			{
				i18n.language == 'bs' ? <Lesson16_bs/>:<Lesson16_en/>
			}
			</>
		</React.Fragment>
	);
}

export default L16;
