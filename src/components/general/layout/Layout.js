import React from "react"

import Navbar from "../../molecules/navbar/Navbar";
import Footer from "../../molecules/footer/Footer";
import Sidebar from "../../molecules/sidebar/Sidebar";
import Seo from "../seo/SEO"

const Layout = ({children, seo}) => {

    return (
        <React.Fragment>
            <Seo
                title={seo.title && seo.title}
                description={seo.description && seo.description}
                image={seo.preview && seo.preview.localFile.publicURL}
                keywords={seo.keywords && seo.keywords}
                noIndex={seo.isIndexable && seo.isIndexable}
            />
            <Navbar
                menus={[
                    {
                        "name": "Cégek",
                        "slug": "/test",
                    },
                    {
                        "name": "Családok",
                        "slug": "/test",
                    },
                    {
                        "name": "Gyerekek",
                        "slug": "/test",
                    },
                    {
                        "name": "Esküvő",
                        "slug": "/test",
                    },
                    {
                        "name": "Lovaglás",
                        "slug": "/test",
                    },
                    {
                        "name": "Szállás",
                        "slug": "/test",
                    },
                ]}
            />
            <Sidebar
                menus={[
                    {
                        "name": "Helyszínek",
                        "slug": "/test",
                    },
                    {
                        "name": "Szolgáltatások",
                        "slug": "/test",
                    },
                    {
                        "name": "Ajánlatkérés",
                        "slug": "/test",
                    },
                    {
                        "name": "Kapcsolat",
                        "slug": "/test",
                    },
                ]}
            />
            {children}
            <Footer
                description={"Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars."}
                phone={"+36 30 401 30 30"}
                email={"verteslovas@gmail.com"}
                address={"8085 Vértesboglár, Kossuth L. u. 69."}
            />
        </React.Fragment>
    )
}

export default Layout