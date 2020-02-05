import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { jsonBin } from 'src/environments/json-bin';
import { UserService } from './user.service';
import { resolve } from 'url';
import { JsonBin } from '../models/json-bin.model';

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

  public put(messageList: Message[]): Promise<JsonBin> {
    const putOptions = {
      headers: new HttpHeaders({
        'secret-key': jsonBin.token,
        'versioning': 'false'
      })
    };
    return this.http
      .put<JsonBin>(
        jsonBin.path + jsonBin.bin.message,
        messageList,
        putOptions)
      .toPromise()
  }

  public update(message: string): Promise<Message[]> {
    return new Promise((resolve, reject) => {

      this.create(message)
        .then((message: Message) => {

          this.read()
            .then((messageList: Message[]) => {

              this.messageList.push(message);

              this.put(this.messageList)
                .then((jsonBin: JsonBin) => {

                  return resolve(this.messageList);

                })
                .catch(() => {

                  reject("Erreur sur le put")

                })
            })
            .catch(() => {

              reject("Erreur de read")

            })
        })
        .catch(() => {

          reject("Erreur sur create - Improbable")

        })
    })
  }
}
