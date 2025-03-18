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

var experienceHeaderText = document.getElementById('experience-header')!;

// no hover
var expColumns = document.getElementsByTagName('div');
for(var i = 0; i < expColumns.length; i++) {
  this.applyTextOnHover(expColumns[i], experienceHeaderText, 'mouseout', 'Click to see LinkedIn page');
}

// hover over skills
// var spprospektCo = document.getElementById('spprospekt')!;
// this.applyTextOnHover(spprospektCo, experienceHeaderText, 'mouseover', 'Logistics, operation, foreign commerce');

var mrvCo = document.getElementById('mrv')!;
this.applyTextOnHover(mrvCo, experienceHeaderText, 'mouseover', 'Engineering, consulting, product management');

var figueirenseFc = document.getElementById('figueirense')!;
this.applyTextOnHover(figueirenseFc, experienceHeaderText, 'mouseover', 'Sports analytics, process mapping, project development');

var ultragaz = document.getElementById('ultragaz')!;
this.applyTextOnHover(ultragaz, experienceHeaderText, 'mouseover', 'Business inteligence, SQL, data analytics');

var atlassian = document.getElementById('atlassian')!;
this.applyTextOnHover(atlassian, experienceHeaderText, 'mouseover', 'ITSM, Customer support services')
}
}
