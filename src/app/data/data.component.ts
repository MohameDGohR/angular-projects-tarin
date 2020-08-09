import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AnyARecord } from 'dns';
import { PostsService } from './../services/posts.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-inferrable-types
 constructor(private postservice: PostsService) { }
  ngOnDestroy(): void {
  }

 // tslint:disable-next-line:member-ordering
 posts: any[5001];
  ngOnInit(): void {
    this.postservice.getposts().subscribe(res => {
    this.posts =   res ;
     });
  }

  updatepost(post, title: HTMLInputElement){
    this.postservice.posts = this.posts ;
    this.postservice.updatepost(post , title);
    this.posts[this.postservice.index] =  this.postservice.posts[this.postservice.index] ;
  }

  TakeData(post){
    console.log(post.title );
  }


  deletePosts(post){
    this.postservice.deletePosts(post);
   // this.posts = this.postservice.posts ;
    this.posts.splice(this.postservice.index, 1 ) ;
  }


  createposts(title: HTMLInputElement){
    const post = {
      title : title.value,
      id: ''
    } ;
    this.postservice.createposts(post).subscribe(response => {
      this.posts.splice(0, 0, post) ;
    });
  }




}
