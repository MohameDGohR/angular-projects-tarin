import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  constructor() { }

  Person: string[] = ['ahmed' , 'hossam', 'ali'] ;
  PeopleCountry: any[] = [
    {country : 'egypt',
     names : [  {name: 'it share'}, { name: 'mansura training' }
            ]
    },
    { country: 'turkey',
      names : [{name: 'istanbul' } , { name: 'ankra' }
              ]
    }

  ];
  default = 'courses';

  courses = [{ id : 1 , CourseName: 'java'} ,
  { id : 2 , CourseName : 'python'}

];
  value1 = ' ' ;
  i = 0 ;

  WhatColor = true ;
  onadd(){
    this.courses.push( { id : 3 , CourseName : this.value1});
    this.value1 = '';

  }
  mapcolor(){

    this.WhatColor = !this.WhatColor ;
  }
  setview(defaultview){

     this.default = defaultview ;
  }
  onremove(course){
    const index = this.courses.indexOf(course.CourseName);
    this.courses.splice(index, 1);
  }
  trackbycourse(index , course)
  {
    return course ? course.id : undefined ;
  }

  ngOnInit() {
  }

}
