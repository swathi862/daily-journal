const journalEntry = {
    date: "07/24/2018",
    concept: "Array methods",
    entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
    mood: "Ok"
};
const journalEntry1 = {
    date: "04/16/2020",
    concept: "the DOM",
    entry: "The day we had to do more practice exercise concerning the DOM. *terrified shudder* Not so coincidentally, also the most challenging day yet. Combining 3 languages, conceptually is just hard y'all. I feel like I'm not getting any better at it, but that's what practice is for, I guess. Hopefully, at the very least, I start to understand the works of what is going on conceptually for the DOM, like the 'what to do' if not the 'how to do it'.",
    mood: "i'M fInE"
};
const journalEntry2 = {
    date: "04/17/2020",
    concept: "The Road So Far...",
    entry: "So, we're finishing up Week 2 today, and it is just surreal to think about everything we know now compared to when we started, seemingly just a short while ago. We know the basics of HTML, CSS, and JavaScript. An more importantly, we're learning how to put it all together to create functional pieces of websites and other media content.",
    mood: "Hopeful"
};

var journalEntries = [];

journalEntries.push(journalEntry, journalEntry1, journalEntry2);

//Add new Journal Entry Component function from DOM/user input
const addNewJournalEntry = () =>{
    console.log("Im in the add new function")
    const dateValue = document.querySelector("#journalDate").value
    const conceptValue = document.querySelector("#concepts").value
    const entryValue = document.querySelector("#entry").value
    const moodValue = document.querySelector("#mood").value

    const newJournalEntry = Object.create(journalEntry)
    newJournalEntry.date = dateValue
    newJournalEntry.concept = conceptValue
    newJournalEntry.entry = entryValue
    newJournalEntry.mood = moodValue


    journalEntries.push(newJournalEntry)
}

// Purpose: To create, and return, a string template that represents a single journal entry object as HTML

const makeJournalEntryComponent = (journalEntry) => {
    return `
    <div class="journal-entry">
        <h1>${journalEntry.concept}</h1>
        <p>${journalEntry.entry}</p>
        <h3><em> Mood: ${journalEntry.mood}</em></h3>
        <p>${journalEntry.date}</p>
    </div>
    `
}


// Purpose: To render all journal entries to the DOM
const renderJournalEntries = (entries) => {
    
    for (entry of entries){
        let entryComponent = ""

        entryComponent = makeJournalEntryComponent(entry)
    
        document.querySelector(".entryLog").innerHTML += entryComponent
    }
}

//Event Listener for "Record Journal Entry" button to take in user input from DOM
document.querySelector("#record").addEventListener("click", function(){
    if (event.target.id === "record"){
        console.log("Clicked the record button!")
        addNewJournalEntry();
    }

    // Invoke the render function
    renderJournalEntries(journalEntries)

})

// var arrayUniqueJournalEntries = function (arr) {
//     return arr.filter(function(item, index){
//         return arr.indexOf(item) >= index;
//     });
// };

// var journalEntriesUnique = arrayUniqueJournalEntries(journalEntries);

// console.log(journalEntriesUnique)
