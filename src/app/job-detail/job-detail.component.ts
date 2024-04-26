import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
    jobDetail: Record<string, any> = [];
    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            const id = params['id'];  
            this.http.get('/jobs/'+id).subscribe({
                next: (response: Record<string, any>) => {                    
                   if (!response) {
                        this.router.navigate(['/']);
                    }
                    this.jobDetail = response;
                },
                error: (err) => {
                    this.router.navigate(['/']);
                }
            });
          });

     }
    ngOnInit(): void {
       
    }
}
