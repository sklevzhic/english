import React from 'react'
import { MainLayout } from '../layouts/mainLayout';

interface LoginPageProps {

}

export const LoginPage: React.FC<LoginPageProps> = () => {

    return <MainLayout>
        <img src="https://www.english-polyglot.com/img/tablica-glagolov-petrova-image.gif" alt=""/>
    </MainLayout>;
};

export default LoginPage