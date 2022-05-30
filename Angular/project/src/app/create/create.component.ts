import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { NgForm } from '@angular/forms';
import { PostData } from './postdata.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  fetchedPosts: PostData[] = [];
  constructor(private http: HttpClient) { }
  firebaseUrl =
  'https://angular-b30eb-default-rtdb.firebaseio.com/.json';

  ngOnInit(): void {
  }
  createPost(postData: { title: string; content: string }, form: NgForm) {
    console.log(postData);
    this.http.post(this.firebaseUrl, postData).subscribe((responseData) => {
      console.log(responseData);
      form.reset();
      this.fetchPosts();
    });
  }
  onFetchPosts() {
    this.fetchPosts();
  }

  onDeletePosts() {
    this.http.delete(this.firebaseUrl).subscribe((response) => {
      console.log('Posts deleted: ' + response);
      this.fetchedPosts = [];
    });
  }

  fetchPosts() {
    this.http
      .get(this.firebaseUrl)
      .pipe(
        map((responseData) => {
          const postsArray: PostData[] = [];
          for (const key in responseData) {
            postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        this.fetchedPosts = posts;
      });
  }
  

}
