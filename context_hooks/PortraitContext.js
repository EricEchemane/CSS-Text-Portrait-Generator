import { createContext, useState } from "react";
import { default_lyric } from './default_lyrics';

export const PortraitContext = createContext();

const fontFamilies = [
    'sans-serif'
];

export default function usePortraitContext() {

    const [state, setState] = useState({
        lyrics: {
            text: default_lyric,
            fontSize: 0.5,
            fontStyle: 'normal',
            fontFamily: fontFamilies[0]
        },
        image: {
            size: 'fit'
        },
        filters: {
            blackAndWhite: false,
            brightness: 1,
            invert: 0,
            hueRotate: 0,
            saturation: 50,
        }
    });

    return {
        PortraitContext, state, setState
    };
}