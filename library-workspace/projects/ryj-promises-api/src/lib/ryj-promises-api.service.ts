import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class RyjPromisesApiService<T> {

  protected readonly headers = { 'Content-Type': 'application/json' };

  constructor(protected http: HttpClient){

  }

  async getAllEntities(baseUrl: string, resource: string): Promise<T[]> {
    return await firstValueFrom(
      this.http.get<T[]>(`${baseUrl}/${resource}`, {headers: this.headers, withCredentials: true})
    );
  }

  async getEntityById(baseUrl: string, resource: string, id: number | string): Promise<T> {
    return await firstValueFrom(
      this.http.get<T>(`${baseUrl}/${resource}/${id}`, {headers: this.headers, withCredentials: true})
    );
  }

  async createEntity(baseUrl: string, resource: string, entity: T): Promise<T> {
    return await firstValueFrom(
      this.http.post<T>(`${baseUrl}/${resource}`, entity, {headers: this.headers, withCredentials: true})
    );
  }

  async updateEntity(baseUrl: string, resource: string, id: number | string, entity: T): Promise<T> {
    return await firstValueFrom(
      this.http.put<T>(`${baseUrl}/${resource}/${id}`, entity, {headers: this.headers, withCredentials: true})
    );
  }

  async deleteEntity(baseUrl: string, resource: string, id: number | string): Promise<any> {
    return await firstValueFrom(
      this.http.delete(`${baseUrl}/${resource}/${id}`, {headers: this.headers, withCredentials: true })
    );
  }
}
