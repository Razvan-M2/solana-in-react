import { IPhantom } from "./src/interfaces/Phantom";

export declare global{
    interface Window {
        phantom: IPhantom;
    }
}