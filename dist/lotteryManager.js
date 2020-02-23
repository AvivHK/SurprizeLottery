class lotteryManager{
    
    async getWinners(){
        let winners = await $.get('/winners')
        return winners
    }

    async getLottery(isProduct){
        let lotories = await $.get(`/lottery/${isProduct}`)
        return lotories
    }

    async addUserToLottery(lotteryID) {
        let lottery = await $.ajax({
            type: 'PUT',
            url: `lottery/${lotteryID}`,
            data: {
                firstName: `infoFromPaypal[firstName]`,
                lastName:   `infoFromPaypal[lastName]`,
                email:   `infoFromPaypal[email]`,
                address:   `infoFromPaypal[address]`
            },
            success: function(data){
                console.log(`sent ${data}`);
                
            },
            error: function(){
                console.log(`failed sending`);
                
            }
        })    
    }


    
}