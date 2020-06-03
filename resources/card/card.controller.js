const generateNumberPerRow = (lowerBound,upperBound,ismiddle) => {//will generate 5 random numbers for a row
    let random = [];
    for(let i = 0;i < 5;i++)
    {
        if(i==2 && ismiddle)//except int the middle where it's empty
            random.push('');
        else
        {
            let temp = Math.floor(Math.random()*(upperBound - lowerBound + 1) + lowerBound);
            if(random.indexOf(temp) == -1)
                random.push(temp);
            else
                i--;
        }
    }
    return random;
}

const generateCard = async(req, res) => {
    try {
        let card = [];
        card = card.concat(generateNumberPerRow(1,15,false));
        card = card.concat(generateNumberPerRow(16,30,false));
        card = card.concat(generateNumberPerRow(31,45,true));
        card = card.concat(generateNumberPerRow(46,60,false));
        card = card.concat(generateNumberPerRow(61,75,false));//put together in an array
        res.status(200).json({ data: card});
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

module.exports = {
    generateCard
};