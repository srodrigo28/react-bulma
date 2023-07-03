import { useState } from "react"

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
                    <div className="field column">
                        <label className="label" htmlFor="IdSKU">SKU: *</label>
                        <div className="control">
                            <input
                                id="IdSKU"
                                className="input"
                                value={sku}
                                placeholder="Digite o SKU do Produto"
                                onChange={(e => setSku(e.target.value))}
                            />
                        </div>
                    </div>

                    <div className="field column">
                        <label className="label" htmlFor="IdPreco">Preço *</label>
                        <div className="control">
                            <input
                                id="IdPreco"
                                value={preco}
                                className="input"
                                placeholder="R$ 00,00"
                                onChange={ (e) => setPreco(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="IdNome">Nome *</label>
                    <div className="control">
                        <input
                            id="IdNome"
                            value={nome}
                            className="input"
                            placeholder="Nome do Produto"
                            onChange={ e => setNome(e.target.value)}
                        />
                    </div>
                </div>

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