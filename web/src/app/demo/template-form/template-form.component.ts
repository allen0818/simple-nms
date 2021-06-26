import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  public genders = [
    { id: 'male', text: '男', value: true },
    { id: 'male', text: '女', value: false }
  ]

  public locations: Array<String> = ['taipei', 'taoyuan', 'hsinchu', 'miaoli'];

  hero = new Hero("小明", 16, "male", "taipei");

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log('submit template-form.');
  }

}
