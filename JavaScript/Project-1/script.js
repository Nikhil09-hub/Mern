//Get elements from the DOM
    //Read head 
        console.log(document.head);
    //Read body 
        console.log(document.body);
    //Read other elements
        heading = document.querySelector('h1')
        console.log(heading);
        //For more thanone element of same time 
        let allHeadings = document.querySelectorAll('h1')
        console.log(allHeadings);
        console.log(allHeadings[0]);
        //Using class
        let classHeading = document.querySelectorAll('.header')
        console.log(classHeading); // Same for id using #
        // only text content
        let textHeading = document.querySelector('.header')
        console.log(textHeading.textContent);
        textHeading.textContent = 'Changed content'
        
        let eventHeading = document.querySelector('.event')
        eventHeading.addEventListener('click',() =>{
            eventHeading.textContent = 'Mouse click Event performed'
        //Change styles 
        eventHeading.style.color = 'blue'
        eventHeading.style.backgroundColor = 'orange'
        })

        //Create a paragraph as child for parent on button click
        let btn = document.querySelector('button')
        let parent = document.querySelector('.parent')
        //Add event listener
        btn.addEventListener('click',()=>{
            //create paragraph element
            let para = document.createElement('p');
            console.log(para);
            //Add content
            para.textContent = 'This is para'
            console.log(para);
            //add child to parent
            parent.appendChild(para) 

        })
    let skills = ['React','Node','Gen AI']
    let skillsElement = document.querySelector('.skills')
    
    for(let s of skills){
        let h4 = document.createElement('h4')
        h4.textContent = s
        skillsElement.appendChild(h4)

    }