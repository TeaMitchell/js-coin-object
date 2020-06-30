const main = document.querySelector('main')


let coin = {
    state: 0,
    flip: function () {
        let flipCoin = Math.random()

        if (flipCoin > 0.5) {
            this.state = 1

        } else {
            this.state = 0
        }

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        coin.flip()
        let Heads = 0
        let Tails = 1
        if (this.state === 0) {
            console.log('Heads')
            return Heads
        }
        else{
            console.log('Tails')
            return Tails
        }
        

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },

    toHTML: function() {
        coin.flip()
        let image = document.createElement('img');
        
        if (this.state === 0) {
             image.src = "Heads.jpg"
             toHTML.append(image)
     }
         else {
             image.src = "Tails.jpg"
             toHTML.append(image)
     }
    /* 3. Set the properties of this image element to show either face-up
       or face-down, depending on whether this.state is 0 or 1.*/

    
    }
};

function check () {
    coin.toString()
    coin.toHTML()

}
check ()
// console.log(coin.state)





// function display20Flips() {
            
// }