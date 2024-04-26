import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {

  animalList:any = [];

  constructor(private animalService:AnimalService) { }

  //El subscribe cumple la funcion com si fuera un then en el back-end
  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data:
      {}) => {
        this.animalList = data;
      }
    );
  }

  //Es como el metodo main en Java
  ngOnInit() {
    this.getAllAnimals();
  }

}
