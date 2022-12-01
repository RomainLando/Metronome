
const Sound = ({clickSound, sounds}) => {
    const SoundOptions = sounds.map((element, index) => {
       return <button key={index} id={index} onClick={clickSound}>{element.name}</button>
    })

    return(
        <ul>
            {SoundOptions}
        </ul>
    )
}

export default Sound;