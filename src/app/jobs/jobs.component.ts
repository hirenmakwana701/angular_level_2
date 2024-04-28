
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JOBS } from '../job.interfaces';
import { JobService } from '../job-service';


@Component({
    selector: 'app-jobs',
    templateUrl: 'jobs.component.html',
    styleUrls: ['jobs.component.css'],
    imports: [CommonModule, RouterLink],
    standalone: true,
})
export class JobsComponent implements OnInit {
    storedFavouriteJobIds = localStorage.getItem('fav_job_ids');
    favouriteJobIds: number[] = [];
    allJobs: JOBS[] | undefined;
    constructor(private jobService: JobService) {
        if (this.storedFavouriteJobIds) {
            this.favouriteJobIds = JSON.parse(this.storedFavouriteJobIds);
        }
    }
    ngOnInit() {
        this.jobService.fetchJob().subscribe((result) => {
            this.allJobs = result;
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