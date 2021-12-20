import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll("http://127.0.0.1:8000/api/products").subscribe((res) => {
      console.log("result",res)
    })
  }
}
