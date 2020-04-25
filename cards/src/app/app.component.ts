import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      handle: '@nature',
      content: 'I saw this sweet tree today.'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      handle: '@hiker',
      content: 'A badass mountain.'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      handle: '@trailblazer',
      content: 'I love mountain biking.'
    }
  ];
}
