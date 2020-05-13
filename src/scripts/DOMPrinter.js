
const DOMPrinter = {
    //Build Entry Log container for all entries in journalEntries array
    buildEntryLogContainer() {
        document.querySelector(".entryLog").innerHTML = `<h1 class = "hEntry">Entry Log<br></h1>`
    },
    // Purpose: To create, and return, a string template that represents a single journal entry object as HTML
    makeJournalEntryComponent(journalEntry){
        return `
        <div class="journal-entry">
        <span>__________________________________</span>
            <h1>${journalEntry.concept}</h1>
            <p>${journalEntry.entry}</p>
            <h3><em> Mood: ${journalEntry.mood}</em></h3>
            <p>${journalEntry.date}</p>
            <button id="delete-btn-${journalEntry.id}">Delete</button>
        </div>
        `
    }
}

export default DOMPrinter
