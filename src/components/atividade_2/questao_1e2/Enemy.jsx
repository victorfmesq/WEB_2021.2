export default function Enemy(props){
    return(
        <div>
            <h2>INIMIGO</h2>
            <h3>Nome: {props.name}</h3>
            <h3>Imagem: <img src={props.img} alt=''/></h3>
        </div>
    )
}