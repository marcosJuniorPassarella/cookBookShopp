import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;
  constructor() {}

  ngOnInit(): void {}

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}
