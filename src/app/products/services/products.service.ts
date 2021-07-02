import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private productList = [
    {
      id:1,
      name:'Product 1',
      description:"lis. Mauris at metus sit amet nibh luctus accumsan quis ut massa. Maecenas ullamcorper mauris eu varius scelerisque. Cras dignissim odio posuere, egestas risus accumsan, aliquam mauris. Mauris vestibulum dui est, non aliquet velit efficitur eu. Aenean suscipit tellus tincidunt, pr",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUCyVBVbcSbIe7iQBAlA4gA2CJXTU1LacDWzLMIHUgY0Lv6rxogYRk0muJL0uzaCJZ50&usqp=CAU",
      stars:"50"
    },
    {
      id:2,
      name:'Product 2',
      description:"varius. Vestibulum consectetur arcu at sem ultrices consectetur. Nunc sit amet pulvinar ante, id interdum purus. Vestibulum finibus, mauris facilisis imperdiet convallis, metus ex iaculis leo, quis aliquam ligula diam pretium mauris. Integer commodo commodo dolor. Nunc lacinia volutp",
      image:"https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg",
      stars:"150"
    }
  ]

  getProductList():any[] {
    return this.productList;
  }

  getProductDetails(id: number):{} {
    return this.productList.find(element => element.id === id);
  }

}
