# angular study

## 컴포넌트간의 데이터 전달
- `Angular`는 화면을 구성하는 최소단위가 `Component`
- `Component` 간의 데이터 전달이 필요
---
### 부모 -> 자식 컴포넌트로 데이터 전달
- parent.html
```
<app-child [receive]="parentMsg"></app-child>
<input type="text" [(ngModel)]="parentMsg">
```
- `[receive]="parentMsg"` 는 `[child에서 받을 변수]=parent에서 보낼 변수` 생각하면 된다.
- `ngModel` 을 사용한 양방향 바인딩 처리를 하여 input에 데이터를 입력하면 child Component의 `receive` 로 전달 된다.

- parent.ts
```
export class ParentComponent implements OnInit {

  parentMsg = "";

  childMsg = "";

  constructor() { }

  ngOnInit(): void {
    
  }

}
```
---
### 자식 -> 부모 컴포넌트로 데이터 전달
- parent.html 의 자식컴포넌트에 event 바인딩 추가
```
<app-child [receive]="parentMsg" (childSender)="onMessage($event)"></app-child>
<input type="text" [(ngModel)]="parentMsg">
```
- parent.ts 에 함수 추가
```
  onMessage(event){
    console.log(event)
    this.childMsg = event;
  }

```

- child.html, child ts
```
<p>Parent MSG = {{receive}}</p>
자식 버튼 <input type="button" value="click!" (click)="eventFunction()">
```
```
export class ChildComponent implements OnInit {

  @Input()
  receive : string;

  @Output()
  childSender = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    
  }

  eventFunction(){
    console.log("click!!")
    this.childSender.emit("welcome to parent")
  }

}
```

- child Componet 에서 `EventEmitter` 를 활용하여 parent Component로 이벤트를 전달.
- button click하면 emit하여 파라메터로 메세지를 전달한다. 
---
### 여러 Component로 데이터 전달
- 부모 자식 관계 뿐만 아니라 동시에 다양한 Component로의 데이터 전달이 필요함.
- `rxjs`의 `Subject` 객체를 생성하여 `Observable` 변수를 만들어 각 Component 에서 `Subscribe` 하여 변화 감지 한다.

- MessageService
```
export class MessageService {

  // Subject 객체 생성
  private messageSource = new Subject<string>();
  // Observable 변수 등록
  messageTransfer = this.messageSource.asObservable();
  
  constructor() { }

  // message 전달을 위한 함수
  sendMessage(message:string){
    // Obserable 의 next를 이용하여 메세지 전달
    this.messageSource.next(message);
  }
}
```

- SenderComponent
- sender.html, sender.ts
```
<p>sender works!</p>
<input type="text" [(ngModel)]="sendMessage" (keyup)="onChange()">
<app-receiver-one></app-receiver-one>
<app-receiver-two></app-receiver-two>

export class SenderComponent implements OnInit {

  sendMessage = "";


  constructor(private messageService : MessageServiceService) { }

  ngOnInit(): void {
  }

  onChange(){
    this.messageService.sendMessage(this.sendMessage);
  }

}
```
- `input` 태그로 `sendeMessage` 데이터를 양방향 바인딩
- 텍스트를 입력 받을때 마다 `onChange()`함수를 실행시킨다.


- Receiver Component
- receiver html, ts
```
<p>receiver-one : {{receiveMessage}}</p>

export class ReceiverOneComponent implements OnInit {

  constructor(messageService : MessageServiceService) {
    messageService.messageTransfer.subscribe((message)=>{
      this.receiveMessage = message;
    })
  }

  receiveMessage : string;

  ngOnInit(): void {
  }

}
```

- send Component에서 `input` 태그에 텍트스가 입력 될 때마다 `MessageService` 의 `sendMessage` 를 실행시킨다.
- receiver Component에서 `MessageService` 의 `messageTransfer` 를 구독하고 변화감지한다.

---

### 정리
- rxjs에 대해서 더 공부해보자
- 공부하면서 알게 된것
  - `Hot Observable`
    - 옵저버블에 푸쉬하는 값을 여러 옵저버에 멀티 캐스팅하는 옵저버블이다. 데이터를 공유한다.
  - `Cold Observable`
    - 멀티태스킹이 되지 않는다. 독립적으로 동작하며 푸쉬하는 값이 여러 옵저버에 공유되지 않는다.