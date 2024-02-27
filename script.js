// FOR DIGITAL CLOCK JAVASCRIPT function updateClock() {
function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 0 and 12 to 12

        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
        document.getElementById('time').textContent = timeString;
    }
    //UPDATE CLOCK EVERY SECOND 
    setInterval(updateClock, 1000);
    //CALL FUNCTION ONE TIME
    updateClock();


