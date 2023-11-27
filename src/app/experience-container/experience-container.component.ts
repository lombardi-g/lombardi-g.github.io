import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-container',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.css']
})
export class ExperienceContainerComponent {


private applyTextOnHover = function(hoverElem: HTMLElement, textElem: HTMLElement, eventType: string, text: string)
{hoverElem.addEventListener(eventType,()=>{textElem.innerHTML = text})};

ngOnInit(){

var experienceHeaderText = document.getElementById('skills-header')!;

// no hover
var expColumns = document.getElementsByTagName('div');
for(var i = 0; i < expColumns.length; i++) {
  this.applyTextOnHover(expColumns[i], experienceHeaderText, 'mouseout', 'Click to see LinkedIn page');
}

// hover over skills
var spprospektCo = document.getElementById('spprospekt')!;
this.applyTextOnHover(spprospektCo, experienceHeaderText, 'mouseover', '');

var mrvCo = document.getElementById('mrv')!;
this.applyTextOnHover(mrvCo, experienceHeaderText, 'mouseover', 'HTML');

var figueirenseFc = document.getElementById('figueirense')!;
this.applyTextOnHover(figueirenseFc, experienceHeaderText, 'mouseover', '');

}
}
