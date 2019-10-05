import React from 'react';
import Player from '../Player/Player';
import Arabic from '../Letters/Arabic';

function Vjezbe(data, mainrow, rows) {
    const VjezbeRow = (dat, rowmain, rows) => {
        const data =  dat[rowmain][rows];
        let ar = [];
        var specialCharacters = ['؛',';', "-"];
        let myClassName ='';
        if(!!data[0].after && specialCharacters.includes(data[0].after.trim())){
            myClassName='after'
        }
        data.forEach((el, ind) => {
            ar.push(<Arabic
                arabic={el.highlight}
                key={'a' + el.id}
            >{el.word}</Arabic>);
        });

        return <span key={'key' + data[0].id}>
            <Player url={data[0].url} key={'p' + data[0].id}>
                { ar }
              </Player> <span className={myClassName}> {data[0].after === 'break' ? <br/> : data[0].after}</span>
        </span>;
    }

    return VjezbeRow(data, mainrow, rows);
}

export default Vjezbe;