import * as React from 'react'
import Layout from '../components/layout/layout'
import '../styles/index.css'

const IndexPage = () => (
  <Layout location='index'>
    <div className="indexPage">
      <h1 className="titlemain">Welcome</h1>
      <div className="overlay"></div>
    </div>
  </Layout>
)

export default IndexPage
