import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularEasyRestApiService {
  protected readonly headers = {"Content-Type": "application/json"};

  constructor(private httpClient: HttpClient) { }

  public getAllEntity(baseUrl: string, paramaters: any): Observable<any[]> {
    const headers = this.headers;
    return this.httpClient.get<any[]>(`${baseUrl}/${paramaters}`, {headers, withCredentials: true});
  };

  public getEntity(baseUrl: string, paramaters: any): Observable<any> {
    const headers = this.headers;
    return this.httpClient.get<any>(`${baseUrl}/${paramaters}`, {headers, withCredentials: true});
  };

  public getEntityById(baseUrl: string, paramaters: any, id: number): Observable<any> {
    const headers = this.headers;
    return this.httpClient.get<any>(`${baseUrl}/${paramaters}/${id}`, {headers, withCredentials: true});
  };

  public getEntityByName(baseUrl: string, paramaters: any, name: string): Observable<any> {
    const headers = this.headers;
    return this.httpClient.get<any>(`${baseUrl}/${paramaters}/${name}`, {headers, withCredentials: true});
  };

  public createEntity(baseUrl: string, paramaters: any, object: any): Observable<any> {
    const headers = this.headers;
    return this.httpClient.post<any>(`${baseUrl}/${paramaters}`, object, {headers, withCredentials: true});
  }

  public updateEntity(baseUrl: string, paramaters: any, object: any, id: string): Observable<any> {
    const headers = this.headers;
    return this.httpClient.put<any>(`${baseUrl}/${paramaters}/${id}`, object, {headers, withCredentials: true});
  };

  public deleteEntity(baseUrl: string, paramaters: any, id: string): Observable<any> {
    const headers = this.headers;
    return this.httpClient.delete<any>(`${baseUrl}/${paramaters}/${id}`, {headers, withCredentials: true});
  };

  public deleteAllEntities(baseUrl: string, paramaters: any): Observable<any> {
    const headers = this.headers;
    return this.httpClient.delete<any>(`${baseUrl}/${paramaters}`, {headers, withCredentials: true});
  };
}
