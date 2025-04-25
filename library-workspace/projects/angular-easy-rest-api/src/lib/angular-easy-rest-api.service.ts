import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularEasyRestApiService {

  private readonly baseUrl = 'https://api.example.com';
  private readonly headers = {"Content-Type": "application/json"};

  constructor(private httpClient: HttpClient) { }

  public getAllEntity(paramaters: any): Observable<any[]> {
    const headers = this.headers;
    return this.httpClient.get<any[]>(`${this.baseUrl}/${paramaters}`, {headers, withCredentials: true});
  };

  public getEntity(paramaters: any): Observable<any> {
    const headers = this.headers;
    return this.httpClient.get<any>(`${this.baseUrl}/${paramaters}`, {headers, withCredentials: true});
  };

  public getEntityById(paramaters: any, id: number): Observable<any> {
    const headers = this.headers;
    return this.httpClient.get<any>(`${this.baseUrl}/${paramaters}/${id}`, {headers, withCredentials: true});
  };

  public getEntityByName(paramaters: any, name: string): Observable<any> {
    const headers = this.headers;
    return this.httpClient.get<any>(`${this.baseUrl}/${paramaters}/${name}`, {headers, withCredentials: true});
  };

  public createEntity(paramaters: any, object: any): Observable<any> {
    const headers = this.headers;
    return this.httpClient.post<any>(`${this.baseUrl}/${paramaters}`, object, {headers, withCredentials: true});
  }

  public updateEntity(paramaters: any, object: any, id: string): Observable<any> {
    const headers = this.headers;
    return this.httpClient.put<any>(`${this.baseUrl}/${paramaters}/${id}`, object, {headers, withCredentials: true});
  };

  public deleteEntity(paramaters: any, id: string): Observable<any> {
    const headers = this.headers;
    return this.httpClient.delete<any>(`${this.baseUrl}/${paramaters}/${id}`, {headers, withCredentials: true});
  };

  public deleteAllEntities(paramaters: any): Observable<any> {
    const headers = this.headers;
    return this.httpClient.delete<any>(`${this.baseUrl}/${paramaters}`, {headers, withCredentials: true});
  };
}
