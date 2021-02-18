import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { seed } from '../models/seeds';
import { WorldData } from '../models/world';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected serviceEndPoint = environment.endpoint;

  constructor(protected http: HttpClient) { }

  public tick(x: number, y: number, world: boolean[]): Observable<boolean[]> {
    return this.http.post<boolean[]>(this.serviceEndPoint+'/tick', {x, y, world});
  }

  public getSize(seed: seed): Observable<number> {
    return this.http.get<number>(this.serviceEndPoint+`/getsize/${seed}`);
  }

  public generate(x: number, y: number, seed: seed): Observable<WorldData> {
    return this.http.get<WorldData>(this.serviceEndPoint+`/generate/${seed}`, {params: {'x': `${x}`, 'y': `${y}`}, responseType: 'json'});
  }
}
