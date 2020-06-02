window.addEventListener('load', function loader(){
  let correctInput1=false;
  let correctInput2=false;
  let input1= document.createElement('input');
  document.body.appendChild(input1);
  
  let input2= document.createElement('input');
  document.body.appendChild(input2);
  input2.style.display = "block";
  let div3 = document.createElement('div');
  div3.className = "result message";
  
  let div=document.createElement('div');
  div.className="error message";
  div.innerHTML="Wrong number";
  div.style.display = "none";
  input1.after(div);
  
  let div2=document.createElement('div');
  div2.className="error message";
  div2.innerHTML="Wrong number";
  div2.style.display = "none";
  input2.after(div2);
  
  let button= document.createElement('button');
  button.textContent="Посчитать";
  document.body.appendChild(button);
  
  let result=document.createElement('div');
  result.id="result";
  result.style.display = "none";
  button.after(result);
  
  button.addEventListener("click", function() {
    let arr1=input1.value.split("");
    let arr2=input2.value.split("");
      if(arr1.every(elem=>elem==="."||(elem>=0&&elem<=9))){
        correctInput1=true;
        div.style.display = 'none';
      }else{
        correctInput1=false;
        div.style.display = 'block';
      }
      if(arr2.every(elem=>elem==="."||(elem>=0&&elem<=9))){
        correctInput2=true;
        div2.style.display = 'none';
      }else{
        correctInput2=false;
        div2.style.display = 'block';
      }
      if(correctInput2==true&&correctInput1==true){
          let result = Number(input1.value) + Number(input2.value);
          div3.innerHTML = " = " + result;
          document.body.appendChild(div3); 
      }else{
        result.style.display = 'none';
      }
    });
  }
  )
  
  