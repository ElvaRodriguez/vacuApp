import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FiltroPipe } from "./filtro.pipe";
import { FiltradoPipe } from "./filtrado.pipe";


@NgModule({
    declarations: [FiltroPipe, FiltradoPipe],
    imports: [
        CommonModule
    ],
    exports: [
        FiltroPipe,
        FiltradoPipe
    ]
})

export class PipesModule{}