export function Servicos() {
    return (
        <div className="container column is-10">
            <div className="header"><h1>Serviços</h1></div>
            <div className="conteudo">
                <form>
                    <input type="text" placeholder="Serviço" />
                    <button>Cadastrar</button>
                    <button>Voltar</button>
                </form>
            </div>
        </div>
    )
}