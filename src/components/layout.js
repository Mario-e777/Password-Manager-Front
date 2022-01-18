import * as React from "react"

import { QueryClient, QueryClientProvider } from 'react-query'

import Header from "./header"
import "./layout.css"

const queryClient = new QueryClient()

const Layout = ({ children }) => {

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ backgroundImage: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)' }} >
        <Header />
        <main>{children}</main>
        <footer></footer>
      </div>
    </QueryClientProvider>
  )
}

export default Layout
