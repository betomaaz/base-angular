import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : any[] = [1,1,1,1,1];

  constructor(private postService : PostsService) { }

  ngOnInit(): void {
    this.postService.getPostData()
    .subscribe((resp:any) =>{
      console.log(resp);
      this.posts = resp;
    })
  }

  onClickSomeChild(id:number){
    console.log("Hijo clickeado: " + id);
  }

}
