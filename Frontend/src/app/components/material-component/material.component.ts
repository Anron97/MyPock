import {Component, Input} from '@angular/core';
import {Material} from "../../models/material";




@Component({
    selector: 'material',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.css']
})
export class MaterialComponent {
    @Input() material: Material;
}