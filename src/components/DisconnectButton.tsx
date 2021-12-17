import { FC } from 'react';

const DisconnectButton: FC = () => {

    const disconnectEvent = () => {
        console.log(`You're trying to Disconnect`);
    }

    return (
        <button className='danger-button' onClick={disconnectEvent}>Disconnect Phantom!</button>
    );
};

export default DisconnectButton;