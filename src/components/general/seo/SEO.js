import React from "react"
import {Helmet} from "react-helmet"
import { useLocation } from "@reach/router"

import favicon from "/static/assets/verteslovas_logo.png"
import defaultImage from "/static/assets/verteslovas_logo.png"

const Seo = ({ title, description, keywords, image, isBlogPost, noIndex}) => {

    const { pathname } = useLocation()
    const defaultUrl = "https://verteslovas.hu";

    return (
        <Helmet htmlAttributes={{lang: "hu"}}>
            {/* General tagek, az alap seóhoz */}
            <title>{title}</title>
            {description && <meta name="description" content={description}/>}
            {keywords && <meta name="keywords" content={keywords}/>}
            <link rel="canonical" href={defaultUrl + pathname}/>
            <link rel="icon" href={favicon} sizes="any" type="image/svg+xml"/>
            {/* Ha nem kell googleban indexelni */}
            {noIndex && <meta name="robots" content="noindex" />}
            {/* OpenGraph tagek, a social mediához */}
            <meta property="og:title" content={title}/>
            <meta property="og:url" content={defaultUrl + pathname}/>
            {image ? <meta property="og:image" content={defaultUrl + image}/> : <meta property="og:image" content={defaultUrl + defaultImage}/>}
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            {isBlogPost ? <meta property="og:type" content="article"/> : <meta property="og:type" content="website"/>}
            {description && <meta property="og:description" content={description}/>}
            <meta property="og:locale" content={"hu"}/>
        </Helmet>
    )
}

export default Seo