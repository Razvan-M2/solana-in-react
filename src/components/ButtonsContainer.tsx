import React, { useEffect, useState } from 'react';
import ConnectButton from './ConnectButton';
import DisconnectButton from './DisconnectButton';
import './ButtonsContainer.css'


const ButtonsContainer: React.FC = ({  }) => {
    
    const [phantomPresent, setPhantomPresent] = useState(false)
    const checkPhantom = () => {
        const phantom = window.phantom;
        return phantom !== null;
    }

    useEffect(() => {
        setPhantomPresent(checkPhantom());
    })

    return (
        <div className="button-container">
            {
                phantomPresent ?
                <>
                    <ConnectButton/>
                    <DisconnectButton/>
                </> : ""
            }

        </div>
    );
};

export default ButtonsContainer;