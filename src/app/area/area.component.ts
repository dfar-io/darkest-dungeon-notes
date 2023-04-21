import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Area } from './area';
import { AreaService } from './area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  area!: Area;

  constructor(
    private areaService: AreaService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const areaId = params['id'];
      this.area = this.areaService.getAreaById(areaId);
    });
  }
}
