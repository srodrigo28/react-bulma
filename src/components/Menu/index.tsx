import { MenuItem } from "./MenuItem";

export function Menu() {
    return (
        <aside className="column is-1 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <ul className="menu-list">
                <MenuItem href="/produto" label="Produtos" />
                <MenuItem href="/cliente" label="Clientes" />
                <MenuItem href="/" label="Config" />
                <MenuItem href="/" label="Sair" />
            </ul>
        </aside>
    )
}