import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-pag',
  templateUrl: './logo-pag.component.html',
  styleUrls: ['./logo-pag.component.css']
})
export class LogoPagComponent  implements OnInit {
constructor(private router: Router){}
ngOnInit(): void {}
login(){
this.router.navigate(['/login'])
}
}
