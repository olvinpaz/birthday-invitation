const Invitation = (() => {
    function init() {
        const rsvpBtn = document.getElementById('btn-rsvp');
        const phoneNumber = "50431828628"; // Número de Honduras

        rsvpBtn.addEventListener('click', () => {
            const message = "¡Hola! Confirmo mi asistencia al primer añito de Alana Marie. 🎉";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    return { init };
})();
