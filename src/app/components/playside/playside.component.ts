import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playside',
  templateUrl: './playside.component.html',
  styleUrls: ['./playside.component.scss']
})
export class PlaysideComponent implements OnInit {
  @Input() side: String = '';

  constructor() { }

  ngOnInit() {
    console.log(this.side);
  }

}
