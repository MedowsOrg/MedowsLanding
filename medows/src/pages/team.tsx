import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import TeamSection from "@/components/TeamSection"
import { NextPageWithLayout } from "./_app"
import Layout from "@/layout/layout"
import { ReactElement } from "react"

const Team: NextPageWithLayout = () => {
    return (
        <>
            <TeamSection />
        </>
    )
}

Team.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default Team
