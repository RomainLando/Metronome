import './MetronomeButton.css';


const MetronomeButton = ({playPause}) => {


    return(
        <figure>
            <button className="play" onClick={playPause}></button>
        </figure>
        
    )
}

export default MetronomeButton;