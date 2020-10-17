import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDropdownComponent } from './search-dropdown/search-dropdown.component';

@NgModule({
  declarations: [SearchDropdownComponent],
  imports: [
    CommonModule
  ],
  exports: []
})
export class SharedModule { }
