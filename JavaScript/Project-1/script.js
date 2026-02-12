//Get elements from the DOM
    //Read head 
        console.log(document.head);
    //Read body 
        console.log(document.body);
    //Read other elements
        heading = document.querySelector('h1')
        console.log(heading);
        //For more thanone element of same time 
        allHeadings = document.querySelectorAll('h1')
        console.log(allHeadings);
        console.log(allHeadings[0]);
        //Using class
        classHeading = document.querySelectorAll('.header')
        console.log(classHeading); // Same for id using #