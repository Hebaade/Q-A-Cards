let flashCards=document.getElementsByClassName('flashCards')[0]
let createBox=document.getElementsByClassName('create-box')[0]
let question=document.getElementById('question')
let answer=document.getElementById('answer')
let save=document.getElementById('save')
let close=document.getElementById('close')
let New=document.getElementById('new')
let del=document.getElementById('del')
let contentArray=localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')):[]
del.onclick=function deleteCard(){
    localStorage.clear()
    flashCards.innerHTML=''
    contentArray=[]
}
close.onclick=function closeCard(){
    createBox.style.display="none"
}
New.onclick=function newCard(){
    createBox.style.display="block"
}
save.onclick=function save(){
    var flashCard_info={
        'my_question':question.value,
        'my_answer':answer.value
    }
    contentArray.push(flashCard_info)
    localStorage.setItem('items',JSON.stringify(contentArray))
    divMaker(contentArray[contentArray.length - 1])
    question.value=''
    answer.value=''
}
contentArray.forEach(divMaker)
function divMaker(text){
    var div=document.createElement('div')
    var h2_question=document.createElement('h2')
    var h2_answer=document.createElement('h2')
    div.className='flashCard'
    h2_question.setAttribute('style',"border-top: 1px solid red;margin-top:30px;padding:15px")
    h2_question.innerHTML=text.my_question
    h2_answer.setAttribute('style',"color:red;display:none;text-align:center")
    h2_answer.innerHTML=text.my_answer
    div.appendChild(h2_question)
    div.appendChild(h2_answer)
    div.addEventListener('click',function(){
        if(h2_answer.style.display=='none'){
            h2_answer.style.display='block' 
        }
        else{
            h2_answer.style.display='none' 
        }
    })
    flashCards.appendChild(div)
}