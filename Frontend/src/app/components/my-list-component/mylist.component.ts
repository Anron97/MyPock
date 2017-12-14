import {Component, OnInit} from '@angular/core';
import {Material} from "../../models/material";
import {MaterialService} from "../../services/material.service";

@Component({
    selector: 'my-list-component',
    templateUrl: './mylist.component.html',
    styleUrls: ['./mylist.component.css']
})
export class MyListComponent implements OnInit{

    private materials: Material[];

    constructor(private materialService: MaterialService){

    }

    ngOnInit(): void {
        this.materials = this.materialService.getMaterials();
        console.log(this.materials.length)
    }

}
