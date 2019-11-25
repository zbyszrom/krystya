import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Cześć Krystya</h1>
    <p>Witaj na swojej stronie testowej</p>
    <h1>A tutaj będą rozmaite eksperymenty</h1>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Druga strona testowa</Link>
  </Layout>
)

export default IndexPage
