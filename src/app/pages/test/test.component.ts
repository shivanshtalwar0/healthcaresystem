import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  

  
  constructor(private serv:TestService,private router:Router,private activate:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
     addTest(){
       console.log('works');
       
    
      this.router.navigate(['add']);

     }
}
