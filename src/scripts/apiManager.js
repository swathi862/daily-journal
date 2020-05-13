import DOMPrinter from "./DOMPrinter.js"

const apiManager = {
    getJournalEntries(){
        return fetch("http://localhost:3000/entries") // Fetch from the API
        .then(r => r.json())  // Parse as JSON
    },
    addJournalEntries(newEntry){
        fetch("http://localhost:3000/entries", {
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
        fetch(`http://localhost:3000/entries/${idToDelete}`,{
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
    }
}

export default apiManager
    
