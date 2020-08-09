import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url  = 'https://jsonplaceholder.typicode.com/photos';
   posts: any[5001];
   index: number ;
  constructor(private http: HttpClient) { }

  getposts()
  {
    return   this.http.get(this.url);
  }

  deletePosts(post){

    this.http.delete(this.url + '/' + post.id  ).subscribe(response => {

      const index =  this.posts.map(e => e.title).indexOf(post.title);
     // const index = this.posts.indexof(post) ;
      this.index = index ;
      this.posts.splice(index, 1);

    });





  }



  updatepost(post, title: HTMLInputElement ){
    const posted = {
      title : title.value,
      id: post.id
    } ;
    this.http.put(this.url + '/' + post.id , posted ).subscribe(response => {

      const index =  this.posts.map(e => e.title).indexOf(post.title);
     // const index = this.posts.indexof(post) ;
      this.index = index ;
      this.posts[index] = response ;
      console.log(response);

    });

  }

  createposts( post){
    return  this.http.post(this.url, post);
  }


}
