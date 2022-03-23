import { EntradaService } from './../shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-anime',
  templateUrl: './detalles-anime.component.html',
  styleUrls: ['./detalles-anime.component.css']
})
export class DetallesAnimeComponent implements OnInit {
  public entrada: any;
  public animeid: string = "";
  constructor(private entradaService: EntradaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.animeid = params['animeid'];
    });
    this.recuperarEntrada();
  }

  public recuperarEntrada(): void {
    this.entradaService.recuperarEntradaPorId(this.animeid).subscribe(
      (data) => {
        this.entrada = data;
      },
      (error) => {

      },
      () => {

      }
    )
  }

  public recuperarEntradasPopularidad(): void {
    this.entradaService.recuperarEntradasPopularidad().subscribe(
      (data) => {
        this.entrada = data;
      },
      (error) => {

      },
      () => {

      }
    );
  }

}