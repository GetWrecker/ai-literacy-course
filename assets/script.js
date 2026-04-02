function analyzeSentiment() {
    const text = document.getElementById('ai-input').value.toLowerCase();
    const result = document.getElementById('result');
    
    if(!text) {
        result.innerText = "Please type something first!";
        return;
    }

    const pos = ['happy', 'good', 'excited', 'great', 'love', 'helpful'];
    const neg = ['scared', 'bad', 'danger', 'worry', 'threat', 'stop'];

    let score = 0;
    pos.forEach(w => { if(text.includes(w)) score++ });
    neg.forEach(w => { if(text.includes(w)) score-- });

    if(score > 0) {
        result.innerText = "😊 AI Analysis: You seem optimistic and ready for the future!";
        result.style.color = "#10b981";
    } else if (score < 0) {
        result.innerText = "⚠️ AI Analysis: You have valid concerns. Caution is good in AI literacy.";
        result.style.color = "#ef4444";
    } else {
        result.innerText = "😐 AI Analysis: You are neutral or exploring. Keep learning!";
        result.style.color = "#64748b";
    }
}
