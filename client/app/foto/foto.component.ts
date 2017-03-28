import { Component, Input } from  '@angular/core';
import { Http } from '@angular/http';

@Component ({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    @Input() titulo;
    @Input() url;
 }