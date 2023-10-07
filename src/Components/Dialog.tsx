import React, { FC } from 'react';

interface IDialogProps {
    component: any,
}


const Dialog: FC<IDialogProps> = ({ component }) => {
    return (
        <div className='dialog'>
            {component}
        </div>
    );
};

export default Dialog;