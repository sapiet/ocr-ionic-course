import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {TabsPage} from '../tabs/tabs.page';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  public mode: string;
  private userForm: FormGroup;
  private errorMessage: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.userForm = this.formBuilder.group({
      email: ['user@ionic.com', [Validators.required, Validators.email]],
      password: ['000000', Validators.required]
    });
  }

  ngOnInit() {
    this.mode = this.activatedRoute.snapshot.data.mode;
  }

  setMode(mode: string) {
    this.router.navigate(['auth', mode]);
  }

  onSubmit() {
    const email = this.userForm.get('email').value;
    const password = this.userForm.get('password').value;

    if (this.mode === 'signin') {
      this.authService.signInUser(email, password).then(
        () => this.navController.navigateRoot('tabs'),
        error => this.errorMessage = error
      );
    } else if (this.mode === 'signup') {
      this.authService.signUpUser(email, password).then(
        () => this.navController.navigateRoot('tabs'),
        error => this.errorMessage = error
      );
    }
    console.log(this.mode);
    console.log(this.userForm.value);
  }
}
