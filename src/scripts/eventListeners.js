import DOMPrinter from "./DOMPrinter.js"
import addNewJournalEntry from './singleJournalEntry.js'
import apiManager from './apiManager.js'

const eventListeners = {
    recordEventListener(){
        document.querySelector("#record").addEventListener("click", function(){
            if (event.target.id === "record"){
                DOMPrinter.buildEntryLogContainer();
                addNewJournalEntry();
            }
        })
    },
    deleteEventListener(){
        document.querySelector("body").addEventListener("click", function(){
            if (event.target.id.includes("delete-btn") === true){
                const deleteID = event.target.id.split("-")[2]
                DOMPrinter.buildEntryLogContainer();
                apiManager.deleteJournalEntry(deleteID);
            }
        })
    }
}

export default eventListeners
