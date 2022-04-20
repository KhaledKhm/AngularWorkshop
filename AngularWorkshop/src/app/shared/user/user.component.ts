import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUsers : string[] | undefined;
  constructor(private _service:UserService) { }

  ngOnInit(): void {
    this._service.getUsersName().subscribe(res=>{console.log(res);

      this.listUsers=res});
  }

}
