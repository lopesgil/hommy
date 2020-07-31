import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiURL = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  getRepublics(): Observable<any> {
    return this.http.get(this.apiURL + 'listRepublic');
  }

  getRepublic(id: number): Observable<any> {
    return this.http.get(this.apiURL + 'showRepublic/' + id);
  }
}
