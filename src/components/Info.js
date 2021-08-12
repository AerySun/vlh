import styled from "styled-components";
import CQ from "../res/Conny.webp"

const Info = ({ className }) => {
    return(
        <div className={className}>
            <div className='info_wrapper'>
                <img src={CQ} alt="" />
                <p>Beratungsstellenleiterin</p>
                <p className='bold'>Cornelia Quinten</p>
                <p>DIN 77700-zertifiziert</p>
                <div className='small_font'>
                    <p>Welvertstr. 2</p>
                    <p>66606 St. Wendel</p>
                    <p><a className='tel' href="tel:+496851806407">06851 806407</a></p>
                    <p><a className="maillink" href="mailto:cornelia.quinten@vlh.de">cornelia.quinten@vlh.de</a></p>
                </div>
            </div>
        </div>
    )
}

const StyledInfo = styled(Info)`
    color: white;
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    align-content: center;
    max-height: 550px;
    
    img{
        border-radius: 50%;
        align-self: center;
    }

    .bold{
        font-size: 1.25rem;
        font-weight: bold;
    }

    .small_font{
        font-size: .95rem;
        padding: -1rem 0;
    }

    .tel{
        color: #f63;
        text-decoration: none;
    }

    .maillink{
        text-decoration: none;
        color: #f63;
        margin-bottom: 20px;
    }
`

export default StyledInfo