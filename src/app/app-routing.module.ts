import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';


const routes : Routes = [
  
  {
    path:'home',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'contacts',
    component : ContactsComponent
  },
  {
    path : 'posts',
    component : PostsComponent
  },
  {
    path : '**',
    redirectTo : 'Home'
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
   
  ]
})
export class AppRoutingModule { }
