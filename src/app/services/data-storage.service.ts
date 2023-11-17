import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private API_SERVER = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  public getRequest(endpoint: string){
    return this.httpClient.get(this.API_SERVER + endpoint);
  }
  public PostRequest(endpoint: string, body: any){
  return this.httpClient.post(this.API_SERVER+endpoint,body);
  }
  public PutRequest(endpoint: string, body: any){
  return this.httpClient.put(this.API_SERVER+endpoint,body);
  }
  public DeleteRequest(endpoint: string){
  return this.httpClient.delete(this.API_SERVER+endpoint);
  }
}
