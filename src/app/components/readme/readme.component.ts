import { Component } from '@angular/core';
import { ReadmeService } from '../../services/readme.service';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss'],
  host: {['class']: 'col-12'}
})
export class ReadmeComponent {
  public readme: string;

  constructor(private _readmeService: ReadmeService) {
    this._readmeService.getReadme()
      .subscribe(
        readme => this.readme = readme
      )
  }
}