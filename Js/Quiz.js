class Quiz{
    constructor(){}

    getState(){
        var Gamestageref = db.ref("gamestate")
        Gamestageref.on("value",(data)=>{
            gameStage = data.val()
        })
    }

    update(State){
        db.ref("/").update({
            gamestate:State
        })
    }

     start(){
        if(gameStage ==0){
            player = new Player()
            player.getCount()
            form = new Question ()
            form.display()
        }
        
    }
    play(){
        form.hide()
    }
}