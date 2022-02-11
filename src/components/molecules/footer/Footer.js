import React from 'react';
import {FooterContainer,FooterWrapper,LogoContainer,FooterSocialWrapper,FooterContentWrapper,FooterLinkWrapper,FooterContactContainer,FooterContactWrapper,FooterCopyrightContainer} from "../styled/footer/footerComponents";
import {Body, Header3} from "../../atoms/styled/typography/typographyComponents";
import {Link} from "gatsby";

const Footer = ({logo, facebook, insta, phone, address, email, description}) => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterContentWrapper>
                    <LogoContainer>
                        <img src={logo}/>
                        <Header3 sand={true} textAlign="left" alignSelf="center" >Vérteslovas</Header3>
                    </LogoContainer>
                    <Body color={"dark-grey"} marginTop={"small"}>{description}</Body>
                </FooterContentWrapper>
                <FooterContactContainer>
                    <FooterContactWrapper>
                        <Body weight={"bold"}>Elérhetőség</Body>
                        <Body>Telefon: {phone}</Body>
                        <Body>Email: {email}</Body>
                        <Body>Cím: {address}</Body>
                    </FooterContactWrapper>
                    <div>
                        <Body weight={"bold"}>Social</Body>
                        <FooterSocialWrapper>
                            <img src={facebook}/>
                            <img src={insta}/>
                        </FooterSocialWrapper>
                    </div>

                </FooterContactContainer>

            </FooterWrapper>
            <FooterCopyrightContainer>
                <Body color={"dark-grey"}>© Copyright 2022 Vérteslovas Szabadidőpark</Body>
                <FooterLinkWrapper>
                    <a>First Link</a>
                    <a>First Link</a>
                    <a>First Link</a>
                </FooterLinkWrapper>
            </FooterCopyrightContainer>
        </FooterContainer>
    );
};

export default Footer;