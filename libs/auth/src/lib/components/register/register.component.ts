import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmedPasswordMatcher } from './validator/confirmedPasswordMatcher.validator';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  loading = false;
  showError = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: [confirmedPasswordMatcher] }
    );
  }

  submit() {
    this.loading = true;

    const { email, password, username } = this.registerForm.value;

    this.authService
      .register({
        username,
        email,
        password,
      })
      .subscribe({
        next: () => {
          this.loading = false;
          this.registerForm.reset();
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.showError = true;
          this.loading = false;
        },
      });
  }
}
