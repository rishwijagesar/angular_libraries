import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RyjObservablesApiService<T> {
  protected readonly headers = {"Content-Type": "application/json"};

  constructor(
    protected httpClient: HttpClient) { 
  };

  public getAllEntities(baseUrl: string, paramaters: string): Observable<T[]> {
    const headers = this.headers;
    return this.httpClient.get<T[]>(`${baseUrl}/${paramaters}`, {headers, withCredentials: true});
  };

  public getEntity(baseUrl: string, paramaters: string): Observable<T> {
    const headers = this.headers;
    return this.httpClient.get<T>(`${baseUrl}/${paramaters}`, {headers, withCredentials: true});
  };

  public getEntityById(baseUrl: string, paramaters: string, id: number): Observable<T> {
    const headers = this.headers;
    return this.httpClient.get<T>(`${baseUrl}/${paramaters}/${id}`, {headers, withCredentials: true});
  };

  public getEntityByName(baseUrl: string, paramaters: string, name: string): Observable<T> {
    const headers = this.headers;
    return this.httpClient.get<T>(`${baseUrl}/${paramaters}/${name}`, {headers, withCredentials: true});
  };

  public createEntity(baseUrl: string, paramaters: string, object: T): Observable<T> {
    const headers = this.headers;
    return this.httpClient.post<T>(`${baseUrl}/${paramaters}`, object, {headers, withCredentials: true});
  }

  public updateEntity(baseUrl: string, paramaters: string, object: T, id: string): Observable<T> {
    const headers = this.headers;
    return this.httpClient.put<T>(`${baseUrl}/${paramaters}/${id}`, object, {headers, withCredentials: true});
  };

  public deleteEntity(baseUrl: string, paramaters: string, id: string): Observable<T> {
    const headers = this.headers;
    return this.httpClient.delete<T>(`${baseUrl}/${paramaters}/${id}`, {headers, withCredentials: true});
  };

  public deleteAllEntities(baseUrl: string, paramaters: string): Observable<T> {
    const headers = this.headers;
    return this.httpClient.delete<T>(`${baseUrl}/${paramaters}`, {headers, withCredentials: true});
  };
}
