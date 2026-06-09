document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.faq-trigger');

    const btnMostrarForm = document.getElementById('btn-mostrar-form');
    const formDuvida = document.getElementById('form-duvida');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const currentItem = trigger.parentElement;
            
            // Fecha os outros itens
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            currentItem.classList.toggle('active');
        });
    });

    if (btnMostrarForm && formDuvida) {
        btnMostrarForm.addEventListener('click', () => {
            formDuvida.classList.add('show');
            btnMostrarForm.style.display = 'none';
        });
    }
});