export interface IPhantom{
    solana:{
        connect: () => {}
        disconnect: () => {}
        isPhantom: boolean
    }
}