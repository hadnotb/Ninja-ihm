function life(max,player){
    this.player = null;
    this.max = 0;
    this.current = 0;
    this.construct = function(max,player){
        this.init(max,player);
        this.display();
    };
    this.init = function(max,player){
        this.max = max;
        this.player = player;
        this.initLife();
    }

    this.initLife = function(){
        this.current = this.max;
        let cpt = 0;
        for(cpt = 0; cpt<this.max; cpt++){
            let cur = document.getElementById(this.player.dom.id + '-cell-'+ cpt);
            if(cur&&cur.tagName){
                cur.classList.remove('damaged');
            }
        }
        
    }
    this.damage = function(){
        this.current --;
        document.getElementById(this.player.dom.id + '-cell-'+ this.current).className = 'damaged';
    }
    this.isDead = function(){
        return this.current == 0;
    }
    this.display = function(){
        let cont = document.createElement("div");
            cont.className = 'player-life';
        let width = parseInt(100/this.max);    

        let cpt = 0;
        for(cpt = 0; cpt<this.max; cpt++){
            let cur = document.createElement('div');
                // cur.classList.add('lifeCells');
                cur.style.width = width + "%";
                cur.id = this.player.dom.id + '-cell-'+ cpt;
                
            cont.appendChild(cur);
        }
        document.getElementById(this.player.dom.id + '-life').appendChild(cont);
    }
    this.construct(max,player);
}