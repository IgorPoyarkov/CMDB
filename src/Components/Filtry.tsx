import React, { FC, useState } from 'react';
import { ServeryDal } from '../DAL/ServeryDAL';



interface IFiltryProps {
    filterTeg: (teg: string) => void
    filterTip: (tip: string) => void
}


const Filtry: FC<IFiltryProps> = ({ filterTeg, filterTip }) => {

    const getUnique = (arr: any[]) => {
        return arr.filter((el, ind) => ind === arr.indexOf(el));
    };

    const [colol, setColol] = useState(getUnique(ServeryDal.map(i => i.teg))[0])

    function changOptionTeg(Event: React.FormEvent<HTMLSelectElement>) {
        setColol(String(Event.currentTarget.value));
        filterTeg(String(Event.currentTarget.value))
    }

    function changOptionTip(Event: React.FormEvent<HTMLSelectElement>) {
        filterTip(String(Event.currentTarget.value))
    }

    return (
        <div className='filtry'>
            <p> <label> {'Фильтр по Тегу: '}
                <select onChange={Event => changOptionTeg(Event)} title='teg' style={{ backgroundColor: colol }}>
                    {getUnique(ServeryDal.map(i => i.teg)).map(teg => <option value={teg} style={{ backgroundColor: teg }}> {teg}</option>)}
                </select></label></p>
            <p><label> {'Фильтр по Типу: '}
                <select onChange={Event => changOptionTip(Event)} title='tip'>
                    {getUnique(ServeryDal.map(i => i.tip)).map(tip => <option value={tip} > {tip}</option>)}
                </select></label></p>

        </div>
    );
};

export default Filtry;