import {Component, Input} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' ,
    providers: [FotoService]
})
export class CadastroComponent { 

    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    meuForm: FormGroup;

    constructor(service: FotoService, fb: FormBuilder) {

        this.service = service;

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {
        event.preventDefault();
         // cria uma instância de Headers
        this.service.cadastra(this.foto)
        .subscribe((x) => {
                console.log(x);
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso');
            }, erro =>  console.log(erro));
        console.log(this.foto);
    }
}
