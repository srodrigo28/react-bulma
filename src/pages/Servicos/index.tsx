import { useState } from "react"

export function Servicos() {
    const [desc, setDesc] = useState("")
    const [preco, setPreco] = useState("")
    const [data, setData] = useState("")

    const submit = (e: any) => {
        e.preventDefault()
        const servico = {
            desc, preco, data
        }
        console.log(servico)
    }
    const voltar = () => {
        alert('Voltando ...')
    }
    return (
        <div className="container column is-10">
            <div className="header"><h1>Serviços</h1></div>
            <div className="conteudo">
                <form>
                    <input
                        type="text"
                        value={desc}
                        placeholder="Descrição do Serviço"
                        onChange={ e => setDesc(e.target.value)}
                    />
                    <input
                        type="text"
                        value={preco}
                        placeholder="Preço"
                        onChange={ e => setPreco(e.target.value)}
                    />
                    <input
                        type="date"
                        value={data}
                        placeholder="Data"
                        onChange={ e => setData(e.target.value)}
                    />
                    <button onClick={submit}>Cadastrar</button>
                    <button onClick={voltar}>Voltar</button>
                </form>
            </div>
        </div>
    )
}