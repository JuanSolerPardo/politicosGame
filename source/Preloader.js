export class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, 'background');
        this.add.image('logo');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {        
        this.load.image('btnINICIO', './img/btnINICIO.png');
        this.load.image('congreso', './img/congreso.png');	
        this.load.image('img1', './face/1.png');
        this.load.image('img2', './face/2.png');
        this.load.image('img3', './face/3.png');
        this.load.image('img4', './face/4.png');
        this.load.image('img5', './face/5.png');
        this.load.audio('opened', './sound/open.wav');
        this.load.audio('catched', './sound/catch.mp3');
    }

    create ()
    {       
        this.scene.start('MainMenu');
    }
}
