import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const state = useSelector((state) => state);
 
  useEffect(() => { 
    const add = state.register.data[0].comments.push({
      id: 4395,
      target_id: null,
      depth: 0,
      nickname: 'admin',
      regdt: '2021-10-05T01:36:39.000Z',
      dt: '23주',
      contents: '금주의 베스트 리뷰로 선정되어 상품권 10,000원이 발급 되었습니다!',
    });
    console.log(state);
  },[])

  return (
    <div className="App">
    </div>
  );
}

export default App;
