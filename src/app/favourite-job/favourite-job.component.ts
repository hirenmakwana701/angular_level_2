import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-favourite-job',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './favourite-job.component.html',
    styleUrl: './favourite-job.component.css'
})
export class FavouriteJobComponent {
    storedFavouriteJobIds = localStorage.getItem('fav_job_ids');
    favouriteJobIds: number[] = [];
    favouriteJobs: any;
    constructor(private http: HttpClient) {
        if (this.storedFavouriteJobIds) {
            this.favouriteJobIds = JSON.parse(this.storedFavouriteJobIds);
        }
        this.http.get('/jobs').subscribe({
            next: (response: Record<string, any>) => {
                if (!response) return;
                this.favouriteJobs = response;
            },
            error: (err) => {

            }
        });
    }
}
