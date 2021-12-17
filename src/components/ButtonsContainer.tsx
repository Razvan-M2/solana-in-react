import React from 'react';
import ConnectButton from './ConnectButton';
import DisconnectButton from './DisconnectButton';
import './ButtonsContainer.css'

const ButtonsContainer: React.FC = ({  }) => {
    
    return (
        <div className="button-container">
        <ConnectButton/>
        <DisconnectButton/>
        </div>
    );
};

export default ButtonsContainer;