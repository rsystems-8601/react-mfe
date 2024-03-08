import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-clist',
  standalone: true,
  imports: [UserComponent],
  // templateUrl: './clist.component.html',
  template: `<section>
  
  <p>clist works! {{city}}
  @if (false) {
    <p>Welcome back, Friend!</p>
  } @else if (true) {
    <p>No back, Friend!</p>
  } 
  @for (os of operatingSystems; track os.id) {
    {{ os.name }}
    <b>{{ os.name }}</b>
  }
 
  </p>
  @defer {
    <app-user occupation="Angular Developer" (incrementCountEvent)="updateCity($event)" />
  } @placeholder {
    <p>Future comments</p>
  }
  <div (click)="greet()" [contentEditable]="isEditable">ssssss</div>
  <article>
  <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
  <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
  <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted.</p>
</article>
  @defer (on viewport) {
     <p>AAAAAAAAAAAAAAAAAA</p>
  }@placeholder {
    <p>bbbbbbbbbbbb</p>
    }
    @error {
      <p>ccccc</p>
      }
  </section>
  `,
  styleUrl: './clist.component.css',
})
export class ClistComponent {
  city = 're';
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];
  isEditable=true;

  greet() {
    alert('Hello, there 👋');
}
updateCity(data: any){
   this.city=data;
}
}
