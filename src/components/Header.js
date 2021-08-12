import styled from "styled-components"
import vlhLogo from "../res/VLH.jpg"
import Navigation from "./Navigation"

const Header = ({ className }) => {
    return(
        <header className={className}>
            <div className='left'>
                <img src={vlhLogo} alt="" />
            </div>
            <Navigation />
        </header>
    )
}

const StyledHeader = styled(Header)`
height: 80px;
display: flex;
align-items: center;
padding: 0 2rem;

.left {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        object-fit: contain;
        width: 200px;
        height: 60px;
    }
}

`

export default StyledHeader