import React from 'react';

import {
    FooterContainer,
    FooterWrapper,
    LogoContainer,
    FooterSocialWrapper,
    FooterContentWrapper,
    FooterContactContainer,
    FooterContactWrapper,
    FooterCopyrightContainer, ContactMapIframeWrapper
} from "../styled/footer/footerComponents";
import {Body, Header3} from "../../atoms/styled/typography/typographyComponents";

import facebook from "../../../../static/assets/Facebook.png"
import insta from "../../../../static/assets/Instagram.svg"
import logo from "../stories/dummy/Logo.png"

const Footer = ({phone, address, email}) => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterContentWrapper>
                    <LogoContainer>
                        <img alt="logo" src={logo}/>
                        <Header3 sand={true} textAlign="left" alignSelf="center">Vérteslovas</Header3>
                    </LogoContainer>
                    <ContactMapIframeWrapper>
                        <iframe scrolling="no" marginHeight="0" marginWidth="0" title="netopgraf-map"
                                src="https://maps.google.com/maps?q=V%C3%A9rteslovas%20Erdei%20Iskola%20%C3%A9s%20Szabadid%C5%91park&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                height="600" frameBorder="0" width={"450"}>
                        </iframe>
                    </ContactMapIframeWrapper>
                </FooterContentWrapper>
                <FooterContactContainer>
                    <FooterContactWrapper>
                        <Body weight={"bold"} marginBottom="small">Elérhetőség</Body>
                        <Body>Telefon: {phone}</Body>
                        <Body>Email: <a href={"mailto:" + email}>{email}</a></Body>
                        <Body>Cím: {address}</Body>
                    </FooterContactWrapper>
                    <div>
                        <Body weight={"bold"} marginBottom="small">Social</Body>
                        <FooterSocialWrapper>
                            <a href={"https://facebook.com/verteslovas"} target={"_blank"} rel={"noreferrer"}>
                                <img alt="face" src={facebook}/>
                            </a>
                            <a href={"https://instagram.com/verteslovas"} target={"_blank"} rel={"noreferrer"}>
                                <img alt="insta" src={insta}/>
                            </a>
                        </FooterSocialWrapper>
                    </div>
                </FooterContactContainer>
            </FooterWrapper>
            <FooterCopyrightContainer>
                <Body color={"dark-grey"}>© Copyright 2022 - Vérteslovas Szabadidőpark</Body>
            </FooterCopyrightContainer>
        </FooterContainer>
    );
};

export default Footer;