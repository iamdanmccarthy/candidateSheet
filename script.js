const endButton = document.getElementById('end-button')
//endButton.onclick = function() {calculation};

const calculation = () => {
    //name
    let name = document.getElementById('name').value;
    let completedName = document.getElementById('name-response')
    completedName.innerHTML = `Candidate name: ${name}`;

    //date
    let date = document.getElementById('date').value;
    let completedDate = document.getElementById('date-response')
    completedDate.innerHTML = `Date: ${date}`;
  
    let overallRating = document.getElementById('overall').value;
    let myRating = document.getElementById('overall-rating')
    myRating.innerHTML = `My Rating: ${overallRating} </strong>.`

    

    //other skills
    let communicationRatingParagraph = document.getElementById('communication-rating');
    let communicationGrade = document.getElementById('communication-skills').value;
    communicationRatingParagraph.innerHTML = `Communication: ${communicationGrade}`;

    let skills1 = document.getElementById('skills1').value;
    let skills1Rating = document.getElementById('skills1-score').value;
    let skills1Paragraph = document.getElementById('skills-rating1');
    skills1Paragraph.innerHTML = `${skills1}: ${skills1Rating}`

    let skills2 = document.getElementById('skills2').value;
    let skills2Rating = document.getElementById('skills2-score').value;
    let skills2Paragraph = document.getElementById('skills-rating2');
    skills2Paragraph.innerHTML = `${skills2}: ${skills2Rating}`

    let skills3 = document.getElementById('skills3').value;
    let skills3Rating = document.getElementById('skills3-score').value;
    let skills3Paragraph = document.getElementById('skills-rating3');
    skills3Paragraph.innerHTML = `${skills3}: ${skills3Rating}`

    let skills4 = document.getElementById('skills4').value;
    let skills4Rating = document.getElementById('skills4-score').value;
    let skills4Paragraph = document.getElementById('skills-rating4');
    skills4Paragraph.innerHTML = `${skills4}: ${skills4Rating}`

    let skills5 = document.getElementById('skills5').value;
    let skills5Rating = document.getElementById('skills5-score').value;
    let skills5Paragraph = document.getElementById('skills-rating5');
    skills5Paragraph.innerHTML = `${skills5}: ${skills5Rating}`

    




    /*
    let skills2 = document.getElementById('skills2').value;
    let skills3 = document.getElementById('skills3').value;
    let skills4 = document.getElementById('skills4').value;
    let skills5 = document.getElementById('skills5').value;

    
    let skills2Rating = document.getElementById('skills2-score').value;
    let skills3Rating = document.getElementById('skills3-score').value;
    let skills4Rating = document.getElementById('skills4-score').value;
    let skills5Rating = document.getElementById('skills5-score').value;
*/



    let otherSkills = document.getElementById('general-response');
   
   

   let otherNotes = document.getElementById('other-notes').value;
   let otherNotesResponse =  document.getElementById('other-notes-response');

    /*otherSkills.innerHTML = `The candidate demonstrated ${communicationGrade.toLowerCase()} communication skills. They were able to speak to their experience in regards to ${skills1}, ${skills2}, and ${skills3}.
    In addition through their work experience, they also have experience with ${skills4} and ${skills5}.` */

    otherNotesResponse.innerHTML = `${otherNotes}`;

    //const copyButton = document.getElementById('copy-button');

    //copyButton.style.display = "flex";
    
}

