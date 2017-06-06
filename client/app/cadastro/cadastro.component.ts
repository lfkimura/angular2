import {Component, Input} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    route: ActivatedRoute;
    mensagem: string ='';
    router: Router;

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.route = route;
        this.router = router;
        this.service = service;
        this.route.params.subscribe(params =>{
            let id = params['id'];

            if(id) {

                this.service.buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro));    
                        
            }} );

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
                this.mensagem = x.mensagem;
                console.log(x);
                this.foto = new FotoComponent();
                if(!x.inclusao)
                 this.router.navigate(['']);
            }, erro =>  console.log(erro));
        console.log(this.foto);
    }
}
