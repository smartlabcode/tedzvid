import React, { useState } from 'react';
import Player from '../Player/Player';
import Arabic from '../Letters/Arabic';

function PRow(data, rowname) {
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);
    
    const PlayerRow = (datarr, rowname) => {
        var specialCharacters = ['؛',';', "-"];
        const row = datarr[rowname].map((dat) => {
            let myClassName ='';
            if(!!dat.after && specialCharacters.includes(dat.after.trim())){
                myClassName='after'
            }
        return <span key={'key' + dat.id} onClick={toggle}>
            <Player url={dat.url} key={'p' + dat.id} playr={playing ? true : false}>
                <Arabic
                arabic={dat.highlight}
                key={'a' + dat.id}
                >{dat.word}</Arabic>
            </Player> <span className={myClassName}> {dat.after === 'break' ? <br/> : dat.after}</span>
        </span>
        });
    
        return row;
    };

    return PlayerRow(data, rowname);
}

export default PRow;