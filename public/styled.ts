import { Link } from "react-router-dom"
import styled from "styled-components"

export const Advertisement = styled.div`
    width: fit-content;
    text-align: center;

`
export const AdsDetail = styled.a`
    position: relative;
    overflow: hidden;
    display: block;
`

export const AdsImage = styled.img`
    vertical-align: middle;
`
export const AdsInfo = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 24px;
    text-align: center;
    z-index: 1;
    color: white;
`

export const AdsInfoBanner = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
    text-align: right;
    z-index: 1;
    color: black;
`
export const AdsButton = styled(Link)`
    text-decoration: none;
    color: black;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    display: block;
    width: fit-content;
    text-align: center;
    margin: auto;
`
export const ImgCard = styled.img`
    width: 90px;
`
export const ImgCardDetail = styled.div`

`
export const PrimaryButton = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    padding: 8px 15px 6px;
    font-size: 12px;
    background-color: #404245;
    margin: 10px 0 15px;
    color: #fff;
    border-radius: 8px;
    font-weight: 400;
    text-align: center;
`
