import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  product$
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product$ = this.productService.getAll()
    // console.log(this.product$)
  }

}
