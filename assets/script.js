function analyzeSentiment() {
    const text = document.getElementById('ai-input').value.toLowerCase();
    const result = document.getElementById('result');
    
    if(!text) {
        result.innerText = "Please type something first!";
        return;
    }

    const positive = ['good', 'great', 'excited', 'love', 'amazing', 'help', 'future'];
    const negative = ['scared', 'bad', 'danger', 'worry', 'threat', 'stop', 'hate'];

    let score = 0;
    positive.forEach(word => { if(text.includes(word)) score++ });
    negative.forEach(word => { if(text.includes(word)) score-- });

    result.style.padding = "10px";
    result.style.borderRadius = "5px";

    if(score > 0) {
        result.innerText = "😊 AI Sentiment: Optimistic. You see the potential!";
        result.style.background = "#dcfce7";
        result.style.color = "#166534";
    } else if (score < 0) {
        result.innerText = "⚠️ AI Sentiment: Cautious. You are aware of the risks!";
        result.style.background = "#fee2e2";
        result.style.color = "#991b1b";
    } else {
        result.innerText = "😐 AI Sentiment: Neutral. Keep exploring!";
        result.style.background = "#f1f5f9";
        result.style.color = "#475569";
    }
}
