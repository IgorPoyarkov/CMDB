import React, { useState,  } from 'react';
import { IservPK, } from '../Interfaces/IservPK';
import { ServeryDal } from '../DAL/ServeryDAL';
import Dialog from './Dialog';
import Filtry from './Filtry';



const Main = () => {

    const [serverCount, setServerCount] = useState('')
    const [nomerStranici, setNomerStranici] = useState(1)

    function startStranicy(server: IservPK[], stranica: number): IservPK[] {
        return server.filter((item, index) => index < (stranica) * 10).filter((it, ind) => ind >= (stranica - 1) * 10)
    }
    const [servePK, setServePK] = useState<IservPK[]>(startStranicy(ServeryDal, nomerStranici))

    const [filtry, setFiltry] = useState<any>(undefined)


    function filterTeg(teg: string) {
        setServePK(ServeryDal.filter((tegs) => tegs.teg === teg).filter((item, index) => index < 10).filter((it, ind) => ind >= 0))
    }

    function filterTip(tip: string) {
        setServePK(ServeryDal.filter((tips) => tips.tip === tip).filter((item, index) => index < 10).filter((it, ind) => ind >= 0))
    }

    function clickFilyry() {
        filtry === undefined ?
            setFiltry(<Dialog component={<Filtry filterTeg={filterTeg} filterTip={filterTip} />} />) : setFiltry(undefined)
    }




    function changePoisk(Event: React.ChangeEvent<HTMLInputElement>) {
        setServerCount(Event.target.value)
    }

    function clickPoisk() {
        serverCount !== '' ?
            setServePK((ServeryDal).filter((item) => item.nazvanie === serverCount)) :
            setServePK(startStranicy(ServeryDal, nomerStranici))
    }



    function paginaciya(server: IservPK[]): number[] {
        let paginaciya: number[] = []
        for (let index = 0; index < server.length / 10; index++) {
            paginaciya[index] = index + 1;
        }
        return (paginaciya)
    }


    function paginaciyaClick(Event: React.MouseEvent<HTMLButtonElement>) {
        setNomerStranici(Number(Event.currentTarget.value))
        setServePK(startStranicy(ServeryDal, Number(Event.currentTarget.value)))

    }


    return (
        <main key={'main'}>
            <div className='schapka'>
                <div> <p> {'Серверы и ПК'} </p> <p> {'Страница: '} {nomerStranici} {' из '} {paginaciya(ServeryDal).length}</p>
                    <p> {'Количество элементов: '} {ServeryDal.length}</p> </div>
                <div><p>
                    <input
                        placeholder='поиск по названию'
                        onChange={Event => changePoisk(Event)}
                        value={serverCount}
                        type='search' />
                    <button onClick={clickPoisk}>{'Найти по названию'}</button></p></div>

                <div> <button onClick={clickFilyry}> {'Фильры'}</button> {filtry}</div>
            </div>
            <div>
                <table>
                    <caption></caption>
                    <tr>
                        <th>Название</th>
                        <th>Тип</th>
                        <th>Расположение</th>
                        <th>Инв.номер</th>
                        <th>Орг.единица</th>
                        <th>Теги</th>
                        <th>Дата создания</th>
                        <th>Дата обновлнения</th>
                        <th>Дата аудита</th>
                    </tr>
                    {servePK.map(item => <tr key={item.id}>
                        <td>  {item.nazvanie}</td>
                        <td>  {item.tip}</td>
                        <td>  {item.raspologenie}</td>
                        <td>  {item.orgEd}</td>
                        <td>  {item.inventerNomer}</td>
                        <td style={{ backgroundColor: item.teg }}>  {item.teg}</td>
                        <td>  {item.dataSozdaniya}</td>
                        <td>  {item.dataObnovleniya}</td>
                        <td>  {item.dataAudita} </td> </tr>)}
                </table>
            </div>
            <div className='paginaciya'> {paginaciya(ServeryDal).map(st => <button onClick={Event => paginaciyaClick(Event)} value={st}>{st} </button>)} </div>
        </main>
    );
};

export default Main;