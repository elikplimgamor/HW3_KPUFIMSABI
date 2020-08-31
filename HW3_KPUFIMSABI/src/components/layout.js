import Head from 'next/head';
import Navbar from './navbar'
import Header from './header';


function Layout() {
    
  return (
    <div>
      <Global></Global>
          <Navbar />
          <Header/>
    </div>
  )
}
export default Layout

function Global() {
  return (
    <Head>
      <title>week3</title>
      <link rel="stylesheet" href="./css/global.css" />
    </Head>
  )
}
