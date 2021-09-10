import './styles.css'
const PageTorneio = ({showTorneio, setShowTorneio, bruxinhoAleatorio}) =>{
    
    return(
        <div>
                <div>
                    <h2>Torneio tribruxo</h2>
                    <p>Clique no botão para encontrar os feiticeiros</p>
                    <button onClick={()=>{
                        setShowTorneio(!showTorneio) 
                        bruxinhoAleatorio()}}>Começar</button>
                </div>
        </div>
    )
}

export default PageTorneio