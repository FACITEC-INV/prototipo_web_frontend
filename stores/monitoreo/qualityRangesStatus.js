import { atom } from "nanostores";

export const $qualityRanges = atom(
  {
    con: [
      {
        label: "Malo (Muy Alto en Sales)",
        from: 1201.0,
        to: 10000.0,
        color: "#FF6347"
      },
      {
        label: "Pobre (Alto/Mineralizado)",
        from: 601.0,
        to: 1200.0,
        color: "#FFD700"
      },
      {
        label: "Bueno (Normal)",
        from: 201.0,
        to: 600.0,
        color: "#00FF7F"
      },
      {
        label: "Excelente (Bajo en Minerales)",
        from: 0.0,
        to: 200.0,
        color: "#4169E1"
      }
    ],
    od: [
      {
        label: "Malo (Hipóxico)",
        from: 0.0,
        to: 3.9,
        color: "#FF6347"
      },
      {
        label: "Pobre",
        from: 4.0,
        to: 5.9,
        color: "#FFD700"
      },
      {
        label: "Bueno",
        from: 6.0,
        to: 8.0,
        color: "#9ACD32"
      },
      {
        label: "Excelente (Saturado)",
        from: 8.1,
        to: 14.0,
        color: "#00FF7F"
      }
    ],
    ph: [
      {
        label: "Malo (Extremo)",
        from: 0.0,
        to: 5.5,
        color: "#FF6347"
      },
      {
        label: "Pobre (Marginal)",
        from: 5.6,
        to: 6.4,
        color: "#FFD700"
      },
      {
        label: "Bueno (Saludable)",
        from: 6.5,
        to: 8.5,
        color: "#00FF7F"
      },
      {
        label: "Malo (Extremo)",
        from: 8.6,
        to: 14.0,
        color: "#FF6347"
      }
    ],
    tem: [
      {
        label: "Malo (Estrés Térmico)",
        from: 29.0,
        to: 50.0,
        color: "#FF6347"
      },
      {
        label: "Pobre (Subóptimo)",
        from: 25.0,
        to: 28.9,
        color: "#FFD700"
      },
      {
        label: "Bueno (Rango Estándar)",
        from: 15.0,
        to: 24.9,
        color: "#00FF7F"
      },
      {
        label: "Excelente (Aguas Frías)",
        from: 0.0,
        to: 14.9,
        color: "#4169E1"
      }
    ],
    tsd: [
      {
        label: "Malo (Alto en Sales)",
        from: 1001.0,
        to: 5000.0,
        color: "#FF6347"
      },
      {
        label: "Pobre (Mineralizado)",
        from: 501.0,
        to: 1000.0,
        color: "#FFD700"
      },
      {
        label: "Bueno (Normal)",
        from: 151.0,
        to: 500.0,
        color: "#00FF7F"
      },
      {
        label: "Excelente (Puro)",
        from: 0.0,
        to: 150.0,
        color: "#4169E1"
      }
    ],
    tur: [
      {
        label: "Malo (Muy Turbio)",
        from: 101.0,
        to: 1000.0,
        color: "#FF6347"
      },
      {
        label: "Pobre (Turbio)",
        from: 26.0,
        to: 100.0,
        color: "#FFD700"
      },
      {
        label: "Bueno (Claro)",
        from: 5.1,
        to: 25.9,
        color: "#00FF7F"
      },
      {
        label: "Excelente (Cristalino)",
        from: 0.0,
        to: 5.0,
        color: "#4169E1"
      }
    ]
  }
)

