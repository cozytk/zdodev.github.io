var store = [{
        "title": "first post",
        "excerpt":"zerodotone의 첫 포스팅인 것인가      이것은 인용인 것인가            이것은 단락인 것인가 header 2 인 것인가       func swift() { \tprint(\"이것은 코드인 것인가\") }   이것은 코드인 것이다.           하나 둘 셋       이것은 하나 둘 셋 인 것인가      내 블로그인 것이야   ","categories": ["etc"],
        "tags": [],
        "url": "/etc/first-post/",
        "teaser": null
      },{
        "title": "iOS link",
        "excerpt":"링크 모음   Xcode 프로젝트 컨벤션: Xcode 프로젝트 구성 시 네이밍 컨벤션 도움글.   ","categories": ["iOS"],
        "tags": [],
        "url": "/ios/iOS-link/",
        "teaser": null
      },{
        "title": "UML Class Diagram",
        "excerpt":"Class Diagram, 클래스 다이어그램   클래스 다이어그램은 클래스 내부의 정적인 내용이나 클래스 사이의 관계를 표현할 수 있는 다이어그램이다. 클래스 내부의 변수, 메서드를 표현하고 각 클래스간의 관계(상속, 참조 등)을 나타낼 수 있다. 한 마디로 소스코드에 나타난 타입간의 의존 관계를 모두 나타낸다.   클래스 다이어그램의 구성 요소         abstract: 추상 클래스는 구현체가 없는 1개 이상의 추상 메서드를 가지고 있는 클래스입니다.   annotation: annotation의 경우 Java 5에서 추가된 기능으로 @Override, @Deprecated 와 같은 annotation이 있다.   class: 객체지향 언어에서의 클래스입니다.   entity: 시스템이 동작할 때 오랫동안 그 값이 유지되어야 하는 클래스?   enum: 열거형을 나타냅니다.   interface: 인터페이스를 나타냅니다.   관계의 종류   클래스간에는 다양한 관계가 있을 수 있으며 표현 방식도 다양합니다.   Association, 연관 관계   다른 객체의 참조를 가지는 인스턴스 변수를 가지고 있을 때 두 클래스는 연관 관계라고 한다. 아래 그램은 Phone 클래스가 Button 클래스를 참조하는 연관 관계를 보여줍니다.      연관 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.   class Phone {   \t// buttons 프로퍼티의 타입이 Button 클래스     let buttons: Button = Button() }  class Button {      }   ","categories": ["UML","Swift"],
        "tags": [],
        "url": "/uml/swift/UML-Class-Diagram/",
        "teaser": null
      },{
        "title": "macOS 초기 설정하기",
        "excerpt":"키보드 누르고 있을 때 반복 입력하도록 수정   터미널이나 메모장에서 키보드를 누르고 있으면 문자가 하나만 입력되는데 키보드를 누르고 있으면 계속 입력되도록 변경하려면 터미널에서 다음의 명령을 실행합니다.   defaults write -g ApplePressAndHoldEnabled -bool false   해당 명령을 실행하고 프로그램을 다시 실행시키면 문자를 계속 입력 할 수 있습니다.     중간중간 점(.) 입력될 때 해당 기능 끄기   타이핑 시 중간에 점(.)이 입력될 때가 있다. 원인을 알아보니 스페이스 바를 두 번 누르면 입력이 되는 데 해당 기능이 방해가 된다면 키보드 환경 설정에서 해당 기능을 끌 수 있다.      설정 경로     🍏 &gt; System Preferences &gt; Keyboard &gt; Text    Add period with double-space 메뉴의 체크박스를 해제하면 된다.     ","categories": ["macOS","Preferences"],
        "tags": [],
        "url": "/macos/preferences/macOS-%EC%B4%88%EA%B8%B0-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Vapor(Swift Server Side Web Framework)",
        "excerpt":"Vapor란?   Vapor는 Swift로 작성된 오픈소스 웹 프레임워크입니다. RESful API, 웹 앱을 지원하고, 웹 소켓을 사용하여 실시간 애플리케이션을 만드는데 사용할 수 있습니다. 그 외에도 ORM, 템플릿 언어 및 패키지를 제공하여 사용자 인증, 인가 기능을 용이하게 합니다.     Vapor 설치하기   Vapor를 설치하기 위해서 Xcode, homebrew 가 설치되어 있어야 합니다. 이후 다음과 같이 Vapor를 설치할 수 있습니다.           터미널에서 다음 명령어를 실행하여 Vapor를 설치합니다.       brew install vapor                    Vapor 프로젝트 생성 및 서버 실행하기   Vapor 설치 후 프로젝트를 생성하고 서버에 접속하여 Hello, world! 화면을 출력할 수 있습니다.           터미널에서 다음 명령어를 실행하여 새 프로젝트를 생성합니다.       vapor new hello -n                       프로젝트 생성하면 다음 명령어를 실행하여 Xcode로 프로젝트를 열 수 있습니다.       cd hello open Package.swift                       Xcode에서 프로젝트를 실행합니다.              중간에 Developer Tools Access 창이 뜨는데 인증하고 넘어갑니다.                   로컬에서 실행된 Vapor에 접근하면 \"Hello, world!\" 메시지를 확인할 수 있습니다.              http://127.0.0.1:8080/hello               참고 URL     Vapor 공식 사이트   Vapor GitHub   Vapor Wiki   ","categories": ["Vapor","Web Framework"],
        "tags": [],
        "url": "/vapor/web%20framework/Vapor(Swift-Server-Side-Framework)-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "macOS 업데이트 후 개발도구 에러 해결하기(xcrun error)",
        "excerpt":"xcrun: error: invalid active developer path 에러 해결하기   macOS 업데이트 후 xcrun: error: invalid active developer path 관련 에러가 출력될 때가 있습니다. 특히 Big Sur 업데이트 이후 계속 발생하여 해결방법을 정리해보았습니다.      다음 명령어를 실행하여 command line developer tools를 재설치하면 문제가 해결됩니다.   xcode-select --install   ","categories": ["macOS"],
        "tags": [],
        "url": "/macos/macOS-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%ED%9B%84-%EA%B0%9C%EB%B0%9C%EB%8F%84%EA%B5%AC-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0/",
        "teaser": null
      }]
