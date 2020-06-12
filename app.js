//@ts-check 

document.addEventListener('DOMContentLoaded',() => {

    //card options
    const cardArray= [
        {
        name:'teeny',
        img: 'images/teeny.png'
        },
        {
        name:'teeny',
        img: 'images/teeny.png'
        },
        {
        name:'user',
        img: 'images/user.png'
        },
        {
        name:'user',
        img: 'images/user.png'
        },
        {
         name:'team',
        img: 'images/team.png'
        },
        {
        name:'team',
        img: 'images/team.png'
        },
        {
        name:'team-in-clouds',
        img: 'images/team-in-clouds.png'
        },
        {
        name:'team-in-clouds',
        img: 'images/team-in-clouds.png'
        },
        {
        name:'ruler',
        img: 'images/ruler.png'
        },
        {
        name:'ruler',
        img: 'images/ruler.png'
        },
        {
         name:'alien',
        img: 'images/alien.png'
        },
        {
        name:'alien',
        img: 'images/alien.png'
        }
    ]

    cardArray.sort(()=> 0.5 - Math.random())
    const grid=document.querySelector('.grid')
    var cardsChosen= []
    var cardsChosenId = []
    var cardsWon = []
    const resultDisplay =document.querySelector('#result')
    const flipsDisplay=document.querySelector('#flips') 
    var flips=0

    //create board
    function createBoard(){
        flips=0;
        resultDisplay.textContent =" "+ 0;
        flipsDisplay.textContent=" "+flips;
        for (let i=0; i<cardArray.length; i++){
            var card=document.createElement('img')
            card.setAttribute('src', 'images/question.png')
            card.setAttribute('data-id', i+'')
            card.addEventListener('click', flipcard)
            grid.appendChild(card)  
           
        }
    }
    

    //check for match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(cardsChosen[0]===cardsChosen[1]){
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'images/question.png')
            cards[optionTwoId].setAttribute('src', 'images/question.png')
        }
        cardsChosen =[]
        cardsChosenId =[] 
        resultDisplay.textContent = cardsWon.length+''
        if(cardsWon.length===(cardArray.length/2)){
            resultDisplay.textContent= ' Congratulations! You win!'
        }
    }

    //flip card
    function flipcard(){
        flips++;
        flipsDisplay.textContent=" "+flips
        var cardId =this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if(cardsChosen.length===2){
            setTimeout(checkForMatch, 500)
        }
    } 

    createBoard()
})
