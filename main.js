import data from './data.js'
//console.log(data)
const container = document.querySelector('.container')

data.forEach( (job) => {
   // console.log(job)
    container.innerHTML += `
    <div class="box">
    <div>
        <img src="${job.logo}" alt="company-logo" class="logo"/>
        <div class="flex details">
            <p class="company-name">${job.company}</p>
            <div class="flex-center new">
                <p>NEW!</p>
            </div>
            
            <div class="flex-center featured"> 
                <p>FEATURED</p>
            </div>
        </div>
        
        <h2>${job.position}</h2>
        <p class="grey">
            <span>${job.postedAt}</span><span>.</span>
            <span>${job.contract}</span><span>.</span>
            <span>${job.location}</span>
        </p>
        <div class="line"></div>

        <div>
            <button class="btn">${job.role}</button>
            <button class="btn">${job.level}</button>
            <ul> ${job.languages.map(lang => `<li><button class="btn">${lang}</button></li>`).join("")} </ul>
            <ul> ${job.tools.map(tool => `<li><button class="btn">${tool}</button></li>`).join("")} </ul>
        </div>
        
    </div>	
</div>
    `
})

const button = [...document.querySelectorAll('button')];
const allJobs = [...document.querySelectorAll('.box')]

allJobs.forEach ( (box) => {
    box.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn')) {
            console.log(e.target.innerText)
        }
    })
})