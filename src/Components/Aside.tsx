import React, { FC, useState } from 'react';
import { AsideSpisok } from '../DAL/AsideSpisok';
import { contentINmain } from '../App';


interface IAsideProps {
    contentMain: (content: contentINmain) => void,
}


const Aside: FC<IAsideProps> = ({ contentMain }) => {

    const [value, setValue] = useState(0)

    function clickSpisok(Event: React.MouseEvent<HTMLSpanElement>, id: number) {
        id !== value ?
            setValue(id) : setValue(0)
    }

    type sostoyanie = {
        strelka: string,
        displ: string,

    }

    function asideSostoyanie(state: number, id: number): sostoyanie {
        let sost: sostoyanie = { strelka: '', displ: '' }

        state === id ? sost = { strelka: '▼', displ: '' } : sost = { strelka: '▲', displ: 'none' }
        return sost
    }

    function clickContentMain(content: contentINmain) {
        contentMain(content)
    }


    return (
        <aside>
            {AsideSpisok.map(item =>
                <ul key={item.id}  >  {item.zagolovok}
                    <span onClick={Event => clickSpisok(Event, item.id)}>  {asideSostoyanie(value, item.id).strelka} </span>
                    {item.kategoriya.map(i =>
                        <li
                            key={i.id}
                            style={{ display: asideSostoyanie(value, item.id).displ }}
                            onClick={Event => clickContentMain({ idSpisok: item.id, idKategorii: i.id })}
                        >
                            {i.nazvanie}
                        </li>
                    )}
                </ul>)}
        </aside>
    );
};

export default Aside;