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
                phone={"+36 1 0111111"}
                email={"info@verteslovas.hu"}
                address={"1221 kiskurutty utca 32"}
            />
        </React.Fragment>
    )
}

export default Layout