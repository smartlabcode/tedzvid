import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson7_bs from '../Components/Lesson7_bs';
import Lesson7_en from '../Components/Lesson7_en';

// Other
import '../App.scss';
import { scrollToHash } from "./Lesson1";


function L7() {
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
				i18n.language == 'bs' ? <Lesson7_bs/>:<Lesson7_en/>
			}
			</>
		</React.Fragment>
	);
}

export default L7;
