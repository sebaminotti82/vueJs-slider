var app = new Vue({
 
     el:'#root',
         data:{
            
           counter:0,
           photos:['img/bambina.jpg','img/detenuto.jpg','img/fiori.jpg','img/pioggiaColorata.jpg','img/robot.jpg','img/social.jpg'],
            alt:['Banksy: Girl with Balloon','Banksy:Oscar Wilde has escaped','Banksy: Rage the flawer thrower','CMYK','Banksy:robot writing bar code','Banksy: children social'],
           infoPhoto:[
            {titolo:'Girl with Balloon',descrizione:`
             Una bambina che per colpa del vento  perde il suo palloncino a forma di cuore,
             l'immagine è in bianco e nero ma il palloncino simbolo di gioia e felicità è rappresentato
             da un cuore rosso acceso
            
            `},
            {titolo:'Oscar Wilde  has escaped',descrizione:`
            Il murales rappresenta un detenuto(Oscar wilde)che fugge dal carcere , aiutandosi con una corda
            fatta di pagine uscite da una macchina da scrivere !
            
            `},
            {titolo:'Rage the flawer thrower',descrizione:`
            Noto in italia come (il lanciatore di fiori ), quest opera di BANKSY rappresenta un manifestante intento 
            nel lanciare fiori , anziché lanciare pietre o peggio
            
            `},
            {titolo:'CMYK',descrizione:`
            Opera non di Banksy ma di un collettivo norvegese che si chiama (Skurktur) rappresenta una pioggia colorata che colpisce un uomo adulto protetto da un ombrello
            mentre il bambino gioca felice sotto la pioggia di colori
            
            `},
            {titolo:'robot writing bar code on wall',descrizione:`
            
            un robot che crea un murales che rappresenta un codice a barre ! che voglia simboleggiare una catena virtuale e il robot è l'umano ?
            `},
            {titolo:'social children',descrizione:`
             
               Un bambino che piange non per un gioco o per un regalo ma piange per il profilo social che non ha ricevuto follow o like! 
               Segno di una società un pò allo sbando
            
            `},
           ],
         },
            methods:{
                
                circleClick:function(index){
                    this.counter=index
                },

                next:function(){
                    this.counter++
                    if(this.counter>this.photos.length -1){
                        this.counter=0
                    }
                },
               precedente:function(){
                   this.counter--
                   if(this.counter < 0){
                       this.counter = this.photos.length -1
                   }
               }
            },

            created:function(){

                   document.addEventListener('keyup',(e)=>{

                    if(e.which==39){
                        this.next()
                    }else if(e.which==37){
                        this.precedente()
                    }
                   })
            }
})