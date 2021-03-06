import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

// Message class for displaying messages in the component
// export class Message {
//   constructor(public content: string, public sentBy: string) { }
// }

export interface Chat {
  recipient_id: string,
  text: string
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // readonly token = environment.dialogflow.angularBot;
  // readonly client = new ApiAiClient({ accessToken: this.token });

  // conversation = new BehaviorSubject<Message[]>([]);

  constructor(private http: HttpClient) { }

  converse(message: any) : Observable<Chat> {
    return this.http.post<Chat>('http://localhost:5005/webhooks/rest/webhook', message);
  }

  // Sends and receives messages via DialogFlow
  // converse(msg: string) {
  //   const userMessage = new Message(msg, 'user');
  //   this.update(userMessage);

  //   return this.client.textRequest(msg).then((res: any) => {
  //       const speech = res.result.fulfillment.speech;
  //       const botMessage = new Message(speech, 'bot');
  //       this.update(botMessage);
  //     });
  // }

  // Adds message to source
  // update(msg: Message) {
  //   this.conversation.next([msg]);
  // }

}

