---
title: Temperatura (AI)
tags:
  - ia
  - hiperparámetros
---


En inteligencia artificial generativa, la temperatura ($T$) es un hiperparámetro que regula la aleatoriedad en el proceso de muestreo.

Afecta directamente a la [[Función Softmax]]:
* **$T < 1$ (Frío):** Exagera las diferencias de probabilidad. El modelo se vuelve conservador, repetitivo y determinista.
* **$T > 1$ (Caliente):** Suaviza las diferencias. Da oportunidad a palabras menos probables, aumentando la "creatividad" pero también el riesgo de [[Alucinaciones en IA]].
