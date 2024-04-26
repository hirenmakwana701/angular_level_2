 
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.component.html',
  styleUrls: ['jobs.component.css'],
  imports: [CommonModule, RouterLink],
  standalone: true,
})
export class JobsComponent  {
    storedFavouriteJobIds = localStorage.getItem('fav_job_ids');
    favouriteJobIds: number[] = [];
    allJobs:any;
    constructor(private http: HttpClient) {
        if (this.storedFavouriteJobIds) {
            this.favouriteJobIds = JSON.parse(this.storedFavouriteJobIds);
        }
        this.http.get('/jobs').subscribe({
            next: (response: Record<string, any>) => {
                if (!response) return;
                this.allJobs = response;
            },
            error: (err) => {

            }
        });
     } 
    setFavorite(jobId: number) {
        if (jobId > 0 && !this.favouriteJobIds.includes(jobId)) {
            this.favouriteJobIds.push(jobId);
            localStorage.setItem('fav_job_ids', JSON.stringify(this.favouriteJobIds));
        }

    }

    removeFavorite(jobId: number) {
        if (jobId > 0 && this.favouriteJobIds.includes(jobId)) {
            let currentFavouriteJobIds = this.favouriteJobIds.filter(id => id !== jobId);
            localStorage.setItem('fav_job_ids', JSON.stringify(currentFavouriteJobIds));
            this.storedFavouriteJobIds = JSON.stringify(currentFavouriteJobIds);
            this.favouriteJobIds = currentFavouriteJobIds;
        }
    }

    
}