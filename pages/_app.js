import '../styles.css'
//import { DefaultSeo } from 'next-seo';
import Fonts from '../utility/Fonts'
import { useEffect} from 'react'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        Fonts();
    })

    return (
        <>
        {/*
        <DefaultSeo
            
            title="Avery Felman"
            description="Freelance Writer In New York City"
            openGraph={{
                type: 'website',
                locale: 'en_US',
                url: 'https://averyfelman.com/',
                site_name: 'Avery Felman',
            }}
        />*/}
        <Component {...pageProps} />
        </>
    )
}