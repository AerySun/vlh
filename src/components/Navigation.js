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
                    66606 St.Wendel
                    Welvertstr. uwu
                </div>
            )}
        </nav>
    )
}

const StyledNavigation = styled(Navigation)`
display: flex;
justify-content: space-between;
flex-grow: 1;

a {
    text-decoration: none;
    color: #015697;
}

`

export default StyledNavigation