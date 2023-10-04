class commands{
      termsLink(){
         return cy.findAllByRole('link',{name:"Terms"}).invoke('removeAttr','target').invoke('attr','target','_self')
      }
      generateRandomUsername(length){
            let username= '';
            const characters = 'abcdefghijklmnopqrstuvwxyz'
            for(let i =0;i<length;i++){
                  username+=characters.charAt(Math.floor(Math.random()*characters.length));
            }
            return username;
      }
      randomEmail(){
            return `test${Math.floor(Math.random()*100000)}@gmail.com`;
      }
      termsLink1(){
            return cy.findAllByRole('link',{name:"Terms"}).eq(1).then(function(li){
                  const url = li.prop('href')
                  cy.log(url)
                  cy.visit(url)
            })
      }
}

export default commands;