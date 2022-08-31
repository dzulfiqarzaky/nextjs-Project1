import { Fragment, ReactNode } from "react"
import MainHeader from "./main-header"

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <Fragment>
            <MainHeader/>
            {children}
        </Fragment>
    )
}

export default Layout