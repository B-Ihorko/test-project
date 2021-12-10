import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  
  @Output() postCreated = new EventEmitter<{postTitle: string, postDescription: string}>();
  newPostTitle = '';
  newPostDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  addNewPost (){
    this.postCreated.emit({
      postTitle: this.newPostTitle,
      postDescription: this.newPostDescription 
    })
  }

}
