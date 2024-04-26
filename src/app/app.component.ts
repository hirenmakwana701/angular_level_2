import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
export interface JOB {
    id: number,
    companyName: string,
    title: string,
    companyLogo: string,
    reference: string,
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HttpClientModule, CommonModule, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'ng-job-search';
    storedFavouriteJobIds = localStorage.getItem('fav_job_ids');
    favouriteJobIds: number[] = [];


}
