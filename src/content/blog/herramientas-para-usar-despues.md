---
title: "5 herramientas de terminal que necesitas después de instalar Debian 12"
date: 2026-07-24
author: "Rogelio Interino"
tags: ["debian", "terminal", "linux", "productividad"]
description: "Tu instalación de Debian 12 ya está lista. Ahora toca equiparla con herramientas de terminal que te van a ahorrar horas de trabajo."
---

# 5 herramientas de terminal que necesitas después de instalar Debian 12

En el post anterior vimos qué hacer justo después de instalar Debian 12: actualizar el sistema, activar los repositorios *non-free*, configurar el firewall básico. Ese es el trabajo de "dejar la casa habitable". Ahora toca amueblarla.

Estas cinco herramientas son las que instalo sin pensarlo dos veces en cualquier máquina nueva con Debian.

## 1. `bat` — un `cat` con esteroides

`bat` hace lo mismo que `cat`, pero con resaltado de sintaxis y números de línea. Si trabajas con configs, logs o código directo en la terminal, la diferencia se nota al instante.

```bash
sudo apt install bat
# En Debian el binario se instala como batcat
alias cat='batcat'
```

Agrega ese alias a tu `.bashrc` o `.zshrc` y ya no vuelves a `cat` normal.

## 2. `fzf` — buscador difuso para todo

`fzf` es un buscador interactivo que se integra con el historial de comandos, la búsqueda de archivos y prácticamente cualquier lista de texto. Presiona `Ctrl+R` después de instalarlo y busca en tu historial escribiendo fragmentos, no comandos exactos.

```bash
sudo apt install fzf
```

Vale la pena revisar los atajos que trae: `Ctrl+T` para insertar rutas de archivo, `Alt+C` para saltar de directorio.

## 3. `ripgrep` (`rg`) — grep, pero rápido de verdad

Si buscas texto dentro de proyectos grandes, `grep -r` se siente lento comparado con `ripgrep`. Respeta `.gitignore` por defecto, así que no pierdes tiempo buscando dentro de `node_modules` o `.git`.

```bash
sudo apt install ripgrep
rg "TODO" --type py
```

## 4. `tldr` — man pages que sí lees

Las páginas de manual son completas pero poco prácticas cuando solo quieres recordar la sintaxis de un comando. `tldr` da ejemplos directos, sin rodeos.

```bash
sudo apt install tldr
tldr tar
```

## 5. `zoxide` — un `cd` que aprende tus rutas

`zoxide` recuerda los directorios que visitas con frecuencia y te deja saltar a ellos con un fragmento del nombre, sin escribir la ruta completa.

```bash
sudo apt install zoxide
echo 'eval "$(zoxide init bash)"' >> ~/.bashrc
```

Después de usarlo unos días, `z proyecto` te lleva directo a `~/dev/clientes/proyecto-2026` sin importar dónde estés parado.

## Cierre

Ninguna de estas herramientas es indispensable el primer día, pero todas pagan su instalación en la primera semana de uso real. Si tuviera que elegir solo dos para empezar, serían `fzf` y `ripgrep` — son las que más cambian el flujo de trabajo diario en terminal.

¿Usas alguna otra herramienta que no pueda faltar en tu setup? Escríbeme, me interesa conocer qué usa la comunidad.