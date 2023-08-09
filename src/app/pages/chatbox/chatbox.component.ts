import { Component } from '@angular/core';
import { faFaceLaughBeam } from '@fortawesome/free-regular-svg-icons';
import { faBars, faPaperPlane, faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent {
  faFaceLaughBeam = faFaceLaughBeam;
  faBars = faBars;
  faPaperPlane = faPaperPlane;
  faMicrophone = faMicrophone;
  faSearch = faSearch;

  constructor(public authService:AuthService){}
  clickLogin() {
    this.authService.login();
  }

  clickLogout() {
    this.authService.logout();
  }
}
