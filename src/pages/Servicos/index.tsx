import { useState } from "react"

export function Servicos() {
    const [desc, setDesc] = useState("")
    const [preco, setPreco] = useState("")
    const [data, setData] = useState("")
    const [status, setStatus] = useState("")

    const submit = (e: any) => {
        e.preventDefault()
        const servico = {
            desc, preco, data, status
        }
        console.log(servico)
    }
    const voltar = () => {
        alert('Voltando ...')
    }
    return (
        <div className="container column is-12">

            <div className="header">
                <h1>Serviços</h1>
            </div>
            
            <div className="formulario">
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
                    <select value={status} onChange={ e => setStatus(e.target.value)}>
                        <option value="Pendente">Pendente</option>
                        <option value="Aguardando Aprovação">Aguardando Aprovação</option>
                        <option value="Aprovado Concluído">Aprovado Concluído</option>
                    </select>
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
            
            <div className="lista-produtos">
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20-10-2023</td>
                            <td>Instalar Câmeras</td>
                            <td>200,00</td>
                            <td>Pendente</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}