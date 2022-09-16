import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-verify-mail',
  templateUrl: './verify-mail.page.html',
  styleUrls: ['./verify-mail.page.scss'],
})
export class VerifyMailPage implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
