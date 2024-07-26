import styled from 'styled-components';

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    list-style: none;
`
const Options = styled.ul`
    display: flex;
`

const textOptions = ['Category', 'Favorites', 'My bookshelf']

function HeaderOptions() {
    return (

        <Options>
            {textOptions.map((texto) => (<Option><p>{texto}</p></Option>))}
        </Options>
    )
}

export default HeaderOptions;