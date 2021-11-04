function BackgroundMap(classDom,domId){
    
    this.dom = null;
    
    this.construct = function(classDom,domId){
        this.init(classDom,domId);
    };

    this.init = function(classDom,domId){
        this.dom = document.getElementById(domId);
        this.dom.classList.add(classDom);
    };
    this.construct(classDom,domId);

}