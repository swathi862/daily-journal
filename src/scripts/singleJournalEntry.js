
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

export default addNewJournalEntry