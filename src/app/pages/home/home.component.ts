import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myform=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    age:new FormControl('',[Validators.required]),
    address:new FormGroup({
      street:new FormControl(''),
      pincode:new FormControl('')
    })
  });

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
  }

}
