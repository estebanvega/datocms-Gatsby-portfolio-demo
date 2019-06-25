import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

 const Menu = ({ children }) => {
  
  return (
  <StaticQuery query={graphql`
  query MenuQuery {
    layout: datoCmsLayout{
      logoLink,
      logoImage{url, width, height}
    }
  }
  `}
    render={data => (
        
        <nav id="site-navigation" className="main-navigation" role="navigation">
          <div className="menu-meny-1-container">
            <ul id="menu-meny-1" className="menu">
              <li id="menu-item-785" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-747 current_page_item menu-item-785"><a href="https://www.euroben.se/" aria-current="page">Start</a></li>
              <li id="menu-item-786" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-786"><a href="https://www.euroben.se/vart-utbud/">Våra försäkringar</a><button className="showsub-toggle" aria-expanded="false"><a href="https://www.euroben.se/vart-utbud/" />
                  <ul className="sub-menu">
                    <li id="menu-item-787" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-787"><a href="https://www.euroben.se/europlan-sverige/">EuroPlan – Sverige</a></li></ul></button><a href="https://www.euroben.se/europlan-sverige/" /><button className="showsub-toggle" aria-expanded="false"><a href="https://www.euroben.se/europlan-sverige/" />
                  <ul className="sub-menu">
                    <li id="menu-item-789" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-789"><a href="https://www.euroben.se/alderspension/">Ålderspension</a></li>
                    <li id="menu-item-793" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-793"><a href="https://www.euroben.se/sjukforsakring/">Sjukförsäkring</a></li>
                    <li id="menu-item-790" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-790"><a href="https://www.euroben.se/efterlevandepension/">Efterlevandepension</a></li>
                    <li id="menu-item-792" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-792"><a href="https://www.euroben.se/premiebefrielse/">Premiebefrielse</a></li>
                    <li id="menu-item-791" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-791"><a href="https://www.euroben.se/flyttratt/">Flytträtt</a></li>
                  </ul>
                </button></li>
              <li id="menu-item-788" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-788"><a href="https://www.euroben.se/ppa-13/">Sjukpension enligt PPA 13</a></li>
              <li id="menu-item-784" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-784"><a href="https://www.euroben.se/ppa-07/">PPA 07</a></li>
              <li id="menu-item-783" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-783"><a href="https://www.euroben.se/k06-bil-g/">K06 Bil G</a></li>
              <li id="menu-item-782" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-782"><a href="https://www.euroben.se/k06-bil-g-ppak/">K06 Bil G PPAK</a></li>
            </ul>
            <li id="menu-item-776" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-776"><a href="https://www.euroben.se/kapitalforvaltare/">Kapitalförvaltning</a><button className="showsub-toggle" aria-expanded="false"><a href="https://www.euroben.se/kapitalforvaltare/" />
                <ul className="sub-menu">
                  <li id="menu-item-794" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-794"><a href="https://www.euroben.se/om-kapitalforvaltning/">Om kapitalförvaltning</a></li>
                </ul>
              </button></li>
            <li id="menu-item-781" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-781"><a href="https://www.euroben.se/ladda-ner-information/">Försäkringsvillkor och dokument</a></li>
            <li id="menu-item-780" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-780"><a href="https://www.euroben.se/nyhetsarkiv/">Nyhetsarkiv</a></li>
            <li id="menu-item-451" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-451"><a href="http://euroben.ie">Euroben Irland – euroben.ie</a></li>
            <li id="menu-item-795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-795"><a href="https://www.euroben.se/kontakta-oss/">Kontakta oss</a><button className="showsub-toggle" aria-expanded="false"><a href="https://www.euroben.se/kontakta-oss/" />
                <ul className="sub-menu">
                  <li id="menu-item-779" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-779"><a href="https://www.euroben.se/klagomal/">Klagomål</a></li>
                  <li id="menu-item-778" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-778"><a href="https://www.euroben.se/provningsmojligheter-utanfor-euroben/">Prövningsmöjligheter utanför Euroben</a></li>
                  <li id="menu-item-777" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-777"><a href="https://www.euroben.se/konsumentvagledning/">Konsumentvägledning</a></li>
                </ul>
              </button></li>
            <li id="menu-item-796" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-796"><a href="https://www.euroben.se/om/">Om Euroben</a></li>
          </div>			
          </nav>
    )}
  />
)}

export default Menu