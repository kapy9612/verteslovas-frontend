import React from "react"

import Navbar from "../../molecules/navbar/Navbar";
import Footer from "../../molecules/footer/Footer";
import Sidebar from "../../molecules/sidebar/Sidebar";
import Seo from "../seo/SEO"

const Layout = ({children, seo, isChild}) => {

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
                isCamp={isChild}
                menus={!isChild ? [
                    {
                        "name": "Gyerekek",
                        "slug": "",
                        "hasSubmenu": true,
                        "submenu": [
                            {"name":"Születésnapok", "slug":"/szuletesnapok"},
                            {"name":"Saját táboraink", "slug":"/sajattaboraink"},
                            {"name":"Szervezz nálunk tábort", "slug":"/szervezznalunktaborokat"},
                        ]
                    },
                    {
                        "name": "Esküvő",
                        "slug": "/eskuvo",
                    },
                    {
                        "name": "Cégek",
                        "slug": "/cegeknek",
                    },
                    {
                        "name": "Családok",
                        "slug": "/csaladoknak",
                    },
                    {
                        "name": "Lovaglás",
                        "slug": "/lovaglas",
                    },
                    {
                        "name": "Szállás",
                        "slug": "/szallasok",
                    },
                    {
                        "name": "Szolgáltatások",
                        "slug": "/szolgaltatasok",
                    },
                ] : [
                    {
                        "name":"Szervezz nálunk tábort",
                        "slug":"/szervezznalunktaborokat"
                    },
                    {
                        "name":"Saját táboraink",
                        "slug":"/sajattaboraink"
                    },
                    {
                        "name":"Születésnapok",
                        "slug":"/szuletesnapok"
                    },
                    {
                        "name": "Lovaglás",
                        "slug": "/lovaglas",
                    },
                    {
                        "name": "Felnőttek",
                        "slug": "",
                        "hasSubmenu": true,
                        "submenu": [
                            {"name": "Cégek", "slug": "/cegeknek"},
                            {"name": "Családok", "slug": "/csaladoknak"},
                            {"name": "Esküvő", "slug": "/eskuvo"},
                        ]
                    },
                    {
                        "name": "Szolgáltatások",
                        "slug": "/szolgaltatasok",
                        "hasSubmenu": true,
                        "submenu": [
                            {"name": "Szállás", "slug": "/szallasok"},
                        ]
                    },
                ] }
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