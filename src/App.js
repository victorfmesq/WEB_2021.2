//import JoaoVictor from "./components/JoaoVictor"
//import HelloWorld from "./components/OlaMundo";
import Arena from "./components/atividade_2/questao_1e2/Arena";
import Hero from "./components/atividade_2/questao_1e2/Hero";
import World from "./components/atividade_2/questao_3/World";
import Arena2 from "./components/atividade_2/questão_4/Arena";
import enemy from "./components/atividade_2/assets/enemy.png";
import hero from "./components/atividade_2/assets/hero.png";
import Enemy from "./components/atividade_2/questao_1e2/Enemy";
import Button from '@mui/material/Button';


export default function App() {
    return (
        <div>
            <h1>Questao 3</h1>
            <World>
                <Arena />
                <Arena />
                <Arena />
            </World>

            <h1>Questao 4</h1>
            <Arena2 arena="Planeta Terra">
                <Hero name="Brazas" img={hero} />
                <Enemy name="Bozos" img={enemy} />
            </Arena2>

            <h1>Questao 5</h1>
            <World>
                <Arena2 arena="Castelão">
                    <Hero name="Brazukas" img={hero} />
                    <Enemy name="bozokas" img={enemy} />
                </Arena2>
                <Arena2 arena="Maracana">
                    <Hero name="Brazolotas" img={hero} />
                    <Enemy name="bozolotas" img={enemy} />
                </Arena2>
                <Arena2 arena="lel">
                    <Hero name="pindola" img={hero} />
                    <Enemy name="puk" img={enemy} />
                </Arena2>
            </World>

            <Button variant="contained" color="primary"> Botão </Button>
            
        </div>
    );
}