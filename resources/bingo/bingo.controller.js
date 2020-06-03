let numberCalled = Array(75).fill().map((_, i) => i+1); //know is the number is called, -1 when the number is used
let timesCalled = 0;//to check the number of times called

const getRandonNumber = () => {
    timesCalled += 1;
    if(timesCalled > 75)
        return 'All numbers have been taken';//all number have been called
    else
    {
        while(1)//look for an unused number
        {
            let randonNumber = Math.floor(Math.random() * process.env.MAX) + 1;
            if(numberCalled[randonNumber - 1] !== -1)
            {
                numberCalled[randonNumber - 1] = -1;
                return randonNumber;
            }
        }
    }
}

const getNumber = async(req, res) => {
    try {
        let number = getRandonNumber();
        res.status(200).json({ data: number});
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

module.exports = {
    getNumber
};