import Link from "next/link"

const Button = ({children, path, className}) => {
    return (
        <Link href={`${path}`}><a className={className}>{children}</a></Link>
    )
}

export default Button;