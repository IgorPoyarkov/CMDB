interface IKategoriya {
    id: number,
    nazvanie: string,
    dostup?: boolean,
}


export interface ISpisok {
    id: number,
    zagolovok: string,
    kategoriya: IKategoriya[],
}