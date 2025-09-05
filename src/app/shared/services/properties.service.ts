import { Injectable } from '@angular/core';
import { Property } from '../../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  properties: Array<Property> = [
    {
      id: 1,
      name: 'Apartments',
      nameAr: 'شقق سكنيّة',
      price: '750',
      currency: "Thousand",
      currencyAr: "ألف",
      image: 'assets/images/properties/img4.webp'
    },
    {
      id: 2,
      name: 'Houses',
      nameAr: 'بيوت سكنيّة',
      price: '900',
      currency: "Thousand",
      currencyAr: "ألف",
      image: 'assets/images/properties/img5.webp'
    },
    {
      id: 3,
      name: 'Townhouses',
      nameAr: 'منازل',
      price: '1.2',
      currency: "Million",
      currencyAr: "مليون",
      image: 'assets/images/properties/img6.webp'
    },
    {
      id: 4,
      name: 'Villas',
      nameAr: 'فلل',
      price: '1.85',
      currency: "Million",
      currencyAr: "مليون",
      image: 'assets/images/properties/img7.webp'
    },
    {
      id: 5,
      name: 'Offices',
      nameAr: 'مكاتب',
      price: '1.2',
      currency: "Million",
      currencyAr: "مليون",
      image: 'assets/images/properties/img8.webp'
    },
    {
      id: 7,
      name: 'Warehouses',
      nameAr: 'مستوعات',
      price: '2.7',
      currency: "Million",
      currencyAr: "مليون",
      image: 'assets/images/properties/img10.webp'
    },
    {
      id: 9,
      name: 'Hotels',
      nameAr: 'فنادق',
      price: '17',
      currency: "Million",
      currencyAr: "مليون",
      image: 'assets/images/properties/img12.webp'
    },
    {
      id: 10,
      name: 'Whole Buildings',
      nameAr: 'أبنية كاملة',
      price: '25',
      currency: "Million",
      currencyAr: "مليون",
      image: 'assets/images/properties/img13.webp'
    },
    {
      id: 11,
      name: 'Compounds',
      nameAr: 'مجمعات',
      price: '25',
      currency: "Million",
      currencyAr: "مليون",
      image: 'assets/images/properties/img14.webp'
    },
    {
      id: 12,
      name: 'Lands',
      nameAr: 'أراضي',
      price: '1.2',
      currency: "Million",
      currencyAr: "مليون",
      image: 'assets/images/properties/img15.webp'
    }
  ];

  getProperties(): Array<Property> {
    return this.properties
  }
}
