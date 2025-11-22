/*import { Component } from '@angular/core';

@Component({
  selector: 'app-deals-page',
  standalone: true,
  imports: [],
  templateUrl: './deals-page.component.html',
  styleUrl: './deals-page.component.css'
})
export class DealsPageComponent {

}*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-deals-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './deals-page.component.html',
  styleUrls: ['./deals-page.component.css']
})
export class DealsPageComponent {

  products = [
    {
      name: 'Fresh Tomatoes',
      category: 'Vegetables',
      rating: 4.5,
      reviews: 329,
      price: 2.99,
      unit: 'per kg',
      discount: 20,
      img: 'assets/tomatoes.jpg'
    },
    {
      name: 'Organic Carrots',
      category: 'Vegetables',
      rating: 4.8,
      reviews: 819,
      price: 1.99,
      unit: 'per kg',
      discount: 30,
      img: 'assets/carrots.jpg'
    },
    {
      name: 'Green Apples',
      category: 'Fruits',
      rating: 4.6,
      reviews: 910,
      price: 3.49,
      unit: 'per kg',
      discount: 20,
      img: 'assets/apple.jpg'
    },
    {
      name: 'Bananas',
      category: 'Fruits',
      rating: 4.7,
      reviews: 204,
      price: 1.49,
      unit: 'per dozen',
      discount: 30,
      img: 'assets/banana.jpg'
    },
    {
      name: 'Whole Milk',
      category: 'Dairy',
      rating: 4.9,
      reviews: 158,
      price: 4.99,
      unit: 'per gallon',
      discount: 20,
      img: 'assets/milk.jpg'
    },
    {
      name: 'Cheddar Cheese',
      category: 'Dairy',
      rating: 4.8,
      reviews: 819,
      price: 6.99,
      unit: 'per 500g',
      discount: 30,
      img: 'assets/cheese.jpg'
    },
    {
      name: 'Whole Wheat Bread',
      category: 'Bakery',
      rating: 4.5,
      reviews: 287,
      price: 3.29,
      unit: 'per loaf',
      discount: 20,
      img: 'assets/bread.jpg'
    },
    {
      name: 'Croissants',
      category: 'Bakery',
      rating: 4.9,
      reviews: 178,
      price: 5.99,
      unit: 'pack of 6',
      discount: 30,
      img: 'assets/croissants.jpg'
    },
    {
      name: 'Chicken Breast',
      category: 'Meat',
      rating: 4.7,
      reviews: 134,
      price: 8.99,
      unit: 'per kg',
      discount: 20,
      img: 'assets/chicken.jpg'
    },
    {
      name: 'Orange Juice',
      category: 'Beverages',
      rating: 4.6,
      reviews: 221,
      price: 4.49,
      unit: 'per liter',
      discount: 30,
      img: 'assets/juice.jpg'
    },
    {
      name: 'Potato Chips',
      category: 'Snacks',
      rating: 4.4,
      reviews: 445,
      price: 2.99,
      unit: 'per bag',
      discount: 20,
      img: 'assets/chips.jpg'
    },
    {
      name: 'Frozen Pizza',
      category: 'Frozen',
      rating: 4.5,
      reviews: 312,
      price: 7.99,
      unit: 'each',
      discount: 30,
      img: 'assets/pizza.jpg'
    }
  ];

}

