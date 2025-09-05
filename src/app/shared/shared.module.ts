import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports: [CommonModule, TranslateModule, FormsModule, LoadingComponent]
})
export class SharedModule { }
