import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.css']
})
export class SkillsContainerComponent {


private applyTextOnHover = function(hoverElem: HTMLElement, textElem: HTMLElement, eventType: string, text: string)
{hoverElem.addEventListener(eventType,()=>{textElem.innerHTML = text})};

ngOnInit(){

var skillsHeaderText = document.getElementById('skills-header')!;

// no hover
var skillColumns = document.getElementsByTagName('ul');
for(var i = 0; i < skillColumns.length; i++) {
  this.applyTextOnHover(skillColumns[i], skillsHeaderText, 'mouseout', 'Click to see certification');
}

// hover over skills
var angularSkill = document.getElementById('angular-skill')!;
this.applyTextOnHover(angularSkill, skillsHeaderText, 'mouseover', 'Angular');

var htmlSkill = document.getElementById('html-skill')!;
this.applyTextOnHover(htmlSkill, skillsHeaderText, 'mouseover', 'HTML');

var cssSkill = document.getElementById('css-skill')!;
this.applyTextOnHover(cssSkill, skillsHeaderText, 'mouseover', 'CSS');

var jsSkill = document.getElementById('javascript-skill')!;
this.applyTextOnHover(jsSkill, skillsHeaderText, 'mouseover', 'Javascript');

var tsSkill = document.getElementById('typescript-skill')!;
this.applyTextOnHover(tsSkill, skillsHeaderText, 'mouseover', 'Typescript');

var pythonSkill = document.getElementById('python-skill')!;
this.applyTextOnHover(pythonSkill, skillsHeaderText, 'mouseover', 'Python');

var powerbiSkill = document.getElementById('powerbi-skill')!;
this.applyTextOnHover(powerbiSkill, skillsHeaderText, 'mouseover', 'Power-BI');

var excelSkill = document.getElementById('excel-skill')!;
this.applyTextOnHover(excelSkill, skillsHeaderText, 'mouseover', 'Excel');

var projectSkill = document.getElementById('project-skill')!;
this.applyTextOnHover(projectSkill, skillsHeaderText, 'mouseover', 'Project');

var sqlSkill = document.getElementById('sql-skill')!;
this.applyTextOnHover(sqlSkill, skillsHeaderText, 'mouseover', 'SQL');

var softwareSkill = document.getElementById('software-skill')!;
this.applyTextOnHover(softwareSkill, skillsHeaderText, 'mouseover', 'Software development good practices');

var poSkill = document.getElementById('po-skill')!;
this.applyTextOnHover(poSkill, skillsHeaderText, 'mouseover', 'Product Management');

var poSkill = document.getElementById('po-skill')!;
this.applyTextOnHover(poSkill, skillsHeaderText, 'mouseover', 'Product Management');

var gitSkill = document.getElementById('git-skill')!;
this.applyTextOnHover(gitSkill, skillsHeaderText, 'mouseover', 'Git');

// var githubSkill = document.getElementById('github-skill')!;
// this.applyTextOnHover(githubSkill, skillsHeaderText, 'mouseover', 'GitHub');

var jiraSkill = document.getElementById('jira-skill')!;
this.applyTextOnHover(jiraSkill, skillsHeaderText, 'mouseover', 'Jira');

var awsSkill = document.getElementById('aws-skill')!;
this.applyTextOnHover(awsSkill, skillsHeaderText, 'mouseover', 'Amazon Web Services');

}
}
