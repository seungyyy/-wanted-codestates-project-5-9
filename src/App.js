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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.02) 0px 15px 10px -15px;
  }
`;

export default App;
