import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '@e-shop/products';
import { ICategory } from '@e-shop/products';

@Component({
  selector: 'shop-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss',
})
export class CategoriesListComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories.data;
    });
  }
}
