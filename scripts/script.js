var sections = ['about', 'work', 'skill', 'portfolio','contact'];
var about, work, skill, portfolio, contact;
var aboutHeight, workHeight, skillHeight, portfolioHeight, contactHeight;
var aboutPos, workPos, skillPos, portfolioPos, contactPos;

window.onload = function() {
    about = document.getElementById('about')
    aboutPos = about ? about.offsetTop : 0
    aboutHeight = about ? about.offsetHeight : 0

    work = document.getElementById('work')
    workPos = work ? work.offsetTop : 0
    workHeight = work ? work.offsetHeight : 0

    skill = document.getElementById('skill')
    skillPos = skill ? skill.offsetTop : 0
    skillHeight = skill ? skill.offsetHeight : 0

    portfolio = document.getElementById('portfolio')
    portfolioPos = portfolio ? portfolio.offsetTop : 0
    portfolioHeight = portfolio ? portfolio.offsetHeight : 0

    contact = document.getElementById('contact')
    contactPos = contact ? contact.offsetTop : 0
    contactHeight = contact ? contact.offsetHeight : 0

    console.log('about', aboutPos, aboutHeight)
    console.log('work', workPos, workHeight)
    console.log('skill', skillPos, skillHeight)
    console.log('portfolio', portfolioPos, portfolioHeight)
    console.log('contact', contactPos, contactHeight)
}

window.onscroll = function() {
    let windowHeight = document.documentElement.clientHeight
    let scrollTop = document.documentElement.scrollTop
    let scrollBottom = windowHeight + scrollTop
    console.log('on scroll', scrollTop, scrollBottom)
    
    if (scrollTop >= contactPos && scrollBottom <= (contactPos + contactHeight)) {
        makeSectionSticky('contact')
    }
    else if (scrollTop >= portfolioPos && scrollBottom <= (contactPos + 50)) {
        makeSectionSticky('portfolio')
    }
    else if (scrollTop >= skillPos && scrollBottom <= portfolioPos) {
        makeSectionSticky('skill')
    }
    else if (scrollTop >= workPos && scrollBottom <= skillPos) {
        makeSectionSticky('work')
    }
    else if (scrollTop >= aboutPos && scrollBottom <= workPos) {
        makeSectionSticky('about')
    }
    else {
        makeSectionSticky('')
    } 
}

function makeSectionSticky(sectionName) {
    for (let i = 0; i< sections.length; i++) {
        let section = getSection(sections[i])
        // console.log(sections[i], section)
        if (sections[i] === sectionName) {
            section.classList.add('sticky')
        } else {    
            section.classList.remove('sticky')
        }
    }
}

function getSection(sectionName) {
    let section = null
    switch(sectionName) {
        case 'about':
            section = about            
            break;
        case 'work':
            section = work            
            break;
        case 'skill':
            section = skill            
            break;
        case 'portfolio':
            section = portfolio            
            break;
        case 'contact':
            section = contact            
            break;
    }
    return section
}