import apiManager from "./apiManager.js"

//Add new Journal Entry Component function from DOM/user input
const addNewJournalEntry = () =>{
    const dateValue = document.querySelector("#journalDate").value
    const conceptValue = document.querySelector("#concepts").value
    const entryValue = document.querySelector("#entry").value
    const moodValue = document.querySelector("#mood").value

    const newJournalEntry = {
        date: dateValue,
        concept: conceptValue,
        entry: entryValue,
        mood: moodValue
    }
    apiManager.addJournalEntries(newJournalEntry);
}

export default addNewJournalEntry