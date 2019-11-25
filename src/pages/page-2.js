import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>A oto druga strona</h1>
    <p>Witaj na stronie drugiej</p>
    <Link to="/">Powrót</Link>
  </Layout>
)

export default SecondPage
