import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { FavouriteJobComponent } from './favourite-job/favourite-job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsComponent } from './jobs/jobs.component';

export const routes: Routes = [
    { path: '', redirectTo : 'jobs', pathMatch:'full'},
    { path: 'favourite-job', component: FavouriteJobComponent },
    { path: 'job-detail/:id', component: JobDetailComponent },
    { path: 'jobs', component: JobsComponent },
    { path: '**', redirectTo: 'jobs' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }