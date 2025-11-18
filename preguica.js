// Copia e cola no console do browser

let prova = ''; document.querySelectorAll('.question').forEach((question, index) => {
    prova = `${prova}\n\nQuestão ${index + 1}: \n`;

    const header = question.querySelector('header[role="heading"]');
    const pTags = header.querySelectorAll('p');
    if (pTags.length > 0) {
        pTags.forEach(ptag => {
            prova = `${prova}${ptag.textContent.trim()}\n`
        })
    } else {
        prova = `${prova}${header.textContent.trim()}\n`
    }

    prova = `${prova}\nAlternativas: \n\n`

    const contentDiv = question.querySelector("div[role='content']");
    if (contentDiv) {
        const labels = contentDiv.querySelectorAll('label');
        let alternatives = {};
        labels.forEach((label) => {
            let key = label.textContent.trim().replace(/\s/g, '_');  
            alternatives[key] = label.textContent.trim();
            
        });
        Object.values(alternatives).forEach((alternative, idl) => {
            prova = `${prova} (${ String.fromCharCode(97 + (idl % 26))}) ${alternative}\n`
        })
    }
}); console.log(prova);
