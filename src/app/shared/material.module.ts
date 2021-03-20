import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Angular Material
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatBadgeModule],
  exports: [MatButtonModule, MatIconModule, MatBadgeModule]
})
export class MaterialModule {}
