import EnquiryCTA from '@/components/EnquiryCTA';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import Head from 'next/head'
import Header from '../components/header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import type { ReactElement } from 'react';
import Layout from '../layout/layout';
import { NextPageWithLayout } from './_app';



const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection/>
      <VideoSection />
      <EnquiryCTA/>
    </>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
