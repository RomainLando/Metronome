

const MetronomeSlider = ({handleSlider, handleMinusClick, handlePlusClick, bpm}) => {

    return(
        <div className="Slider-container">
            <button className="minus-button" onClick={handleMinusClick}>-</button>
            <input type="range" min="40" max="218" value={bpm} className="slider" id="metronomeSlider" onChange={handleSlider}></input>
            <button className="plus-button" onClick={handlePlusClick}>+</button>
        </div>
    )
}

export default MetronomeSlider;