import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Menu from './menu'

import '../styles/index.sass'
import NewsWidget from './newswidget';

const TemplateWrapper = ({ children }) => {
  if (typeof document !== 'undefined') {
    document.getElementsByTagName("body")[0].classList.add("onesidebar", "page", "page-id-747", "page-template-default");
  }
  return (
  <StaticQuery query={graphql`
  query LayoutQuery {
    layout: datoCmsLayout{
      logoLink,
      logoImage{url, width, height}
    }
  }
  `}
    render={data => (
      <div id="page" className="site hfeed">
        <div className="site-content" id="content">
          <HelmetDatoCms>
            <link rel="stylesheet" id="wp-block-library-css" href="https://www.euroben.se/wp-includes/css/dist/block-library/style.min.css?ver=5.2.2" type="text/css" media="all"></link>
            <link rel="stylesheet" id="sapor-style-css" href="https://www.euroben.se/wp-content/themes/sapor/style.css?ver=5.2.2" type="text/css" media="all"></link>
            <link rel="stylesheet" id="sapor-fonts-css" href="https://fonts.googleapis.com/css?family=PT+Sans%3A400%2C700%2C400italic%2C700italic%7CPT+Serif%3A400%2C700%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext" type="text/css" media="all"></link>
            <link rel="stylesheet" id="genericons-css" href="https://www.euroben.se/wp-content/plugins/jetpack/_inc/genericons/genericons/genericons.css?ver=3.1" type="text/css" media="all"></link>
            <script type="text/javascript" src="/js/jquery.js"></script>
            <script type="text/javascript" src="/js/jquery-migrate.min.js"></script>
            <script type="text/javascript" src="/js/sapor.js"></script>
          </HelmetDatoCms>

          {children}

          <div id="secondary" className="sidebar" role="complementary">
            <a href={data.layout.logoLink} className="site-logo-link" rel="home" itemProp="url"><img src={data.layout.logoImage.url} width={data.layout.logoImage.width} height={data.layout.logoImage.height} className="site-logo attachment-sapor-logo" data-size="sapor-logo" itemProp="logo" data-attachment-id={963} data-permalink="https://www.euroben.se/euroben_logo_rgb_png/" data-orig-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2017/04/euroben_logo_rgb_png-e1491480674577.png?fit=260%2C57&ssl=1" data-orig-size="260,57" data-comments-opened={0} data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="euroben_logo_rgb_png" data-image-description data-medium-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2017/04/euroben_logo_rgb_png-e1491480674577.png?fit=300%2C66&ssl=1" data-large-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2017/04/euroben_logo_rgb_png-e1491480674577.png?fit=730%2C161&ssl=1" /></a>
            <Menu></Menu>
            <div className="widget-area">
              <NewsWidget></NewsWidget>
              <aside id="search-2" className="widget widget_search"><form role="search" method="get" className="search-form" action="https://www.euroben.se/">
                <label>
                  <span className="screen-reader-text">Search for:</span>
                  <input type="search" className="search-field" placeholder="Search …" defaultValue name="s" />
                </label>
                <input type="submit" className="search-submit screen-reader-text" defaultValue="Search" />
              </form></aside><aside id="text-2" className="widget widget_text">			<div className="textwidget"><small>Copyright © Euroben Life &amp; Pension Designated Activity Company<br /><a href="https://www.euroben.se//juridiskt meddelande">• Juridiskt meddelande<br /></a>
                <a href="https://www.euroben.se//personuppgifter-och-cookies">• Personuppgifter och cookies</a><br />
                <a href="http://storebrand.se"> • Euroben Life &amp; Pension Designated Activity Company ingår i Storebrandkoncernen<br /></a></small></div><small>
                </small></aside><small>			</small></div>{/* #secondary */}<small>
            </small></div>
        </div>
      </div>
    )}
  />
)}

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
