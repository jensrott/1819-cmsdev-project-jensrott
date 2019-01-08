import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [],
  exports: [
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }

