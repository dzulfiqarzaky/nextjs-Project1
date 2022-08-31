import Link from 'next/link';
import {MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.css'

interface Props {
    children : ReactNode,
    href?: string;
    onClick? : (((e: any) => void) & MouseEventHandler<HTMLAnchorElement>) | undefined
}
const Button = (props: Props) => {
    const {children, href, onClick} = props
    if(href) {
        return (
            <Link href={href}>
                <a className={styles.btn}>
                {children}
                </a>
            </Link>
        );
    }

    return (
        <button 
            className={styles.btn}
            onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;

// versi lengkap
// import Link, { LinkProps } from 'next/link';
// import { HTMLProps, FC } from 'react';

// const LinkButton: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
//   as, children, href, replace, scroll, shallow, passHref, ...rest
// }) => (
//   <Link
//     as={as}
//     href={href}
//     passHref={passHref}
//     replace={replace}
//     scroll={scroll}
//     shallow={shallow}
//   >
//     <a {...rest}>
//       {children}
//     </a>
//   </Link>
// );

// export default LinkButton