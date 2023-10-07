import React, { FC } from 'react';
import { IServPK } from '../Interfaces/IServPK';

interface IKartochkaServerPkProps {
    server: IServPK,
    clickbackServer: () => void,
}


const KartochkaServeryPK: FC<IKartochkaServerPkProps> = ({ server, clickbackServer }) => {

    function clickbackServerPK(Event: React.MouseEvent<HTMLButtonElement>) {
        clickbackServer()
    }


    return (
        <div key={server.id} className='kartochkaServerPK'>
            <button onClick={Event => clickbackServerPK(Event)}>{'Вернутся на Серверы и ПК'}</button>
            <p>  <label> Название: </label> {server.nazvanie}</p>
            <p>  <label> Тип: </label> {server.tip} <label> Инвентарный номер: </label> {server.inventerNomer} </p>
            <p>  <label> Расположение: </label> {server.raspologenie}</p>
        </div>
    );
};

export default KartochkaServeryPK;