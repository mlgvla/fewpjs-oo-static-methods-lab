class Formatter {
  
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9-' ]+/g, '')
    }
    
    static titleize(string) {
        let wordArray = string.split(" ")
        let title = []
        title.push(this.capitalize(wordArray[0]))

        let lowerWords = new Set(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'])
        for (let i = 1; i < wordArray.length; i++) {
           if (!lowerWords.has(wordArray[i])) {
            title.push(this.capitalize(wordArray[i]))
           } else {
               title.push(wordArray[i])
           }          
        }
        return title.join(' ')
    }
}