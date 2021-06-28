import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

/**
 * 自定義驗證方法
 * @param name 控件信息
 */
 function validatorName(name: FormControl) {
  return name.value === 'zero' ? { nameinvalid: true } : null;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // public heroForm = new FormGroup({
  //   name: new FormControl('hero1'),
  //   age: new FormControl(18)
  // })

  public heroForm = this.fb.group({
    name: ['hero1', [
      Validators.required,
      Validators.minLength(4),
      validatorName // 添加自定義驗證方法
    ]],
    age: [12],
    address: this.fb.group({
      city: ['台北'],
      district: ['中正區'],
      street: ['羅斯福路']
    })
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // 這邊的 getter 是給前端取得參數用 (類似 template variable 的用途)
  get name() {
    return this.heroForm.get('name');
  }

  submit(): void {
    console.log('submit reactive form')
  }

}
