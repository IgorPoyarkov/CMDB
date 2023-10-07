import React, { useState } from 'react';
import { ServeryDal } from '../DAL/ServeryDAL';
import { IServPK } from '../Interfaces/IServPK';
import Dialog from './Dialog';
import Filtry from './Filtry';
import KartochkaServeryPK from './KartochkaServeryPK';

const ServeryPK = () => {

    const [serverCount, setServerCount] = useState('')
    const [nomerStranici, setNomerStranici] = useState(1)
    const [displayMain, setDisplayMain] = useState({ disp: 'display', otdelPK: <></> })
    const [servePK, setServePK] = useState<IServPK[]>(startStranicy(ServeryDal, nomerStranici))
    const [filtry, setFiltry] = useState<any>(undefined)


    function startStranicy(server: IServPK[], stranica: number): IServPK[] {
        return server.filter((item, index) => index < (stranica) * 10).filter((it, ind) => ind >= (stranica - 1) * 10)
    }

    function filterTeg(teg: string) {
        setServePK(ServeryDal.filter((tegs) => tegs.teg === teg).filter((item, index) => index < 10).filter((it, ind) => ind >= 0))
    }

    function filterTip(tip: string) {
        setServePK(ServeryDal.filter((tips) => tips.tip === tip).filter((item, index) => index < 10).filter((it, ind) => ind >= 0))
    }

    function clickFilyry() {
        filtry === undefined ?
            setFiltry(<Dialog component={<Filtry filterTeg={filterTeg} filterTip={filterTip} />} />) :
            setFiltry(undefined)
    }


    function myFilter(str: string) {
        let finish: IServPK[] = ServeryDal

        for (let index = 0; index < str.length; index++) {
            finish = finish.filter((fil) => fil.nazvanie[index] === str[index])
        }
        return finish
    }


    function changePoisk(Event: React.ChangeEvent<HTMLInputElement>) {
        setServerCount(Event.target.value)
        setServePK(myFilter(Event.target.value))
    }


    function clickPoisk() {
        serverCount !== '' ?
            setServePK((ServeryDal).filter((item) => item.nazvanie === serverCount)) :
            setServePK(startStranicy(ServeryDal, nomerStranici))
    }


    function paginaciya(server: IServPK[]): number[] {
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


    function clickbackServer() {
        setDisplayMain({
            disp: 'display', otdelPK: <ServeryPK />
        })
    }

    function clickStroka(Event: React.MouseEvent<HTMLTableRowElement>, id: number) {
        setDisplayMain({
            disp: 'none',
            otdelPK: <Dialog component={<KartochkaServeryPK
                clickbackServer={clickbackServer}
                server={servePK.filter((i) => i.id === id)[0]} />
            } />
        })
    }



    return (
        <>{displayMain.otdelPK}
            <div style={{ display: displayMain.disp }} key={'servePK'}>
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
                <div >
                    <table >
                        <tbody>
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
                        </tbody>
                        <tbody>
                            {servePK.map(item => <tr key={item.id} onClick={Event => clickStroka(Event, item.id)}  >
                                <td>  {item.nazvanie}</td>
                                <td>  {item.tip}</td>
                                <td>  {item.raspologenie}</td>
                                <td>  {item.orgEd}</td>
                                <td>  {item.inventerNomer}</td>
                                <td style={{ backgroundColor: item.teg }}>  {item.teg}</td>
                                <td>  {item.dataSozdaniya}</td>
                                <td>  {item.dataObnovleniya}</td>
                                <td>  {item.dataAudita} </td></tr>)}
                        </tbody>
                    </table>
                </div>
                <div className='paginaciya'> {paginaciya(ServeryDal).map(st => <button onClick={Event => paginaciyaClick(Event)} value={st}>{st} </button>)} </div>
            </div>
        </>
    );
};

export default ServeryPK;