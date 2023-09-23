import React, { useState } from 'react';
import { AsideSpisok } from '../DAL/AsideSpisok';

const Aside = () => {

    const [value, setValue] = useState<string>('none')

    function clickSpisok(Event: React.MouseEvent<HTMLButtonElement>) {
        value === 'none' ?
            setValue('') : setValue('none')
    }

    return (
        <aside>
            {AsideSpisok.map(item =>
                <ul key={item.id}> {item.zagolovok} <button onClick={Event => clickSpisok(Event)}>{'^'}</button>
                    {item.kategoriya.map(i => <li style={{ display: value }} key={i.id}>  {i.nazvanie} </li>)}
                </ul>)}
        </aside>
    );
};

export default Aside;