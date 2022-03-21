import logo from './logo.svg';
import './App.css';

const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;


function App() {
  
  const getHtml = async () => {
    try {
      return await axios.get(
        'https://balaan.co.kr/shop/pc2m.php?landing_url=/m2/main/contents.php'
      ); // axios.get 함수를 이용하여 비동기로 네이버의 html 파일을 가져온다.
    } catch (error) { console.error(error); }
  };
  getHtml()
    .then(html => {
      let ulList = [];
      const $ = cheerio.load(html.data);
      const $bodyList = $('#contents-list').children('#contents-list > div:nth-child(1)');
      $bodyList.each(function (i, elem) {
        ulList.push({
          url: $(this).find('img.contents-for-grid').attr('src'),
          nick: $(this).find('a.contents-editor').text(),
        });
      });
      return ulList;
    }).then(res => log(res));

  return (
    <div className="App">
    </div>
  );
}

export default App;
