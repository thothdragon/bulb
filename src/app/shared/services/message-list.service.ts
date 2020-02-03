import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { jsonBin } from 'src/environments/json-bin';

@Injectable({
  providedIn: 'root'
})
export class MessageListService {

  private messageList: Message[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  public get(): Message[] {

    const options = {
      headers: new HttpHeaders({
        'secret-key': jsonBin.token,
      })
    };

    this.http.get(jsonBin.path + jsonBin.bin.message, options)
      .toPromise()
      .then((response) => { console.log(response) })
      .catch((error: HttpErrorResponse) => { console.log(error) })
      .finally();

    return this.messageList;
  }

  public push(message: Message): void {

    this.messageList.push(message);

    const options = {
      headers: new HttpHeaders({
        'secret-key': jsonBin.token,
        'versioning': 'false'
      })
    };

    this.http.put(jsonBin.path + jsonBin.bin.message, this.messageList, options)
      .toPromise()
      .then((response) => { response })
      .catch((error: HttpErrorResponse) => { console.log(error) })
      .finally();
  }

}
