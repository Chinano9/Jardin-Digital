---
title: Entropía de Shannon
tags:
  - matemáticas
  - teoría-de-la-información
  - concepto-clave
---


Propuesta por Claude Shannon en 1948, es la medida matemática de la **incertidumbre** o "sorpresa" en una fuente de información.

En el contexto de los [[LLMs]], la entropía mide qué tan "seguro" está el modelo sobre cuál debe ser el siguiente token.
* **Baja entropía:** El modelo está casi 100% seguro (predicción obvia).
* **Alta entropía:** Hay muchas opciones posibles con probabilidades similares (incertidumbre/creatividad).

$$H(X) = - \sum P(x) \log P(x)$$
