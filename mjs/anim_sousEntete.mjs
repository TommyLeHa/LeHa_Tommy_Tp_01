//Animation du sous entête

export class anim_sousEntete {
    constructor(elmsousEntete) {
      this.elmsousEntete = elmsousEntete
    }
    
    animsousEntete(){
        console.log('///////// animation //////////')
        //console.log(this.elmEntete.tagName)
        let elmTitre = this.elmsousEntete.children[1]
        console.log(elmTitre.tagName)
        elmTitre.classList.add('animsousEntete')
    }
    
    }