import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import { Header, Footer } from "course-components";

const Layout = ({ activePath, children, title }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title,
          pages {
            label,
            path
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css" integrity="sha384-zrnmn8R8KkWl12rAZFt4yKjxplaDaT7/EUkKm7AovijfrQItFWR7O/JJn4DAa/gx" crossorigin="anonymous" />
        <link type="text/css" rel="stylesheet" href={`${process.env.GATSBY_TOOLKIT_URL}/assets/toolkit/styles/toolkit.css`} />
      </Helmet>
      <Header activePath={activePath} pages={data.site.siteMetadata.pages} title={data.site.siteMetadata.title} />
        {children}
      <Footer title={data.site.siteMetadata.title} pages={data.site.siteMetadata.pages} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activePath: PropTypes.string,
};

export default Layout;
