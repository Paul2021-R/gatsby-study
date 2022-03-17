import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
    display: grid;
    place-item: center;
    margin-top: auto;
    padding: 50px 0;
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
`

const Footer: FunctionComponent = () => {
    return (
        <FooterWrapper>
            Thank you for Visiting My Blog, Have a Good Day 😆
            <br /> © 2022 Developer Hansol Ryu, Powered By Gatsby.
        </FooterWrapper>
    )
}
    
export default Footer