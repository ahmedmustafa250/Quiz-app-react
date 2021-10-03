import "./quiz.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, useHistory  } from "react-router";
import { useState } from "react";


export default function Quiz() {
  let history=useHistory()
  let currentUser=localStorage.getItem("currentUser")

  let mcqs=[
    { 'sawal':'In which year did Intel introduce its first 8-bit microprocessor?',
      'option':['1971','1972','1973','1974'],
      'key':'1972',
      'useranswer': '',
      'score':0,
    },
    { 'sawal':'Which technology was used by Intel to design its first 8-bit microprocessor?',
      'option':['NMOS','HMOS','PMOS','TTL'],
      'key':'PMOS',
      'useranswer': '',
      'score':0,
    },
    { 'sawal':' In which year Intel launched the 8086 microprocessor?',
      'option':['1975','1976','1977','1978'],
      'key':'1978',
      'useranswer': '',
      'score':0,
    },
    { 'sawal':'Which technology was used by Intel to design the 8086 microprocessor?',
      'option':['TTL','HMOS','DTL','NMOS'],
      'key':'HMOS',
      'useranswer': '',
      'score':0,
    },
    { 'sawal':'What is the word length of the Intel Pentium-II microprocessor?',
      'option':['8-bit','32-bit','64-bit','16-bit'],
      'key':'64-bit',
      'useranswer': '',
      'score':0,
    },
    { 'sawal':'In 8085 microprocessor, how many opcodes are present?',
      'option':['246','278','250','256'],
      'key':'246',
      'useranswer': '',
      'score':0,
    },
    { 'sawal':'Which of the following is not a microprocessor?',
      'option':['Intel 4004','Intel 8086','Intel 8080','Intel 8051'],
      'key':'Intel 8051',
      'useranswer': '',
      'score':0,
    },
    { 'sawal':'How many output pins are present in 8085 microprocessor?',
      'option':['32','36','25','27'],
      'key':'27',
      'useranswer': '',
      'score':0,
    },
    { 'sawal':'Which of the following is not a status flag in 8086 microprocessor?',
      'option':['Overflow flag','Direction flag','Interrupt flag','Index flag'],
      'key':'Index flag',
      'useranswer': '',
      'score':0,
    },
    { 'sawal':'What is the vectored address of RST-5?',
      'option':['0010H','0032H','0028H','0030H'],
      'key':'0028H',
      'useranswer': '',
      'score':0,
    },
  ]

  function generateResult(){
    let getSelectedValue = document.querySelector('input[type=radio][name="question"]:checked');
    try{getSelectedValue.checked=false;}
    catch(exception){alert("Select an Option")}
    if(getSelectedValue != null) {
      let updated=JSON.parse(localStorage.getItem("response"))
      let userSelectedValue=getSelectedValue.value
      let orignalKey='0028H';
      // console.log(userSelectedValue,orignalKey)
      updated[9].useranswer=userSelectedValue
        if(userSelectedValue==orignalKey){
              updated[sequence+1].score=1
              localStorage.setItem("response",JSON.stringify(updated))
              // console.log(updated)
               history.push("/QuizResult")
        }
        else{
            updated[sequence+1].score=0
              localStorage.setItem("response",JSON.stringify(updated))
              // console.log(updated)
              history.push("/QuizResult")
        }
            
    }
  }
      
      



  const [user, removeuser] = useState(currentUser)
    function signout(){
      localStorage.removeItem("currentUser");
      removeuser(null)
    }


    const [sequence,setsequence]=useState(0)

    function changeQuestion(){
      let updated;
      try{
        updated=JSON.parse(localStorage.getItem("response"))
      }
      catch(err){}
      let getSelectedValue = document.querySelector('input[type=radio][name="question"]:checked');
      try{getSelectedValue.checked=false;}
      catch(exception){alert("Select an Option")}
      if(getSelectedValue != null) {
        let userSelectedValue=getSelectedValue.value
        let orignalKey=mcqs[sequence].key
        if(sequence==0){
          mcqs[sequence].useranswer=userSelectedValue
          if(userSelectedValue==orignalKey){
              console.log("pak")
                mcqs[sequence].score=1
                localStorage.setItem("response",JSON.stringify(mcqs))
                setsequence(sequence+1);
          }
          else{
            mcqs[sequence].score=0
            localStorage.setItem("response",JSON.stringify(mcqs))
            setsequence(sequence+1);
          }
        }
        else if(sequence>0 && sequence<8){
            updated[sequence].useranswer=userSelectedValue
            if(userSelectedValue==orignalKey){
                  updated[sequence].score=1
                  localStorage.setItem("response",JSON.stringify(updated))
                  setsequence(sequence+1);
            }
            else{
              updated[sequence].score=0
              localStorage.setItem("response",JSON.stringify(updated))
              setsequence(sequence+1);
            }

        }
        else if(sequence>=8){
          updated[sequence].useranswer=userSelectedValue
            if(userSelectedValue==orignalKey){
                  updated[sequence].score=1
                  localStorage.setItem("response",JSON.stringify(updated))
                  setsequence(sequence+1); 
               
                  document.getElementById("submit").setAttribute('class','hide')
                  let result= document.createElement('button')
                  result.innerHTML="Submit"
                  result.setAttribute('class','result-btn')
                  result.onclick=generateResult
                  document.getElementById("changeButton").appendChild(result)
                  
            }
            else{
              updated[sequence].score=0
              localStorage.setItem("response",JSON.stringify(updated))
              setsequence(sequence+1);
              
              document.getElementById("submit").setAttribute('class','hide')
                  let result= document.createElement('button')
                  result.innerHTML="Submit"
                  result.setAttribute('class','result-btn')
              result.onclick=generateResult
              
              document.getElementById("changeButton").appendChild(result) 
                  
              
            }
        }
      
        

        

      }       
  }


   

  return (
   <div>
     {currentUser ?
          <div className="cover">
            <div className="quiz">
              <div className="main-top">
                    <div className="quiz-heading-div">
                      <h2 className="quiz-heading"> Quiz Application {sequence}</h2>
                    </div>
                    <div className="Signout-div">
                        <Button variant="primary" type="submit" className="Signout" onClick={signout} >
                            Signout
                          </Button>
                    </div>
              </div>
                  <div className="bottom-border"></div>
              <div className="middle">
                <h2 className="question">{mcqs[sequence].sawal}</h2>
                <div id="content">
                      <p className="options"><input type="radio" name="question"  value={mcqs[sequence].option[0]} id="one" />{mcqs[sequence].option[0]}</p>
                      <p className="options"><input type="radio" name="question"  value={mcqs[sequence].option[1]} id="one" />{mcqs[sequence].option[1]}</p>
                      <p className="options"><input type="radio" name="question"  value={mcqs[sequence].option[2]} id="one" />{mcqs[sequence].option[2]}</p>
                      <p className="options"><input type="radio" name="question"  value={mcqs[sequence].option[3]} id="one" />{mcqs[sequence].option[3]}</p>
                </div>
              </div>
              <div className="bottom-border1"></div>
              <div className="end">
                <div>
                  <h4>{sequence+1} of 10 questions</h4>
                </div>
                <div className="next-btn-div" id="changeButton">
                  <Button variant="primary" type="submit" className="next-btn" onClick={changeQuestion} id="submit">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
  :   
        <Redirect to="/" />
      }     
  </div>
  );
}
