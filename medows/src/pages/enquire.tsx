import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import EnquiryForm from "@/components/EnquiryForm"
import { NextPageWithLayout } from "./_app"
import { ReactElement } from "react"
import Layout from "../layout/layout"

const Enquire: NextPageWithLayout = () => {

    return (
        <>
           
                <EnquiryForm />
        </>
    )
}

Enquire.getLayout  = (page: ReactElement) => <Layout>{page}</Layout>

export default Enquire