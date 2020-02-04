import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { jsonBin } from 'src/environments/json-bin';
import { UserService } from './user.service';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class MessageListService {

  private messageList: Message[] = [];

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  public create(message: string): Promise<Message> {
    return new Promise((resolve) => {
      resolve({
        user: this.userService.get(),
        value: message,
        timestamp: Date.now() / 1000
      })
    })
  }

  public read(): Promise<Message[]> {
    return new Promise((resolve, reject) => {
      this.get()
        .then((messageList: Message[]) => {
          this.messageList.splice(0);
          messageList.forEach((message) => {
            this.messageList.push(message)
          })
          resolve(this.messageList);
        })
        .catch((error: HttpErrorResponse) => { reject(error) })
    });
  }

  public get(): Promise<Message[]> {
    const options = {
      headers: new HttpHeaders({
        'secret-key': jsonBin.token
      })
    };
    return this.http
      .get<Message[]>(jsonBin.path + jsonBin.bin.message, options)
      .toPromise()
  }

  public update(message: string): Promise<Message> {
    return new Promise((resolve, reject) => {
      
    })
  }

  /**
   * TODO Refactoring
   */
  // public push(message: Message): void {

  //   const getOptions = {
  //     headers: new HttpHeaders({
  //       'secret-key': jsonBin.token,
  //       // 'Access-Control-Allow-Origin': 'http://localhost:8100/',
  //     })
  //   };
  //   this.http.get(jsonBin.path + jsonBin.bin.message, getOptions)
  //     .toPromise()
  //     .then((messageList: Message[]) => {
  //       this.messageList.splice(0);
  //       messageList.forEach((message) => {
  //         this.messageList.push(message)
  //       });
  //       const putOptions = {
  //         headers: new HttpHeaders({
  //           'secret-key': jsonBin.token,
  //           // 'Access-Control-Allow-Origin': 'http://localhost:8100/',
  //           'versioning': 'false'
  //         })
  //       };
  //       this.messageList.push(message);
  //       this.http.put(jsonBin.path + jsonBin.bin.message, this.messageList, putOptions)
  //         .toPromise()
  //         .then((response) => { return response })
  //         .catch((error: HttpErrorResponse) => { console.log(error) })
  //         .finally();
  //     })
  //     .catch((error: HttpErrorResponse) => { return error })
  //     .finally();


  // }

}
