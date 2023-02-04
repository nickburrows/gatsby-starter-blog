import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link className="font-black " to="/">
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <div
        className="min-h-screen global-wrapper"
        data-is-root-path={isRootPath}
      >
        <header className="global-header">{header}</header>
        <main>{children}</main>
      </div>
      <footer className="w-full text-center text-white bg-slate-700">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
