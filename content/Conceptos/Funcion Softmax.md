---
title: Función Softmax
tags:
  - matemáticas
  - ia
  - deep-learning
---

# Función Softmax

Es una función matemática fundamental en el Deep Learning, utilizada en la capa final de los [[LLMs]] y redes neuronales de clasificación.

Su trabajo es tomar un vector de valores numéricos crudos (llamados **logits**, que pueden ser negativos, positivos o infinitos) y "aplastarlos" para convertirlos en una distribución de **probabilidad** normalizada.



Esto garantiza dos cosas:
1.  Todos los valores resultantes están entre 0 y 1.
2.  La suma de todos los valores es exactamente 1 (100%).

### La Fórmula con Temperatura

En la generación de texto, no usamos la Softmax estándar, sino una versión modificada por un hiperparámetro de **[[Temperatura (AI)|temperatura]]** ($T$):

$$
P(x_i) = \frac{e^{z_i / T}}{\sum_{j} e^{z_j / T}}
$$

Donde:
* $z_i$: Es el logit (el puntaje crudo) del token candidato.
* $T$: Es el factor de escala.

### Conexión con el Sweetspot
Aquí es donde ocurre la magia de la **[[Teoría del Sweetspot]]**:

* **Si $T < 1$ (Frío):** Los exponentes se vuelven enormes. La diferencia entre el token más probable y el resto se exagera. El modelo se vuelve **determinista** (Zona Verde).
* **Si $T > 1$ (Caliente):** Los exponentes se reducen. Las diferencias se suavizan y los tokens "perdedores" ganan probabilidad de ser elegidos. Aumenta la **[[Entropía de Shannon]]** y el riesgo de alucinación (Zona Roja).
