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
  
    //location
    let location = document.getElementById('location').value;
    let completedLocation = document.getElementById('location-response')
    completedLocation.innerHTML = `Location: ${location}`;

    //source
    let source = document.getElementById('source').value;
    let completedSource = document.getElementById('source-response')
    completedSource.innerHTML = `Source: ${source}`;

    //mobility
    let mobility = document.getElementById('mobility').value;
    let completedMobiloity = document.getElementById('mobility-response')
    completedMobiloity.innerHTML = `Mobility: ${mobility}`;

    //timeline
    let timeline = document.getElementById('timeline').value;
    let completedTimeline = document.getElementById('timeline-response')
    completedTimeline.innerHTML = `Timeline: ${timeline}`;

    //vaccination
    let vaccination = document.getElementById('vaccination').value;
    let completedVaccination = document.getElementById('vaccination-response')
    completedVaccination.innerHTML = `Vaccinated: ${vaccination}`;

    //compensation
    let compensation = document.getElementById('compensation').value;
    let completedCompensation = document.getElementById('compensation-response')
    completedCompensation.innerHTML = `Compensation Expectations: ${compensation}`;

    //other skills
    let skills1 = document.getElementById('skills1').value;
    let skills2 = document.getElementById('skills2').value;
    let skills3 = document.getElementById('skills3').value;
    let skills4 = document.getElementById('skills4').value;
    let skills5 = document.getElementById('skills5').value;

    let otherSkills = document.getElementById('general-response');
    let communicationGrade = document.getElementById('communication-skills').value;
    let overallRating = document.getElementById('overall').value;

   let otherNotes = document.getElementById('other-notes').value;
   let otherNotesResponse =  document.getElementById('other-notes-response');

    otherSkills.innerHTML = `The candidate demonstrated ${communicationGrade.toLowerCase()} communication skills. They were able to speak to their experience in regards to ${skills1}, ${skills2}, and ${skills3}.
    In addition through their work experience, they also have experience with ${skills4} and ${skills5}. Overall, I would rate this candidate ${overallRating.toLowerCase()}.` 

    otherNotesResponse.innerHTML = `${otherNotes}`;
    
}

/*
 //other notes that I took:
   // let otherNotes = document.getElementById('other-notes').value;
   // let otherNotesResponse =  document.getElementById('other-notes-response');

    otherSkills.innerHTML = `The candidate demonstrated ${communicationGrade.toLowerCase()} communication skills. They were able to speak to their experience in regards to ${skills1.toLowerCase()}, ${skills2.toLowerCase()}, and ${skills3.toLowerCase()}.
    In addition through their work experience, they also have experience with ${skills4.toLowerCase()} and ${skills5.toLowerCase()}. Overall, I would rate this candidate ${overallRating.toLowerCase()}.` 
   
    //otherNotesResponse.innerHTML = `Other: ${otherNotes}`;
*/