import React from 'react';
import myReactStringReplace from '../Helpers/Streplace';

function Arabic (props) {
    const arabicTxt = props.children;

    const replacedTxt = myReactStringReplace(arabicTxt, props.arabic, (match, i) => (
          <span key={'rp' + i} className='oznaceno'>{'\u200d'+match}</span>
        // <span key={'rp' + i} className='oznaceno'>{match}</span>
         ));
           
        replacedTxt[0]+='\u200d'

    return <span dir='rtl'
                lang='ar'
                className={ props.bold ? "arap-red" : "arapski" }
            >

        { props.arabic ? replacedTxt : props.children }

    </span>
}

export default Arabic;