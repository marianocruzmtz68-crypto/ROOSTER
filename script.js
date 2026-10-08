/* =====================================================
   ROOSTERGUARD
   SISTEMA DE CONTACTO
===================================================== */


/* =====================================================
   CONFIGURACIÓN
===================================================== */


/*
    ==========================================
    1. WHATSAPP
    ==========================================

    Para México utiliza:

    521 + número de 10 dígitos

    Ejemplo:

    5215512345678

    NO utilices:
    +
    espacios
    guiones
*/

const WHATSAPP_NUMBER = "5215652310824";


/*
    ==========================================
    2. SUPABASE
    ==========================================

    Después de crear tu proyecto en Supabase
    coloca aquí:

    - Project URL
    - anon/public key

    NUNCA coloques aquí:

    service_role key
*/

const SUPABASE_URL =
    "sb_publishable_-d1mmEJn2VR3IGv8szzIRA_vcLdWnq5";

const SUPABASE_ANON_KEY =
    "sb_secret_5w3zHdFd3ISRjvYLpfJzbA_5jmvDk5y";


/*
    ==========================================
    3. FORMULARIO
    ==========================================

    En index.html encontrarás:

    action="https://formspree.io/f/TU_FORM_ID"

    Cambia TU_FORM_ID por el que te
    proporcione Formspree.

    El formulario seguirá enviando
    los datos por POST a Formspree.
*/


/* =====================================================
   ELEMENTOS
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const quoteForm =
    document.getElementById("quoteForm");

const successMessage =
    document.getElementById("successMessage");

const errorMessage =
    document.getElementById("errorMessage");

const whatsappFormButton =
    document.getElementById("whatsappFormButton");


/* =====================================================
   MENÚ
===================================================== */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon =
            menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* =====================================================
   WHATSAPP
===================================================== */

function whatsappURL(message) {

    if (
        WHATSAPP_NUMBER === "" ||
        WHATSAPP_NUMBER === "TU_NUMERO_AQUI"
    ) {

        return "#";

    }

    return (
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message)
    );

}


/* =====================================================
   CONFIGURAR BOTONES WHATSAPP
===================================================== */

const mensajeGeneral =
    "Hola RoosterGuard, me gustaría solicitar información sobre sus servicios.";


const mensajeCotizacion =
    "Hola RoosterGuard, me gustaría agendar una cotización.";


const navWhatsApp =
    document.getElementById("navWhatsApp");

const heroWhatsApp =
    document.getElementById("heroWhatsApp");

const quoteWhatsApp =
    document.getElementById("quoteWhatsApp");

const footerWhatsApp =
    document.getElementById("footerWhatsApp");

const floatingWhatsApp =
    document.getElementById("floatingWhatsApp");


if (navWhatsApp) {

    navWhatsApp.href =
        whatsappURL(mensajeGeneral);

}


if (heroWhatsApp) {

    heroWhatsApp.href =
        whatsappURL(mensajeCotizacion);

}


if (quoteWhatsApp) {

    quoteWhatsApp.href =
        whatsappURL(mensajeCotizacion);

}


if (footerWhatsApp) {

    footerWhatsApp.href =
        whatsappURL(mensajeGeneral);

}


if (floatingWhatsApp) {

    floatingWhatsApp.href =
        whatsappURL(mensajeGeneral);

}


/* =====================================================
   VALIDACIÓN
===================================================== */

function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


function validatePhone(phone) {

    const clean =
        phone.replace(/[\s()+-]/g, "");

    return /^\d{10,15}$/.test(clean);

}


function showError(input, message) {

    const group =
        input.closest(".form-group");

    if (!group) return;

    const error =
        group.querySelector(".error-message");

    if (error) {

        error.textContent = message;

    }

    input.style.borderColor = "#ff6b6b";

}


function clearError(input) {

    const group =
        input.closest(".form-group");

    if (!group) return;

    const error =
        group.querySelector(".error-message");

    if (error) {

        error.textContent = "";

    }

    input.style.borderColor = "";

}


/* =====================================================
   VALIDAR FORMULARIO
===================================================== */

function validateForm() {

    let valid = true;


    const nombre =
        document.getElementById("nombre");

    const telefono =
        document.getElementById("telefono");

    const correo =
        document.getElementById("correo");

    const servicio =
        document.getElementById("servicio");

    const descripcion =
        document.getElementById("descripcion");

    const autorizacion =
        document.getElementById("autorizacion");


    if (nombre.value.trim().length < 3) {

        showError(
            nombre,
            "Ingresa tu nombre completo."
        );

        valid = false;

    } else {

        clearError(nombre);

    }


    if (!validatePhone(telefono.value)) {

        showError(
            telefono,
            "Ingresa un número válido."
        );

        valid = false;

    } else {

        clearError(telefono);

    }


    if (!validateEmail(correo.value.trim())) {

        showError(
            correo,
            "Ingresa un correo válido."
        );

        valid = false;

    } else {

        clearError(correo);

    }


    if (servicio.value === "") {

        showError(
            servicio,
            "Selecciona un servicio."
        );

        valid = false;

    } else {

        clearError(servicio);

    }


    if (descripcion.value.trim().length < 20) {

        showError(
            descripcion,
            "Escribe al menos 20 caracteres."
        );

        valid = false;

    } else {

        clearError(descripcion);

    }


    if (!autorizacion.checked) {

        showFormError(
            "Debes aceptar la autorización de contacto."
        );

        valid = false;

    }


    return valid;

}


/* =====================================================
   ERROR GENERAL
===================================================== */

function showFormError(message) {

    errorMessage.textContent =
        message;

    errorMessage.style.display =
        "block";

}


function hideFormError() {

    errorMessage.textContent =
        "";

    errorMessage.style.display =
        "none";

}


/* =====================================================
   OBTENER DATOS
===================================================== */

function getFormData() {

    const contacto =
        document.querySelector(
            'input[name="contacto"]:checked'
        );


    return {

        nombre:
            document.getElementById("nombre")
                .value.trim(),

        telefono:
            document.getElementById("telefono")
                .value.trim(),

        correo:
            document.getElementById("correo")
                .value.trim(),

        empresa:
            document.getElementById("empresa")
                .value.trim(),

        servicio:
            document.getElementById("servicio")
                .value,

        presupuesto:
            document.getElementById("presupuesto")
                .value,

        descripcion:
            document.getElementById("descripcion")
                .value.trim(),

        contacto:
            contacto
                ? contacto.value
                : ""

    };

}


/* =====================================================
   MENSAJE WHATSAPP
===================================================== */

function createWhatsAppMessage(data) {

    return `
Hola RoosterGuard, me gustaría solicitar una cotización.

Nombre: ${data.nombre}

Teléfono: ${data.telefono}

Correo: ${data.correo}

Empresa / negocio:
${data.empresa || "No especificado"}

Servicio:
${data.servicio}

Presupuesto aproximado:
${data.presupuesto || "No especificado"}

Descripción del proyecto:
${data.descripcion}

Método de contacto:
${data.contacto}
`;

}


/* =====================================================
   ENVIAR POR WHATSAPP
===================================================== */

if (whatsappFormButton) {

    whatsappFormButton.addEventListener(
        "click",
        () => {

            hideFormError();


            if (!validateForm()) {

                return;

            }


            const data =
                getFormData();


            const message =
                createWhatsAppMessage(data);


            const url =
                whatsappURL(message);


            if (url === "#") {

                showFormError(
                    "Configura primero tu número de WhatsApp en script.js."
                );

                return;

            }


            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =====================================================
   SUPABASE
===================================================== */


/*
    Esta función guarda el cliente
    en la tabla "clientes".

    IMPORTANTE:

    Si todavía no configuraste Supabase,
    simplemente no guardará datos.

    El formulario seguirá funcionando
    con Formspree.
*/

async function saveToSupabase(data) {

    if (
        SUPABASE_URL.includes("TU-PROYECTO") ||
        SUPABASE_ANON_KEY === "TU_SUPABASE_ANON_KEY"
    ) {

        console.log(
            "Supabase todavía no está configurado."
        );

        return {
            success: false,
            skipped: true
        };

    }


    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/clientes`,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "apikey":
                            SUPABASE_ANON_KEY,

                        "Authorization":
                            `Bearer ${SUPABASE_ANON_KEY}`,

                        "Prefer":
                            "return=minimal"

                    },

                    body:
                        JSON.stringify({

                            nombre:
                                data.nombre,

                            telefono:
                                data.telefono,

                            correo:
                                data.correo,

                            empresa:
                                data.empresa || null,

                            servicio:
                                data.servicio,

                            presupuesto:
                                data.presupuesto || null,

                            descripcion:
                                data.descripcion,

                            contacto_preferido:
                                data.contacto,

                            estado:
                                "Nuevo"

                        })

                }
            );


        if (!response.ok) {

            const error =
                await response.text();

            console.error(
                "Error Supabase:",
                error
            );

            return {
                success: false
            };

        }


        return {
            success: true
        };


    } catch (error) {

        console.error(
            "Error conectando con Supabase:",
            error
        );

        return {
            success: false
        };

    }

}


/* =====================================================
   ENVÍO DEL FORMULARIO
===================================================== */

if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            hideFormError();


            if (!validateForm()) {

                return;

            }


            const submitButton =
                document.getElementById("submitButton");


            const originalButton =
                submitButton.innerHTML;


            submitButton.disabled =
                true;


            submitButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';


            try {

                const data =
                    getFormData();


                /*
                    1.
                    Guardar en Supabase
                */

                const databaseResult =
                    await saveToSupabase(data);


                /*
                    2.
                    Enviar a Formspree
                */

                const formData =
                    new FormData(quoteForm);


                const formspreeResponse =
                    await fetch(
                        quoteForm.action,
                        {

                            method: "POST",

                            body: formData,

                            headers: {

                                "Accept":
                                    "application/json"

                            }

                        }
                    );


                if (!formspreeResponse.ok) {

                    throw new Error(
                        "No se pudo enviar la solicitud."
                    );

                }


                /*
                    ÉXITO
                */

                successMessage.classList.add(
                    "active"
                );


                quoteForm.reset();


                setTimeout(() => {

                    successMessage.classList.remove(
                        "active"
                    );

                }, 8000);


                /*
                    Mostrar información
                    en consola para desarrollo.
                */

                console.log(
                    "Cliente registrado:",
                    data
                );


                if (databaseResult.success) {

                    console.log(
                        "Cliente guardado correctamente en Supabase."
                    );

                }


            } catch (error) {

                console.error(error);


                showFormError(
                    "No pudimos enviar la solicitud. Intenta nuevamente o contáctanos directamente por WhatsApp."
                );


            } finally {

                submitButton.disabled =
                    false;

                submitButton.innerHTML =
                    originalButton;

            }

        }
    );

}


/* =====================================================
   ANIMACIONES
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .mini-card, .process-step, .contact-item"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .1
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


/* =====================================================
   AÑO
===================================================== */

const year =
    document.querySelector(
        ".footer-bottom p"
    );


if (year) {

    year.textContent =
        `© ${new Date().getFullYear()} RoosterGuard. Todos los derechos reservados.`;

}


/* =====================================================
   MENSAJE DE CONSOLA
===================================================== */

console.log(
    "RoosterGuard cargado correctamente."
);