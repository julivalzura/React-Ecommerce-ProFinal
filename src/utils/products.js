const productos = [
  {
    id: 1,
    title: 'SUSANA BALBO SIGNATURE ROSE 750 cc',
    description:
      'Este vino presenta un color rosa brillante y cautivante. Es un vino fresco y aromático, con notas frutales de frutas rojas y cítricos, que le brindan una agradable vivacidad. En boca, es equilibrado y elegante, con una acidez refrescante y un final suave y persistente. Es un vino versátil que se puede disfrutar por sí solo o acompañando platos ligeros como ensaladas, pescados y mariscos.',
    stock: 15,
    type: 'Rosado',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/1008129.png',
    },
    price: 10600,
  },

  {
    id: 2,
    title: 'SALENTEIN S.V. MALBEC LA PAMPA 750 cc',
    description:
      'Este vino destaca por su intensidad y carácter distintivo. Elaborado con uvas Malbec de la región de La Pampa, ofrece un profundo color rojo violáceo y una notable concentración de sabores. En nariz, presenta una mezcla cautivadora de frutas negras maduras, notas especiadas y toques sutiles de vainilla. En boca, es potente y estructurado, con taninos suaves y redondos, que le dan un equilibrio perfecto. Es un vino ideal para maridar con carnes rojas, cordero o quesos maduros.',
    stock: 7,
    type: 'Tinto',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/1003774.png',
    },
    price: 14000,
  },

  {
    id: 3,
    title: 'EL ESTECO PARTIDA LIMITADA MALBEC 750 cc',
    description:
      'Este vino destaca por su sofisticación y calidad excepcional. Elaborado con uvas Malbec de viñedos seleccionados, ofrece un color rojo profundo e intenso. En nariz, despliega una cautivadora combinación de aromas a frutas maduras, como ciruelas y moras, junto con sutiles notas de especias y roble. En boca, es rico y sedoso, con taninos elegantes y bien integrados, que brindan una textura suave y equilibrada. Es un vino perfecto para acompañar carnes a la parrilla, guisos y platos de caza',
    stock: 20,
    type: 'Tinto',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/1008823.png',
    },
    price: 22341,
  },

  {
    id: 4,
    title: 'MOET ICE IMPERIAL 750 cc',
    description:
      'Moët Ice Impérial es un champagne exclusivo y refrescante diseñado específicamente para disfrutar en momentos al aire libre y bajo el sol. Este champagne se distingue por su estilo único y contemporáneo. Con una botella de 750 cc, Moët Ice Impérial combina elegancia y frescura en cada sorbo. Su sabor es frutal y seductor, con notas dominantes de frutas tropicales y un toque sutil de vainilla. Se recomienda servirlo en una copa grande con hielo para realzar su frescura y disfrutarlo en compañía de amigos y en celebraciones al aire libre. Moët Ice Impérial es la elección perfecta para aquellos que buscan un champagne vibrante y refrescante para disfrutar en momentos de ocio y diversión.',
    stock: 6,
    type: 'Espumante',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/1006894.png',
    },
    price: 57400,
  },

  {
    id: 5,
    title: 'ZUCCARDI BOTANICO 750 cc',
    description:
      'Elaborado por la reconocida bodega Zuccardi, este vino combina uvas Malbec y Cabernet Franc con una selección de hierbas y flores autóctonas de la región de Mendoza. El resultado es un vino único que ofrece una experiencia aromática y gustativa cautivadora. En nariz, despliega notas herbales, florales y especiadas, con sutiles toques de frutas rojas. En boca, es fresco y equilibrado, con una acidez vibrante y taninos suaves. Zuccardi Botánico es un vino versátil que se puede disfrutar tanto por sí solo como acompañando platos de carnes asadas, pastas y quesos. Este vino representa la pasión y la innovación enológica de Zuccardi y es ideal para aquellos que buscan experiencias vinícolas únicas y memorables.',
    stock: 6,
    type: 'Blanco',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/1009206.png',
    },
    price: 29300,
  },

  {
    id: 6,
    title: 'SAINT FELICIEN ROSE 750 cc',
    description:
      'Saint Felicien Rosé es un vino rosado de 750 cc que destaca por su elegancia y frescura. Producido por la reconocida bodega Saint Felicien, este vino presenta un color rosa pálido y brillante. En nariz, despliega aromas delicados de frutas rojas frescas, como fresas y frambuesas, junto con sutiles notas florales. En boca, es refrescante y ligero, con una acidez equilibrada y un final suave y agradable. Saint Felicien Rosé es perfecto para disfrutar en momentos de relajación o como acompañamiento de platos ligeros como ensaladas, mariscos y aves. Su estilo versátil y sabroso lo convierte en una opción ideal para los amantes de los vinos rosados.',
    stock: 3,
    type: 'Rosado',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/1006674.png',
    },
    price: 11250,
  },

  {
    id: 7,
    title: 'FUEGO BLANCO SAUVIGNON BLANC 750 cc',
    description:
      'Fuego Blanco Sauvignon Blanc es un vino blanco de 750 cc que destaca por su frescura y viveza. Producido por la bodega Fuego Blanco, este vino presenta un color amarillo pálido con destellos verdosos. En nariz, despliega aromas intensos de frutas cítricas como lima y pomelo, junto con notas herbales y un toque sutil de flores blancas. En boca, es vibrante y refrescante, con una acidez equilibrada y un final persistente. Fuego Blanco Sauvignon Blanc es perfecto para disfrutar en momentos de relajación o como acompañamiento de platos ligeros como mariscos, pescados blancos y ensaladas. Su estilo fresco y sabroso lo convierte en una elección ideal para los amantes de los vinos blancos expresivos.',
    stock: 1,
    type: 'Blanco',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/1006978.png',
    },
    price: 2975,
  },

  {
    id: 8,
    title: 'CADUS ASSEMBLAGE 750 cc',
    description:
      'Cadus Assemblage es un vino tinto de 750 cc que destaca por su complejidad y elegancia. Producido por Bodega Cadus, este vino es un assemblage, lo que significa que se elabora a partir de una cuidadosa selección de distintas variedades de uvas. Presenta un color rojo profundo e intenso. En nariz, despliega una amplia gama de aromas, incluyendo frutas maduras, especias, notas florales y sutiles toques de roble. En boca, es robusto y estructurado, con taninos firmes y bien integrados, que le dan un carácter sofisticado. Cadus Assemblage es un vino ideal para maridar con carnes rojas, cordero y platos de sabores intensos. Su complejidad y equilibrio lo convierten en una elección destacada para los amantes de los vinos tintos de alta calidad.',
    stock: 5,
    type: 'Tinto',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/1009278.png',
    },
    price: 19999,
  },

  {
    id: 9,
    title: 'SPERONE PROSECCO BRUT 750 cc',
    description:
      'Sperone Prosecco Brut es un vino espumoso italiano de 750 cc que destaca por su frescura y elegancia. Producido por la bodega Sperone, este Prosecco se elabora utilizando la uva Glera, típica de la región de Prosecco en Italia. Presenta un color amarillo pajizo brillante con burbujas finas y persistentes. En nariz, despliega aromas frescos de frutas blancas y cítricos, con sutiles notas florales. En boca, es refrescante y equilibrado, con una acidez vibrante y sabores frutales delicados. Sperone Prosecco Brut es perfecto para celebraciones y brindis, así como para acompañar aperitivos, mariscos y postres ligeros. Su estilo alegre y burbujeante lo convierte en una opción popular para quienes disfrutan de los vinos espumosos elegantes y accesibles.',
    stock: 7,
    type: 'Espumante',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/1005741.png',
    },
    price: 12149,
  },

  {
    id: 10,
    title: 'PULENTA ESTATE SAUVIGNON BLANC 750 cc',
    description:
      'Pulenta Estate Sauvignon Blanc es un vino blanco argentino de 750 cc que destaca por su frescura y expresividad. Producido por Bodega Pulenta Estate, este vino se elabora con uvas de la variedad Sauvignon Blanc cultivadas en viñedos seleccionados. Presenta un color amarillo verdoso brillante. En nariz, despliega intensos aromas cítricos, como pomelo y lima, acompañados de notas herbales y sutiles toques tropicales. En boca, es vibrante y refrescante, con una acidez equilibrada y una textura suave. Pulenta Estate Sauvignon Blanc es perfecto para maridar con mariscos, pescados blancos, ensaladas y platos ligeros. Su estilo fresco y afrutado lo convierte en una elección ideal para quienes disfrutan de los vinos blancos vivaces y sabrosos.',
    stock: 7,
    type: 'Blanco',
    imageProduct: {
      firtsImage: 'https://frappe.com.ar/img/productos/grande/111622.png',
    },
    price: 4690,
  },
]

export default productos
