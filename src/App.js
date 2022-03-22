import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getReviewListSuccess } from './state/reducers/registerReducer';


function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const getData = () => {
    const add = state.register.data.unshift({
      id: 162918,
      point: 4,
      contents: '아주편하고 아주좋아요 ',
      like: 0,
      opt: 'CHESTNUT (15564) / 39(245)',
      regdt: '2022-03-21 18:09:01',
      cdt: 1647853741,
      thumbnail: '293db7598fcf2e152407cd49024563be-t.jpg',
      nickname: 'jo8983_',
      memberSize: '평소 신발 사이즈 : 240',
      reviewSize: [
        {
          txt: '정사이즈에요',
          title: '사이즈는 어떤가요?',
        },
        {
          txt: '화면과 같아요',
          title: '색상은 어떤가요?',
        },
        {
          txt: '적당해요',
          title: '발볼은 어떤가요?',
        },
      ],
      comments: [],
    });
    try {
      dispatch(getReviewListSuccess(add));
    } catch (e) { 
      console.log(e)
    }
  };

  useEffect(() => { 
    getData();
    console.log(state);
  },[])

  return (
    <div className="App">
    </div>
  );
}

export default App;
