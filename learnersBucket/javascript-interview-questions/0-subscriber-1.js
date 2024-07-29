function Event(){
   this.subscriptionList = new Map()

   this.subscribe = function(name,callback){
       if(!this.subscriptionList.has(name)){
          this.subscriptionList.set(name,[callback])
       }else{
         let existingSubscriber = this.subscriptionList.get(name)
         this.subscriptionList.set(name,[...existingSubscriber,callback])
       }
   }
}

