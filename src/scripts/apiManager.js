import DOMPrinter from "./DOMPrinter.js"

const apiManager = {
    getJournalEntries(){
        return fetch("http://localhost:3000/entries") // Fetch from the API
        .then(r => r.json())  // Parse as JSON
    },
    addJournalEntries(newEntry){
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        }).then(() => {
            apiManager.getJournalEntries()
            .then(entries =>{
                for (const singleEntry of entries){
                    let entryComponent = ""
                    entryComponent = DOMPrinter.makeJournalEntryComponent(singleEntry)
                    document.querySelector(".entryLog").innerHTML += entryComponent
                }
            })
        })
    },
    deleteJournalEntry(idToDelete){
        return fetch(`http://localhost:3000/entries/${idToDelete}`,{
        method: "DELETE"
        }).then(() => {
            apiManager.getJournalEntries()
            .then(entries =>{
                for (const singleEntry of entries){
                    let entryComponent = ""
                    entryComponent = DOMPrinter.makeJournalEntryComponent(singleEntry)
                    document.querySelector(".entryLog").innerHTML += entryComponent
                }
            })
        })
    },
    editJournalEntry(idToEdit){
        return fetch(`http://localhost:3000/entries/${idToEdit}`) // Fetch from the API
        .then(r => r.json())
        .then(entryToEdit =>{
            document.querySelector(`#journal-entry-${idToEdit}`).innerHTML += DOMPrinter.buildEditForm(entryToEdit)
        })
    },
    saveJournalEntry(idtoSave){
        return fetch(`http://localhost:3000/entries/${idtoSave}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(DOMPrinter.saveEditedObject(idtoSave))
    }).then(() => {
        apiManager.getJournalEntries()
        .then(entries =>{
            DOMPrinter.buildEntryLogContainer();
            for (const singleEntry of entries){
                let entryComponent = ""
                entryComponent = DOMPrinter.makeJournalEntryComponent(singleEntry)
                document.querySelector(".entryLog").innerHTML += entryComponent
            }
        })
    })
    }
}

export default apiManager
    
