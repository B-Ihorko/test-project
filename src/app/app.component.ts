import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';

  blogPosts = [
    {title: 'Base post title', description: 'Base post description'}
  ];

  onPostAdded (postData: {postTitle: string, postDescription: string}){
    this.blogPosts.push({
      title: postData.postTitle,
      description: postData.postDescription
    });
  }
}
