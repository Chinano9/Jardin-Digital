---
title: Alucinaciones en IA
tags:
  - ia
  - seguridad
  - epistemología
  - fallo
---

En el contexto de los [[LLMs]], una alucinación ocurre cuando un modelo genera información que es **gramaticalmente correcta y suena plausible, pero es factualmente falsa** o no tiene sentido lógico.

A diferencia de una mentira humana (que implica intención de engañar), la alucinación es un subproducto de la naturaleza probabilística del modelo. El LLM no "sabe" hechos; solo calcula la probabilidad de que una palabra siga a otra. Cuando no tiene datos suficientes, rellena los vacíos con ruido estadístico convincente.

## Tipos comunes:
* **Invención de hechos:** Citar libros que no existen, casos legales falsos o biografías inventadas.
* **Falsedad lógica:** Contradicciones dentro del mismo razonamiento matemático o silogismo.
* **[[Sycophancy]] (Adulación):** Inventar datos para darle la razón al usuario (como la "Luz Morada").

En la **[[Teoría del Sweetspot]]**, las alucinaciones se asocian principalmente con la **Zona Roja** (Alta Entropía / $T \to \infty$), donde el "estrés" probabilístico es tan alto que el modelo pierde la coherencia semántica en favor de la aleatoriedad pura.
