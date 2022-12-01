import MetronomeDisplay from "../Components/MetronomeDisplay";
import MetronomeSlider from "../Components/MetronomeSlider";
import MetronomeButton from "../Components/MetronomeButton";
import SoundsContainer from "../Components/SoundsContainer";
import { useEffect, useState } from "react";



const MetronomeContainer = () => {

    const [bpm, setBpm] = useState(60);
    const [audio, setAudio] = useState(new Audio('/sounds/Perc_MetronomeQuartz_lo.wav'))
    const [isPlaying, setIsPlaying] = useState(false)
    const [intervalID, setIntervalID] = useState(false)

    useEffect(() => {
        clearInterval(intervalID);
        if (isPlaying) {
            setIntervalID(setInterval(Play, 60000/bpm))};
    }, [bpm, isPlaying]);

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

    const Play = () => {
        console.log(audio);
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
            <SoundsContainer />
        </div>
        
    )
}

export default MetronomeContainer;