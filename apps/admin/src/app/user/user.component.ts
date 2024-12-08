import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { confirmedPasswordMatcher, User, UserService } from '@e-shop/auth';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';

@Component({
  selector: 'admin-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  users: User[] = [];
  userId?: number;

  showDialog = false;
  loading = true;
  totalRecords = 0;
  rows = 5;

  userForm!: FormGroup;

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userFormInit();
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['user'] === 'new') {
        this.addUser();
      }
    });
  }

  userFormInit() {
    this.userForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        role: ['user'],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [null, [Validators.required, Validators.minLength(6)]],
      },
      { validators: [confirmedPasswordMatcher] }
    );
  }

  checkPasswordValidation() {
    if (this.userId) {
      this.userForm.get('password')?.clearValidators();
      this.userForm.get('password')?.updateValueAndValidity();
      this.userForm.get('confirmPassword')?.clearValidators();
      this.userForm.get('confirmPassword')?.updateValueAndValidity();
    }
  }

  loadUsers(): void {
    this.userService.getUsers(0, this.rows, 'id', 'desc').subscribe((users) => {
      this.users = users.data;
      this.totalRecords = users.totalRecord;
      this.loading = false;
    });
  }

  lazyLoadUsers(event: TableLazyLoadEvent) {
    const { first, rows, sortField, globalFilter } = event;

    const sortOrder = event.sortOrder === -1 ? 'desc' : 'asc';

    this.userService
      .getUsers(
        first,
        rows as number,
        sortField as string,
        sortOrder,
        globalFilter as string
      )
      .subscribe((users) => {
        this.users = users.data;
        this.totalRecords = users.totalRecord;
        this.loading = false;
      });
  }

  editUser(user: User): void {
    this.userId = user.id;
    this.userForm.reset();
    this.userForm.patchValue(user);
    this.checkPasswordValidation();
    this.showDialog = true;
  }

  addUser() {
    this.userId = undefined;
    this.userForm.reset();
    this.showDialog = true;
  }

  saveUser(): void {
    if (this.userId) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  updateUser() {
    const updatedUser: User = {};
    updatedUser.id = this.userId;
    updatedUser.username = this.userForm.value.username;
    updatedUser.email = this.userForm.value.email;
    updatedUser.role = this.userForm.value.role;
    if (this.userForm.value.password !== null) {
      updatedUser.password = this.userForm.value.password;
    }

    this.userService.updateUser(updatedUser).subscribe({
      next: () => {
        this.showDialog = false;
        this.showMessage('User updated', 'success');
        this.loadUsers();
      },
      error: (error) => {
        this.showMessage(error.error.message, 'error');
      },
    });
  }

  createUser() {
    this.userService.createUser(this.userForm.value).subscribe({
      next: () => {
        this.showDialog = false;
        this.showMessage('User created', 'success');
        this.navigateToAllUsers();
        this.loadUsers();
      },
      error: (error) => {
        this.showMessage(error.error.message, 'error');
      },
    });
  }

  deleteUser(user: User, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this User?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.deleteUserConfirmed(user);
      },
      reject: () => {
        this.showMessage('remove rejected', 'error');
      },
    });
  }

  deleteUserConfirmed(user: User) {
    this.userService.deleteUser(user).subscribe(() => {
      this.showMessage('user deleted', 'success');

      this.loadUsers();
    });
  }

  navigateToAllUsers() {
    this.router.navigate(['/dashboard/user']);
  }

  showMessage(message: string, type: 'error' | 'success') {
    this.messageService.add({
      severity: type,
      summary: type,
      detail: message,
    });
  }
}
