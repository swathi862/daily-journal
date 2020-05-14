
const DOMPrinter = {
    //Build Entry Log container for all entries in journalEntries array
    buildEntryLogContainer() {
        document.querySelector(".entryLog").innerHTML = `<h1 class = "hEntry">Entry Log<br></h1>`
    },
    // Purpose: To create, and return, a string template that represents a single journal entry object as HTML
    makeJournalEntryComponent(journalEntry){
        return `
        <div id="journal-entry-${journalEntry.id}" class="journal-entry">
        <hr>
            <h1>${journalEntry.concept}</h1>
            <p>${journalEntry.entry}</p>
            <h3><em> Mood: ${journalEntry.mood}</em></h3>
            <p>${journalEntry.date}</p>
            <button id="delete-btn-${journalEntry.id}">Delete</button>
            <button id="edit-btn-${journalEntry.id}">Edit</button>
        </div>
        `
    },
    buildEditForm(singleJournalEntry){
        const editForm = `<form>
        <fieldset>
            <label for ="journalDate">Date of Entry:</label>
            <input type = "date" name= "journalDate" id = "journalDate-edit" value = "${singleJournalEntry.date}"> <br>
        </fieldset>
        <fieldset>
            <label for ="concepts">Concepts Covered:</label>
            <input type = "text" name="concepts" id = "concepts-edit" value = "${singleJournalEntry.concept}">
        </fieldset>
        <fieldset>
            <label for ="entry">Journal Entry: </label>
            <textarea id = "entry-edit" value="${singleJournalEntry.entry}" rows = "10" cols = "50"></textarea> <br>
        </fieldset>
        <fieldset>
            <label for = "mood">Mood for the day: </label>
            <select id= "mood-edit" value="${singleJournalEntry.mood}">
                <option>Anxious</option>
                <option>Happy</option>
                <option>Sad</option>
                <option>Scared</option>
                <option>Angry</option>
                <option>Annoyed</option>
                <option>Frustrated</option>
                <option>Tired</option>
                <option>Confused</option>
                <option>Hopeful</option>
                <option>i'M fInE</option>
                <option>Ok</option>
            </select> 
        </fieldset>
        <br>
    </form>
        <button type = "submit" id = "save-btn-${singleJournalEntry.id}" class= "button">Save Entry</button>`

        return editForm;
    },
    saveEditedObject(entryID){
        const editedObject = {
            id: entryID,
            date: document.querySelector("#journalDate-edit").value,
            concept: document.querySelector("#concepts-edit").value,
            entry: document.querySelector("#entry-edit").value,
            mood: document.querySelector("#mood-edit").value
        }
        return editedObject;
    }
}

export default DOMPrinter
