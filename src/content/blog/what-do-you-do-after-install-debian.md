---
title: "What to Do After Installing Debian 12"
description: "A basic guide to setting up and configuring Debian 12 after installation."
author: "Rogelio Interino"
date: 2024-09-03
---

# Debian 12 "Bookworm"

> The Debian project released its final version of Debian 12 on **June 10, 2023**. After two years of development, this release is powered by the long-term supported **Linux Kernel 6.1 LTS**.

![Desktop-Debian](https://www.debugpoint.com/wp-content/uploads/2023/03/Default-wallpaper.jpg "Debian 12 Default Desktop")

---

## Steps After Installation

### **1. Add Repositories to `sources.list`**

Edit the `/etc/apt/sources.list` file using your preferred text editor (e.g., `nano` or `vim`) and add the following lines:

```plaintext
# Official Repositories
deb http://deb.debian.org/debian/ bookworm main
deb-src http://deb.debian.org/debian/ bookworm main

deb http://security.debian.org/debian-security bookworm-security main
deb-src http://security.debian.org/debian-security bookworm-security main

deb http://deb.debian.org/debian/ bookworm-updates main
deb-src http://deb.debian.org/debian/ bookworm-updates main

# Security Updates
deb http://deb.debian.org/debian-security/ bookworm-security main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian-security/ bookworm-security main contrib non-free non-free-firmware

# Multimedia Repositories
deb https://www.deb-multimedia.org bookworm main non-free
```

#### **Install Multimedia Keyring**

Before updating, run the following commands to ensure secure repository handling:

```bash
apt-get update -o Acquire::AllowInsecureRepositories=true
apt-get install deb-multimedia-keyring
```

---

### **2. Update the System**

Keeping your system up to date is essential. Run this command to update and upgrade all packages:

```bash
apt update && apt upgrade -y
```

---

### **3. Install Basic Packages**

Install essential tools and packages for development and system management:

```bash
apt-get install linux-headers-$(uname -r | sed 's/[^-]*-[^-]*-//') build-essential make automake cmake autoconf git aptitude synaptic curl apt-transport-https qapt-deb-installer
```

#### **Update System PATH**

To ensure proper functionality of `dpkg`, update your system's PATH variable. Replace `**user**` with your username:

```bash
export PATH=$PATH:/usr/local/sbin:/usr/sbin:/sbin
echo 'export PATH=$PATH:/usr/local/sbin:/usr/sbin:/sbin' >> /home/**user**/.bashrc
```

---

### **4. Install Firmware**

During installation, Debian may display a list of missing firmware. You can:

1. Search and install these firmware packages via **Synaptic Package Manager**.
2. Identify missing firmware using the following command:

```bash
dmesg | grep firmware
```

Install the required firmware through Synaptic or the terminal.

---

### **5. Install Media Codecs**

For multimedia support, install the following codecs:

```bash
apt install w64codecs w32codecs libdvdcss2 gstreamer1.0-libav
```

---

## **Useful Links**

- **Spanish Version**: [Guía Básica: Después de Instalar Debian 12 "Bookworm"](https://pulpolibre.wordpress.com/2023/11/15/guia-basica-despues-de-instalar-debian-12-bookworm/)

---

Follow these steps to set up your Debian 12 system for optimal performance and usability. Happy Linuxing!

