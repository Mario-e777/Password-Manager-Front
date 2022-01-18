import * as React from "react"
/* import { StaticImage } from "gatsby-plugin-image" */

import Layout from "../components/layout"
import Seo from "../components/seo"
import FormPass from "../components/password/form"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <FormPass />
    </section>

    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
  </Layout>
)

export default IndexPage
