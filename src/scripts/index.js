function cardsFront(lista) {
    for(let i=0; i < lista.length; i++){
        let section = document.querySelector('.section__front-cards')
        

        let div_card = document.createElement('div')
        div_card.classList.add('section__card')

        let div_title = document.createElement('div')
        div_title.classList.add('section__card--title')

        let img = document.createElement('img')
        img.src = "./src/assets/Group 1.png"
        img.classList.add('icon-user')

        let div_title_2 = document.createElement('div')
        

        let p_job = document.createElement('p')
        p_job.innerText = `${lista[i].title}`

        let span_location = document.createElement('span')
        span_location.innerText = "Paraná - Curitiba"

        let p_desc = document.createElement('p')
        p_desc.classList.add('description')
        p_desc.innerText = `${lista[i].descrription}`

        let div_specs = document.createElement('div')
        div_specs.classList.add('section__card--specs')
        

        let span_time = document.createElement('span')
        span_time.innerText = lista[i].modality[0]

        let span_type = document.createElement('span')
        span_type.innerText = lista[i].modality[1]


        div_title_2.append(p_job, span_location)
        div_title.append(img, div_title_2)
        div_specs.append(span_time, span_type)
        div_card.append(div_title, p_desc, div_specs)
        section.appendChild(div_card)
    }
}

cardsFront(frontEndJobs)

function cardsBack(lista) {
    for(let i=0; i < lista.length; i++){
        let section = document.querySelector('.section__back-cards')
        

        let div_card = document.createElement('div')
        div_card.classList.add('section__card')

        let div_title = document.createElement('div')
        div_title.classList.add('section__card--title')

        let img = document.createElement('img')
        img.src = "./src/assets/Group 1.png"
        img.classList.add('icon-user')

        let div_title_2 = document.createElement('div')
        

        let p_job = document.createElement('p')
        p_job.innerText = `${lista[i].title}`

        let span_location = document.createElement('span')
        span_location.innerText = "Paraná - Curitiba"

        let p_desc = document.createElement('p')
        p_desc.classList.add('description')
        p_desc.innerText = `${lista[i].descrription}`

        let div_specs = document.createElement('div')
        div_specs.classList.add('section__card--specs')
        

        let span_time = document.createElement('span')
        span_time.innerText = lista[i].modality[0]

        let span_type = document.createElement('span')
        span_type.innerText = lista[i].modality[1]


        div_title_2.append(p_job, span_location)
        div_title.append(img, div_title_2)
        div_specs.append(span_time, span_type)
        div_card.append(div_title, p_desc, div_specs)
        section.appendChild(div_card)
        
    
    }
}
cardsBack(backEndJobs)

