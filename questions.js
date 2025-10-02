let quizData = [
  // --- AP (Punto de acceso) ---
  {
    question: "¿Qué es un Punto de Acceso (AP)?",
    options: [
      "Un dispositivo que brinda acceso Wi-Fi a una LAN",
      "Un protocolo de capa 3",
      "Un router perimetral"
    ],
    answer: "Un dispositivo que brinda acceso Wi-Fi a una LAN"
  },
  {
    question: "¿En qué estándar opera un AP?",
    options: ["IEEE 802.11", "IEEE 802.3", "IEEE 802.5"],
    answer: "IEEE 802.11"
  },

  // --- Host ---
  {
    question: "¿Qué es un host en redes?",
    options: [
      "Un dispositivo final con dirección de red que envía/recibe datos",
      "Un switch de capa 2",
      "Un router intermedio"
    ],
    answer: "Un dispositivo final con dirección de red que envía/recibe datos"
  },
  {
    question: "¿Qué configuraciones necesita un host para conectarse a la red?",
    options: [
      "IP, máscara de subred, gateway y DNS",
      "Solo dirección IPv4",
      "Tabla de ruteo"
    ],
    answer: "IP, máscara de subred, gateway y DNS"
  },

  // --- HTTP/HTTPS ---
  {
    question: "¿Qué diferencia hay entre HTTP y HTTPS?",
    options: [
      "HTTPS añade TLS para confidencialidad e integridad",
      "HTTP es más seguro que HTTPS",
      "Son exactamente iguales"
    ],
    answer: "HTTPS añade TLS para confidencialidad e integridad"
  },
  {
    question: "¿Qué puertos estándar usan HTTP y HTTPS?",
    options: ["80 y 443", "20 y 21", "25 y 110"],
    answer: "80 y 443"
  },

  // --- LAN ---
  {
    question: "¿Qué es una LAN?",
    options: [
      "Una red de área local que cubre aulas, edificios o campus",
      "Una red de cobertura global",
      "Una red metropolitana"
    ],
    answer: "Una red de área local que cubre aulas, edificios o campus"
  },
  {
    question: "¿Qué ventaja tiene una LAN?",
    options: [
      "Alta velocidad y baja latencia",
      "Cobertura global",
      "Conexión satelital"
    ],
    answer: "Alta velocidad y baja latencia"
  },

  // --- MAC ---
  {
    question: "¿Qué es una dirección MAC?",
    options: [
      "Una dirección física única asignada a interfaces de red",
      "Una dirección lógica de capa 3",
      "Una dirección de broadcast"
    ],
    answer: "Una dirección física única asignada a interfaces de red"
  },
  {
    question: "¿En qué capa OSI opera la dirección MAC?",
    options: ["Capa 2", "Capa 3", "Capa 7"],
    answer: "Capa 2"
  },

  // --- MAN ---
  {
    question: "¿Qué es una MAN?",
    options: [
      "Red que cubre una ciudad o zona metropolitana",
      "Red de corto alcance personal",
      "Red que conecta países"
    ],
    answer: "Red que cubre una ciudad o zona metropolitana"
  },
  {
    question: "Ejemplo: Para enlazar dos campus dentro de la misma ciudad, se usa:",
    options: ["MAN", "LAN", "WAN"],
    answer: "MAN"
  },

  // --- Medios de transmisión ---
  {
    question: "¿Cuál de los siguientes es un medio guiado?",
    options: ["Fibra óptica", "Wi-Fi", "Microondas"],
    answer: "Fibra óptica"
  },
  {
    question: "¿Cuál de los siguientes es un medio no guiado?",
    options: ["Radio", "Par trenzado", "Coaxial"],
    answer: "Radio"
  },

  // --- Mensajería instantánea ---
  {
    question: "¿Qué ofrece la mensajería instantánea (IM)?",
    options: [
      "Intercambio de mensajes en tiempo real",
      "Solo transferencia de archivos grandes",
      "Solo navegación web"
    ],
    answer: "Intercambio de mensajes en tiempo real"
  },

  // --- Microblogging ---
  {
    question: "¿Qué caracteriza al microblogging?",
    options: [
      "Publicaciones breves y frecuentes",
      "Transferencia de datos en bloque",
      "Gestión de sesiones en red"
    ],
    answer: "Publicaciones breves y frecuentes"
  },

  // --- Modelo OSI ---
  {
    question: "¿Cuántas capas tiene el modelo OSI?",
    options: ["7", "4", "5"],
    answer: "7"
  },
  {
    question: "El modelo OSI es...",
    options: [
      "Un marco de referencia para entender y diseñar redes",
      "Un protocolo de transporte",
      "Un sistema operativo"
    ],
    answer: "Un marco de referencia para entender y diseñar redes"
  },

  // --- Modelo TCP/IP ---
  {
    question: "¿Cuántas capas tiene el modelo TCP/IP?",
    options: ["4", "7", "6"],
    answer: "4"
  },
  {
    question: "El modelo TCP/IP es...",
    options: [
      "El conjunto real de protocolos usados en Internet",
      "Un modelo solo teórico sin uso",
      "Un protocolo de almacenamiento"
    ],
    answer: "El conjunto real de protocolos usados en Internet"
  },

  // --- Máscara de subred ---
  {
    question: "¿Para qué sirve la máscara de subred?",
    options: [
      "Para separar parte de red y host en una IP",
      "Para asignar direcciones MAC",
      "Para cifrar los datos en capa 6"
    ],
    answer: "Para separar parte de red y host en una IP"
  },

  // --- Nodo ---
  {
    question: "¿Qué es un nodo en la red?",
    options: [
      "Un punto que puede originar, recibir o reenviar información",
      "Un protocolo de aplicación",
      "Un puerto de transporte"
    ],
    answer: "Un punto que puede originar, recibir o reenviar información"
  },

  // --- NOS ---
  {
    question: "¿Qué es un NOS (Sistema Operativo de Red)?",
    options: [
      "Software que administra recursos y servicios de red",
      "Un hardware dedicado al enrutamiento",
      "Un protocolo de comunicación"
    ],
    answer: "Software que administra recursos y servicios de red"
  },

  // --- PAN ---
  {
    question: "¿Qué es una PAN?",
    options: [
      "Red de corto alcance que conecta dispositivos personales",
      "Red de área metropolitana",
      "Red que cubre un campus universitario"
    ],
    answer: "Red de corto alcance que conecta dispositivos personales"
  },
  {
    question: "Ejemplo: Conectar un smartwatch a un smartphone usa una:",
    options: ["PAN", "LAN", "WAN"],
    answer: "PAN"
  },

  // --- Pila de protocolos ---
  {
    question: "La pila de protocolos se organiza en...",
    options: [
      "Capas que cooperan entre sí",
      "Un único protocolo centralizado",
      "Un hardware especializado"
    ],
    answer: "Capas que cooperan entre sí"
  },

  // --- Presentación (Capa 6) ---
  {
    question: "¿Qué función tiene la capa de presentación?",
    options: [
      "Transformar y presentar datos (formato, cifrado, compresión)",
      "Reenviar tramas por MAC",
      "Asignar direcciones IP"
    ],
    answer: "Transformar y presentar datos (formato, cifrado, compresión)"
  },

  // --- Red (Capa 3) ---
  {
    question: "¿Qué hace la capa de red?",
    options: [
      "Direcciona lógicamente y enruta paquetes",
      "Cifra sesiones",
      "Establece diálogos de aplicación"
    ],
    answer: "Direcciona lógicamente y enruta paquetes"
  },

  // --- Router ---
  {
    question: "¿Qué hace un router?",
    options: [
      "Enruta entre subredes y hacia Internet",
      "Asigna direcciones MAC",
      "Solo reenvía tramas de capa 2"
    ],
    answer: "Enruta entre subredes y hacia Internet"
  },
  {
    question: "Ejemplo: Para conectar sucursales en distintas ciudades se usa principalmente:",
    options: ["WAN", "LAN", "PAN"],
    answer: "WAN"
  },

  // --- SAN ---
  {
    question: "¿Qué es una SAN?",
    options: [
      "Red especializada para almacenamiento de datos",
      "Red inalámbrica de área local",
      "Red de capa 2"
    ],
    answer: "Red especializada para almacenamiento de datos"
  },

  // --- Servidor ---
  {
    question: "¿Qué es un servidor?",
    options: [
      "Equipo que ofrece servicios a clientes en la red",
      "Un protocolo de red",
      "Un dispositivo de capa 2"
    ],
    answer: "Equipo que ofrece servicios a clientes en la red"
  },

  // --- Sesión (Capa 5) ---
  {
    question: "¿Qué gestiona la capa de sesión?",
    options: [
      "Establece, administra y termina diálogos entre aplicaciones",
      "Entrega confiable extremo a extremo",
      "Conexiones físicas"
    ],
    answer: "Establece, administra y termina diálogos entre aplicaciones"
  },

  // --- Subred ---
  {
    question: "¿Qué es una subred?",
    options: [
      "Un segmento de red definido por una máscara",
      "Un servidor especializado",
      "Un protocolo de capa 7"
    ],
    answer: "Un segmento de red definido por una máscara"
  },

  // --- Switch ---
  {
    question: "¿Qué hace un switch?",
    options: [
      "Reenvía tramas basadas en MAC",
      "Enruta paquetes basados en IP",
      "Asigna direcciones DNS"
    ],
    answer: "Reenvía tramas basadas en MAC"
  },

  // --- Topologías ---
  {
    question: "¿Cuál de las siguientes NO es una topología de red?",
    options: ["Árbol", "Estrella", "DNS"],
    answer: "DNS"
  },

  // --- Transporte (Capa 4) ---
  {
    question: "¿Qué protocolo de transporte es confiable y orientado a conexión?",
    options: ["TCP", "UDP", "IP"],
    answer: "TCP"
  },
  {
    question: "¿Qué protocolo de transporte es más rápido pero sin garantías?",
    options: ["UDP", "TCP", "ICMP"],
    answer: "UDP"
  },

  // --- Unicast/Multicast/Broadcast ---
  {
    question: "Una conexión SSH es un ejemplo de:",
    options: ["Unicast", "Multicast", "Broadcast"],
    answer: "Unicast"
  },
  {
    question: "Un anuncio ARP es un ejemplo de:",
    options: ["Broadcast", "Multicast", "Unicast"],
    answer: "Broadcast"
  },

  // --- VLAN ---
  {
    question: "¿Qué permite una VLAN?",
    options: [
      "Segmentación lógica de una LAN",
      "Asignación de IPs públicas",
      "Transmisión satelital"
    ],
    answer: "Segmentación lógica de una LAN"
  },

  // --- WAN ---
  {
    question: "¿Qué es una WAN?",
    options: [
      "Red que cubre grandes distancias y conecta múltiples LANs",
      "Red personal inalámbrica",
      "Red de almacenamiento"
    ],
    answer: "Red que cubre grandes distancias y conecta múltiples LANs"
  },

  // --- Wi-Fi ---
  {
    question: "¿Qué tecnología usa el estándar IEEE 802.11?",
    options: ["Wi-Fi", "Ethernet", "Bluetooth"],
    answer: "Wi-Fi"
  },

  // --- WLAN ---
  {
    question: "¿Qué es una WLAN?",
    options: [
      "Una LAN inalámbrica basada en IEEE 802.11",
      "Una red de almacenamiento",
      "Una red global"
    ],
    answer: "Una LAN inalámbrica basada en IEEE 802.11"
  }
];

