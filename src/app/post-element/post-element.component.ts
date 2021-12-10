import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-element',
  templateUrl: './post-element.component.html',
  styleUrls: ['./post-element.component.scss']
})
export class PostElementComponent implements OnInit {

  @Input() postElement!: { title: string; description: string; };

  constructor() { }

  ngOnInit(): void {
  }

}
