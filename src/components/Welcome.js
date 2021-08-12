import styled from "styled-components";
import Info from "./Info"
import Teaser from "./Teaser"

const Welcome = ({ className }) => {
    return(
        <main className={className}>
            <Info />
            <Teaser/>
        </main>
    )
}



const StyledWelcome = styled(Welcome)`
display: flex;
max-height: 550px;
height: 550px;
align-items: center;
background-color: rgb(45, 52, 92);
`

export default StyledWelcome