import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail : NavController) {}

  items=[
    {
      id:1,
      name:'product a',
      price:100,
      detail:'this is product a',
      imageURL:'https://media.assettype.com/afkgaming%2F2023-04%2F393ccb48-a4c4-4a59-a724-9c43784a6f04%2FGlitchpop_Vandal_Skin.webp?auto=format%2Ccompress&dpr=1.0&format=webp&w=900'
    },
    {
      id:1,
      name:'product b',
      price:150,
      detail:'this is product b',
      imageURL:'https://media.assettype.com/afkgaming%2F2023-04%2Fdfe6b6db-868d-4494-b8b4-37afa17f7939%2FPrelude_to_Chaos_Vandal_Skin.webp?auto=format%2Ccompress&dpr=1.0&format=webp&w=900'
    },
    {
      id:1,
      name:'product c',
      price:200,
      detail:'this is product c',
      imageURL:'https://media.assettype.com/afkgaming%2F2023-04%2Fd7afd875-7826-4e60-a9fb-6cedbed83be3%2FAraxys_Vandal_Skin.webp?auto=format%2Ccompress&dpr=1.0&format=webp&w=900'
    },
    {
      id:1,
      name:'product d',
      price:250,
      detail:'this is product d',
      imageURL:'https://media.assettype.com/afkgaming%2F2023-04%2Fa05c9427-6ff4-45ad-aef5-a5ec95332b1a%2FSentinels_of_Light_Vandal_Skin.webp?auto=format%2Ccompress&dpr=1.0&format=webp&w=900'
    },


  ]
  gotodetail(i:any){
this.detail.navigateForward('/detail',{state:{i}})

  }
}

