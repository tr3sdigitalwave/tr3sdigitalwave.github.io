/* ============================================================
   Tr3sDigitalWave — i18n engine
   English is captured from the DOM at load (single source of
   truth in index.html); es / zh / de / ca / fr dictionaries
   live here, along with the demo bot's conversation script.
   ============================================================ */
(function () {
  'use strict';

  var LANGS = ['en', 'es', 'zh', 'de', 'ca', 'fr'];
  var LANG_NAMES = { en: 'English', es: 'Español', zh: '中文', de: 'Deutsch', ca: 'Català', fr: 'Français' };
  var LANG_SHORT = { en: 'EN', es: 'ES', zh: '中文', de: 'DE', ca: 'CA', fr: 'FR' };

  /* ---------------- page dictionaries ---------------- */
  var STR = {
    meta: {
      title: {
        es: "Tr3sDigitalWave — Tu negocio funciona mientras duermes",
        zh: "Tr3sDigitalWave — 您的生意在您入睡时仍在运转",
        de: "Tr3sDigitalWave — Ihr Unternehmen läuft, während Sie schlafen",
        ca: "Tr3sDigitalWave — El teu negoci funciona mentre dorms",
        fr: "Tr3sDigitalWave — Votre entreprise tourne pendant que vous dormez"
      }
    },
    nav: {
      home:       { es: "Inicio", zh: "首页", de: "Start", ca: "Inici", fr: "Accueil" },
      services:   { es: "Servicios", zh: "服务", de: "Leistungen", ca: "Serveis", fr: "Services" },
      solutions:  { es: "Soluciones", zh: "解决方案", de: "Lösungen", ca: "Solucions", fr: "Solutions" },
      process:    { es: "Cómo funciona", zh: "工作流程", de: "So funktioniert's", ca: "Com funciona", fr: "Comment ça marche" },
      why:        { es: "Por qué nosotros", zh: "为什么选择我们", de: "Warum wir", ca: "Per què nosaltres", fr: "Pourquoi nous" },
      contact:    { es: "Contacto", zh: "联系我们", de: "Kontakt", ca: "Contacte", fr: "Contact" },
      cta:        { es: "Solicitar demo", zh: "预约演示", de: "Demo anfordern", ca: "Sol·licitar demo", fr: "Demander une démo" },
      lang_label: { es: "Cambiar idioma", zh: "切换语言", de: "Sprache ändern", ca: "Canviar idioma", fr: "Changer de langue" }
    },
    hero: {
      eyebrow: { es: "Soluciones digitales para negocios", zh: "企业数字化解决方案", de: "Digitale Lösungen für Unternehmen", ca: "Solucions digitals per a empreses", fr: "Solutions numériques pour entreprises" },
      title: {
        es: 'Tu negocio funciona <em>mientras duermes.</em>',
        zh: '您的生意在<em>您入睡时</em>仍在运转。',
        de: 'Ihr Unternehmen läuft, <em>während Sie schlafen.</em>',
        ca: 'El teu negoci funciona <em>mentre dorms.</em>',
        fr: 'Votre entreprise tourne <em>pendant que vous dormez.</em>'
      },
      sub: {
        es: "Automatizaciones, bots inteligentes y sistemas que optimizan tus operaciones. Menos tareas manuales, más tiempo para crecer.",
        zh: "自动化、智能机器人和优化运营的系统。减少手动任务，腾出更多时间实现增长。",
        de: "Automatisierungen, intelligente Bots und Systeme, die Ihre Abläufe optimieren. Weniger Handarbeit, mehr Zeit zum Wachsen.",
        ca: "Automatitzacions, bots intel·ligents i sistemes que optimitzen les teves operacions. Menys tasques manuals, més temps per créixer.",
        fr: "Automatisations, bots intelligents et systèmes qui optimisent vos opérations. Moins de tâches manuelles, plus de temps pour grandir."
      },
      cta1: { es: "Ver la demo en acción", zh: "观看演示", de: "Demo live ansehen", ca: "Veure la demo en acció", fr: "Voir la démo en action" },
      cta2: { es: "Solicitar una consulta gratuita", zh: "预约免费咨询", de: "Kostenlose Beratung anfragen", ca: "Sol·licitar una consulta gratuïta", fr: "Demander une consultation gratuite" },
      stat1: { es: "Respuesta permanente", zh: "全天候响应", de: "Antwort rund um die Uhr", ca: "Resposta permanent", fr: "Réponse permanente" },
      stat2: { es: "Tareas repetitivas eliminadas", zh: "消除重复性工作", de: "Wiederholende Aufgaben eliminiert", ca: "Tasques repetitives eliminades", fr: "Tâches répétitives éliminées" },
      stat3: { es: "Tiempo medio de entrega", zh: "平均交付周期", de: "Durchschnittliche Lieferzeit", ca: "Temps mitjà d'entrega", fr: "Délai de livraison moyen" }
    },
    prob: {
      eyebrow: { es: "El problema", zh: "痛点", de: "Das Problem", ca: "El problema", fr: "Le problème" },
      title: {
        es: '¿Te suena <em>familiar?</em>',
        zh: '这些情况<em>听起来熟悉吗？</em>',
        de: 'Kommt Ihnen das <em>bekannt vor?</em>',
        ca: 'Et sona <em>familiar?</em>',
        fr: 'Cela vous dit-il <em>quelque chose ?</em>'
      },
      sub: {
        es: "La mayoría de los negocios no necesitan más esfuerzo. Necesitan menos tareas manuales.",
        zh: "大多数企业不需要更多投入，而是需要更少的手动操作。",
        de: "Die meisten Unternehmen brauchen nicht mehr Einsatz, sondern weniger manuelle Aufgaben.",
        ca: "La majoria de negocis no necessiten més esforç. Necessiten menys tasques manuals.",
        fr: "La plupart des entreprises n'ont pas besoin de plus d'efforts, mais de moins de tâches manuelles."
      }
    },
    prob1: {
      title: { es: "Las mismas preguntas, cada día", zh: "每天都在回答同样的问题", de: "Dieselben Fragen, jeden Tag", ca: "Les mateixes preguntes, cada dia", fr: "Les mêmes questions, chaque jour" },
      text: {
        es: "Pasas horas respondiendo los mismos mensajes: precios, disponibilidad, ubicación, una y otra vez.",
        zh: "您花费数小时反复回复相同的消息——价格、空闲情况、地址。",
        de: "Sie verbringen Stunden mit denselben Nachrichten—Preise, Verfügbarkeit, Adresse—immer wieder.",
        ca: "Passes hores responent els mateixos missatges: preus, disponibilitat, ubicació, una vegada i una altra.",
        fr: "Vous passez des heures à répondre aux mêmes messages—prix, disponibilité, adresse—encore et encore."
      }
    },
    prob2: {
      title: { es: "Respuestas lentas, ventas perdidas", zh: "回复太慢，错失订单", de: "Langsame Antworten, verlorene Umsätze", ca: "Respostes lentes, vendes perdudes", fr: "Réponses lentes, ventes perdues" },
      text: {
        es: "Pierdes clientes porque no respondes a tiempo: el 78% compra a quien responde primero.",
        zh: "您正在流失客户，因为无法及时回复——78% 的客户会选择最先回复的商家。",
        de: "Sie verlieren Kunden, weil Sie nicht rechtzeitig antworten—78 % kaufen bei dem, der zuerst antwortet.",
        ca: "Perds clients perquè no respons a temps: el 78% compra a qui respon primer.",
        fr: "Vous perdez des clients parce que vous ne répondez pas à temps—78 % achètent chez celui qui répond en premier."
      }
    },
    prob3: {
      title: { es: "Tu equipo atrapado en la repetición", zh: "团队困在重复劳动中", de: "Team steckt in Wiederholung fest", ca: "Equip atrapada en la repetició", fr: "Équipe coincée dans la répétition" },
      text: {
        es: "Tu equipo realiza tareas repetitivas en lugar de vender, crear y hacer crecer el negocio.",
        zh: "您的团队忙于重复性任务，而不是销售、创新和推动业务增长。",
        de: "Ihr Team erledigt wiederholende Aufgaben, statt zu verkaufen, zu gestalten und das Unternehmen wachsen zu lassen.",
        ca: "El teu equip fa tasques repetitives en lloc de vendre, crear i fer créixer el negoci.",
        fr: "Votre équipe effectue des tâches répétitives au lieu de vendre, créer et faire croître l'entreprise."
      }
    },
    prob4: {
      title: { es: "Números poco claros", zh: "账目不清", de: "Keine klaren Zahlen", ca: "Números poc clars", fr: "Pas de chiffres clairs" },
      text: {
        es: "No sabes cuánto ganas realmente por proyecto o por día hasta que es demasiado tarde para corregirlo.",
        zh: "直到为时已晚，您才了解每个项目或每天实际赚了多少钱。",
        de: "Sie wissen nicht wirklich, was Sie pro Projekt oder pro Tag verdienen—bis es zu spät ist.",
        ca: "No saps quant guanyes realment per projecte o per dia fins que és massa tard per corregir-ho.",
        fr: "Vous ne savez pas vraiment combien vous gagnez par projet ou par jour—jusqu'à ce qu'il soit trop tard."
      }
    },
    svc: {
      eyebrow: { es: "Nuestros servicios", zh: "我们的服务", de: "Unsere Leistungen", ca: "Els nostres serveis", fr: "Nos services" },
      title: {
        es: 'Soluciones que transforman <em>tus operaciones.</em>',
        zh: '改变<em>您运营方式</em>的解决方案。',
        de: 'Lösungen, die <em>Ihre Abläufe</em> transformieren.',
        ca: 'Solucions que transformen <em>les teves operacions.</em>',
        fr: 'Des solutions qui transforment <em>vos opérations.</em>'
      },
      sub: {
        es: "Todo lo digital que tu negocio necesita para funcionar solo: diseñado, construido y mantenido por un solo equipo.",
        zh: "企业自主运转所需的一切数字化方案——由同一团队设计、构建和维护。",
        de: "Alles Digitale, was Ihr Unternehmen braucht, um sich selbst zu führen—von einem Team entworfen, gebaut und betreut.",
        ca: "Tot el digital que el teu negoci necessita per funcionar sol: dissenyat, construït i mantingut per un sol equip.",
        fr: "Tout le numérique dont votre entreprise a besoin pour tourner seule—conçu, construit et maintenu par une seule équipe."
      }
    },
    svc1: {
      title: { es: "Bots inteligentes", zh: "智能机器人", de: "Intelligente Bots", ca: "Bots intel·ligents", fr: "Bots intelligents" },
      text: {
        es: "Asistentes virtuales en WhatsApp que atienden consultas, entregan cotizaciones y gestionan agendas 24/7. Responden en varios idiomas, capturan perfiles de clientes y nunca pierden un mensaje, sin intervención humana.",
        zh: "WhatsApp 虚拟助理，全天候处理咨询、生成报价和管理日程。支持多语言回复、自动采集客户资料，绝不遗漏任何消息——无需人工干预。",
        de: "Virtuelle Assistenten auf WhatsApp, die Anfragen bearbeiten, Angebote erstellen und Termine verwalten—24/7. Sie antworten in mehreren Sprachen, erfassen Kundenprofile und verpassen keine Nachricht—ohne menschliches Eingreifen.",
        ca: "Assistentes virtuals a WhatsApp que atenen consultes, entreguen pressupostos i gestionen agendes 24/7. Responsen en diversos idiomes, capturen perfils de clients i mai perden un missatge, sense intervenció humana.",
        fr: "Des assistants virtuels sur WhatsApp qui gèrent les demandes, les devis et la planification 24h/7. Ils répondent en plusieurs langues, capturent les profils clients et ne manquent jamais un message—sans intervention humaine."
      },
      link: { es: "Prueba la demo del bot", zh: "体验机器人演示", de: "Bot-Demo ausprobieren", ca: "Prova la demo del bot", fr: "Essayer la démo du bot" }
    },
    svc2: {
      title: { es: "Automatización de procesos", zh: "流程自动化", de: "Prozessautomatisierung", ca: "Automatització de processos", fr: "Automatisation des processus" },
      text: {
        es: "Conectamos tus sistemas, eliminamos tareas manuales y sincronizamos datos en tiempo real: desde reservas y pedidos hasta facturas e informes financieros. Si ocurre dos veces, lo hacemos que ocurra cero.",
        zh: "我们连接您的系统，消除手动任务，实时同步数据——从预订、订单到发票和财务报告。凡是重复两次的事，我们让它零次发生。",
        de: "Wir verbinden Ihre Systeme, eliminieren manuelle Aufgaben und synchronisieren Daten in Echtzeit—von Buchungen und Bestellungen bis zu Rechnungen und Berichten. Was zweimal passiert, passiert künftig nullmal.",
        ca: "Connectem els teus sistemes, eliminem tasques manuals i sincronitzem dades en temps real: des de reserves i comandes fins a factures i informes financers. Si passa dues vegades, fem que passi zero.",
        fr: "Nous connectons vos systèmes, éliminons les tâches manuelles et synchronisons les données en temps réel—des réservations aux factures et rapports financiers. Si cela arrive deux fois, nous faisons qu'il n'arrive plus jamais."
      },
      link: { es: "Automatiza un proceso", zh: "自动化一个流程", de: "Prozess automatisieren", ca: "Automatitza un procés", fr: "Automatiser un processus" }
    },
    svc3: {
      title: { es: "Paneles e informes", zh: "数据看板与报告", de: "Dashboards & Berichte", ca: "Panells i informes", fr: "Tableaux de bord et rapports" },
      text: {
        es: "Visualiza tus métricas clave en tiempo real. Controla ocupación, ingresos, gastos y rendimiento en un solo lugar, accesible desde cualquier dispositivo y actualizado sin una sola entrada manual.",
        zh: "实时查看关键指标。在一个界面中追踪入住率、收入、支出和绩效——任何设备均可访问，全程无需手动录入。",
        de: "Sehen Sie Ihre Kennzahlen in Echtzeit. Belegung, Umsatz, Kosten und Leistung an einem Ort—von jedem Gerät aus, ohne einen einzigen manuellen Eintrag.",
        ca: "Visualitza les teves mètriques clau en temps real. Controla ocupació, ingressos, despeses i rendiment en un sol lloc, accessible des de qualsevol dispositiu i actualitzat sense una sola entrada manual.",
        fr: "Visualisez vos indicateurs clés en temps réel. Suivez l'occupation, les revenus, les dépenses et les performances en un seul endroit—accessible depuis n'importe quel appareil, mis à jour sans aucune saisie manuelle."
      },
      link: { es: "Ve tus datos con claridad", zh: "清晰掌握您的数据", de: "Ihre Daten klar sehen", ca: "Veu les dades amb claredat", fr: "Voir vos données clairement" }
    },
    svc4: {
      title: { es: "Desarrollo web a medida", zh: "定制开发", de: "Individuelle Webentwicklung", ca: "Desenvolupament web a mida", fr: "Développement web sur mesure" },
      text: {
        es: "Sitios web, páginas y aplicaciones a medida que se adaptan a tu negocio, y no al revés. Infraestructura local con control total de tus datos, construida para crecer contigo.",
        zh: "网站、页面和量身定制的 Web 应用，适配您的业务——而不是让您适配它们。本地基础设施，数据完全自主，并随业务同步扩展。",
        de: "Websites, Seiten und maßgeschneiderte Webanwendungen, die sich an Ihr Unternehmen anpassen—nicht umgekehrt. Lokale Infrastruktur mit voller Datenkontrolle, gebaut für Ihr Wachstum.",
        ca: "Llocs web, pàgines i aplicacions a mida que s'adapten al teu negoci, i no a la inrevés. Infraestructura local amb control total de les teves dades, construïda per créixer amb tu.",
        fr: "Sites web, pages et applications sur mesure qui s'adaptent à votre entreprise—pas l'inverse. Infrastructure locale avec contrôle total de vos données, conçue pour grandir avec vous."
      },
      link: { es: "Construye algo a medida", zh: "构建定制方案", de: "Etwas Individuelles bauen", ca: "Construeix quelcom a mida", fr: "Construire sur mesure" }
    },
    use: {
      eyebrow: { es: "Casos de uso", zh: "应用场景", de: "Anwendungsfälle", ca: "Casos d'ús", fr: "Cas d'usage" },
      title: {
        es: 'Soluciones para <em>tu industria.</em>',
        zh: '适用于<em>您所在行业</em>的解决方案',
        de: 'Lösungen für <em>Ihre Branche.</em>',
        ca: 'Solucions per a <em>la teva indústria.</em>',
        fr: 'Des solutions pour <em>votre secteur.</em>'
      },
      sub: {
        es: "Donde hay una tarea repetida, hay una automatización esperando suceder.",
        zh: "凡有重复任务之处，就有等待落地的自动化。",
        de: "Wo eine wiederholende Aufgabe ist, wartet eine Automatisierung.",
        ca: "On hi ha una tasca repetida, hi ha una automatització esperant passar.",
        fr: "Partout où il y a une tâche répétée, une automatisation attend de naître."
      }
    },
    use1: {
      title: { es: "Operadores turísticos", zh: "旅行社", de: "Reiseveranstalter", ca: "Operadors turístics", fr: "Voyagistes" },
      text: { es: "Cotizaciones instantáneas y reservas automatizadas, incluso mientras estás de gira.", zh: "即时报价与自动预订，即使您正在带团途中。", de: "Sofortige Angebote und automatisierte Buchungen—auch während Sie unterwegs sind.", ca: "Pressupostos instantanis i reserves automatitzades, fins i tot mentre estàs de gira.", fr: "Devis instantanés et réservations automatisées, même pendant que vous êtes en excursion." }
    },
    use2: {
      title: { es: "Hoteles y alojamientos", zh: "酒店与住宿", de: "Hotels & Unterkünfte", ca: "Hotels i allotjaments", fr: "Hôtels et hébergements" },
      text: { es: "Check-in digital, gestión de reservas y mensajería a huéspedes en piloto automático.", zh: "数字入住、预订管理和客户消息全自动运行。", de: "Digitaler Check-in, Reservierungsmanagement und Gastkommunikation auf Autopilot.", ca: "Check-in digital, gestió de reserves i missatgeria a hostes en pilot automàtic.", fr: "Check-in numérique, gestion des réservations et messages aux clients en pilote automatique." }
    },
    use3: {
      title: { es: "Restaurantes", zh: "餐厅", de: "Restaurants", ca: "Restaurants", fr: "Restaurants" },
      text: { es: "Menús QR, pedidos automatizados, reservas y solicitudes de reseñas.", zh: "二维码菜单、自动点餐、预订和好评邀请。", de: "QR-Speisekarten, automatische Bestellungen, Reservierungen und Bewertungsanfragen.", ca: "Menús QR, comandes automatitzades, reserves i sol·licituds de ressenyes.", fr: "Menus QR, commandes automatisées, réservations et demandes d'avis." }
    },
    use4: {
      title: { es: "Proveedores de actividades", zh: "活动供应商", de: "Aktivitätsanbieter", ca: "Proveïdors d'activitats", fr: "Prestataires d'activités" },
      text: { es: "Exenciones digitales, programación y recordatorios automáticos para cada excursión.", zh: "数字化免责协议、排期管理和每次出行的自动提醒。", de: "Digitale Einverständniserklärungen, Planung und automatische Erinnerungen für jeden Ausflug.", ca: "Exempcions digitals, programació i recordatoris automàtics per a cada excursió.", fr: "Exonérations numériques, planification et rappels automatiques pour chaque excursion." }
    },
    use5: {
      title: { es: "Comercios minoristas", zh: "零售商", de: "Einzelhändler", ca: "Comerços minoristes", fr: "Détaillants" },
      text: { es: "Control de inventario y pedidos con alertas de stock bajo antes de que te quedes sin producto.", zh: "库存与订单追踪，缺货前自动发出库存预警。", de: "Bestands- und Auftragsverfolgung mit Warnungen, bevor Ihnen etwas ausgeht.", ca: "Control d'inventari i comandes amb alertes d'estoc baix abans que se t'acabi el producte.", fr: "Suivi des stocks et commandes avec alertes de stock bas avant la rupture." }
    },
    use6: {
      title: { es: "Profesionales independientes", zh: "自由职业者", de: "Selbstständige", ca: "Professionals independents", fr: "Professionnels indépendants" },
      text: { es: "Agendamiento, facturación automatizada y seguimiento de clientes que funcionan solos.", zh: "日程安排、自动开票和客户跟进，全部自主运行。", de: "Terminplanung, automatisierte Rechnungen und Kundenfollow-ups, die sich selbst erledigen.", ca: "Agenda, facturació automatitzada i seguiment de clients que funcionen sols.", fr: "Planification, facturation automatisée et relances clients qui tournent tout seuls." }
    },
    how: {
      eyebrow: { es: "Cómo funciona", zh: "工作流程", de: "So funktioniert's", ca: "Com funciona", fr: "Comment ça marche" },
      title: {
        es: 'De la idea a la implementación <em>en 3 pasos.</em>',
        zh: '从想法到落地，<em>只需 3 步。</em>',
        de: 'Von der Idee zur Umsetzung <em>in 3 Schritten.</em>',
        ca: 'De la idea a la implementació <em>en 3 passos.</em>',
        fr: 'De l\'idée à la mise en œuvre <em>en 3 étapes.</em>'
      },
      sub: {
        es: 'Sin reuniones interminables ni jerga técnica. Un camino claro de "perdemos tiempo en esto" a "funciona solo".',
        zh: '没有冗长的会议，没有技术术语。从"我们在这件事上浪费时间"到"它全自动运行"的清晰路径。',
        de: 'Keine endlosen Meetings, kein Fachjargon. Ein klarer Weg von „Damit verschwenden wir Zeit" zu „Das läuft von allein".',
        ca: 'Sense reunions interminables ni jerga tècnica. Un camí clar de "perdem temps en això" a "funciona sol".',
        fr: 'Pas de réunions interminables, pas de jargon technique. Un chemin clair de « on perd du temps là-dessus » à « ça tourne tout seul ».'
      }
    },
    how1: {
      title: { es: "Evaluación", zh: "评估", de: "Analyse", ca: "Avaluació", fr: "Évaluation" },
      text: {
        es: "Analizamos tus procesos actuales e identificamos las oportunidades de automatización con mayor impacto en tu tiempo y tus ingresos.",
        zh: "我们分析您现有的流程，找出对时间和收入影响最大的自动化机会。",
        de: "Wir analysieren Ihre aktuellen Prozesse und finden die Automatisierungen mit dem größten Impact auf Zeit und Umsatz.",
        ca: "Analitzem els teus processos actuals i identifiquem les oportunitats d'automatització amb major impacte en el teu temps i els teus ingressos.",
        fr: "Nous analysons vos processus actuels et identifions les opportunités d'automatisation au plus fort impact sur votre temps et vos revenus."
      }
    },
    how2: {
      title: { es: "Implementación", zh: "实施", de: "Umsetzung", ca: "Implementació", fr: "Mise en œuvre" },
      text: {
        es: "Diseñamos y desarrollamos tu solución a medida en 6–8 semanas, incluyendo pruebas y ajustes, sin interrumpir tu operación diaria.",
        zh: "我们在 6–8 周内设计并开发您的定制方案，包括测试与调整——不干扰日常运营。",
        de: "Wir entwerfen und entwickeln Ihre Lösung in 6–8 Wochen, inklusive Tests und Anpassungen—ohne Ihren Betrieb zu stören.",
        ca: "Dissenyem i desenvolupem la teva solució a mida en 6–8 setmanes, incloent proves i ajustos, sense interrompre la teva operació diària.",
        fr: "Nous concevons et développons votre solution sur mesure en 6 à 8 semaines, tests et ajustements inclus—sans perturber votre activité."
      }
    },
    how3: {
      title: { es: "Soporte continuo", zh: "持续支持", de: "Laufender Support", ca: "Suport continu", fr: "Support continu" },
      text: {
        es: "Soporte mes a mes para refinar, mejorar y escalar tu automatización a medida que tu negocio evoluciona. Sin permanencia, nunca.",
        zh: "按月支持，随业务发展不断优化、改进和扩展您的自动化方案。绝无锁定。",
        de: "Monatlicher Support, um Ihre Automatisierung mit Ihrem Unternehmen zu verfeinern und skalieren. Keine Kündigungsfristen. Nie.",
        ca: "Suport mes a mes per afinar, millorar i escalar la teva automatització a mesura que el teu negoci evoluciona. Sense permanència, mai.",
        fr: "Un support mensuel pour peaufiner, améliorer et faire évoluer votre automatisation. Sans engagement, jamais."
      }
    },
    why: {
      eyebrow: { es: "Por qué Tr3sDigitalWave", zh: "为什么选择 Tr3sDigitalWave", de: "Warum Tr3sDigitalWave", ca: "Per què Tr3sDigitalWave", fr: "Pourquoi Tr3sDigitalWave" },
      title: {
        es: 'Nuestra <em>ventaja</em> competitiva.',
        zh: '我们的竞争<em>优势。</em>',
        de: 'Unser <em>Wettbewerbsvorteil.</em>',
        ca: 'El nostre <em>avantatge</em> competitiu.',
        fr: 'Notre <em>avantage</em> concurrentiel.'
      },
      sub: {
        es: "Construimos los sistemas que vendemos y los usamos para gestionar nuestro propio negocio.",
        zh: "我们销售自己构建的系统——并用它们运营自己的公司。",
        de: "Wir bauen die Systeme, die wir verkaufen—und nutzen sie für unser eigenes Unternehmen.",
        ca: "Construïm els sistemes que venem i els fem servir per gestionar el nostre propi negoci.",
        fr: "Nous construisons les systèmes que nous vendons—et nous les utilisons pour gérer notre propre entreprise."
      }
    },
    why1: {
      title: { es: "Infraestructura local", zh: "本地基础设施", de: "Lokale Infrastruktur", ca: "Infraestructura local", fr: "Infrastructure locale" },
      text: {
        es: "Tus datos permanecen bajo tu control. Servidores privados, sin depender de plataformas de terceros que pueden cambiar sus precios de la noche a la mañana.",
        zh: "您的数据始终由您掌控。私有服务器——不依赖可能一夜之间更改价格的第三方平台。",
        de: "Ihre Daten bleiben unter Ihrer Kontrolle. Private Server—keine Abhängigkeit von Drittplattformen, die über Nacht ihre Preise ändern.",
        ca: "Les teves dades romanen sota el teu control. Servidors privats, sense dependre de plataformes de tercers que poden canviar els preus de la nit al dia.",
        fr: "Vos données restent sous votre contrôle. Serveurs privés—sans dépendre de plateformes tierces qui peuvent changer leurs prix du jour au lendemain."
      }
    },
    why2: {
      title: { es: "Código propio", zh: "自主代码", de: "Eigenentwicklung", ca: "Codi propi", fr: "Code propriétaire" },
      text: {
        es: "Soluciones hechas a medida, no plataformas genéricas. Tu sistema se adapta a tus procesos, y no al revés.",
        zh: "定制方案，而非通用平台。您的系统适配您的流程——而不是相反。",
        de: "Maßgeschneiderte Lösungen, keine generischen Plattformen. Ihr System passt sich Ihren Prozessen an—nicht umgekehrt.",
        ca: "Solucions fetes a mida, no plataformes genèriques. El teu sistema s'adapta als teus processos, i no a la inrevés.",
        fr: "Des solutions sur mesure, pas des plateformes génériques. Votre système s'adapte à vos processus—pas l'inverse."
      }
    },
    why3: {
      title: { es: "Entrega rápida", zh: "快速交付", de: "Schnelle Lieferung", ca: "Entrega ràpida", fr: "Livraison rapide" },
      text: {
        es: "La mayoría de las soluciones se entregan en 6–8 semanas. Ves resultados reales en semanas, no después de un proyecto de seis meses.",
        zh: "大多数方案在 6–8 周内交付。数周内即可看到实际效果，而不是等六个月的项目周期。",
        de: "Die meisten Lösungen liefern wir in 6–8 Wochen. Sie sehen echte Ergebnisse innerhalb weniger Wochen—nicht nach einem halben Jahr.",
        ca: "La majoria de solucions s'entreguen en 6–8 setmanes. Veus resultats reals en setmanes, no després d'un projecte de sis mesos.",
        fr: "La plupart des solutions sont livrées en 6 à 8 semaines. Vous voyez des résultats réels en quelques semaines, pas après un projet de six mois."
      }
    },
    why4: {
      title: { es: "Sin permanencia", zh: "无锁定", de: "Keine Bindung", ca: "Sense permanència", fr: "Sans engagement" },
      text: {
        es: "Soporte mes a mes, precios transparentes y código que te pertenece. Ganamos tu confianza cada mes.",
        zh: "按月支持、价格透明、代码归您所有。我们每个月都重新赢得您的信任。",
        de: "Monatlicher Support, transparente Preise und Code, der Ihnen gehört. Wir verdienen Ihr Vertrauen jeden Monat neu.",
        ca: "Suport mes a mes, preus transparents i codi que et pertany. Guanyem la teva confiança cada mes.",
        fr: "Support mensuel, prix transparents et code qui vous appartient. Nous gagnons votre confiance chaque mois."
      }
    },
    why5: {
      badge: { es: "Incluido en cada solución", zh: "每项方案均含此服务", de: "In jeder Lösung enthalten", ca: "Inclòs en cada solució", fr: "Inclus dans chaque solution" },
      title: { es: "Tus sistemas, siempre vivos.", zh: "您的系统，持久在线。", de: "Ihre Systeme, immer am Laufen.", ca: "Els teus sistemes, sempre vius.", fr: "Vos systèmes, toujours en vie." },
      text: {
        es: "El mantenimiento del sistema está incluido en todo lo que construimos: monitorización proactiva, parches de seguridad, copias de seguridad automáticas y mejoras continuas. Tu automatización nunca pierde un latido.",
        zh: "我们构建的每一项系统均包含系统维护：主动监控、安全补丁、自动备份与持续优化——您的自动化永不停歇。",
        de: "Systemwartung ist bei allem Standard, was wir bauen: proaktives Monitoring, Sicherheitspatches, automatische Backups und laufende Verbesserungen— Ihre Automatisierung bleibt immer im Takt.",
        ca: "El manteniment del sistema està inclòs en tot el que construïm: monitorització proactiva, pegats de seguretat, còpies de seguretat automàtiques i millores contínues. La teva automatització mai perd un batec.",
        fr: "La maintenance système est incluse dans tout ce que nous construisons : surveillance proactive, correctifs de sécurité, sauvegardes automatiques et améliorations continues — votre automatisation ne perd jamais une pulsation."
      },
      chip1: { es: "Monitorización 24/7", zh: "全天候监控", de: "24/7-Monitoring", ca: "Monitorització 24/7", fr: "Surveillance 24h/24" },
      chip2: { es: "Copias automáticas", zh: "自动备份", de: "Automatische Backups", ca: "Còpies automàtiques", fr: "Sauvegardes automatiques" },
      chip3: { es: "Actualizaciones de seguridad", zh: "安全更新", de: "Sicherheitsupdates", ca: "Actualitzacions de seguretat", fr: "Mises à jour de sécurité" },
      uptime: { es: "disponibilidad objetivo", zh: "目标可用性", de: "Ziel-Verfügbarkeit", ca: "disponibilitat objectiu", fr: "disponibilité cible" }
    },
    demo: {
      eyebrow: { es: "Pruébalo ahora", zh: "立即体验", de: "Jetzt testen", ca: "Prova-ho ara", fr: "Essayez maintenant" },
      title: {
        es: 'Habla con nuestro bot. <em>Aquí mismo.</em>',
        zh: '与我们的机器人对话。<em>就在此处。</em>',
        de: 'Reden Sie mit unserem Bot. <em>Hier und jetzt.</em>',
        ca: 'Parla amb el nostre bot. <em>Aquí mateix.</em>',
        fr: 'Parlez à notre bot. <em>Ici même.</em>'
      },
      sub: {
        es: "Esta demo es la misma tecnología que desplegamos para nuestros clientes: un asistente de WhatsApp que captura perfiles, responde preguntas y genera cotizaciones, 24/7 y en cualquier idioma. Adelante, saluda.",
        zh: "此演示与我们为客户部署的技术完全相同：一个 WhatsApp 助手，全天候以任何语言采集客户资料、回答问题和生成报价。来，打个招呼吧。",
        de: "Diese Demo ist dieselbe Technologie, die wir für Kunden einsetzen: ein WhatsApp-Assistent, der Profile erfasst, Fragen beantwortet und Angebote erstellt—24/7 und in jeder Sprache. Grüßen Sie uns einfach.",
        ca: "Aquesta demo és la mateixa tecnologia que despleguem per als nostres clients: un assistent de WhatsApp que captura perfils, respon preguntes i genera pressupostos, 24/7 i en qualsevol idioma. Endavant, saluda.",
        fr: "Cette démo reprend la technologie que nous déployons pour nos clients : un assistant WhatsApp qui capture des profils, répond aux questions et établit des devis—24h/24, en toute langue. Allez-y, dites bonjour."
      },
      point1: { es: "Captura perfiles de clientes automáticamente", zh: "自动采集客户资料", de: "Erfasst Kundenprofile automatisch", ca: "Captura perfils de clients automàticament", fr: "Capture les profils clients automatiquement" },
      point2: { es: "Genera cotizaciones instantáneas y a medida", zh: "即时生成定制化报价", de: "Erstellt sofortige, maßgeschneiderte Angebote", ca: "Genera pressupostos instantanis i a mida", fr: "Génère des devis instantanés et sur mesure" },
      point3: { es: "Deriva a una persona solo cuando importa", zh: "只在关键时刻转交人工", de: "Übergibt nur dann an Menschen, wenn es zählt", ca: "Deriva a una persona només quan importa", fr: "Transfère à un humain uniquement quand c'est important" },
      wa: { es: "Continuar en WhatsApp", zh: "在 WhatsApp 上继续", de: "Auf WhatsApp fortfahren", ca: "Continua a WhatsApp", fr: "Continuer sur WhatsApp" },
      phone_aria: { es: "Demo de chat en vivo con el asistente de Tr3sDigitalWave", zh: "与 Tr3sDigitalWave 智能助手的实时对话演示", de: "Live-Chat-Demo mit dem Tr3sDigitalWave-Assistenten", ca: "Demo de xat en viu amb l'assistent de Tr3sDigitalWave", fr: "Démo de chat en direct avec l'assistant Tr3sDigitalWave" },
      bot_name: { es: "Asistente Wave", zh: "Wave 智能助手", de: "Wave-Assistent", ca: "Assistent Wave", fr: "Assistant Wave" },
      status_online: { es: "en línea · responde al instante", zh: "在线 · 即时回复", de: "online · antwortet sofort", ca: "en línia · respon a l'instant", fr: "en ligne · répond instantanément" },
      status_typing: { es: "escribiendo…", zh: "正在输入…", de: "tippt…", ca: "escrivint…", fr: "en train d'écrire…" },
      placeholder: { es: "Escribe un mensaje…", zh: "输入消息…", de: "Nachricht schreiben…", ca: "Escriu un missatge…", fr: "Écrivez un message…" },
      send_aria: { es: "Enviar mensaje", zh: "发送消息", de: "Nachricht senden", ca: "Enviar missatge", fr: "Envoyer le message" }
    },
    foot: {
      tagline: {
        es: "Soluciones digitales para negocios. Construimos las automatizaciones, bots y sistemas que te devuelven tu tiempo.",
        zh: "企业数字化解决方案。我们构建能帮您找回时间的自动化、机器人与系统。",
        de: "Digitale Lösungen für Unternehmen. Wir bauen die Automatisierungen, Bots und Systeme, die Ihnen Zeit zurückgeben.",
        ca: "Solucions digitals per a empreses. Construïm les automatitzacions, bots i sistemes que et retornen el teu temps.",
        fr: "Solutions numériques pour entreprises. Nous construisons les automatisations, bots et systèmes qui vous rendent votre temps."
      },
      explore: { es: "Explorar", zh: "探索", de: "Entdecken", ca: "Explora", fr: "Explorer" },
      getstarted: { es: "Empieza aquí", zh: "开始使用", de: "Los geht's", ca: "Comença aquí", fr: "Pour commencer" },
      demo: { es: "Prueba la demo del bot", zh: "体验机器人演示", de: "Bot-Demo testen", ca: "Prova la demo del bot", fr: "Essayer la démo du bot" },
      wa: { es: "Escríbenos por WhatsApp", zh: "通过 WhatsApp 联系我们", de: "Schreiben Sie uns auf WhatsApp", ca: "Escriu-nos per WhatsApp", fr: "Écrivez-nous sur WhatsApp" },
      rights: { es: "© {year} Tr3sDigitalWave. Todos los derechos reservados.", zh: "© {year} Tr3sDigitalWave。保留所有权利。", de: "© {year} Tr3sDigitalWave. Alle Rechte vorbehalten.", ca: "© {year} Tr3sDigitalWave. Tots els drets reservats.", fr: "© {year} Tr3sDigitalWave. Tous droits réservés." },
      made: { es: "Hecho con nuestra propia tecnología: este sitio es la demo.", zh: "由我们自己的技术构建——本站即演示。", de: "Gemacht mit unserer eigenen Technologie—diese Seite ist die Demo.", ca: "Fet amb la nostra pròpia tecnologia: aquest lloc és la demo.", fr: "Fait avec notre propre technologie—ce site est la démo." }
    }
  };

  /* ---------------- demo bot conversation (all 6 languages) ---------------- */
  var BOT = {
    en: {
      greet1: "Hi, I'm <b>Wave</b> — the Tr3sDigitalWave assistant. This chat runs on the same bot we deploy for clients: it captures profiles, answers questions, and builds quotes. 24/7, in any language.",
      greet2: "Want to see how I'd handle a real client inquiry?",
      chip_yes: "Yes, show me",
      chip_what: "What can you build?",
      ask_name: "Great — imagine you're a new client messaging a business at 11 PM. Let's play it out. First: what's your name?",
      nice: "Nice to meet you, <b>{n}</b>. What kind of business do you run?",
      gotbiz: "Got it — <b>{b}</b>. And what do you need? Pick one:",
      need_wa: "a WhatsApp bot for my business",
      need_auto: "process automation",
      need_web: "a website or custom web app",
      need_data: "dashboards and data analysis",
      then_next: "Perfect. Here's what I'd do next in the real world: create your client profile, book a <b>free assessment</b>, and prepare a tailored quote — all before your competitors even open their inbox.",
      profile: "<b>Your profile</b>\nName: {n}\nBusiness: {b}\nInterested in: {i}\n\nCaptured in 3 messages. Zero human time spent.",
      keep_talking: "This is exactly what your clients would experience. Want to keep talking on WhatsApp?",
      chip_continue: "Continue on WhatsApp",
      chip_restart: "Restart demo",
      chip_open: "Open WhatsApp",
      svc_answer: "Four things, mostly: <b>intelligent WhatsApp bots</b> that answer and quote instantly, <b>process automation</b> that connects your systems, <b>live dashboards</b> for your numbers, and <b>custom web apps</b> built around how you work.",
      want_try: "Everything ships in 6–8 weeks with month-to-month support. Want to try the client demo?",
      chip_try: "Try the client demo",
      chip_human: "Talk to a human",
      handoff: "Of course — a human from the team will take over from here. The fastest way is WhatsApp, or you can email <b>tr3sdigitalwave@proton.me</b>.",
      price_answer: "Every project is tailored, so quotes are too — that's why the assessment is free. Typical solutions start in the low hundreds per month, fully maintained. Want me to set one up?",
      chip_book: "Book a free assessment",
      hello_answer: "Hello! Ready when you are — I can walk you through the client demo or explain what we build.",
      chip_demo2: "See the client demo",
      chip_explore: "What can you build?",
      fallback: "Good question — that one's better answered by the team directly. I can connect you in one tap, or we can keep exploring the demo.",
      chip_team: "Talk to the team",
      wa_msg: "Hi Tr3sDigitalWave! I tried your demo bot. I'm {n}{b} and I'm interested in {i}. I'd like a free consultation."
    },
    es: {
      greet1: "Hola, soy <b>Wave</b>, el asistente de Tr3sDigitalWave. Este chat funciona con el mismo bot que desplegamos para clientes: captura perfiles, responde preguntas y genera cotizaciones. 24/7 y en cualquier idioma.",
      greet2: "¿Quieres ver cómo atendería una consulta real de un cliente?",
      chip_yes: "Sí, muéstrame",
      chip_what: "¿Qué pueden construir?",
      ask_name: "Genial — imagina que eres un cliente nuevo escribiéndole a un negocio a las 11 de la noche. Vamos a simularlo. Primero: ¿cómo te llamas?",
      nice: "Encantado de conocerte, <b>{n}</b>. ¿A qué te dedicas? ¿Qué tipo de negocio tienes?",
      gotbiz: "Entendido — <b>{b}</b>. ¿Y qué necesitas? Elige una opción:",
      need_wa: "un bot de WhatsApp para mi negocio",
      need_auto: "automatización de procesos",
      need_web: "un sitio web o app a medida",
      need_data: "paneles y análisis de datos",
      then_next: "Perfecto. Esto es lo que haría en el mundo real: crear tu perfil de cliente, agendar una <b>evaluación gratuita</b> y preparar una cotización a medida, todo antes de que tus competidores siquiera abran su bandeja de entrada.",
      profile: "<b>Tu perfil</b>\nNombre: {n}\nNegocio: {b}\nInterés: {i}\n\nCapturado en 3 mensajes. Cero tiempo humano invertido.",
      keep_talking: "Esto es exactamente lo que experimentarían tus clientes. ¿Quieres seguir hablando por WhatsApp?",
      chip_continue: "Continuar en WhatsApp",
      chip_restart: "Reiniciar demo",
      chip_open: "Abrir WhatsApp",
      svc_answer: "Cuatro cosas, principalmente: <b>bots inteligentes de WhatsApp</b> que responden y cotizan al instante, <b>automatización de procesos</b> que conecta tus sistemas, <b>paneles en vivo</b> para tus números y <b>apps web a medida</b> construidas sobre tu forma de trabajar.",
      want_try: "Todo se entrega en 6–8 semanas con soporte mes a mes. ¿Quieres probar la demo de cliente?",
      chip_try: "Probar la demo de cliente",
      chip_human: "Hablar con una persona",
      handoff: "Por supuesto — una persona del equipo tomará el relevo. Lo más rápido es WhatsApp, o puedes escribir a <b>tr3sdigitalwave@proton.me</b>.",
      price_answer: "Cada proyecto es a medida, y los precios también — por eso la evaluación es gratuita. Las soluciones típicas empiezan en unos pocos cientos al mes, con mantenimiento incluido. ¿Quieres que agende una?",
      chip_book: "Agendar evaluación gratuita",
      hello_answer: "¡Hola! Estoy listo cuando quieras — puedo guiarte por la demo de cliente o explicarte lo que construimos.",
      chip_demo2: "Ver la demo de cliente",
      chip_explore: "¿Qué pueden construir?",
      fallback: "Buena pregunta — esa mejor la responde el equipo directamente. Puedo conectarte con un toque, o seguir explorando la demo.",
      chip_team: "Hablar con el equipo",
      wa_msg: "¡Hola Tr3sDigitalWave! Probé su bot de demo. Soy {n}{b} y me interesa {i}. Me gustaría una consulta gratuita."
    },
    zh: {
      greet1: "你好，我是 <b>Wave</b> —— Tr3sDigitalWave 智能助手。这段对话运行在与客户部署完全相同的机器人上：采集资料、回答问题、生成报价，全天候以任何语言运行。",
      greet2: "想看看我如何处理真实客户咨询吗？",
      chip_yes: "好的，演示一下",
      chip_what: "你们能做什么？",
      ask_name: "太好了——想象一下，晚上 11 点有一位新客户给商家发消息。我们来模拟一下。首先：您叫什么名字？",
      nice: "很高兴认识你，<b>{n}</b>。你是做什么业务的？",
      gotbiz: "明白了——<b>{b}</b>。你需要什么？请选择：",
      need_wa: "为我的企业搭建 WhatsApp 机器人",
      need_auto: "流程自动化",
      need_web: "网站或定制 Web 应用",
      need_data: "数据看板与数据分析",
      then_next: "很好。接下来在现实世界中我会：创建客户档案、预约<b>免费评估</b>、准备定制报价——全部赶在竞争对手打开收件箱之前完成。",
      profile: "<b>你的客户档案</b>\n姓名：{n}\n业务：{b}\n意向：{i}\n\n仅用 3 条消息完成采集，零人工成本。",
      keep_talking: "这正是您的客户将获得的体验。想在 WhatsApp 上继续聊聊吗？",
      chip_continue: "在 WhatsApp 上继续",
      chip_restart: "重新演示",
      chip_open: "打开 WhatsApp",
      svc_answer: "主要有四类：<b>智能 WhatsApp 机器人</b>——即时回复与报价；<b>流程自动化</b>——打通您的系统；<b>实时数据看板</b>——掌握经营数字；以及按您工作方式量身打造的<b>定制 Web 应用</b>。",
      want_try: "所有方案 6–8 周交付，按月提供支持。想试试客户演示吗？",
      chip_try: "试试客户演示",
      chip_human: "与真人交谈",
      handoff: "当然——团队的工作人员将接管对话。最快的方式是 WhatsApp，也可以发送邮件至 <b>tr3sdigitalwave@proton.me</b>。",
      price_answer: "每个项目都是定制的，报价也是——所以评估完全免费。典型方案每月低至数百元起，含全程维护。需要我为您预约吗？",
      chip_book: "预约免费评估",
      hello_answer: "你好！随时待命——我可以带你体验客户演示，或介绍我们的服务。",
      chip_demo2: "查看客户演示",
      chip_explore: "你们能做什么？",
      fallback: "好问题——这个问题由团队直接回答更好。我可以一键为您接通，或者继续体验演示。",
      chip_team: "与团队交谈",
      wa_msg: "你好 Tr3sDigitalWave！我体验了你们的演示机器人。我是{n}{b}，对{i}感兴趣。希望预约免费咨询。"
    },
    de: {
      greet1: "Hallo, ich bin <b>Wave</b> — der Assistent von Tr3sDigitalWave. Dieser Chat läuft mit demselben Bot, den wir für Kunden einsetzen: Er erfasst Profile, beantwortet Fragen und erstellt Angebote. 24/7 und in jeder Sprache.",
      greet2: "Willst du sehen, wie ich eine echte Kundenanfrage bearbeite?",
      chip_yes: "Ja, zeig es mir",
      chip_what: "Was könnt ihr bauen?",
      ask_name: "Super — stell dir vor, du bist ein neuer Kunde, der einem Unternehmen um 23 Uhr schreibt. Spielen wir das durch. Zuerst: Wie heißt du?",
      nice: "Freut mich, <b>{n}</b>. Was für ein Unternehmen führst du?",
      gotbiz: "Alles klar — <b>{b}</b>. Und was brauchst du? Wähle eine Option:",
      need_wa: "einen WhatsApp-Bot für mein Unternehmen",
      need_auto: "Prozessautomatisierung",
      need_web: "eine Website oder individuelle Web-App",
      need_data: "Dashboards und Datenanalyse",
      then_next: "Perfekt. Das würde ich in der echten Welt als Nächstes tun: dein Kundenprofil anlegen, eine <b>kostenlose Analyse</b> buchen und ein maßgeschneidertes Angebot vorbereiten — alles bevor deine Mitbewerber überhaupt ihr Postfach öffnen.",
      profile: "<b>Dein Profil</b>\nName: {n}\nUnternehmen: {b}\nInteresse: {i}\n\nErfasst in 3 Nachrichten. Keine menschliche Arbeitszeit nötig.",
      keep_talking: "Genau das würden deine Kunden erleben. Willst du auf WhatsApp weitermachen?",
      chip_continue: "Auf WhatsApp fortfahren",
      chip_restart: "Demo neu starten",
      chip_open: "WhatsApp öffnen",
      svc_answer: "Hauptsächlich vier Dinge: <b>intelligente WhatsApp-Bots</b>, die sofort antworten und Angebote erstellen, <b>Prozessautomatisierung</b>, die deine Systeme verbindet, <b>Live-Dashboards</b> für deine Zahlen und <b>maßgeschneiderte Web-Apps</b>, die zu deiner Arbeitsweise passen.",
      want_try: "Alles wird in 6–8 Wochen geliefert, mit monatlichem Support. Willst du die Kundendemo ausprobieren?",
      chip_try: "Kundendemo ausprobieren",
      chip_human: "Mit einem Menschen sprechen",
      handoff: "Gern — ein Mensch aus dem Team übernimmt ab hier. Am schnellsten geht es über WhatsApp, oder du schreibst an <b>tr3sdigitalwave@proton.me</b>.",
      price_answer: "Jedes Projekt ist maßgeschneidert, die Preise auch — deshalb ist die Analyse kostenlos. Typische Lösungen starten bei wenigen hundert Euro im Monat, vollständig gewartet. Soll ich einen Termin vereinbaren?",
      chip_book: "Kostenlose Analyse buchen",
      hello_answer: "Hallo! Ich bin bereit — ich kann dich durch die Kundendemo führen oder dir erklären, was wir bauen.",
      chip_demo2: "Kundendemo ansehen",
      chip_explore: "Was könnt ihr bauen?",
      fallback: "Gute Frage — die beantwortet dir das Team am besten direkt. Ich kann dich mit einem Klick verbinden, oder wir erkunden die Demo weiter.",
      chip_team: "Mit dem Team sprechen",
      wa_msg: "Hallo Tr3sDigitalWave! Ich habe eure Bot-Demo ausprobiert. Ich bin {n}{b} und interessiere mich für {i}. Ich hätte gern eine kostenlose Beratung."
    },
    ca: {
      greet1: "Hola, soc el <b>Wave</b>, l'assistent de Tr3sDigitalWave. Aquest xat funciona amb el mateix bot que despleguem per als clients: captura perfils, respon preguntes i genera pressupostos. 24/7 i en qualsevol idioma.",
      greet2: "Vols veure com atendria una consulta real d'un client?",
      chip_yes: "Sí, mostra-m'ho",
      chip_what: "Què podeu construir?",
      ask_name: "Genial — imagina que ets un client nou escrivint a un negoci a les 11 de la nit. Simulem-ho. Primer: com et dius?",
      nice: "Encantat de conèixer-te, <b>{n}</b>. Quin tipus de negoci tens?",
      gotbiz: "Entesos — <b>{b}</b>. I què necessites? Tria una opció:",
      need_wa: "un bot de WhatsApp per al meu negoci",
      need_auto: "automatització de processos",
      need_web: "un lloc web o app a mida",
      need_data: "panells i anàlisi de dades",
      then_next: "Perfecte. Això és el que faria al món real: crear el teu perfil de client, reservar una <b>avaluació gratuïta</b> i preparar un pressupost a mida, tot abans que els teus competidors obrin la safata d'entrada.",
      profile: "<b>El teu perfil</b>\nNom: {n}\nNegoci: {b}\nInterès: {i}\n\nCapturat en 3 missatges. Zero temps humà invertit.",
      keep_talking: "Això és exactament el que experimentarien els teus clients. Vols seguir parlant per WhatsApp?",
      chip_continue: "Continuar a WhatsApp",
      chip_restart: "Reiniciar demo",
      chip_open: "Obrir WhatsApp",
      svc_answer: "Quatre coses, principalment: <b>bots intel·ligents de WhatsApp</b> que responen i pressuposten a l'instant, <b>automatització de processos</b> que connecta els teus sistemes, <b>panells en viu</b> per als teus números i <b>apps web a mida</b> construïdes sobre la teva forma de treballar.",
      want_try: "Tot es lliura en 6–8 setmanes amb suport mes a mes. Vols provar la demo de client?",
      chip_try: "Provar la demo de client",
      chip_human: "Parlar amb una persona",
      handoff: "És clar — una persona de l'equip prendrà el relleu. El més ràpid és WhatsApp, o pots escriure a <b>tr3sdigitalwave@proton.me</b>.",
      price_answer: "Cada projecte és a mida, i els preus també — per això l'avaluació és gratuïta. Les solucions típiques comencen en uns quants centenars al mes, amb manteniment inclòs. Vols que reservi una cita?",
      chip_book: "Reservar avaluació gratuïta",
      hello_answer: "Hola! Estic llest quan vulguis — puc guiar-te per la demo de client o explicar-te el que construïm.",
      chip_demo2: "Veure la demo de client",
      chip_explore: "Què podeu construir?",
      fallback: "Bona pregunta — aquesta millor l'respon l'equip directament. Puc connectar-te amb un toc, o seguir explorant la demo.",
      chip_team: "Parlar amb l'equip",
      wa_msg: "Hola Tr3sDigitalWave! He provat el vostre bot de demo. Soc {n}{b} i m'interessa {i}. M'agradaria una consulta gratuïta."
    },
    fr: {
      greet1: "Bonjour, je suis <b>Wave</b> — l'assistant de Tr3sDigitalWave. Cette conversation utilise le même bot que nous déployons pour nos clients : il capture des profils, répond aux questions et établit des devis. 24h/24, en toute langue.",
      greet2: "Voulez-vous voir comment je traite une vraie demande client ?",
      chip_yes: "Oui, montrez-moi",
      chip_what: "Que pouvez-vous construire ?",
      ask_name: "Très bien — imaginez que vous êtes un nouveau client qui écrit à une entreprise à 23h. Jouons la scène. D'abord : quel est votre prénom ?",
      nice: "Enchanté, <b>{n}</b>. Quel type d'entreprise dirigez-vous ?",
      gotbiz: "Bien noté — <b>{b}</b>. Et de quoi avez-vous besoin ? Choisissez une option :",
      need_wa: "un bot WhatsApp pour mon entreprise",
      need_auto: "l'automatisation de processus",
      need_web: "un site web ou une application sur mesure",
      need_data: "des tableaux de bord et de l'analyse de données",
      then_next: "Parfait. Voici ce que je ferais ensuite dans le monde réel : créer votre profil client, réserver un <b>audit gratuit</b> et préparer un devis sur mesure — avant même que vos concurrents ouvrent leur boîte mail.",
      profile: "<b>Votre profil</b>\nNom : {n}\nEntreprise : {b}\nIntérêt : {i}\n\nCapturé en 3 messages. Zéro temps humain dépensé.",
      keep_talking: "C'est exactement ce que vos clients vivraient. Voulez-vous continuer sur WhatsApp ?",
      chip_continue: "Continuer sur WhatsApp",
      chip_restart: "Recommencer la démo",
      chip_open: "Ouvrir WhatsApp",
      svc_answer: "Quatre choses, principalement : des <b>bots WhatsApp intelligents</b> qui répondent et chiffrent instantanément, <b>l'automatisation des processus</b> qui connecte vos systèmes, des <b>tableaux de bord en direct</b> pour vos chiffres et des <b>applications web sur mesure</b> adaptées à votre façon de travailler.",
      want_try: "Tout est livré en 6 à 8 semaines avec un support mensuel. Voulez-vous essayer la démo client ?",
      chip_try: "Essayer la démo client",
      chip_human: "Parler à un humain",
      handoff: "Bien sûr — un membre de l'équipe prend le relais. Le plus rapide est WhatsApp, ou vous pouvez écrire à <b>tr3sdigitalwave@proton.me</b>.",
      price_answer: "Chaque projet est sur mesure, et les tarifs aussi — c'est pourquoi l'audit est gratuit. Les solutions typiques démarrent à quelques centaines par mois, maintenance incluse. Voulez-vous que j'en organise un ?",
      chip_book: "Réserver un audit gratuit",
      hello_answer: "Bonjour ! Je suis prêt quand vous voulez — je peux vous guider dans la démo client ou vous expliquer ce que nous construisons.",
      chip_demo2: "Voir la démo client",
      chip_explore: "Que pouvez-vous construire ?",
      fallback: "Bonne question — celle-là, l'équipe y répondra mieux que moi. Je peux vous mettre en contact en un clic, ou continuer la démo.",
      chip_team: "Parler à l'équipe",
      wa_msg: "Bonjour Tr3sDigitalWave ! J'ai essayé votre bot de démo. Je suis {n}{b} et je m'intéresse à {i}. J'aimerais une consultation gratuite."
    }
  };

  /* ---------------- engine ---------------- */
  var current = 'en';
  var enSnapshot = null; // captured from DOM at init

  function captureEnglish() {
    enSnapshot = {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      enSnapshot[el.getAttribute('data-i18n')] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      enSnapshot[el.getAttribute('data-i18n-html')] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        if (p.length === 2) enSnapshot['@' + p[1]] = el.getAttribute(p[0]);
      });
    });
    enSnapshot['@meta.title'] = document.title;
  }

  function lookup(key) {
    if (current === 'en') return enSnapshot[key] !== undefined ? enSnapshot[key] : key;
    var parts = key.replace(/^@/, '').split('.');
    var node = STR;
    for (var i = 0; i < parts.length; i++) {
      node = node && node[parts[i]];
      if (!node) break;
    }
    if (node && typeof node === 'object' && node[current]) return node[current];
    return enSnapshot[key] !== undefined ? enSnapshot[key] : key;
  }

  function apply() {
    var year = new Date().getFullYear();
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = lookup(el.getAttribute('data-i18n'));
      el.textContent = v.replace('{year}', year);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = lookup(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        if (p.length === 2) el.setAttribute(p[0], lookup('@' + p[1]));
      });
    });
    document.documentElement.lang = current === 'zh' ? 'zh-CN' : current;
    document.title = lookup('@meta.title');
    var cur = document.getElementById('langCurrent');
    if (cur) cur.textContent = LANG_SHORT[current];
    var btn = document.getElementById('langBtn');
    if (btn) btn.setAttribute('aria-label', lookup('nav.lang_label'));
    document.querySelectorAll('.lang-menu button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === current);
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === current ? 'true' : 'false');
    });
  }

  function setLang(lang, skipEvent) {
    if (LANGS.indexOf(lang) === -1 || lang === current) return;
    current = lang;
    try { localStorage.setItem('tdw-lang', lang); } catch (e) {}
    apply();
    if (!skipEvent) {
      document.dispatchEvent(new CustomEvent('tdw:lang', { detail: { lang: lang } }));
    }
  }

  /* ---------------- language switcher UI ---------------- */
  function initSwitcher() {
    var wrapEl = document.getElementById('langSwitch');
    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    if (!wrapEl || !btn || !menu) return;

    function close() {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); close(); });
    });
    document.addEventListener('click', function (e) {
      if (!wrapEl.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) { close(); btn.focus(); }
    });
  }

  /* ---------------- boot ---------------- */
  captureEnglish();

  var saved = null;
  try { saved = localStorage.getItem('tdw-lang'); } catch (e) {}
  if (!saved) {
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    if (LANGS.indexOf(nav) !== -1) saved = nav;
  }

  window.TDW = {
    setLang: setLang,
    getLang: function () { return current; },
    t: function (key) { return lookup(key); },
    bot: function (key) {
      var b = BOT[current] || BOT.en;
      return b[key] !== undefined ? b[key] : BOT.en[key];
    }
  };

  apply();
  if (saved && saved !== 'en') setLang(saved, true);
  initSwitcher();
})();
