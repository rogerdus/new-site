---
title: "Lo que aprendí de Eugenia Bahit en un fanzine de Debian de 2012 (y qué sigue vigente en 2026)"
date: "2026-08-14"
author: "Rogelio Interino"
tags: ["debian", "linux", "opinión", "programación"]
description: "Repaso dos artículos de Eugenia Bahit publicados en DebianHackers Elementals — sobre hardware y lenguajes de programación — y evalúo qué sigue siendo válido hoy en Debian y qué ya no."
---

# Lo que aprendí de Eugenia Bahit en un fanzine de Debian de 2012 (y qué sigue vigente en 2026)

Cuando era más joven, uno de los primeros textos técnicos que leí en español sobre Linux salió de *DebianHackers Elementals*, un fanzine comunitario publicado en 2014 por el sitio DebianHackers.net. Ahí escribió Eugenia Bahit, entonces referente de la comunidad GLAMP hispanohablante, dos artículos que me marcaron: uno sobre cómo entender el hardware de tu computadora antes de programar, y otro sobre cómo clasificar los lenguajes de programación.

Más de una década después, ¿qué tanto de eso sigue siendo cierto en un Debian actual?

## "Para programar, primero entiende a tu ordenador"

La tesis central del artículo es simple y sigue siendo, para mí, un consejo subestimado: no puedes escribir buen código sin entender, aunque sea a grandes rasgos, qué hace el hardware con las instrucciones que le das. El artículo usa el comando `lshw` para "destripar" la computadora — listar CPU, memoria RAM, caché, dispositivos de entrada/salida/almacenamiento — y entender el rol de cada componente.

**¿Sigue vigente?** Casi todo, sí.

- `lshw` sigue funcionando exactamente igual en Debian 12/13 hoy. Sigue siendo software libre, sigue en los repositorios, y la sintaxis (`lshw -short`, `lshw -C memory`, `lshw -C bus`) no cambió.
- La clasificación de dispositivos (entrada, salida, comunicación, almacenamiento, cómputo) es un modelo conceptual que no envejece — sigue siendo la forma correcta de pensar la arquitectura de una máquina.
- Lo único que hoy agregaría: además de `lshw`, vale la pena mencionar `lscpu` (información más legible de la CPU), `lsblk` (para discos y particiones, más claro que buscarlo en `lshw`), y `inxi` (un resumen amigable pensado para compartir en foros de soporte). No reemplazan a `lshw`, lo complementan.
- Un matiz que se agregaría hoy: con el auge de contenedores y máquinas virtuales, "entender tu computadora" ahora también implica entender qué hardware ves realmente (el del host) versus qué te expone un contenedor o VM — un `lshw` dentro de un contenedor Docker no te da el panorama completo del hardware físico.

En resumen: el consejo de fondo — entender el hardware antes de programar sobre él — envejeció mejor que casi cualquier otro tip técnico específico que pueda dar hoy. Sigue siendo cierto.

## "Entendiendo los lenguajes de programación"

Este artículo clasifica los lenguajes según su nivel de abstracción (bajo, medio, alto nivel) y según su forma de ejecución (compilados vs interpretados), con ejemplos en ensamblador, C, Pascal, Python, PHP y Lisp.

**¿Sigue vigente?** El marco conceptual sí, algunos matices ya no alcanzan a describir el panorama actual.

- La distinción bajo nivel / alto nivel sigue siendo válida y es la que cualquier curso de ciencias de la computación sigue enseñando hoy.
- La dicotomía estricta "compilado vs interpretado" ya no describe bien el panorama 2026. Lenguajes como Python usan un intérprete que en realidad compila a bytecode antes de ejecutar (igual que hacía Java entonces, pero el artículo no lo menciona así de claro). Y hoy la frontera es todavía más borrosa: JavaScript se compila JIT en tiempo real, y algo como WebAssembly no encaja limpio en ninguna de las dos categorías del artículo — es un formato de bajo nivel pensado para ejecutarse en el navegador o fuera de él, compilado desde lenguajes de alto nivel.
- El artículo no podía anticipar (2012) el auge de lenguajes con enfoque en seguridad de memoria en tiempo de compilación, como Rust — que complica la clasificación clásica de "nivel medio" que el propio artículo ya cuestionaba para C.
- La lista de "lenguajes populares" envejeció como era de esperarse: para 2012 tenía sentido no mencionar Rust, Go o TypeScript porque apenas estaban naciendo o no existían. Hoy cualquier versión actualizada del artículo los incluiría.

En resumen: la estructura conceptual para entender qué es un lenguaje de programación sigue siendo un buen punto de partida para alguien que empieza, pero la ejecución real de los lenguajes modernos (JIT, bytecode, WASM) ya no cabe limpiamente en el esquema binario "compilado o interpretado" que proponía el artículo.

## Lo que me llevo

Los dos artículos de Bahit comparten algo que hoy valoro más que en su momento: no enseñan trucos de comandos que se vuelven obsoletos en un año, enseñan **marcos para pensar** — cómo mirar el hardware, cómo clasificar un lenguaje. Ese tipo de contenido envejece mejor que cualquier tutorial de "cómo instalar X en Debian Y", porque el marco sigue siendo útil aunque los detalles técnicos específicos cambien alrededor.

Si empezaste con Linux leyendo algo parecido en su momento, cuéntame qué otros textos "viejos" siguen siendo tu referencia.