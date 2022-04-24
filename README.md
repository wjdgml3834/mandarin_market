## 감귤마켓
- 멋쟁이사자처럼 프론트엔드 스쿨 1기 팀 프로젝트로 진행한 감귤마켓입니다.
- 상품을 등록하고 판매할 수 있는 SNS 마켓입니다.
- 글, 사진과 함께 자신의 일상을 공유할 수 있습니다.

개발 기간: 22.01. - 22.04.

## 스택
- React Hook
- TypeScript
- Next.js
- Emotion

## 실행 방법
---

To Start
```bash
$yarn dev
```

## 폴더 구조
```bash
├── src
│   ├── components
│   │   ├── BackButton.tsx
│   │   ├── Border.tsx
│   │   ├── Custom404.tsx
│   │   ├── Error.tsx
│   │   ├── Loading.tsx
│   │   ├── ProfileForm.tsx
│   │   ├── ProfileUpdate.tsx
│   │   ├── developer
│   │   │   ├── Developer.tsx
│   │   │   └── Footer.tsx
│   │   ├── follower
│   │   │   ├── Card.tsx
│   │   │   ├── CardContainer.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Main.tsx
│   │   ├── following
│   │   │   ├── Card.tsx
│   │   │   ├── CardContainer.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Main.tsx
│   │   ├── home
│   │   │   ├── Card.tsx
│   │   │   ├── CardContainer.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Main.tsx
│   │   │   ├── Nonfeed.tsx
│   │   │   ├── ReportCancelModal.tsx
│   │   │   └── ReportModal.tsx
│   │   ├── layouts
│   │   │   ├── Layout.tsx
│   │   │   ├── StatusBar.tsx
│   │   │   └── index.tsx
│   │   ├── login
│   │   │   ├── Email.tsx
│   │   │   └── Main.tsx
│   │   ├── postDetail
│   │   │   ├── CoReportCancelModal.tsx
│   │   │   ├── Comment.tsx
│   │   │   ├── CommentDelModal.tsx
│   │   │   ├── CommentList.tsx
│   │   │   ├── CommentModal.tsx
│   │   │   ├── Container.tsx
│   │   │   └── DetailCard.tsx
│   │   ├── postUpload
│   │   │   ├── Container.tsx
│   │   │   ├── EditContainer.tsx
│   │   │   ├── FileUpload.tsx
│   │   │   ├── PostEdit.tsx
│   │   │   └── PostUpload.tsx
│   │   ├── product
│   │   │   ├── Container.tsx
│   │   │   ├── EditContainer.tsx
│   │   │   ├── FileUpload.tsx
│   │   │   ├── Modification.tsx
│   │   │   ├── ProductDeleteModal.tsx
│   │   │   ├── ProductModal.tsx
│   │   │   └── Register.tsx
│   │   ├── profile
│   │   │   ├── Carousel.tsx
│   │   │   ├── CarouselCard.tsx
│   │   │   ├── DeleteModal.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Info.tsx
│   │   │   ├── LogOutModal.tsx
│   │   │   ├── MyContainer.tsx
│   │   │   ├── MyPostCard.tsx
│   │   │   ├── MyPostContainer.tsx
│   │   │   ├── MyProfileModal.tsx
│   │   │   ├── PostModal.tsx
│   │   │   ├── ProfileAppPost.tsx
│   │   │   └── ProfilePost.tsx
│   │   ├── research
│   │   │   ├── Card.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Main.tsx
│   │   └── signup
│   │       ├── SignUp.tsx
│   │       └── SignUpProfile.tsx
│   ├── constants
│   │   └── index.ts
│   ├── pages
│   │   ├── 404.tsx
│   │   ├── _app.tsx
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...nextauth].ts
│   │   ├── developer
│   │   │   └── index.tsx
│   │   ├── follow
│   │   │   └── [id]
│   │   │       ├── follower.tsx
│   │   │       └── following.tsx
│   │   ├── home
│   │   │   └── index.tsx
│   │   ├── home.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── post
│   │   │   ├── [...params].tsx
│   │   │   └── upload.tsx
│   │   ├── postdetail
│   │   │   └── [id].tsx
│   │   ├── product
│   │   │   ├── [...params].tsx
│   │   │   └── index.tsx
│   │   ├── profile
│   │   │   ├── [...params].tsx
│   │   │   ├── edit.tsx
│   │   │   └── index.tsx
│   │   ├── research.tsx
│   │   └── signup.tsx
│   └── types
│       ├── Comments.ts
│       ├── Follower.ts
│       ├── Following.ts
│       ├── MyPost.ts
│       ├── Posts.ts
│       └── Product.ts
```



## 기능

## 김정희

- 홈 화면 게시글 : 사용자의 로그인 정보를 불러와서, 자신이 팔로우한 사람들의 게시글들만 보여질 수 있도록 구현하였습니다. map() 함수를 이용해 컴포넌트를 반복해서 보여줄 수 있도록 하였습니다. 연관이 있는 코드들끼리 서로 구분이 잘 될 수 있도록 리팩토링 및 추상화 과정을 거쳤습니다. <br>
- 홈 화면 케러셀 구현: 외부 라이브러리 도움없이 캐러셀을 직접 구현하였습니다. 데이터에 담긴 이미지의 개수에 따라서 슬라이드를 넘길 수 있는 버튼의 개수가 각각 다르도록 구현하였습니다. DOM을 조작하고, 이벤트 핸들링을 통해 사용자가 팔로우한 게시글들의 이미지를 버튼클릭을 통해서 넘겨서 볼 수 있도록 구현하였습니다. <br>
- 팔로우, 팔로우 취소 기능 구현: 로그인 정보를 이용하여, 유저가 팔로우한 사람들과 유저를 팔로우한 사람들을 나누어서 데이터를 불러왔습니다. HTTP POST 메서드를 사용하여 사용자가 팔로우와 팔로우 취소 기능을 사용할 수 있도록 기능을 구현하였습니다.

---

### 1) 홈

|로그인|회원가입|홈|
|:-:|:-:|:-:|
|![로그인](https://user-images.githubusercontent.com/92927950/163723636-c3ec1409-9995-4b89-9fc3-5d568d8f5977.gif)|![회원가입](https://user-images.githubusercontent.com/92927950/163723668-bd56f9d9-7db8-4740-8b4c-9ab7bf2f7951.gif)|![홈화면](https://user-images.githubusercontent.com/92927950/163723799-f7a96379-9f10-46e3-ad52-d7d6fcaa992a.gif)|


|계정검색(팔로우 O)|계정검색(팔로우 X)|개발자|
|:-:|:-:|:-:|
|![계정검색](https://user-images.githubusercontent.com/92927950/163723804-0f4d7b2e-a10f-488d-8f64-cb051b5466c9.gif)|![계정검색(팔로우x)](https://user-images.githubusercontent.com/92927950/163724271-ab6c5217-69cb-45b9-9cb3-5a7a12909985.gif)|![개발자](https://user-images.githubusercontent.com/92927950/163723807-482185a2-2976-4ada-9f88-11fe1e107e2c.gif)|

<br>

### 2) 프로필

|마이 프로필|팔로워|팔로잉|
|:-:|:-:|:-:|
|![프로필](https://user-images.githubusercontent.com/92927950/163724621-6799834c-a60b-456f-9cb6-0e00a606d68b.gif)|![팔로우](https://user-images.githubusercontent.com/92927950/163724680-aaf5c677-0966-4e29-a115-ece4f9a04618.gif)|![팔로잉](https://user-images.githubusercontent.com/92927950/163724682-2ffd9629-9746-4a7c-9fd0-511254ba2493.gif)

|프로필 수정|로그아웃|유저 프로필|
|:-:|:-:|:-:|
|![프로필 수정](https://user-images.githubusercontent.com/92927950/163724768-f57579d7-11c8-4e7b-af3c-52339c726805.gif)|![로그아웃](https://user-images.githubusercontent.com/92927950/163724985-317b398d-dbb5-47a3-9c43-71d7d60fbc42.gif)|![유저 프로필](https://user-images.githubusercontent.com/92927950/163725179-01ced3b3-5434-4621-990f-98dee10a580b.gif)|


<br>

### 3) 게시글

|작성|수정|삭제|
|:-:|:-:|:-:|
|![게시물 작성](https://user-images.githubusercontent.com/92927950/163723954-4fcb8a6d-a31c-4ae3-bc7d-2263cd2c9138.gif)|![게시물 수정](https://user-images.githubusercontent.com/92927950/163723957-8a7febc3-3c63-4f4a-9eaa-1808549df2b2.gif)|![게시물 삭제](https://user-images.githubusercontent.com/92927950/163723958-7aa3b5ed-83bb-4b2a-a3f9-2b51a5ffecdd.gif)|

|신고|댓글 작성|댓글 신고 및 삭제|
|:-:|:-:|:-:|
|![게시글 신고](https://user-images.githubusercontent.com/92927950/163724911-587de063-5aa1-42ea-8ed5-0cb0d94bdb9a.gif)|![댓글 작성](https://user-images.githubusercontent.com/92927950/163724838-e27a234b-ce27-40de-9f81-aca84f18805f.gif)|![댓글 신고 및 삭제](https://user-images.githubusercontent.com/92927950/163724837-ff92476f-0a2b-4ec0-afc0-3ba5b94d1bb6.gif)|

<br>

### 4) 상품

|등록|수정|삭제|
|:-:|:-:|:-:|
|![상품 등록](https://user-images.githubusercontent.com/92927950/163724024-ceb61044-9c50-4ae5-9887-33d9377ee03a.gif)|![상품 수정](https://user-images.githubusercontent.com/92927950/163724026-53f59a62-5b9e-4add-aa51-7df00633ab0d.gif)|![상품 삭제](https://user-images.githubusercontent.com/92927950/163724028-9ddf16aa-a5a2-4594-b9f8-10f87b5b04a9.gif)|



## 느낀점

### 김정희 

- 팀 프로젝트를 함께 하면서 팀원 모두가 성장했다고 느껴져서 뿌듯하다. 서로 자신들의 지식을 공유하고, 팀원들을 도와주면서 하나의 목표를 향해 나아가는 과정이 즐겁고,보람찼다. 이 프로젝트를 진행하면서 branch를 나누어서 pull request를 날리고 디스코드로 계속 이야기를 나누면서 소통을 많이 했다는 점에서 배울 점이 많았던 프로젝트라고 생각한다. 중간에 conflict도 나고, 여러 에러들이 생겼었지만 이를 직접 해결하는 과정에서 깃허브 CLI랑 더욱 친숙해지는 계기가 되었다. 단순히 내가 작성한 코드만 들여다보는 것이 아니라, 다른 팀원들이 작성한 코드를 이해하고, 코드를 직접 수정 및 추가함으로써 새로 배운점이 많았던 프로젝트였다. 
- 로그인 이후 나오는 첫 메인 화면을 담당하면서, axios를 이용해서 API를 요청하고 응답하는 과정이 흥미로웠다. 또한 map() 메서드를 이용하여, 컴포넌트 반복을 구현하고, 여러 게시글들을 효율적으로 불러오는 코드를 작성하는 방법을 배우게 되었다. 그 과정에서 리팩토링과 추상화의 중요성에 대해서 느끼게 되었다. 처음으로 Next-Auth를 통해 개별 유저의 정보를 불러와서 유저마다 다른 게시글들을 보여주는 기능을 구현되었을 때 보람찼다. 외부 라이브러리 도움없이 캐러셀을 구현하면서 DOM 조작과 CSS에 대해서 더욱 깊이 알게된 계기가 되었다. 
- 유저를 팔로우한 사람들과 유저가 팔로잉한 사람들의 리스트를 API로 받아오고, 직접 API에 POST 요청을 보내 팔로우 기능과 팔로우 취소 기능을 구현하면서 HTTP 통신에 대해서 배울 수 있어서 이와 관련된 일을 더욱 잘 처리할 수 있겠다는 자신감이 생겼다. 
- 프로젝트 규모가 조금 커지면서, 최적화와 리팩토링의 중요성에 대해서 알게 되었다. 다음에는 이 부분을 염두에 두고 조금 더 프로젝트 구조 등이 간결해질 수 있도록 코드를 작성해야겠다는 생각을 했다.
- 다음에는 직접 DB 모델링과 API를 구축하여 프로젝트를 진행해보고 싶다는 목표가 생겼다.
