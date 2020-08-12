import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.css"]
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    id: [""],
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    }),
    aliases: this.fb.array([this.fb.control("")])
  });

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  item = { id: 1, firstName: "TTTT", lastName: 'lastName' };
  updateProfile() {
    this.profileForm.patchValue(this.item);
  }

  addAlias() {
    this.aliases.push(this.fb.control(""));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.item = this.profileForm.value;
    console.warn(this.profileForm.value);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
