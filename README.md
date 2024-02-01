# DESAFIO: Objetos e Módulos JS
## Instrução
  Você deve criar um sistema para calcular o valor total de um pedido, considerando uma porcentagem
de desconto e o frete. O cálculo do valor total do pedido consiste em aplicar o desconto ao valor
básico do pedido, e adicionar o valor do frete. A regra para cálculo do frete é a seguinte:
| Valor básico do pedido (sem desconto)         | Frete     |
|----------------------------------------------|-----------|
| Abaixo de R$ 100.00                          | R$ 20.00  |
| De R$ 100.00 até R$ 200.00 (exclusive)       | R$ 12.00  |
| R$ 200.00 ou mais                            | Grátis    |

Sua solução deverá seguir as seguintes especificações:
Um pedido deve ser representado por um objeto conforme projeto abaixo:

![Captura de tela 2024-02-01 015513](https://github.com/joaovictorcmd/objetos-modulos-js/assets/107885917/32beb270-cf9f-4759-b30e-cd915d8f9874)

A lógica do cálculo do valor total do pedido deve ser implementada por serviços, cada um com sua
responsabilidade, conforme projeto abaixo:

![Captura de tela 2024-02-01 015420](https://github.com/joaovictorcmd/objetos-modulos-js/assets/107885917/149fff9a-938b-49ab-a6fe-73928f08eeb5)

- Serviço **OrderService**: responsável por operações referentes a pedidos.
- Serviço **ShippingService**: responsável por operações referentes a frete.

**Cada serviço deve ser implementado como um módulo JavaScript.**
