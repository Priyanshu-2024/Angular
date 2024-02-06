import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormControl, FormGroup, FormControlName } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // ####declaring variables


  title = 'Priyanshu Patel';
  data = "blog";
  bold = "";
  count = 0;
  disable = true;
  name = "TEXT";
  show = true;
  color = "";
  userdata:any = {};
  display = true;
  list:any[]=[];

  
// ##self done task for basic clearance##

  // getdata(){
  //   return "Function called"
  // }
  // getName(name:any){
  //   alert(name)
  // }
  // getvalue(f:string,l:string){
    
  //   // if (f === "" || l === "") {
  //   //   alert("Enter Data")
  //   // }else{
  //   //   console.log(f, l);
  //   // }



    
  // }

  
  // show(n:any){
  //   this.bold = n;
  //   console.log(this.bold);
    
  // }

// counter##

  // counter(type:string){
    

  //   if (this.count <= -1) {
  //     alert("error");
  //     this.count = 0
  //   } else {
  //     type ==='add' ? this.count++:this.count--;
  //   }

   
  // }

// ##Toggle##

  // disandena(){
  //   this.disable = !this.disable; // toggles the value
  //   console.log(this.disable); // Output: false
    
  // }

  // getColor(n:string)
  // {
  //   this.color = n;
    
    
  // }

  // ##forms demo##

  // user = ['priyanshu','jay','akii','dd']
  // userdata =[
  //   {name:'Priyanshu',phone:'123',email:'abc@gmail.com'},
  //   {name:'jay',phone:'123',email:'abc@gmail.com'},
  //   {name:'akii',phone:'123',email:'abc@gmail.com'},
  //   {name:'dd',phone:'123',email:'abc@gmail.com'}
  // ]
  // userdata1 =[
  //   {name:'Priyanshu',phone:'123',email:'abc@gmail.com', social:['fb','insta','linkedin']},
  //   {name:'jay',phone:'123',email:'abc@gmail.com',social:['fb','insta','linkedin']},
  //   {name:'akii',phone:'123',email:'abc@gmail.com',social:['fb','insta','linkedin']},
  //   {name:'dd',phone:'123',email:'abc@gmail.com',social:['fb','insta','linkedin']}
  // ]

  // getForm(data:NgForm){
  //   this.userdata=data;
  //   console.log(this.userdata);
    

  // }

  // hide(){
  //   this.display = !this.display;
  // }


// ##todo##

  // addtask(item:string)
  // {
  //   this.list.push ({id:this.list.length,name:item});
  //   console.log(this.list);
    
  // }
  // Remove(id:number){
  //   this.list=this.list.filter(item=>item.id!==id)
  //   console.log(id);
    
  // }

// ##child to parent data##

  // data1 = 10;  
  // Update(){
  //   this.data1=Math.floor(Math.random()*10)
  // }              
  // userDetails=[
  //   {name:"Priyanshu", phone:123},
  //   {name:"akii", phone:456},
  //   {name:"jay", phone:789},
  //   {name:"dd", phone:212}
  // ]
// data3="";
// updatedata(item:string){
//   this.data3=item
// console.log(item);
// }

// ##two way bind##

// name3:any;

// ##Template driven form##

// UserLogin(item:string){
// console.log(item);

// }

// ##reactive forms##

// loginform = new FormGroup({
//   user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]), 
  // put email in place of pattern
//   password:new FormControl('',[Validators.required,Validators.minLength(5)])
// })

// loginuser(){
//   console.log(this.loginform.value);
// }

// get user(){
//   return this.loginform.get('user')
// }
// get password(){
//   return this.loginform.get('password')
// }

}
