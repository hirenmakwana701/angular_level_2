import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JOBS } from '../job.interfaces'; 
import { JobService } from '../job-service';

@Component({
    selector: 'app-favourite-job',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './favourite-job.component.html',
    styleUrl: './favourite-job.component.css'
})
export class FavouriteJobComponent  implements OnInit {
    storedFavouriteJobIds = localStorage.getItem('fav_job_ids');
    favouriteJobIds: number[] = [];
    favouriteJobs : JOBS[] | undefined;
    constructor(private jobService: JobService) {
        if (this.storedFavouriteJobIds) {
            this.favouriteJobIds = JSON.parse(this.storedFavouriteJobIds);
        } 
    }
    ngOnInit() {
        this.jobService.fetchJob().subscribe((result) => {
            this.favouriteJobs = result;
        });
    }
}
