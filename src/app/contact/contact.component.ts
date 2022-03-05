import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Défnition des FormGroup / FormControl
  profileForm: FormGroup = this.fb.group({
    name: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.email])],
    message: ['', Validators.compose([Validators.required])],
  });
  
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.profileForm);
      const email = this.profileForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/mdobzzdn',
        { name: email.name, email: email.email, message: email.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            this.profileForm.reset();
          }
        );
  }
}
