import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import '../styles/index.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
    }
  `}
    render={data => (
      <div id="page" className="site hfeed">
        <div className="site-content" id="content">
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          >
            <link rel="stylesheet" id="wp-block-library-css" href="https://www.euroben.se/wp-includes/css/dist/block-library/style.min.css?ver=5.2.2" type="text/css" media="all"></link>
            <link rel="stylesheet" id="sapor-style-css" href="https://www.euroben.se/wp-content/themes/sapor/style.css?ver=5.2.2" type="text/css" media="all"></link>
          </HelmetDatoCms>

          <div id="primary" className="content-area">
            <main id="main" className="site-main" role="main">
              <article id="post-747" className="post-747 page type-page status-publish has-post-thumbnail hentry">
                <div className="entry-wrapper">
                  <div className="featured-image">
                    <img width={900} height={564} src="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?fit=900%2C564&ssl=1" className="attachment-sapor-featured-image size-sapor-featured-image wp-post-image" alt srcSet="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?w=4892&ssl=1 4892w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=300%2C188&ssl=1 300w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=768%2C481&ssl=1 768w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=1024%2C642&ssl=1 1024w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=900%2C564&ssl=1 900w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=260%2C163&ssl=1 260w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?w=1460&ssl=1 1460w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?w=2190&ssl=1 2190w" sizes="(max-width: 900px) 100vw, 900px" data-attachment-id={868} data-permalink="https://www.euroben.se/shutterstock_320953616/" data-orig-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?fit=4892%2C3067&ssl=1" data-orig-size="4892,3067" data-comments-opened={0} data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;Shutterstock \/ Leonid Andronov&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;320953616&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="shutterstock_320953616" data-image-description data-medium-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?fit=300%2C188&ssl=1" data-large-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?fit=730%2C458&ssl=1" />	</div>{/* .post-thumbnail */}
                  <header className="entry-header">
                  </header>{/* .entry-header */}
                  <div className="entry-meta">
                  </div>{/* .entry-meta */}
                  <div className="entry-content">
                    <p><strong>Euroben Life &amp; Pension</strong> är ett irländskt livförsäkringsbolag som ingår i Storebrandkoncernen. Bolaget tillhandahåller pensionslösningar i Sverige via sin <span style={{ color: '#003366' }}><a style={{ color: '#003366' }} href="https://www.euroben.se//kontakta-oss/">svenska filial</a></span>.</p>
                  </div>{/* .entry-content */}
                  <footer className="entry-footer">
                  </footer>{/* .entry-footer */}
                </div>
              </article>{/* #post-## */}
            </main>{/* #main */}
          </div>

          <div id="secondary" className="sidebar" role="complementary">
            <a href="https://www.euroben.se/" className="site-logo-link" rel="home" itemProp="url"><img width={260} height={57} src="https://i0.wp.com/www.euroben.se/wp-content/uploads/2017/04/euroben_logo_rgb_png-e1491480674577.png?fit=260%2C57&ssl=1" className="site-logo attachment-sapor-logo" alt data-size="sapor-logo" itemProp="logo" data-attachment-id={963} data-permalink="https://www.euroben.se/euroben_logo_rgb_png/" data-orig-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2017/04/euroben_logo_rgb_png-e1491480674577.png?fit=260%2C57&ssl=1" data-orig-size="260,57" data-comments-opened={0} data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="euroben_logo_rgb_png" data-image-description data-medium-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2017/04/euroben_logo_rgb_png-e1491480674577.png?fit=300%2C66&ssl=1" data-large-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2017/04/euroben_logo_rgb_png-e1491480674577.png?fit=730%2C161&ssl=1" /></a>
            <nav id="site-navigation" className="main-navigation" role="navigation">
              <div className="menu-meny-1-container"><ul id="menu-meny-1" className="menu"><li id="menu-item-785" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-747 current_page_item menu-item-785"><a href="https://www.euroben.se/" aria-current="page">Start</a></li>
                <li id="menu-item-786" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-786"><a href="https://www.euroben.se/vart-utbud/">Våra försäkringar<button className="showsub-toggle" aria-expanded="false" /></a>
                  <ul className="sub-menu">
                    <li id="menu-item-787" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-787"><a href="https://www.euroben.se/europlan-sverige/">EuroPlan – Sverige<button className="showsub-toggle" aria-expanded="false" /></a>
                      <ul className="sub-menu">
                        <li id="menu-item-789" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-789"><a href="https://www.euroben.se/alderspension/">Ålderspension</a></li>
                        <li id="menu-item-793" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-793"><a href="https://www.euroben.se/sjukforsakring/">Sjukförsäkring</a></li>
                        <li id="menu-item-790" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-790"><a href="https://www.euroben.se/efterlevandepension/">Efterlevandepension</a></li>
                        <li id="menu-item-792" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-792"><a href="https://www.euroben.se/premiebefrielse/">Premiebefrielse</a></li>
                        <li id="menu-item-791" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-791"><a href="https://www.euroben.se/flyttratt/">Flytträtt</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-788" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-788"><a href="https://www.euroben.se/ppa-13/">Sjukpension enligt PPA 13</a></li>
                    <li id="menu-item-784" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-784"><a href="https://www.euroben.se/ppa-07/">PPA 07</a></li>
                    <li id="menu-item-783" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-783"><a href="https://www.euroben.se/k06-bil-g/">K06 Bil G</a></li>
                    <li id="menu-item-782" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-782"><a href="https://www.euroben.se/k06-bil-g-ppak/">K06 Bil G PPAK</a></li>
                  </ul>
                </li>
                <li id="menu-item-776" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-776"><a href="https://www.euroben.se/kapitalforvaltare/">Kapitalförvaltning<button className="showsub-toggle" aria-expanded="false" /></a>
                  <ul className="sub-menu">
                    <li id="menu-item-794" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-794"><a href="https://www.euroben.se/om-kapitalforvaltning/">Om kapitalförvaltning</a></li>
                  </ul>
                </li>
                <li id="menu-item-781" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-781"><a href="https://www.euroben.se/ladda-ner-information/">Försäkringsvillkor och dokument</a></li>
                <li id="menu-item-780" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-780"><a href="https://www.euroben.se/nyhetsarkiv/">Nyhetsarkiv</a></li>
                <li id="menu-item-451" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-451"><a href="http://euroben.ie">Euroben Irland – euroben.ie</a></li>
                <li id="menu-item-795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-795"><a href="https://www.euroben.se/kontakta-oss/">Kontakta oss<button className="showsub-toggle" aria-expanded="false" /></a>
                  <ul className="sub-menu">
                    <li id="menu-item-779" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-779"><a href="https://www.euroben.se/klagomal/">Klagomål</a></li>
                    <li id="menu-item-778" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-778"><a href="https://www.euroben.se/provningsmojligheter-utanfor-euroben/">Prövningsmöjligheter utanför Euroben</a></li>
                    <li id="menu-item-777" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-777"><a href="https://www.euroben.se/konsumentvagledning/">Konsumentvägledning</a></li>
                  </ul>
                </li>
                <li id="menu-item-796" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-796"><a href="https://www.euroben.se/om/">Om Euroben</a></li>
              </ul></div>			</nav>{/* #site-navigation */}
            <div className="widget-area">
              <aside id="recent-posts-2" className="widget widget_recent_entries">		<h2 className="widget-title">Senaste nytt</h2>		<ul>
                <li>
                  <a href="https://www.euroben.se/2018/12/13/2018-12-13-reglerna-for-deklaration-av-direktpension-andras-2019/">2018-12-13 – Reglerna för deklaration av direktpension ändras 2019</a>
                </li>
                <li>
                  <a href="https://www.euroben.se/2018/12/05/2018-12-05-vardesakring-av-pensioner-2019/">2018-12-05 – Värdesäkring av pensioner 2019</a>
                </li>
                <li>
                  <a href="https://www.euroben.se/2018/05/24/2018-05-24-eurobens-integritetspolicy/">2018-05-24 – Eurobens Integritetspolicy</a>
                </li>
                <li>
                  <a href="https://www.euroben.se/2017/12/14/2017-12-14-jamkningsbeslut-fran-skatteverket-for-ar-2018/">2017-12-14 – Jämkningsbeslut från Skatteverket för år 2018</a>
                </li>
              </ul>
              </aside><aside id="search-2" className="widget widget_search"><form role="search" method="get" className="search-form" action="https://www.euroben.se/">
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
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
