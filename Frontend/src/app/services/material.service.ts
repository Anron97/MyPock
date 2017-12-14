import {Injectable} from "@angular/core";

@Injectable()
export class MaterialService{

    constructor() {
    }

    getMaterials() {
        return {
            title: "Title",
            img: "/src/assets/img/background-card.jpg",
            link: "mylink.ru",
            isFavorite: false
        }
    }
}
