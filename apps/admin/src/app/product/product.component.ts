import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct, ProductsService } from '@e-shop/products';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';
import { environment } from '../../environments/environment';

@Component({
  selector: 'admin-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];

  rows = 10;
  loading = true;
  totalRecords!: number;

  apiUrl = environment.API_URL;

  isLoading = false;

  constructor(
    private productService: ProductsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts(0, this.rows, 'id', 'desc')
      .subscribe((products) => {
        this.products = products.data;
        this.totalRecords = products.totalRecord;
        this.loading = false;
      });
  }

  lazyLoadProducts(event: TableLazyLoadEvent) {
    const { first, rows, sortField, globalFilter } = event;

    const sortOrder = event.sortOrder === -1 ? 'desc' : 'asc';

    this.productService
      .getProducts(
        first,
        rows as number,
        sortField as string,
        sortOrder,
        globalFilter as string
      )
      .subscribe((products) => {
        this.products = products.data;
        this.totalRecords = products.totalRecord;
        this.loading = false;
      });
  }

  addProducts() {
    this.router.navigate(['/dashboard/product/new']);
  }
  editProduct(productId: number) {
    this.router.navigate(['/dashboard/product/update/' + productId]);
  }

  deleteProduct(productId: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this Product?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.deleteProductConfirmed(productId);
      },
      reject: () => {
        this.showMessage('remove rejected', 'error');
      },
    });
  }

  deleteProductConfirmed(productId: number) {
    this.isLoading = true;
    this.productService.deleteProduct(productId).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.showMessage(res.message as string, 'success');
        this.ngOnInit();
      },
      error: (err) => {
        this.isLoading = false;
        this.showMessage(err.error.message, 'error');
      },
    });
  }

  showMessage(message: string, type: 'error' | 'success') {
    this.messageService.add({
      severity: type,
      summary: 'Success',
      detail: message,
    });
  }
}
