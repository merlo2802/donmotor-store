import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RutasApi } from '../constants/rutasApi';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StoreService {

  private rutaBase = environment.urlApii;
  private rutaServicio = RutasApi;

  constructor(
    private http: HttpClient
  ) { }

  public getEnterprise(urlEnterprise: string): Observable<HttpResponse<any>> {
    const url = this.rutaBase + this.rutaServicio.apiStore +`/obtener-empresa?url=${urlEnterprise}`;
    return this.http.get<any>(url, {observe: 'response'});
  }
}
