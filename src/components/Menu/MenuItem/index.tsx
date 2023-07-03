import { Link } from "react-router-dom"

interface MenuItemProps{
    href: string
    label: string
}
export function MenuItem( { href, label } : MenuItemProps) {
    return (
        <li>
            <Link to={href}>
                <span className="icon"></span> {label}
            </Link>
        </li>
    )
}