import { Pipe, PipeTransform } from "@angular/core";

// jaime | toggleCase = 'JAIME'
// JAIME | toggleCase = 'jaime

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {

    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
  }

}
