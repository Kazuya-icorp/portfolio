import { Link } from "@remix-run/react";
import Layout from '../hocs/Layout'
import Hero from '../components/home/Hero'

import hero from "../assets/hero.jpg"

export default function Index() {
  return (
    <Layout className='overflow-hidden'>
      <Hero/>
    </Layout>
  );
}
