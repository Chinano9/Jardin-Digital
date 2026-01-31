---
title: Perplejidad
tags:
  - métricas
  - nlp
  - estadística
  - ia
---

En el Procesamiento de Lenguaje Natural (NLP), la perplejidad es la métrica estándar para evaluar qué tan bueno es un modelo de lenguaje prediciendo una secuencia de texto.

Intuitivamente, mide el nivel de **sorpresa** o confusión del modelo al ver el siguiente token.
* **Perplejidad Baja:** El modelo no está sorprendido. Esperaba esa palabra con alta probabilidad.
* **Perplejidad Alta:** El modelo está muy confundido. La palabra siguiente era inesperada o hay demasiadas opciones equiprobables.

### Relación con la Entropía
Matemáticamente, la perplejidad es simplemente la exponenciación de la **[[Entropía de Shannon]]**:

$$
PP(X) = 2^{H(X)}
$$

Si la entropía ($H$) es el número promedio de "bits" necesarios para codificar la información, la perplejidad es el número promedio de "opciones" entre las que el modelo duda.

### En la Teoría del Sweetspot
Dentro del marco de la **[[Teoría del Sweetspot]]**:
* **Zona Verde:** Perplejidad mínima ($PP \approx 1$). El modelo actúa como un loro, repitiendo lo más obvio sin dudar.
* **Zona Roja:** Perplejidad explosiva. El modelo se enfrenta a tantas opciones posibles que su predicción se vuelve ruido aleatorio.
