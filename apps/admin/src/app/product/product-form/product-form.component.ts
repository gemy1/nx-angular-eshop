import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService, User } from '@e-shop/auth';
import {
  CategoriesService,
  ICategory,
  IProduct,
  ProductsService,
} from '@e-shop/products';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'admin-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  product: IProduct | null = null;

  productForm!: FormGroup;

  categories: ICategory[] = [];

  isLoading = false;

  activeStep = 0;

  richDescription = '';

  user!: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoriesService,
    private productsService: ProductsService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUserInfo();

    this.productFormInit();

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.loadProduct(params['id']);
      }
    });

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories.data;
    });
  }

  loadProduct(id: string) {
    this.productsService.getProductById(+id).subscribe({
      next: (product) => {
        this.product = product;
        this.populateProductForm(product);
      },
      error: (error) => {
        if (error) {
          this.router.navigate(['/dashboard/product']);
        }
      },
    });
  }
  productFormInit() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      richDescription: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stockQuantity: ['', [Validators.required]],
      isFeatured: [null],
    });
    if (this.user.role !== 'admin') {
      this.productForm.get('isFeatured')?.disable();
    }
  }

  populateProductForm(product: IProduct) {
    this.productForm.patchValue(product);
    this.productForm.get('categoryId')?.patchValue(this.product?.category?.id);
    this.richDescription = this.product?.richDescription as string;
  }

  onRichDescriptionChange(event: string) {
    this.productForm.get('richDescription')?.setValue(event);
  }

  submit() {
    if (this.product?.id) {
      this.updateProduct();
    } else {
      this.createProduct();
    }
  }

  createProduct() {
    this.isLoading = true;
    this.productsService.createProduct(this.productForm.value).subscribe({
      next: (res) => {
        this.product = res;
        this.isLoading = false;
        this.activeStep = this.activeStep + 1;
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Product Created Successfully',
        });
      },
    });
  }

  updateProduct() {
    this.isLoading = true;
    const updateProduct = { ...this.productForm.value, id: this.product?.id };
    this.productsService.updateProduct(updateProduct).subscribe({
      next: () => {
        this.isLoading = false;
        this.activeStep = this.activeStep + 1;
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Product updated successfully',
        });
      },
      error: (error) => {
        this.isLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: error.error.message,
        });
      },
    });
  }

  onStepChange(event: number) {
    this.activeStep = event;
  }

  uploadMainImage(event: any) {
    this.productsService
      .uploadMainImage(event.currentFiles[0], this.product?.id as number)
      .subscribe({
        next: (res) => {
          this.product = { ...this.product, ...res };
        },
      });
  }

  goBack() {
    this.router.navigate(['/dashboard/product']);
  }
}
