import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,  
  selector: 'user',
  templateUrl: 'user.component.html' ,
  providers: [PostsService]
})
export class UserComponent  { 
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts:Post[];

    constructor(private postsService: PostsService) {
        this.name = "nishtha arora";
        this.email = 'nishtha@gmail.com';
        this.address = {
            street: '12th main street',
            city: 'austin',
            state: 'texas'
        }
        this.hobbies = ['music', 'movies', 'sprots'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        })
    }   

    toggleHobbies() {
        if(this.showHobbies === true) {
            this.showHobbies = false;    
        }
        else {
            this.showHobbies = true;
        }
    }    

    addHobby(hobby: any) {
        this.hobbies.push(hobby);
    }    

    deleteHobby(i: any) {
        this.hobbies.splice(i, 1);
    }
}
    
    // when you have to define an object types then you need an interface
    interface address {
        street: string,
        city: string,
        state: string
    }

    interface Post {
        id: number,
        title: string,
        body: string
    }
