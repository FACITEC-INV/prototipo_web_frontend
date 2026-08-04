import { atom } from "nanostores";

export const $qualityRanges = atom(
  {
    con: [
      {
        label: "Conductividad baja (Bajo contenido de minerales)",
        from: 0.0,
        to: 100.0,
        color: "#4169E1"
      },
      {
        label: "Conductividad media (Mineralización media)",
        from: 101.0,
        to: 700.0,
        color: "#00FF7F"
      },
      {
        label: "Conductividad Alta (Alto contenido de minerales)",
        from: 701.0,
        to: 1500.0,
        color: "#FFD700"
      },
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
        label: "Bajo (Ácido)",
        from: 0.0,
        to: 6.0,
        color: "#FF4D00"
      },
      {
        label: "Normal (Saludable)",
        from: 6.1,
        to: 9.0,
        color: "#00FF7F"
      },
      {
        label: "Alto (Alcalino)",
        from: 9.1,
        to: 15.0,
        color: "#FF4D00"
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
        label: "Alto",
        from: 1001.0,
        to: 1200.0,
        color: "#FF6347"
      },
      {
        label: "Medio",
        from: 201.0,
        to: 1000.0,
        color: "#4169E1"
      },
      {
        label: "Bajo",
        from: 0.0,
        to: 200.0,
        color: "#00FF7F"
      },
    ],
    tur: [
      {
        label: "Baja (Buena penetración de luz)",
        from: 0.0,
        to: 20.0,
        color: "#00FF7F"
      },
      {
        label: "Media (Penetración de luz moderada)",
        from: 20.1,
        to: 150.0,
        color: "#9ACD32"
      },
      {
        label: "Alta (Sin penetración de luz)",
        from: 151.0,
        to: 300.0,
        color: "#FF4D00"
      },
    ]
  }
)

