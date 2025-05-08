---
title: AMR con recogida de datos en streaming
author: Jon Ander Maiz
description: "Robótica y Big Data: Somorrostro Innova con el MIR250"
image: "/projects/MEC_2023/AMR_con_Recogida_de_Datos_en_Streaming/banner.webp"
---

# Proyecto de Innovación: "AMR con Recogida de Datos en Streaming" - Arquitectura de Datos para Robots Móviles Autónomos

El proyecto "AMR con Recogida de Datos en Streaming", desarrollado en colaboración por el IES Al-Ándalus, CF Somorrostro y ARM Robotics, se enfoca en la **implementación de una infraestructura robusta para la captura, procesamiento, almacenamiento y visualización de datos generados en tiempo real por Robots Móviles Autónomos (AMR)**, concretamente el modelo MIR250. El objetivo es construir un sistema escalable que permita analizar la operativa del robot y sentar las bases para futuras aplicaciones de inteligencia y optimización.

El núcleo de este proyecto, desde la perspectiva de Big Data, radica en construir un pipeline de datos completo y eficiente –desde la fuente (AMR) hasta la visualización y potencial análisis avanzado– que permita extraer valor operativo y estratégico de la información generada por los robots móviles autónomos.

Los desarrollos técnicos clave en el ámbito del Big Data y el flujo de datos son:

1. **Adquisición de Datos del AMR:**
   * Se interactúa con la **API del robot MIR250** para extraer una amplia gama de datos operativos, incluyendo (pero no limitado a): posición, estado, velocidad, nivel de batería, misiones activas y datos de registros PLC internos.
   * Se ha priorizado la capacidad de obtener estos datos de forma continua y en tiempo real para reflejar fielmente el estado y comportamiento del robot.

2. **Orquestación y Procesamiento del Flujo de Datos:**
   * Se han implementado dos enfoques paralelos para la gestión del flujo de datos, permitiendo evaluar distintas soluciones y su adaptabilidad:
      * **Node-RED:** Utilizado por su flexibilidad y enfoque visual, ideal para prototipado rápido y entornos didácticos con un número limitado de robots. Se han diseñado flujos específicos para recibir los datos de la API del MIR250, realizar transformaciones iniciales (parseo, enriquecimiento) y enviarlos al sistema de almacenamiento.
      * **Apache Kafka:** Implementado como una solución más robusta y escalable, pensada para entornos con múltiples AMRs o un alto volumen de datos. Kafka actúa como un bus de mensajería distribuido que desacopla los productores de datos (el AMR a través de un conector o script) de los consumidores (sistemas de almacenamiento, análisis, etc.), garantizando la durabilidad y el procesamiento en streaming.

3. **Almacenamiento de Datos en Series Temporales:**
   * Se ha seleccionado **InfluxDB** como la base de datos principal para el almacenamiento de los datos del AMR. Esta elección se basa en su alta eficiencia para manejar datos de series temporales, que son característicos de la monitorización de maquinaria y sistemas en tiempo real.
   * Los datos se estructuran en InfluxDB considerando timestamps precisos, tags para metadatos clave que faciliten la segmentación y filtrado (ej. ID del robot, tipo de misión, zona de operación), y fields para las métricas numéricas y de estado.

4. **Visualización y Monitorización en Tiempo Real:**
   * **Grafana** es la herramienta elegida para la visualización de los datos almacenados en InfluxDB.
   * Se están desarrollando **dashboards personalizados** que ofrecen una visión integral del estado y rendimiento del MIR250. Estos dashboards incluyen:
      * Misiones realizadas, tiempos de misiones, misiones finalizadas correctamente o abortadas…
      * Indicadores de estado como la batería.
      * Potencialmente, análisis de patrones de movimiento y eficiencia de misiones.

5. **Consideraciones de Arquitectura y Escalabilidad:**
   * Todo el stack tecnológico seleccionado (InfluxDB, Node-RED, Apache Kafka, Grafana) es **open source**, lo que reduce costes de licencia y fomenta su adopción y modificación.
   * La arquitectura está diseñada pensando en la **escalabilidad futura**, especialmente con la inclusión de Apache Kafka, que puede manejar un incremento significativo en el número de robots o la frecuencia de los datos.


<figure class="image-with-caption">
  <img src="/projects/MEC_2023/AMR_con_Recogida_de_Datos_en_Streaming/media/image1.jpg" alt="MIR250 y el profesor Jon Ander Maiz">
  <figcaption>MIR250 y el profesor Jon Ander Maiz</figcaption>
</figure>
