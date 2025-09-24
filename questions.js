let quizData = [
  // --- Concepto y Origen ---
  {
    question: "¿Qué es la contabilidad?",
    options: [
      "Técnica que se utiliza como registro de las operaciones económicas de una entidad",
      "Un método para calcular impuestos",
      "Un informe anual de utilidades"
    ],
    answer: "Técnica que se utiliza como registro de las operaciones económicas de una entidad"
  },

  // --- Causación ---
  {
    question: "Según el principio de causación, ¿cuándo se reconocen los hechos contables?",
    options: [
      "Cuando se realiza la operación, independientemente de pago o cobro",
      "Cuando se recibe el dinero",
      "Cuando se paga el gasto"
    ],
    answer: "Cuando se realiza la operación, independientemente de pago o cobro"
  },

  // --- Ecuación patrimonial ---
  {
    question: "¿Cuál es la ecuación patrimonial básica?",
    options: [
      "ACTIVO = PASIVO + PATRIMONIO",
      "INGRESOS = GASTOS + CAPITAL",
      "ACTIVO = CAPITAL - PASIVO"
    ],
    answer: "ACTIVO = PASIVO + PATRIMONIO"
  },

  // --- NIF ---
  {
    question: "¿Qué son las NIF (Normas de Información Financiera)?",
    options: [
      "Conjunto de normas que regulan la información contenida en los estados financieros",
      "Reglas internas de cada empresa",
      "Tablas para calcular impuestos"
    ],
    answer: "Conjunto de normas que regulan la información contenida en los estados financieros"
  },
  {
    question: "¿Cómo deben ser las NIF?",
    options: [
      "Claras, sencillas, objetivas y de alta calidad",
      "Opcionales y flexibles",
      "Dependientes del giro de la empresa"
    ],
    answer: "Claras, sencillas, objetivas y de alta calidad"
  },

  // --- Partida doble ---
  {
    question: "¿Qué establece la teoría de la partida doble?",
    options: [
      "A todo cargo le corresponde un abono de la misma proporción numérica",
      "Cada ingreso debe ser mayor que el gasto",
      "Los activos siempre son mayores que los pasivos"
    ],
    answer: "A todo cargo le corresponde un abono de la misma proporción numérica"
  },
  {
    question: "En una cuenta contable, ¿en qué lado se registran los cargos?",
    options: [
      "Debe (izquierda)",
      "Haber (derecha)",
      "Centro"
    ],
    answer: "Debe (izquierda)"
  },
  {
    question: "Cargar también se conoce como:",
    options: [
      "Debitar",
      "Acreditar",
      "Invertir"
    ],
    answer: "Debitar"
  },

  // --- Cuentas ---
  {
    question: "¿Qué es una cuenta contable?",
    options: [
      "Unidad básica para registrar transacciones de la entidad",
      "Documento fiscal",
      "Factura de venta"
    ],
    answer: "Unidad básica para registrar transacciones de la entidad"
  },
  {
    question: "¿Qué tipo de cuentas se refieren a los integrantes del balance general?",
    options: [
      "Reales",
      "Nominales",
      "Personales"
    ],
    answer: "Reales"
  },
  {
    question: "¿Qué tipo de cuentas indican ingresos y egresos?",
    options: [
      "Nominales",
      "Reales",
      "Circulantes"
    ],
    answer: "Nominales"
  },
  {
    question: "Si en una cuenta el debe es mayor que el haber, ¿qué tipo de saldo tiene?",
    options: [
      "Deudor",
      "Acreedor",
      "Nulo"
    ],
    answer: "Deudor"
  },

  // --- Estados Financieros / Activo ---
  {
    question: "¿Qué es un activo?",
    options: [
      "Recurso económico que se espera brinde beneficios futuros",
      "Obligación que se debe pagar",
      "Aportación de los accionistas"
    ],
    answer: "Recurso económico que se espera brinde beneficios futuros"
  },
  {
    question: "¿Cuál es una característica de los activos circulantes?",
    options: [
      "Se convierten en efectivo en menos de un año",
      "Se convierten en efectivo en más de un año",
      "No generan beneficios"
    ],
    answer: "Se convierten en efectivo en menos de un año"
  },

  // --- Pasivo ---
  {
    question: "¿Qué es un pasivo?",
    options: [
      "Lo que el negocio debe a sus acreedores",
      "Aportación de los dueños",
      "Recurso económico a futuro"
    ],
    answer: "Lo que el negocio debe a sus acreedores"
  },
  {
    question: "¿Cómo se clasifican los pasivos según su vencimiento?",
    options: [
      "Corto plazo y largo plazo",
      "Real y nominal",
      "Activo y patrimonio"
    ],
    answer: "Corto plazo y largo plazo"
  },

  // --- Capital ---
  {
    question: "¿Qué es el capital contribuido?",
    options: [
      "Aportaciones de los dueños y accionistas",
      "Utilidades retenidas",
      "Pasivos pagados"
    ],
    answer: "Aportaciones de los dueños y accionistas"
  },
  {
    question: "El capital ganado se genera a partir de:",
    options: [
      "Operaciones normales menos dividendos repartidos",
      "Deudas adquiridas",
      "Venta de activos fijos"
    ],
    answer: "Operaciones normales menos dividendos repartidos"
  },

  // --- Ingresos y Gastos ---
  {
    question: "¿Qué son los ingresos?",
    options: [
      "Recursos que recibe un negocio por la venta de bienes o servicios",
      "Aportaciones de los accionistas",
      "Obligaciones a pagar"
    ],
    answer: "Recursos que recibe un negocio por la venta de bienes o servicios"
  },
  {
    question: "¿Qué son los gastos en contabilidad?",
    options: [
      "Activos que se han usado para obtener ingresos",
      "Dinero guardado en caja",
      "Pasivos pagados a proveedores"
    ],
    answer: "Activos que se han usado para obtener ingresos"
  }
];
quizData.push(
  // --- Naturaleza de una cuenta ---
  {
    question: "¿Cuáles son cuentas de naturaleza deudora?",
    options: [
      "Activos y gastos",
      "Pasivo y capital",
      "Capital e ingresos"
    ],
    answer: "Activos y gastos"
  },
  {
    question: "¿Cuáles son cuentas de naturaleza acreedora?",
    options: [
      "Pasivo, capital e ingresos",
      "Activos y gastos",
      "Solo ingresos"
    ],
    answer: "Pasivo, capital e ingresos"
  },
  {
    question: "¿Cómo aumenta una cuenta deudora?",
    options: [
      "Con el cargo",
      "Con el abono",
      "Con capital adicional"
    ],
    answer: "Con el cargo"
  },
  {
    question: "¿Cómo aumenta una cuenta acreedora?",
    options: [
      "Con el abono",
      "Con el cargo",
      "Con aportaciones de socios"
    ],
    answer: "Con el abono"
  },

  // --- Ciclos contables ---
  {
    question: "¿Qué son los ciclos contables?",
    options: [
      "Conjunto de operaciones durante un ejercicio económico",
      "La rotación de inventarios",
      "Un tipo de asiento contable"
    ],
    answer: "Conjunto de operaciones durante un ejercicio económico"
  },
  {
    question: "¿Cuál es el primer paso del proceso contable?",
    options: [
      "Asiento de apertura",
      "Balance de comprobación",
      "Ajustes de fin de mes"
    ],
    answer: "Asiento de apertura"
  },
  {
    question: "¿En qué libro se registran inicialmente las operaciones?",
    options: [
      "Libro diario",
      "Libro mayor",
      "Estados financieros"
    ],
    answer: "Libro diario"
  },

  // --- Transacciones ---
  {
    question: "¿Qué es una transacción contable?",
    options: [
      "Evento económico que afecta la situación financiera y puede registrarse",
      "Pago de nómina",
      "Declaración de impuestos"
    ],
    answer: "Evento económico que afecta la situación financiera y puede registrarse"
  },

  // --- Cuentas (definición extra) ---
  {
    question: "El nombre de una cuenta debe ser:",
    options: [
      "Claro y expresar la idea de la transacción registrada",
      "Creativo y corto",
      "Asignado libremente"
    ],
    answer: "Claro y expresar la idea de la transacción registrada"
  },

  // --- Registro de operaciones ---
  {
    question: "Para registrar operaciones correctamente se debe considerar:",
    options: [
      "La causa y el efecto que produce cada operación",
      "Solo el efecto económico",
      "Solo el ingreso o gasto generado"
    ],
    answer: "La causa y el efecto que produce cada operación"
  },

  // --- Libro diario ---
  {
    question: "¿Qué es el libro diario?",
    options: [
      "Registro pormenorizado de todas las operaciones cotidianas",
      "Resumen anual de ventas",
      "Documento para declarar impuestos"
    ],
    answer: "Registro pormenorizado de todas las operaciones cotidianas"
  },

  // --- Asiento contable ---
  {
    question: "¿Qué son los asientos contables?",
    options: [
      "Registros de operaciones que modifican el patrimonio de la empresa",
      "Listas de inventario",
      "Documentos fiscales"
    ],
    answer: "Registros de operaciones que modifican el patrimonio de la empresa"
  },
  {
    question: "La suma de los cargos y abonos en un asiento contable debe ser:",
    options: [
      "Igual",
      "Mayor el cargo",
      "Mayor el abono"
    ],
    answer: "Igual"
  },

  // --- IVA ---
  {
    question: "¿Qué es el IVA trasladado?",
    options: [
      "IVA que la empresa cobra a sus clientes en ventas",
      "IVA que la empresa paga en compras",
      "IVA retenido a proveedores"
    ],
    answer: "IVA que la empresa cobra a sus clientes en ventas"
  },
  {
    question: "¿Qué es el IVA acreditable?",
    options: [
      "IVA que la empresa paga en gastos y compras",
      "IVA que se devuelve al cliente",
      "IVA incluido en los dividendos"
    ],
    answer: "IVA que la empresa paga en gastos y compras"
  }
);
quizData.push(
  // --- Registro de capital ---
  {
    question: "¿Qué cuentas se usan para registrar el capital inicial de una empresa?",
    options: [
      "Bancos, Equipo y Capital",
      "Inventario, IVA acreditable y Proveedores",
      "Ventas, Bancos y Clientes"
    ],
    answer: "Bancos, Equipo y Capital"
  },

  // --- Registro de compras ---
  {
    question: "En una compra de contado, ¿qué cuentas se utilizan?",
    options: [
      "Inventario, IVA acreditable y Bancos",
      "Inventario, IVA acreditable y Proveedores",
      "Compras, Ventas y Bancos"
    ],
    answer: "Inventario, IVA acreditable y Bancos"
  },
  {
    question: "En una compra a crédito, ¿qué cuentas se utilizan?",
    options: [
      "Inventario, IVA acreditable y Proveedores",
      "Bancos, IVA trasladado y Ventas",
      "Clientes, IVA acreditable y Bancos"
    ],
    answer: "Inventario, IVA acreditable y Proveedores"
  },

  // --- Registro de ventas ---
  {
    question: "En una venta de contado, ¿qué cuentas se utilizan para registrar la venta?",
    options: [
      "Bancos, IVA trasladado y Ventas",
      "Clientes, IVA trasladado y Ventas",
      "Bancos, IVA acreditable y Ventas"
    ],
    answer: "Bancos, IVA trasladado y Ventas"
  },
  {
    question: "En una venta a crédito, ¿qué cuentas se utilizan para registrar la venta?",
    options: [
      "Clientes, IVA trasladado y Ventas",
      "Bancos, IVA trasladado y Ventas",
      "Proveedores, IVA acreditable y Ventas"
    ],
    answer: "Clientes, IVA trasladado y Ventas"
  },

  // --- Pago a proveedores y de clientes ---
  {
    question: "Para registrar un pago a proveedores, ¿qué cuentas se usan?",
    options: [
      "Proveedores y Bancos",
      "Clientes y Bancos",
      "Inventario y Bancos"
    ],
    answer: "Proveedores y Bancos"
  },
  {
    question: "Para registrar el pago de un cliente, ¿qué cuentas se usan?",
    options: [
      "Bancos y Clientes",
      "Clientes y Bancos",
      "Bancos y Proveedores"
    ],
    answer: "Bancos y Clientes"
  }
);
