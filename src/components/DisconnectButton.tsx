import { FC } from 'react';
import { disconnectPhantom } from '../services/phantom';
import PhantomIcon from './PhantomIcon';

const DisconnectButton: FC = () => {

    const disconnectEvent = () => {
        disconnectPhantom()
    }

    return (
        <button className='danger-button' onClick={disconnectEvent}>
            <span>Disconnect Phantom!</span>
            <PhantomIcon height={"20px"} width={"20px"}/>
        </button>
    );
};

export default DisconnectButton;