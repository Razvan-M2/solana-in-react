import { FC } from 'react';

const ConnectButton: FC = () => {

    const connectEvent = () => {
        console.log(`You're trying to Connect`);
    }

    return (
        <button className='default-button' onClick={connectEvent}>Connect Phantom!</button>
    );
};

export default ConnectButton;