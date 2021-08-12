import styled from "styled-components";
import teaserLogo from "../res/woman.jpg"

const Teaser = ({ className }) => {
    return(
        <div className={className}>
            <div className='wrapper'>
                <p>Steuern? Wir machen das</p>
                <img src={teaserLogo} alt="" />
            </div>
        </div>
    )
}

const StyledTeaser = styled(Teaser)`
position: relative;
height: 100%;
align-content: flex-end;
object-fit: cover;
overflow: hidden;

p{
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 2.5rem;
    padding: 2rem;
}


`

export default StyledTeaser