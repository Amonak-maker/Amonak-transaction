import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-storie-item',
  templateUrl: './storie-item.component.html',
  styleUrls: ['./storie-item.component.scss']
})
export class StorieItemComponent implements OnInit {

  @Input() test: boolean = false
  activeStory = 0
  storyImages = [
    { img: "./../../../../assets/imgs/chat.png", user: { img: "./../../../../assets/imgs/avatar.png", name: "mo7sen" } },
    { img: "./../../../../assets/imgs/echec.jpg", user: { img: "./../../../../assets/imgs/avatar.png", name: "ali" } },
    { img: "./../../../../assets/imgs/premium.png", user: { img: "./../../../../assets/imgs/avatar.png", name: "mohamed" } },

  ]
  constructor() { }



  ngOnInit() {

  }

  nextStory() {
    if (this.activeStory < this.storyImages.length - 1) {
      this.activeStory++;
    } else {
      this.activeStory = 0;

    }
  }
  previousStory() {
    if (this.activeStory > 0) {
      this.activeStory--;
    } else {
      this.activeStory = this.storyImages.length - 1;
    }


  }

  close() {
    this.test = !this.test
  }

}
