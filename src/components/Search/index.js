import Input from '../Input'
import styled from 'styled-components'

const SearchContainer = styled.section`
        background-image: linear-gradient(90deg, #000, #326589 200%);
        color: #FFF;
        text-align: center;
        height: 250px;
        width: 100%;
`
const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitle = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Search() {
    return(
        <SearchContainer>
            <Title>Already know where start?</Title>
            <Subtitle>Find your book in our bookshelf</Subtitle>
            <Input placeholder="Write your next reading"/>
        </SearchContainer>
    )
}

export default Search