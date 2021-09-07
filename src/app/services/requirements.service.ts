import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirment } from '../models/requirment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  private requirmentsUrl: string = 'assets/server/requirements.json';

  getRequirments(): Observable<Requirment[]> {
    return this.http.get<Requirment[]>(this.requirmentsUrl);
  }
  constructor(private http: HttpClient) { }
}
