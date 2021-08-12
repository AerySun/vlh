import { useState } from "react"
import styled from "styled-components"

const Navigation = ({ className }) => {
    const [anfahrtIsShown, setAnfahrtIsShown] = useState(false)
    return (
        <nav className={className}>
            <a href='#'>Willkommen</a>
            <a href='#'>Beratungsstelle</a>
            <a href='#'>&Ouml;ffnungszeiten</a>
            <a href='#' onClick={() => setAnfahrtIsShown(!anfahrtIsShown)}>Anfahrt</a>
            {anfahrtIsShown && (
                <div className='anfahrt'>
                    <p>66606 St.Wendel</p>
                    <p>Welvertstr. 2</p>
                </div>
            )}
        </nav>
    )
}

const StyledNavigation = styled(Navigation)`
display: flex;
justify-content: space-between;
flex-grow: 1;
position: relative;

a {
    text-decoration: none;
    color: #015697;
}

.anfahrt{
    position: absolute;
    top:49px;
    right: -2rem;
    padding: 0 1rem;
    -webkit-backdrop-filter: blur(0.25rem);
    background-color: hsla(0, 0%, 100%, .25);
    border-top: none;
    border-bottom-left-radius: .25rem;
    overflow: hidden;
    z-index: 1;
}
`

export default StyledNavigation