document.getElementById("convert-btn").addEventListener("click", () => {
    const text = document.getElementById("input-text").value;
    const context = new (window.AudioContext || window.webkitAudioContext)();
  
    let time = context.currentTime;
    const toneDuration = 0.1;
  
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const freq = 200 + (charCode % 100) * 5;
  
      const oscillator = context.createOscillator();
      oscillator.type = 'square';
      oscillator.frequency.value = freq;
  
      oscillator.connect(context.destination);
      oscillator.start(time);
      oscillator.stop(time + toneDuration);
  
      time += toneDuration;
    }
  });