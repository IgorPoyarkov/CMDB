import { ISpisok } from "../Interfaces/ISpisok";

export const AsideSpisok: ISpisok[] = [
    {
        id: 1,
        zagolovok: 'Финансы',
        kategoriya: [
            {
                id: 1,
                nazvanie: 'Инвестиции',
                dostup: true,
            },
            {
                id: 2,
                nazvanie: 'Вклады',
                dostup: true,
            },
        ]
    },

    {
        id: 2,
        zagolovok: 'Компьютеры',
        kategoriya: [
            {
            id: 1,
            nazvanie: 'Серверы и ПК',
            dostup: true,
        },
        {
            id: 2,
            nazvanie: 'Моноблок',
            dostup: true,
        },
        {
            id: 3,
            nazvanie: 'Ноутбук',
            dostup: true,
        },
        

        {
            id: 4,
            nazvanie: 'Персональный компьютер',
            dostup: true,
        },
    ]
    },

    {
        id: 3,
        zagolovok: 'Бытовая техника',
        kategoriya: [{
            id: 1,
            nazvanie: 'Телевизор',
            dostup: true,
        },]
    },

]