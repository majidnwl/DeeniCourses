import {Component} from "@angular/core";
@Component({
  selector: 'my-navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent{
  private projectName : string;

  constructor(){
    this.projectName = "A2Website";
  }

}
