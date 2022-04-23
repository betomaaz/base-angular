import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    PostsComponent
  ],
  imports:[
    CommonModule
  ],
  exports:  [
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    PostsComponent
  ]
})
export class PagesModule { }
