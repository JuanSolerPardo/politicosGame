export class MainMenu extends Phaser.Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 385, 'background');        
        this.add.image(512, 385, 'logo');

       var botonJugar = this.add.image(500,385,'btnINICIO');
        botonJugar.setScale(0.5);     
        botonJugar.setInteractive();
        botonJugar.on('pointerup',  ()=>  this.scene.start('Game'));      
     
    }

   
}
