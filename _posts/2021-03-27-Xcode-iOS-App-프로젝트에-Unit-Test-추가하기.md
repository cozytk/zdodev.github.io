---
title: "Xcode iOS App 프로젝트에 Unit Test 추가하기"
categories: 
  - iOS
  - XCTest
last_modified_at: 2021-03-27 22:44:00
toc: true #Table of Contents
comments: true


---

### iOS App 프로젝트에서 테스트 생성하기

Xcode에서 iOS App 프로젝트 상황별로 Unit Test를 추가하는 방법을 정리해보았습니다.

### 1. 프로젝트 생성 시 테스트 파일 추가하기

1. Xcode를 실행한 후 프로젝트 생성을 클릭합니다.

  ![2021-03-27 at 22.40.00 AM-xctest1](/assets/image/2021-03-27 at 22.40.00 AM-xctest1.png)

2. iOS App 프로젝트를 선택하고 다음을 클릭합니다.
  ![2021-03-27 at 22.40.00 AM-xctest2](/assets/image/2021-03-27 at 22.40.00 AM-xctest2.png)

3. 프로젝트명을 입력하고 Include Tests 체크박스를 선택 후 다음을 클릭합니다.
  ![2021-03-27 at 22.40.00 AM-xctest3](/assets/image/2021-03-27 at 22.40.00 AM-xctest3.png)

4. 프로젝트 생성 시 테스트 파일이 추가된 것을 확인할 수 있습니다.
  ![2021-03-27 at 22.40.00 AM-xctest4](/assets/image/2021-03-27 at 22.40.00 AM-xctest4.png)

---

### 2. 생성된 프로젝트에서 테스트 파일 추가하기

1. 프로젝트 설정 파일 내 `TARGETS` 탭 맨 하단에 `+` 버튼을 클릭합니다.
![2021-03-27 at 22.41.00 AM-xctest1](/assets/image/2021-03-27 at 22.41.00 AM-xctest1.png)

2. 새로운 타겟 생성 시 Unit Testing Bundle을 선택한 후 다음을 클릭합니다.
![2021-03-27 at 22.41.00 AM-xctest2](/assets/image/2021-03-27 at 22.41.00 AM-xctest2.png)

3. Product 이름을 입력 후 Finish를 클릭합니다.
![2021-03-27 at 22.41.00 AM-xctest3](/assets/image/2021-03-27 at 22.41.00 AM-xctest3.png)

4. 테스트 파일이 생성된 것을 확인할 수 있습니다.
![2021-03-27 at 22.41.00 AM-xctest4](/assets/image/2021-03-27 at 22.41.00 AM-xctest4.png)

이제 테스트를 수행할 수 있습니다. 😎