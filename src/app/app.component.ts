import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'to-do';
  taskForm = new FormGroup({
    task: new FormControl('',Validators.required)
  })
  data:{task:string,completed:boolean}[]=[];
  containsData:boolean  = false;

  ngOnInit() {
    if(this.data.length != 0){
      this.containsData = true;
    }
  }
  onSubmit(){
    const newTask = this.taskForm.value.task;
    if (newTask){
      this.data.push({task: newTask,completed: false});
      this.taskForm.reset();
      this.containsData = true;
    }
  }
  updateTask(index:number){
    this.data[index].completed = true;
  }
  deleteTask(index:number){
    this.data.splice(index,1);
    if(this.data.length == 0){
      this.containsData = false;
    }
  }
}
