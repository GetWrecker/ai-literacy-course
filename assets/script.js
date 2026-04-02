// Simulated AI Sentiment Analysis
function analyzeSentiment() {
    const input = document.getElementById('ai-input').value.toLowerCase();
    const result = document.getElementById('result');
    
    const positiveWords = ['good', 'great', 'help', 'excited', 'love'];
    const negativeWords = ['scared', 'bad', 'danger', 'hate', 'worry'];

    let score = 0;
    positiveWords.forEach(word => { if(input.includes(word)) score++ });
    negativeWords.forEach(word => { if(input.includes(word)) score-- });

    if (score > 0) {
        result.innerText = "AI Analysis: You have an Optimistic outlook!";
        result.style.color = "green";
    } else if (score < 0) {
        result.innerText = "AI Analysis: You have some concerns about AI.";
        result.style.color = "red";
    } else {
        result.innerText = "AI Analysis: You seem neutral or curious.";
        result.style.color = "gray";
    }
}
