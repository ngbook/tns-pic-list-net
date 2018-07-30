import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PicService } from '~/services/pic.service';

export interface PicItem {
    name: string;
    pic: string;
}

@Component({
    selector: "list",
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    picItems: PicItem[];

    constructor(private picService: PicService) {
    }

    ngOnInit() {
        this.picService.getPics()
            .subscribe(
                data => {
                    console.log(data);
                    this.picItems = data;
                }
            );
    }
}
