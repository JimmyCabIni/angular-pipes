import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrl: './basic-pages.component.css'
})
export class BasicPagesComponent {

  public nameLower: string = 'jaime';
  public nameUpper: string = 'JAIME';
  public fullName: string = 'jAimE caBAlleRo';

  public customDate: Date = new Date();


}
