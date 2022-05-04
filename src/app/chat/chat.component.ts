import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ChatService } from './chat.service';
import { Observable, scan } from 'rxjs';
// import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger(
      'myAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', 'opacity': 1}),
          animate('500ms', style({transform: 'translateY(100%)', opacity: 0})),
        ])
      ]
    )
  ]
})

export class ChatComponent implements OnInit {

  messages: any = [];

  message: string = "";

  // messages: Observable<Message[]> | undefined;
  // formValue: any;
  // @ViewChild('scrollMe') private myScrollContainer: any;

  chatPopUp: boolean = false;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    // this.messages = this.chatService.conversation.asObservable()
    //   .pipe(scan((acc: any, val: any) => acc.concat(val)));
    // this.scrollToBottom();
  }

  // sendMessage() {
  //   // this.chatService.converse(this.formValue);
  //   this.formValue = '';
  // }

  display(){
    this.chatPopUp = !this.chatPopUp;

    let obj = [{
      sentBy: "bot",
      content: "Hi Swarup",
      time: "19:58"
    }, {
      sentBy: "bot",
      content: "How are You?",
      time: "19:58"
    }, {
      sentBy: "user",
      content: "Hi Bot. How are you?",
      time: "19:59"
    }]

    setTimeout(() => {
      this.messages = obj;
    }, 1000);
  }

  triggerCheckPrice(id: number){
    this.chatPopUp = !this.chatPopUp;
  }

  getTime(){
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes();
    return time;
  }

  sendMessage(msg: string){
    this.message = "";

    let obj = {
      sentBy: "user",
      content: msg,
      time: this.getTime()
    }

    this.messages.push(obj);
  }

  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

  // scrollToBottom(): void {
  //   try {
  //     this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  //   } catch (err) { }
  // }

}
