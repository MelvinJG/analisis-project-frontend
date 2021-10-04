import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsComponent } from './components/friends/friends.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ChatComponent } from './components/chat/chat.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'Register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'Profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'Friends',
    component: FriendsComponent,
    pathMatch: 'full'
  },
  {
    path: 'AboutMe',
    component: AboutMeComponent,
    pathMatch: 'full'
  },
  {
    path: 'Chat',
    component: ChatComponent,
    pathMatch: 'full'
  },
  {
    path: 'People',
    component: PeopleComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
