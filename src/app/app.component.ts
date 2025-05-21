import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do';
  taskForm = new FormGroup({
    task: new FormControl('',Validators.required)
  })
  data:{task:string,completed:boolean}[]=[];

  onSubmit(){
    const newTask = this.taskForm.value.task;
    if (newTask){
      this.data.push({task: newTask,completed: false});
      this.taskForm.reset();
    }
  }
  updateTask(index:number){
    this.data[index].completed = true;
  }
  deleteTask(index:number){
    console.log("Hi",index)
    this.data.splice(index,1);
  }
}
