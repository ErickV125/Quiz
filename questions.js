let quizData = [
  // ==========================================
  // 1. ANTECEDENTES Y CONCEPTOS BÁSICOS
  // ==========================================
  {
    question: "¿Qué es contabilidad?",
    options: [
      "Técnica para registrar operaciones y producir información financiera",
      "Proceso para pagar impuestos",
      "Método para calcular precios"
    ],
    answer: "Técnica para registrar operaciones y producir información financiera"
  },
  {
    question: "¿Para qué sirve la contabilidad?",
    options: [
      "Para producir información financiera útil para la toma de decisiones",
      "Para decorar informes",
      "Para aumentar las ventas"
    ],
    answer: "Para producir información financiera útil para la toma de decisiones"
  },
  {
    question: "¿Qué es información financiera?",
    options: [
      "Datos cuantificables sobre la situación económica de una entidad",
      "Un documento legal",
      "Una base de datos fiscal"
    ],
    answer: "Datos cuantificables sobre la situación económica de una entidad"
  },
  {
    question: "¿Qué es una entidad económica?",
    options: [
      "Unidad identificable que realiza actividades económicas",
      "El gobierno federal",
      "Cualquier persona física"
    ],
    answer: "Unidad identificable que realiza actividades económicas"
  },

  // ==========================================
  // 2. PARTIDA DOBLE
  // ==========================================
  {
    question: "Principio fundamental de la partida doble:",
    options: [
      "No hay cargo sin abono",
      "Todo cargo debe ser mayor",
      "Solo afecta una cuenta"
    ],
    answer: "No hay cargo sin abono"
  },
  {
    question: "¿Cuántas cuentas afecta una transacción en partida doble?",
    options: ["Al menos 2 cuentas", "Solo 1 cuenta", "Hasta 5 cuentas"],
    answer: "Al menos 2 cuentas"
  },
  {
    question: "La suma de cargos debe ser igual a:",
    options: ["La suma de abonos", "El capital", "El inventario"],
    answer: "La suma de abonos"
  },
  {
    question: "El activo aumenta con:",
    options: ["Cargo", "Abono", "Ninguno"],
    answer: "Cargo"
  },
  {
    question: "El pasivo aumenta con:",
    options: ["Abono", "Cargo", "Pago"],
    answer: "Abono"
  },
  {
    question: "El capital aumenta con:",
    options: ["Abono", "Cargo", "Ambos"],
    answer: "Abono"
  },
  {
    question: "Los gastos aumentan con:",
    options: ["Cargo", "Abono", "Inventario"],
    answer: "Cargo"
  },
  {
    question: "Los ingresos aumentan con:",
    options: ["Abono", "Cargo", "Pago"],
    answer: "Abono"
  },

  // ==========================================
  // 3. CATÁLOGO DE CUENTAS
  // ==========================================
  {
    question: "¿Caja es…?",
    options: ["Activo circulante", "Pasivo", "Capital"],
    answer: "Activo circulante"
  },
  {
    question: "¿Clientes es…?",
    options: ["Activo circulante", "Pasivo CP", "Gasto"],
    answer: "Activo circulante"
  },
  {
    question: "¿Edificios es…?",
    options: ["Activo no circulante", "Gasto", "Pasivo"],
    answer: "Activo no circulante"
  },
  {
    question: "¿Proveedores es…?",
    options: ["Pasivo a corto plazo", "Activo fijo", "Capital"],
    answer: "Pasivo a corto plazo"
  },

  // ==========================================
  // 4. LIBRO DIARIO Y MAYOR
  // ==========================================
  {
    question: "¿Qué es el libro diario?",
    options: [
      "Donde se registran las operaciones cronológicamente",
      "Donde se guardan facturas",
      "Un estado financiero"
    ],
    answer: "Donde se registran las operaciones cronológicamente"
  },
  {
    question: "¿Qué es el libro mayor?",
    options: ["Cuentas T", "Facturas", "Notas de venta"],
    answer: "Cuentas T"
  },
  {
    question: "¿Qué es un asiento contable?",
    options: [
      "Registro de cargos y abonos de una operación",
      "Un documento fiscal",
      "Un contrato"
    ],
    answer: "Registro de cargos y abonos de una operación"
  },

  // ==========================================
  // 5. BALANZA DE COMPROBACIÓN
  // ==========================================
  {
    question: "¿Para qué sirve la balanza de comprobación?",
    options: [
      "Para verificar que cargos y abonos coinciden",
      "Para calcular impuestos",
      "Para registrar ventas"
    ],
    answer: "Para verificar que cargos y abonos coinciden"
  },
  {
    question: "La balanza de comprobación es:",
    options: [
      "Un procedimiento de verificación",
      "Un estado financiero",
      "Un documento fiscal"
    ],
    answer: "Un procedimiento de verificación"
  },

  // ==========================================
  // 6. BALANCE GENERAL
  // ==========================================
  {
    question: "El balance general muestra:",
    options: [
      "La situación financiera a una fecha específica",
      "Las ventas del año",
      "El flujo de efectivo"
    ],
    answer: "La situación financiera a una fecha específica"
  },
  {
    question: "¿Cuál es la fórmula del balance general?",
    options: [
      "Activo = Pasivo + Capital",
      "Ingresos – Egresos",
      "Ventas – Costo"
    ],
    answer: "Activo = Pasivo + Capital"
  },
  {
    question: "Los pasivos se clasifican según su:",
    options: ["Exigibilidad", "Costo", "Orden alfabético"],
    answer: "Exigibilidad"
  },

  // ==========================================
  // 7. ESTADO DE RESULTADOS
  // ==========================================
  {
    question: "Estado financiero que muestra la rentabilidad:",
    options: [
      "Estado de resultados",
      "Balance general",
      "Flujo de efectivo"
    ],
    answer: "Estado de resultados"
  },
  {
    question: "Utilidad bruta =",
    options: [
      "Ventas netas – Costo de ventas",
      "Activo – Pasivo",
      "Ingresos – Gastos"
    ],
    answer: "Ventas netas – Costo de ventas"
  },
  {
    question: "Utilidad neta =",
    options: [
      "Ingresos – Egresos del periodo",
      "Activo – Pasivo",
      "Ventas – Inventario"
    ],
    answer: "Ingresos – Egresos del periodo"
  },

  // ==========================================
  // 8. MÉTODOS DE INVENTARIOS
  // ==========================================
  {
    question: "Método donde salen las primeras entradas:",
    options: ["PEPS (FIFO)", "UEPS (LIFO)", "Promedio ponderado"],
    answer: "PEPS (FIFO)"
  },
  {
    question: "Método permitido por el SAT:",
    options: ["Promedio ponderado", "UEPS", "PEPS"],
    answer: "Promedio ponderado"
  },
  {
    question: "Método ya no permitido por el SAT:",
    options: ["UEPS (LIFO)", "PEPS", "Promedio"],
    answer: "UEPS (LIFO)"
  },

  // ==========================================
  // 9. DEPRECIACIONES Y AMORTIZACIONES
  // ==========================================
  {
    question: "La depreciación se aplica a:",
    options: ["Activos fijos", "Intangibles", "Gastos"],
    answer: "Activos fijos"
  },
  {
    question: "La amortización se aplica a:",
    options: ["Intangibles o pagos anticipados", "Activos fijos", "Ingresos"],
    answer: "Intangibles o pagos anticipados"
  },
  {
    question: "Fórmula de depreciación línea recta:",
    options: [
      "(Costo – valor de rescate) / años de vida útil",
      "Costo × años",
      "Costo – pasivo"
    ],
    answer: "(Costo – valor de rescate) / años de vida útil"
  },

  // ==========================================
  // 10. ESTADOS FINANCIEROS BÁSICOS
  // ==========================================
  {
    question: "Estado que muestra liquidez:",
    options: [
      "Estado de flujo de efectivo",
      "Balance general",
      "Estado de resultados"
    ],
    answer: "Estado de flujo de efectivo"
  },
  {
    question: "Estado que se hace a una fecha específica:",
    options: [
      "Balance general",
      "Estado de resultados",
      "Flujo de efectivo"
    ],
    answer: "Balance general"
  },
  {
    question: "Estado que cubre un periodo determinado:",
    options: [
      "Estado de resultados",
      "Balance general",
      "Balanza de comprobación"
    ],
    answer: "Estado de resultados"
  }
];
