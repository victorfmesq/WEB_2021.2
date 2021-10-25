import React, {useState, useEffect} from 'react';

export default function Cidades(props){

    const [contFortal, setContFortal] = useState(0);
    const [contQuixad, setContQuixad] = useState(0);
    const [contRio, setContRio] = useState(0);
    const [contPiaui, setContPiaui] = useState(0);

    const [contMaisVotada, setContMaisVotada] = useState(0);
    const [contMenosVotada, setContMenosVotada] = useState(0);

    const cidadesStr = ['Fortaleza', 'Quixada', 'Rio', 'Piaui'];

    useEffect(
        ()=>{
            const cidades = [contFortal, contQuixad, contRio, contPiaui];
            
            let maisVotada = contMaisVotada;
            for(let i = 0; i < cidades.length; i++){
                if(cidades[i] > maisVotada)
                    maisVotada = cidades[i];
            }
            setContMaisVotada(maisVotada); 

            let menosVotada = maisVotada;
            for(let i = 0; i < cidades.length; i++){
                if(cidades[i] < menosVotada){
                    menosVotada = cidades[i];
                }
            }
            setContMenosVotada(menosVotada);
        },
        [contFortal, contQuixad, contRio, contPiaui]
    );  

    function maisVotada(){
        let output = ''
        const cidades = [contFortal, contQuixad, contRio, contPiaui];
        for(let i = 0; i < cidades.length; i++){
            if(cidades[i]===contMaisVotada)
                output += cidadesStr[i]+' ';
        }
        return output;
    }

    function menosVotada(){
        let output = ''
        const cidades = [contFortal, contQuixad, contRio, contPiaui];
        for(let i = 0; i < cidades.length; i++){
            if(cidades[i]===contMenosVotada)
                output += cidadesStr[i]+' ';
        }
        return output;
    }

    function somarVotos(){
        let output = 0
        const cidades = [contFortal, contQuixad, contRio, contPiaui];
        for(let i = 0; i < cidades.length; i++ ){
            output+=cidades[i];
        }
        return output;
    }

    return(
        <div>
            <h1>Fortaleza: {contFortal}</h1>
            <h1>Quixada: {contQuixad}</h1>
            <h1>Rio: {contRio}</h1>
            <h1>Piaui: {contPiaui}</h1>
            <h3>Mais votada: {contMaisVotada} : {maisVotada()}</h3>
            <h3>Menos Votada: {contMenosVotada} : {menosVotada()}</h3>
            <h4>Total de votos: {somarVotos()}</h4>
            <button onClick={()=>setContFortal(contFortal+1)}>Votar em Fortaleza</button>
            <button onClick={()=>setContQuixad(contQuixad+1)}>Votar em Quixada</button>
            <button onClick={()=>setContRio(contRio+1)}>Votar em Rio</button>
            <button onClick={()=>setContPiaui(contPiaui+1)}>Votar em Piaui</button>
        </div>
    );
}