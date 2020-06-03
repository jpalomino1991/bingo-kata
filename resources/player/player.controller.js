let numberCalled = Array(75).fill().map((_, i) => i+1); //know is the number is called, -1 when the number is used
let timesCalled = 0;//to check the number of times called

const checkCard = (card) => {
    for(let i=0;i < card.length;i++)
    {
        if(card[i] != -1 || card[i] != '')//all number are taken
        {
            return ' is not the winner';
        }
    }
    return ' is the winner';
}

const checkPlayerCard = async(req, res) => {
    try {
        let card = getPlayerCard(req.body.player_id);//returns the player card
        let result = checkCard(card);
        res.status(200).json({ data: 'Player' + player_id + result});
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

module.exports = {
    checkPlayerCard
};