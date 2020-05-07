
const apiManager = {
    getJournalEntries(){
        return fetch("http://localhost:3000/entries") // Fetch from the API
        .then(r => r.json())  // Parse as JSON
    }
}

export default apiManager
    
