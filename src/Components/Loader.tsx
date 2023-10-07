import React, {FC} from 'react';

interface ILoaderProps{
    content?: any,
}



const Loader: FC<ILoaderProps> = ({content}) => {
    return (
        <div >
            <p>{content}</p>
            <p> <span className='loader'></span> </p>
            
        </div>
    );
};

export default Loader;