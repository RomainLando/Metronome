import Sound from "./Sound";

const SoundsContainer = ({clickSound, sounds}) => {


    return(
            <Sound clickSound={clickSound} sounds={sounds}/>
        
    )
}

export default SoundsContainer;