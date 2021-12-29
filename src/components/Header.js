import styled from "styled-components";
import { ReactComponent as BackgroundImage } from "../assets/background_shape_1.svg";

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <BackgroundImage />
            </HeaderWrapper>
            <TitleWrapper>
                <Title>Title</Title>
            </TitleWrapper>
        </>
    )
}

export default Header;

const HeaderWrapper = styled.div`
height: 3.688rem;
top: 0;
position: absolute;
width: 375px;
`
const TitleWrapper = styled.div`
position: relative;
text-align: center;
width: 375px;
`
const Title = styled.h1`
margin: 0;
`