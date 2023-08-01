


import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Content from '../content/Content'
import RelatedArticles from '../RelatedArticles/RelatedArticles'

import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import { Container } from 'react-bootstrap'




function Home() {
  return (
    <div>
        <Container>
        <Banner/>
        <Content/>
        <RelatedArticles/>
     
        <Login/>
        </Container>
     
       
        
    </div>
  )
}

export default Home


