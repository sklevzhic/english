import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";
import Head from 'next/head';
import 'antd/dist/antd.css'
import '../styles/globals.scss';


const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <>
        <Head>
            <title>Todo List (NextJS, TS, Redux)</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />

    </>
);

export default wrapper.withRedux(WrappedApp);