export const checkPhantom = () => {
    return window.phantom !== null;
}

export const connectPhantom = () => {
    return window.phantom.solana.connect();
}


export const disconnectPhantom = () => {
    return window.phantom.solana.disconnect();
}