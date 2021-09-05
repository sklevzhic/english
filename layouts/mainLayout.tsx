import React from 'react'
import {Container} from "@material-ui/core";

interface MainLayoutProps {

}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return <Container maxWidth="sm" style={{ marginTop: "40px"}}>
        <>{children}</>
    </Container>
};