//Création du slider
export class Slider {
    constructor(elmMonSlider, config_slider){
        this.elmMonSlider = elmMonSlider;
        this.list_slide = config_slider.list_slide;
        console.log('slider')

    }

    creerSlider() {

        console.log(this.elmMonSlider.tagName)
        console.log(this.list_slide)
        let elmSlider = document.createElement('div')
        elmSlider.classList.add('slider')
        let elmSlides = document.createElement('div')
        elmSlides.classList.add('slides')
        let k=1
        for (let unSlide of this.list_slide){
            let elmSlide = document.createElement('div')
            let elmImg = document.createElement('img')
            let elmBouton = document.createElement('a')
            elmSlide.id = 'slides-' + k
            elmImg.id = 'slides-' + k
            elmBouton.href = "#" + elmSlide.id;
            elmBouton.innerHTML = k;
            elmImg.src = unSlide.img;
            k++
            

            elmSlides.appendChild(elmSlide)
            elmSlide.appendChild(elmImg)
            elmSlider.appendChild(elmBouton);
        }
        elmSlider.appendChild(elmSlides)
        this.elmMonSlider.appendChild(elmSlider)

    }


}