import Hero from "./Hero"
import Enemy from "./Enemy"
import enemy from "../assets/enemy.png"
import hero from "../assets/hero.png"

export default function Arena(props){
    return(
        <div>
            <Hero name='Brasil' img={hero}/>
            <Enemy name='Biro-liro' img={enemy}/>,
        </div>
    )
}