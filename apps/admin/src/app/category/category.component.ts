import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriesService } from '@e-shop/products';
import { ICategory } from '@e-shop/products';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'admin-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] = [];

  showDialog = false;

  selectedCategory: ICategory = {};

  constructor(
    private categoriesService: CategoriesService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['cat'] === 'new') {
        this.addCategory();
      }
    });

    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  editCategory(category: ICategory): void {
    this.selectedCategory = { ...category };
    this.showDialog = true;
  }

  addCategory() {
    this.selectedCategory = {};
    this.showDialog = true;
  }

  saveCategory(): void {
    if (!this.selectedCategory.name) {
      this.showMessage('Category name is required', 'error');
      return;
    }
    if (this.selectedCategory.id) {
      this.updateCategory();
    } else {
      this.createCategory();
    }
  }

  updateCategory() {
    this.categoriesService.updateCategory(this.selectedCategory).subscribe({
      next: () => {
        this.showDialog = false;
        this.showMessage('Category updated', 'success');
        this.ngOnInit();
      },
      error: (error) => {
        this.showMessage(error.error.message, 'error');
      },
    });
  }

  createCategory() {
    this.categoriesService.createCategory(this.selectedCategory).subscribe({
      next: () => {
        this.showDialog = false;
        this.showMessage('Category created', 'success');
        this.navigateToAllCategories();
        this.ngOnInit();
        console.log(this.showDialog);
      },
      error: (error) => {
        this.showMessage(error.error.message, 'error');
      },
    });
  }

  deleteCategory(category: ICategory, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this category?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.deleteCategoryConfirmed(category);
      },
      reject: () => {
        this.showMessage('remove rejected', 'error');
      },
    });
  }

  deleteCategoryConfirmed(category: ICategory) {
    this.categoriesService.deleteCategory(category).subscribe(() => {
      this.showMessage('category deleted', 'success');

      this.ngOnInit();
    });
  }

  navigateToAllCategories() {
    this.router.navigate(['/dashboard/category']);
  }

  showMessage(message: string, type: 'error' | 'success') {
    this.messageService.add({
      severity: type,
      summary: 'Success',
      detail: message,
    });
  }
}
