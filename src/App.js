import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background-color: rgb(35, 39, 47);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
`

function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  )
}

export default App;