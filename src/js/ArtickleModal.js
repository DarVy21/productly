import {Modal} from "./Modal"

export class ArtickleModal extends Modal {
    constructor(classes,{id,title, urlToImage, tags, content,date}){
        super(classes);
        this.id=id;
        this.title=title;
        this.urlToImage=urlToImage;
        this.tags=tags;
    
        this.content=content;
        this.date=date;
    }

    generateContent() {
        let template = '';
        let artickle = document.createElement('div');
        artickle.className='artickle-modal__content';
   

        this.urlToImage && //if(this.urlToImage)
        (template += `<img class = "strategy__image" src="${this.urlToImage}" alt="strategy">`)

        if(this.title || this.tags ||  this.content || this.date ){
            template += ` <div class="strategy__content">`

            this.date && //if(this.urlToImage)
            (template += `<p class="strategy__date">${this.date}</p>`)

            this.title && //if(this.urlToImage)
            (template += `<h3 class="strategy__name">${this.title}</h3>`)

            this.content && //if(this.urlToImage)
            (template += `<p class="strategy__content">${this.content}</p>`)

            if(this.tags){
                template += `<div class="strategy__tags tags">`

                this.tags.map(tag => {
                    template += `<span class="tag tag_colored">${tag}</span>`
                })

                template += `</div>`
            }


            template += `</div>`
        }

        artickle.innerHTML = template;
        return artickle;
    }

    renderModal() {
        let content= this.generateContent();
        super.buildModal(content);
    }
}