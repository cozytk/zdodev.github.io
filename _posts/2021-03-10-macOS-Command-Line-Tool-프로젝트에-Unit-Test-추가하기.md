---
title: "macOS Command Line Tool 프로젝트에 Unit Test 추가하기"
categories: 
  - macOS
  - XCTest
last_modified_at: 2021-03-10 11:00:00
toc: true #Table of Contents
comments: true


---

### macOS 프로젝트에서 테스트 생성하기

Xcode에서 순수하게 Swift만을 다루기 위해 macOS Command Line Tool 프로젝트를 생성할 때가 종종 있는데, 이때 테스트를 포함해서 생성하는 기능이 없어서 프로젝트 생성 후 Unit Test를 추가하는 방법을 정리해보았습니다.

Xcode를 실행한 후 `Create a new Xcode project`를 클릭합니다.

![2021-03-09-21-24-52-Unit-Test](/assets/image/2021-03-09-21-24-52-Unit-Test.png)

`macOS` 플랫폼에서 `Command Line Tool`을 선택합니다.

![2021-03-09-21-25-42-Unit-Test](/assets/image/2021-03-09-21-25-42-Unit-Test.png)

`Product Name`을 입력한 후 프로젝트를 생성합니다.

![2021-03-09-21-25-49-Unit-Test](/assets/image/2021-03-09-21-25-49-Unit-Test.png)

프로젝트 환경설정 중앙 왼쪽에 있는 `TARGETS` 탭  가장 하단의 `+` 버튼을 클릭합니다.

![2021-03-09-21-26-09-Unit-Test](/assets/image/2021-03-09-21-26-09-Unit-Test.png)

`macOS` 플랫폼에서 Unit을 검색하여 `Unit Testing Bundle` 을 선택합니다.

![2021-03-09-21-26-23-Unit-Test](/assets/image/2021-03-09-21-26-23-Unit-Test.png)

`Product Name` 을 입력하고 테스트를 생성합니다.

![2021-03-09-21-26-28-Unit-Test](/assets/image/2021-03-09-21-26-28-Unit-Test.png)

화면 상단의 터미널 아이콘이 있는 `MyApp` 을 클릭합니다. (아까 클릭한 TARGETS 탭에서 최상단으로 바로 올라가면 됩니다.) 클릭 후 `Edit Scheme` 을 클릭합니다.

![2021-03-09-21-26-50-Unit-Test](/assets/image/2021-03-09-21-26-50-Unit-Test.png)

Test 탭에서 하단의 `+` 버튼을 클릭합니다.

![2021-03-09 at 9.26.56 PM-Unit-Test](/assets/image/2021-03-09 at 9.26.56 PM-Unit-Test.png)

이전에 생성한 Test를 선택하고 `Add` 를 클릭합니다.

![2021-03-09 at 9.27.00 PM-Unit-Test](/assets/image/2021-03-09 at 9.27.00 PM-Unit-Test.png)

`main.swift` 에서 테스트할 코드를 작성하고 오른쪽 `Target Membership` 탭에서 `Tests`(생성한 테스트이름) 체크박스를 선택합니다.

![2021-03-09 at 9.29.19 PM-Unit-Test](/assets/image/2021-03-09 at 9.29.19 PM-Unit-Test.png)

테스트 코드를 작성하고 테스트를 수행하면 정상적으로 테스트가 수행되는 것을 확인할 수 있습니다.😎

![2021-03-09 at 9.29.59 PM-Unit-Test](/assets/image/2021-03-09 at 9.29.59 PM-Unit-Test.png)