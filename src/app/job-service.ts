import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JOBS, JOBS_DETAIL } from './job.interfaces'; 

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  fetchJob(): Observable<JOBS[]> { 
    return this.http.get<JOBS[]>('/jobs');
  }
 
}