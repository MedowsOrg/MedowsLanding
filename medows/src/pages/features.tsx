import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FeaturesSection from "@/components/FeaturesSection"
import { NextPageWithLayout } from "./_app"
import Layout from "@/layout/layout"
import { ReactElement } from "react"


const Features: NextPageWithLayout = () => {
    return (
        <>
            <FeaturesSection/>
        </>
    )
}

Features.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default Features