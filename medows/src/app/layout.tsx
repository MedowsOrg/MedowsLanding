import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../styles/globals.css"
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Medows',
  description: 'A platform for all of your Care Home needs',
  keywords: 'Care Home, Care Home Management, Care Home Software, Care Home Platform, Care Home Management Software, Care Home Management Platform, Care Home Management System, Clincian, Clincial, Clinical Software, Geriatric, Geriatric Care, Geriatric Care Home, Geriatric Care Home Management, Geriatric Care Home Software, Geriatric Care Home Platform, Geriatric Care Home Management Software, Geriatric Care Home Management Platform, Elderly Care, Health Innovation, Health Innovation Manchester, SME, Upcoming Businesses, Innovation Manchester'
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
