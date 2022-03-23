import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import Main from './pages/Main';


function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="wrapper">
          <Header />
          <Main />
        </div>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  .wrapper {
    width: 500px;
    background-color: #fff;
    
  }
`;

export default App;
