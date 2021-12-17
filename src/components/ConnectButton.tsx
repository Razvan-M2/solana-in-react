import { FC } from 'react';
import { connectPhantom } from '../services/phantom';
import PhantomIcon from './PhantomIcon';

const ConnectButton: FC = () => {

    const connectEvent = () => {
        connectPhantom();
    }

    return (
        <button className='default-button' onClick={connectEvent}>
            <span>Connect Phantom!</span>
            <PhantomIcon height={"20px"} width={"20px"}/>
        </button>
    );
};

export default ConnectButton;