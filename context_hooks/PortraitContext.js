import { createContext, useState } from "react";
import { default_lyric } from './default_lyrics';

export const PortraitContext = createContext();

export default function usePortraitContext() {

    const [image, setImage] = useState(null);
    const [lyrics, setLyrics] = useState(default_lyric);
    const [fontSize, setFontSize] = useState(.7);
    const [brightness, setBrightness] = useState(1);
    const [bgSize, setBgSize] = useState(100);

    return {
        PortraitContext,
        image, setImage,
        lyrics, setLyrics,
        fontSize, setFontSize,
        brightness, setBrightness,
        bgSize, setBgSize
    };
}