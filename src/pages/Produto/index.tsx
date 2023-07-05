import { useState } from "react"
import { InputBulma } from "../../components/InputBulma"

export function Produto() {
    const [sku, setSku]     = useState<string>("00A98")
    const [preco, setPreco] = useState<string>("R$ 298,00")
    const [nome, setNome]   = useState<string>("Notebook Dell I9")
    const [desc, setDesc]   = useState<string>("Notebok Geração 13")
    
    const submit = () => {
        const produto = {
            sku, preco, nome, desc
        }
        console.log(produto)
    }
    return (
        <div className="container column is-12 mt-2">
            <div className="card p-4">
                <div className="card">
                <div className="notification mb-3">
                    <strong>Cadastro Produtos</strong>
                </div>
                </div>
                <div className="columns is-half">
                    <InputBulma
                        class2="field column"
                        id="sku" label="SKU *" htmlFor="sku"
                        value={sku} onChange={ (e) => setSku(e.target.value)}
                        className="input" placeholder="Código do Produto"
                    />
                    <InputBulma
                        class2="field column"
                        id="idPreco" label="Preço Unitário *" htmlFor="idPreco"
                        value={preco} onChange={ (e) => setPreco(e.target.value)}
                        className="input" placeholder="Código do Produto"
                    />
                </div>

                <InputBulma
                    class2="field"
                    id="idNome" label="Nome produto *" htmlFor="idNome"
                    value={nome} onChange={ (e) => setNome(e.target.value)}
                    className="input" placeholder="Código do Produto"
                />

                <div className="field">
                    <label className="label" htmlFor="IdDesc">Descrição *</label>
                    <div className="control">
                        <textarea
                            id="IdDesc"
                            value={desc}
                            className="textarea"
                            placeholder="Nome do Produto"
                            onChange={e => setDesc(e.target.value)}
                        />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <div className="button is-info" onClick={submit}>Cadastrar</div>
                    </div>
                    <div className="control">
                        <div className="button is-danger">Voltar</div>
                    </div>
                </div>

            </div>
        </div>
    )
}