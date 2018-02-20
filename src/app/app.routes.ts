import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './admin/login/login.component';
import {VotingPlaceComponent} from './admin/voting-place/voting-place.component'


const app_Routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:"votingPlace",component:VotingPlaceComponent}
];

export const routing=RouterModule.forRoot(app_Routes);