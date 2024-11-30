import { Component, OnInit } from '@angular/core';

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
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
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
      this.showErrorMessage('Category name is required');
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
        this.showSussesMessage('Category updated');
        this.ngOnInit();
      },
      error: (error) => {
        this.showErrorMessage(error.error.message);
      },
    });
  }

  createCategory() {
    this.categoriesService.createCategory(this.selectedCategory).subscribe({
      next: () => {
        this.showDialog = false;
        this.showSussesMessage('Category created');
        this.ngOnInit();
      },
      error: (error) => {
        this.showErrorMessage(error.error.message);
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
        this.showErrorMessage('remove rejected');
      },
    });
  }

  deleteCategoryConfirmed(category: ICategory) {
    this.categoriesService.deleteCategory(category).subscribe(() => {
      this.showSussesMessage('category deleted');

      this.ngOnInit();
    });
  }

  showErrorMessage(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }

  showSussesMessage(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }
}
