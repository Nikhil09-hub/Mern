

fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json())
.then(data=>{
    let table = document.querySelector('table')
    let tBody = document.createElement('tbody')
    data.slice(0,5).forEach(v => {
        let row = document.createElement('tr')
        
            let idElement = document.createElement('td')
            idElement.textContent = v.id
            row.appendChild(idElement)

            let titleElement = document.createElement('td')
            titleElement.textContent = v.title
            row.appendChild(titleElement)

            let statusElement = document.createElement('td')
            statusElement.textContent = (v.completed?"Completed":"")
            row.appendChild(statusElement) 

             
        
        tBody.appendChild(row)
    });
    table.appendChild(tBody)
}
).
catch(err=>console.log(err))
