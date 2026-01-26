document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las tarjetas de unidad
    const unidades = document.querySelectorAll('.unidad');
    
    unidades.forEach(unidad => {
        // Agregar evento click a toda la tarjeta
        unidad.addEventListener('click', function(e) {
            // Prevenir que los enlaces se activen al hacer click en la tarjeta
            if (!e.target.closest('a')) {
                e.preventDefault();
                
                // Toggle la clase active en la tarjeta
                this.classList.toggle('active');
                
                // Cerrar otras unidades (opcional)
                unidades.forEach(otraUnidad => {
                    if (otraUnidad !== this) {
                        otraUnidad.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Cerrar el menú si se hace click fuera de las tarjetas
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.unidad')) {
            unidades.forEach(unidad => {
                unidad.classList.remove('active');
            });
        }
    });
});