import MetronomeDisplay from "../Components/MetronomeDisplay";
import MetronomeSlider from "../Components/MetronomeSlider";
import MetronomeButton from "../Components/MetronomeButton";
import SoundsContainer from "../Components/SoundsContainer";
import { useEffect, useState } from "react";


const MetronomeContainer = () => {

    const [sounds, setSounds] = useState([
        { name:"clap", aud:new Audio('/sounds/Perc_Clap_lo.wav')},
        { name:"click", aud:new Audio('/sounds/Perc_ClickToy_hi.wav')},
        { name:"quartz", aud:new Audio('/sounds/Perc_MetronomeQuartz_lo.wav')},
        { name:"snap", aud:new Audio('/sounds/Perc_Snap_lo.wav')},
        { name:"sine", aud:new Audio('/sounds/Synth_Sine_A_lo.wav')}
    ]);
    const [bpm, setBpm] = useState(60);
    const [audio, setAudio] = useState(sounds[0].aud);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalID, setIntervalID] = useState(false);


    useEffect(() => {
        clearInterval(intervalID);
        if (isPlaying) {
            setIntervalID(setInterval(Play, 60000/bpm))};
    }, [bpm, isPlaying, audio]);

    const handleSlider = (evt) => {
        setBpm(+evt.target.value);
    }

    const handlePlusClick = () => {
        if (bpm<218) {
            const newBpm = bpm + 1;
            setBpm(newBpm);
        }
    }

    const handleMinusClick = () => {
        if (bpm>40) {
            const newBpm = bpm - 1;
            setBpm(newBpm);
        }
    }

    const clickSound = (evt) => {
        console.log(evt.target.id);
        setAudio(sounds[evt.target.id].aud)
    }

    const Play = () => {
        audio.play();
    }

    const playPause = () => {
        setIsPlaying(isPlaying ? false : true);
    }

    return(
        <div className="metronome-container">
            <MetronomeDisplay bpm={bpm}/>
            <MetronomeSlider handleSlider={handleSlider}
             handleMinusClick={handleMinusClick}
             handlePlusClick={handlePlusClick}
              bpm={bpm}/>
            <MetronomeButton playPause={playPause}/>
            <SoundsContainer clickSound={clickSound} sounds={sounds}/>
        </div>
        
    )
}

export default MetronomeContainer;