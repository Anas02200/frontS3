import { Component, OnInit, Inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-message-conf',
  templateUrl: './message-conf.component.html',
  styleUrls: ['./message-conf.component.css']
})
export class MessageConfComponent implements OnInit {
  Jwt:string;
  nomC:string;
  constructor(
    public dialogRef: MatDialogRef<MessageConfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit() {
  console.log()
  this.Jwt=localStorage.getItem('token');
  let JwtHelper= new JwtHelperService();
  let JwtObj =JwtHelper.decodeToken(this.Jwt);
  this.nomC = JwtObj.sub;
  }

}
