let colors = `  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-info: #17a2b8;
  --color-warning: #ffc107;
  --color-highlight: lch(97.83 22.59 99.01);
  --color-danger: #dc3545;
  --color-light: #f8f9fa;
  --color-dark: #343a40;
  --color-white: #fff;
  --color-black: #000;
  --color-gray-100: #f8f9fa;
  --color-gray-200: #e9ecef;
  --color-gray-300: #dee2e6;
  --color-gray-400: #ced4da;
  --color-gray-500: #adb5bd;
  --color-gray-600: #6c757d;
  --color-gray-700: #495057;
  --color-gray-800: #343a40;
  --color-gray-900: #212529;`

  
let rgbLch = [
    [
      "#007bff",
      "lch(52 76 280)"
    ],
    [
      "#6c757d",
      "lch(49 6 250)"
    ],
    [
      "#28a745",
      "lch(60 64 140)"
    ],
    [
      "#17a2b8",
      "lch(61 37 220)"
    ],
    [
      "#ffc107",
      "lch(82 84 81)"
    ],
    [
      "#dc3545",
      "lch(50 73 27)"
    ],
    [
      "#f8f9fa",
      "lch(98 0.64 250)"
    ],
    [
      "#343a40",
      "lch(24 4.9 250)"
    ],
    [
      "#fff",
      "lch(100 0 none)"
    ],
    [
      "#000",
      "lch(0 0 none)"
    ],
    [
      "#f8f9fa",
      "lch(98 0.64 250)"
    ],
    [
      "#e9ecef",
      "lch(93 1.9 250)"
    ],
    [
      "#dee2e6",
      "lch(90 2.6 250)"
    ],
    [
      "#ced4da",
      "lch(85 3.9 250)"
    ],
    [
      "#adb5bd",
      "lch(73 5.4 250)"
    ],
    [
      "#6c757d",
      "lch(49 6 250)"
    ],
    [
      "#495057",
      "lch(34 5.4 250)"
    ],
    [
      "#343a40",
      "lch(24 4.9 250)"
    ],
    [
      "#212529",
      "lch(14 3.5 250)"
    ]
  ]

  colors = rgbLch.reduce((colors, [rgb, lch]) => {
    colors = colors.replaceAll(rgb, lch)
    return colors
  }, colors)

  console.log(colors)