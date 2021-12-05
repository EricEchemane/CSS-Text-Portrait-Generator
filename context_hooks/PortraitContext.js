import { createContext, useState } from "react";
import { default_lyric } from './default_lyrics';

export const PortraitContext = createContext();

export default function usePortraitContext() {

    const [image, setImage] = useState(null);
    const [lyrics, setLyrics] = useState(default_lyric);
    const [fontSize, setFontSize] = useState(.7);
    const [brightness, setBrightness] = useState(1);
    const [bgSize, setBgSize] = useState(100);

    function handleFontSizeChange(e) {
        setFontSize(e.target.value);
    }

    function handleBrightnessChange(e) {
        setBrightness(e.target.value);
    }

    function handleBgSizeChange(e) {
        setBgSize(e.target.value);
    }

    function inputImage() {
        const input = document.getElementById('image-input');
        const img = input.files[0];
        if (img) {
            const src = URL.createObjectURL(img);
            setImage(src);
        }
    }

    function handleLyricsChange(e) {
        setLyrics(e.target.value);
    }

    return {
        PortraitContext,
        image, setImage,
        lyrics, setLyrics,
        fontSize, setFontSize,
        brightness, setBrightness,
        bgSize, setBgSize,
        handleBgSizeChange,
        handleLyricsChange,
        handleBrightnessChange,
        handleFontSizeChange,
        inputImage
    };
}