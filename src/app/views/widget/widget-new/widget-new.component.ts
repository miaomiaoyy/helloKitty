import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-new',
  templateUrl: './widget-new.component.html',
  styleUrls: ['./widget-new.component.css']
})
export class WidgetNewComponent implements OnInit {
  userId: String;
  widgetType: String;

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = this.sharedService.user._id;
      this.widgetType = params['wgtype'];
    });
  }

}
