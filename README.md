## Description

원티드 프리온보딩 **발란**에서 제시한 기업과제입니다.
고객이 리뷰를 등록 하고 리뷰를 확인할 수 있는 기능을 구현합니다.

- **리뷰 등록 페이지** : 리뷰를 등록하는 페이지
- **상품 리뷰 리스트 페이지** : 고객이 구매한 상품에 대한 전체 리뷰를 확인 할 수 있는 페이지
- **상품 리뷰 상세 페이지** : 특정 리뷰를 클릭하면 보이는 리뷰 상세 페이지
  
# 배포 링크

https://wanted-codestates-project-9-79jrym9nl-seungyyy.vercel.app/
## Usage(자세한 실행 방법)

1. git clone

```
git clone https://github.com/seungyyy/wanted-codestates-project-9.git
```

2. wanted_pre_onboarding 폴더를 인터프린터나 컴파일러로 열기
3. 필요한 라이브러리 설치

```
npm install
```

4. 실행

```
npm run start
```

기술스택

- react.js 
- styled-components
- redux
- react-loader-spinne  
- react-icons
- react-share
- react-router

---

# 구현한 방법과 설명

## 상품 리뷰 리스트 페이지

<img width="200" src="https://user-images.githubusercontent.com/54584337/160150907-939129c5-5cec-4f15-8c3f-425f4ee9b13f.gif" alt="gif">
<img width="200" src="https://user-images.githubusercontent.com/54584337/160153211-faa2ba10-46cf-49aa-8870-f76a9f2f2a52.gif" alt="gif">

- 리뷰리스트 무한 스크롤 기능은 Intersection Observer 을 이용하여 구현하였습니다. 무한 스크롤 시 로딩 라이브러리를 사용하고 스크롤시 고정상단버튼이 나오며 클릭시 상단으로 이동합니다.
- 정렬(최신순, 좋아요순, 베스트리뷰순, 랜덤 순)버튼을 클릭하면 모달창이 나오고 하나를 선택하면 선택된 정렬 순으로 리뷰 리스트가 변하게 됩니다. sort와 filter를 사용하여 정렬을 하였습니다.
- 리뷰 목록 표시 형태는 그리드 뷰, 리스트 뷰 두가지가 있으며 버튼 선택시 바뀌게 됩니다.



## 상품 리뷰 상세 페이지 
<img width="200" src="https://user-images.githubusercontent.com/54584337/160154690-c0b5c3d6-be66-4d9c-a1d6-eaeb71fc20cf.gif" alt="gif">
<img width="200" src="https://user-images.githubusercontent.com/54584337/160155955-0c62232a-0dc7-42ed-9c73-597858006b8f.gif" alt="gif">

- 리뷰 리스트에서 리뷰 이미지 클릭시 리뷰 상세페이지로 이동합니다. 해당 리뷰의 정보가 나옵니다.
- 리뷰 댓글을 달 수 있으며 리덕스로 데이터를 관리합니다. 좋아요 버튼을 클릭시 숫자가 올라가며 리덕스로 관리합니다.
- 공유하기 버튼 클릭시 트위터, 페이스북, 라인, 현재 url이 복사가 됩니다.
- 저장하기 버튼은 로그인시 가능하다는 문구가 나옵니다.
## 리뷰 등록 페이지 

<img width="200" src="https://user-images.githubusercontent.com/54584337/160156158-203b8646-ec61-4252-9328-912ac80b5f0e.png" alt="img">
<img width="200" src="https://user-images.githubusercontent.com/54584337/160156396-256443d6-f3f0-4846-a11f-6df85c0cec94.gif" alt="gif">

- 리뷰 제목, 이미지 선택 , 평점(별점 5점 만점) 등록이 되는 페이지입니다. 제목, 내용, 사진 입력이 없을시 저장이 되지 않습니다 사진 선택후 맘에 들지 않을 경우 삭제하고 다시 선택할 수 있습니다.


### 개발 중 어려웠던 점 && 해결
- 리덕스를 사용해서 데이터를 정렬할때 처음에 헤매는 시간이 있었지만 잘 해결하였습니다. 
- 리뷰등록 후 데이터 오류가 발생하는 문제가 있었고 오류를 잡긴했지만 등록후 원래 있던 데이터가 같이 나오지 않는 문제가 있어서 그부분을 더 해결해봐야겠습니다.
- 중복코드를 없앨려고 시도를 했지만 부족한 부분이 많아 리팩토링이 필요합니다.
