import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import Main from './pages/Main';
import Review from './pages/Review';
import Detail from './pages/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="wrapper">
          <BrowserRouter>
            <Routes>
              <Route path="/"  element={<Main />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/review" element={<Review />} />
            </Routes>
          </BrowserRouter>
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
