import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private API_SERVER = "http://localhost:3000/ricette/";

  constructor(private http: HttpClient) { }

  public getRequest(endpoint: string){
    return this.http.get(this.API_SERVER + endpoint);
  }
  public PostRequest(endpoint: string, body: any){
  return this.http.post<any>(this.API_SERVER+endpoint,body);
  }
  public PutRequest(endpoint: string, body: any){
  return this.http.put(this.API_SERVER+endpoint,body);
  }
  public DeleteRequest(endpoint: string){
  return this.http.delete(this.API_SERVER+ "//" + endpoint);
  }
}
