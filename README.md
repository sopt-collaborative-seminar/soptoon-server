# SOPToon 7조 서버

## 링크

- [SOPToon 7조 API 문서](https://docs.google.com/spreadsheets/d/1AEwCiex_988VvvxVCLf02J85tgG-PBzTwXg7_sqCPf0/edit?usp=drive_web&ouid=108513580381149678391)
- [SOPToon 7조 DB ERD](https://drive.google.com/drive/folders/1Rwlh0jCc0AXZDa0R1y7bepb7y--1Lr5g)
- [SOPToon 디자인](https://xd.adobe.com/spec/12b5b616-bf84-46c4-7139-8c0617a29467-6484/screen/a4c8c20a-cd69-4124-b3bc-ade9a9cf0eee/-/)

## 진행 사항

1. 안드에서 필요한 API 우선 구현
   1. auth
      1. 로그인
      2. 회원가입
   2. banners
      1. 배너 조회
   3. webtoons
      1. 웹툰 조회
      2. 웹툰 좋아요
   4. episodes
      1. 에피소드 리스트 조회
      2. 에피소드 상세 조회
   5. comments
      1. 댓글 작성
      2. 댓글 조회
2. 데이터 삽입하여 대략적인 테스트 가능
3. 서버에 `3000`번 포트로 실행중
4. postman import link : https://www.getpostman.com/collections/89aa201edfdf1f94b1cf