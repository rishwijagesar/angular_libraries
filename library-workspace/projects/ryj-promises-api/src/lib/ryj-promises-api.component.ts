import { Directive } from '@angular/core';
import { RyjPromisesApiService } from './ryj-promises-api.service';

@Directive()
export abstract class RyjPromisesApiComponent<T> {

  constructor(private apiService: RyjPromisesApiService<T>) { }

  protected async getAllEntities(baseUrl: string, resource: string): Promise<T[]> {
    return this.apiService.getAllEntities(baseUrl, resource);
  }

  protected async getAllEntity(baseUrl: string, resource: string, id: number): Promise<T> {
    return this.apiService.getEntityById(baseUrl, resource, id);
  }

  protected async createEntity(baseUrl: string, resource: string, entity: T): Promise<T> {
    return this.apiService.createEntity(baseUrl, resource, entity);
  }

  protected async updateEntity(baseUrl: string, resource: string, id: number, entity: T): Promise<T> {
    return this.apiService.updateEntity(baseUrl, resource, id, entity);
  }

  protected async deleteEntity(baseUrl: string, resource: string, id: number): Promise<T> {
    return this.apiService.deleteEntity(baseUrl, resource, id);
  }

}
