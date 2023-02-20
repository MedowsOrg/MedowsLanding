import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Head from "next/head"
import type { ReactElement } from "react"


const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <>
        <Head>
            <title>Medows</title>
            <meta name="description" content="A platform for all of your Care Home needs" />
            <meta name="keywords" content="Care Home, Care Home Management, Care Home Software, Care Home Platform, Care Home Management Software, Care Home Management Platform, Care Home Management System, Clincian, Clincial, Clinical Software, Geriatric, Geriatric Care, Geriatric Care Home, Geriatric Care Home Management, Geriatric Care Home Software, Geriatric Care Home Platform, Geriatric Care Home Management Software, Geriatric Care Home Management Platform, Elderly Care, Health Innovation, Health Innovation Manchester, SME, Upcoming Businesses, Innovation Manchester" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
        </>
    )
    }
export default Layout