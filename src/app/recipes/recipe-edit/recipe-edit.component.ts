import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  id: Number;
  editMode: Boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.editMode = !!params.id;
        this.id = +params.id;
      })
  }

}
