import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PostsComponent } from './posts/posts.component';
import { PostsModule } from './posts/posts.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports:[
    CommonModule,
    PostsModule
  ],
  exports:  [
    HomeComponent,
    AboutComponent,
    ContactsComponent  ]
})
export class PagesModule { }
