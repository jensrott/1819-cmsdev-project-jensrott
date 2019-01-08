import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../../core/services/friends.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit {
  friends;
  friends1;
  constructor(private friendsService: FriendsService) { }

  ngOnInit() {
    this.getAllFriends();
  }

  getAllFriends() {
    this.friendsService.getAllFriends().subscribe(data => {
      this.friends = data;
      console.log(this.friends);
      console.log(this.friends[0].title);
    },
      err => {
        console.log(err);
      });
  }

}
