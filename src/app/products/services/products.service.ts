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
      quantity: 9,
      description:"lis. Mauris at metus sit amet nibh luctus accumsan quis ut massa. Maecenas ullamcorper mauris eu varius scelerisque. Cras dignissim odio posuere, egestas risus accumsan, aliquam mauris. Mauris vestibulum dui est, non aliquet velit efficitur eu. Aenean suscipit tellus tincidunt, pr",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUCyVBVbcSbIe7iQBAlA4gA2CJXTU1LacDWzLMIHUgY0Lv6rxogYRk0muJL0uzaCJZ50&usqp=CAU",
      stars:"50",
    },
    {
      id:2,
      name:'Product 2',
      quantity: 12,
      description:"varius. Vestibulum consectetur arcu at sem ultrices consectetur. Nunc sit amet pulvinar ante, id interdum purus. Vestibulum finibus, mauris facilisis imperdiet convallis, metus ex iaculis leo, quis aliquam ligula diam pretium mauris. Integer commodo commodo dolor. Nunc lacinia volutp",
      image:"https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg",
      stars:"150"
    },
    {
      id:2,
      name:'Product 3',
      quantity: 15,
      description:"varius. Vestibulum consectetur arcu at sem ultrices consectetur. Nunc sit amet pulvinar ante, id interdum purus. Vestibulum finibus, mauris facilisis imperdiet convallis, metus ex iaculis leo, quis aliquam ligula diam pretium mauris. Integer commodo commodo dolor. Nunc lacinia volutp",
      image:"https://cdn.vox-cdn.com/thumbor/D9XXOcVoGDtJCIJHpHbi_OKI5hY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9283449/jbareham_170916_2000_0057.jpg",
      stars:"150"
    }
  ]

  getProductList():any {
    return this.productList;
  }

  getProductDetails(id: number): any {
    return this.productList.find(element => element.id === id);
  }

  deleteProduct(id: number){
    const index = this.productList.findIndex(element => element.id === id);
    this.productList.splice(index, 1);
  }

  incrementProductQuantity(id: number): void {
    const index = this.productList.findIndex(element => element.id === id);
    this.productList[index].quantity++;
  }

  decreaseProductQuantity(id: number): void {
    const index = this.productList.findIndex(element => element.id === id);
    this.productList[index].quantity--;
  }

  addProduct(product: { id: number; name: string; quantity: number; description: string; image: string; stars: string; }): void {
    product.id = this.productList.length +1;
    this.productList.push(product);
  }

}
