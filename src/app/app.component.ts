import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public tiles : Array<string> = ["flow","customer","agenda","promo","blog"];
  public izquierda : Array<string> = ["flow", "agenda","blog"];
  public derecha : Array<string> = ["customer", "promo"];
  
  ngOnInit(): void {
    
    // this.tiles.forEach((tile, index) => {
    //   console.log(tile, index)
    //   if(index % 2 == 0){
    //     this.izquierda.push(tile)
    //   }
    //   else{
    //     this.derecha.push(tile)
    //   }
    // });
  }
  
  constructor(private dragulaService: DragulaService) {
    dragulaService.dropModel.subscribe((value) => {
      console.log(value)
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      console.log(value)
      this.onRemoveModel(value.slice(1));
    });
  }

  private onDropModel(args) {
    console.log(args)
    let [el, target, source] = args;
    // do something else
  }

  private onRemoveModel(args) {
    console.log(args);
    
    let [el, source] = args;
    // do something else
  }

}
