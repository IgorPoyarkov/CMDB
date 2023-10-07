import React, { FC } from 'react';

interface IMainProps {
    content: any,
}


const Main: FC<IMainProps> = ({ content }) => {
    return (
        <main >
            {content}
        </main>

    );
};

export default Main;