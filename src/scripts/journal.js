
//Add new Journal Entry Component function from DOM/user input
const addNewJournalEntry = () =>{
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
    <span>__________________________________</span>
        <h1>${journalEntry.concept}</h1>
        <p>${journalEntry.entry}</p>
        <h3><em> Mood: ${journalEntry.mood}</em></h3>
        <p>${journalEntry.date}</p>
    </div>
    `
}


// Purpose: To render all journal entries to the DOM
const renderJournalEntries = (entries) => {
    buildEntryLogContainer();
    for (entry of entries){
        let entryComponent = ""

        entryComponent = makeJournalEntryComponent(entry)
        
        document.querySelector(".entryLog").innerHTML += entryComponent
    }
}

//Build Entry Log container for all entries in journalEntries array
const buildEntryLogContainer = () => {
    document.querySelector(".entryLog").innerHTML = `<h1 class = "hEntry">Entry Log<br></h1>`
}

//Event Listener for "Record Journal Entry" button to take in user input from DOM
// document.querySelector("#record").addEventListener("click", function(){
//     if (event.target.id === "record"){
//         // buildEntryLogContainer();
//         addNewJournalEntry();
//     }

//     // Invoke the render function
//     renderJournalEntries(journalEntries)

// })

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(r => r.json())  // Parse as JSON
    .then(entries => {

        document.querySelector("#record").addEventListener("click", function(){
            if (event.target.id === "record"){
                // addNewJournalEntry();
                renderJournalEntries(entries)
            }

            // Invoke the render function
            // renderJournalEntries(entries)
           
        })
    })

 
