import { Component, OnInit } from '@angular/core';
import { Vote } from './../model/vote'


@Component({
  selector: 'app-voting-index',
  templateUrl: './voting-index.component.html',
  styleUrls: ['./voting-index.component.css']
})
export class VotingIndexComponent implements OnInit {

  constructor() { }
  email:any="";
  errorMsg:String="";
  duplicateEmail:String='';

  voting_record=[];

  countKantipur:number=0;
  countBurger:number=0;
  countBishalMomo:number=0;



  votingPlace=[
    {
      name:"Kantipur",
      address:"Baneshwor"
    },{
      name:"Burger House",
      address:"Baneshwor"
    },{
      name:"Bishal Momo",
      address:"Baneshwor"
    }
  ]


  vote(place:any){

    if(this.checkEmail(this.email)){
      let newVote=new Vote(this.email,place.name,place.address);
      // const vote=JSON.stringify(newVote);
    
      if(this.checkVotingRecord(this.email)) {
        if(place.name=='Kantipur'){
          this.countKantipur++;
        }else if(place.name=='Burger House'){
          console.log("burger house")
          this.countBurger++;
        }else if(place.name=='Bishal Momo'){
          console.log("bishal house")
          this.countBishalMomo++;
        }
        this.voting_record.push(newVote);
     }
     

      console.log("voting record",this.voting_record);
    }
      
  }



  checkVotingRecord(email:any){
   
    for(var i=0;i<this.voting_record.length;i++){
      if(this.voting_record[i].email===email){
        console.log("email",this.voting_record[i]);
       
        this.duplicateEmail="You have already voted !";
        setTimeout(()=>{
          this.duplicateEmail="";
        },3000)
     
        return false;
      }
    }
    return true;
  }

 

  checkEmail(email:any){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!email){
        console.log("empy email")
        this.errorMsg="Please enter email address !";
        return false;
      }else if(!email.match(mailformat)){
        this.errorMsg="Invalid email address !";
          return false;
      }else{
        this.errorMsg="";
        return true;
      }
  }
  ngOnInit() {
    
  }

}