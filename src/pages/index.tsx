/* React & Gatsby stuff */
import * as React from "react";

/* Components */
import Layout from "../components/layout";
import Seo from "../components/seo";
import FormPass from "../components/password/form";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FormPass />
  </Layout>
);

export default IndexPage;
