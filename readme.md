

(Projeto de Ordenação e Análise de Dados Populacionais)

VISÃO DO CODIGO.

Este programa C + + permite a análise de dados populacionais por meio da ordenação, 
aplicando algoritmos específicos com base no tamanho do conjunto de dados. 
Os algoritmos utilizados são Insertion Sort, Bubble Sort, e Selection Sort. 
A interface de linha de comando é simples e interativa, guiando o usuário desde a entrada de dados até a exibição dos resultados.

O Que o programa faz (objetivo).

O objetivo do programa é permitir que o usuário insira uma lista de dados populacionais e visualize a aplicação de três algoritmos de ordenação: 
Insertion Sort, Bubble Sort e Selection Sort. Cada algoritmo é selecionado automaticamente de acordo com o número de elementos na lista, facilitando
a análise com o método mais adequado. Ao final, o programa exibe a lista original, a lista ordenada e o algoritmo utilizado para o processamento.

Os que tratamos no codigo Erros.

Valores Negativos:
Quando o usuário insere um valor negativo, o programa exibe uma mensagem de erro e solicita uma nova entrada.

Entrada de Dados Inválida: 
Qualquer dado que não atenda ao critério de número positivo impede o usuário de prosseguir até que o valor seja corrigido.

Descrição do Programa e Funcionamento

Ao iniciar, o programa solicita que o usuário insira a quantidade de elementos a serem ordenados. Em seguida, o usuário é instruído a fornecer os valores individuais da lista. Para garantir uma entrada de dados correta, o programa verifica se os valores são válidos, não permitindo valores negativos. Se algum valor inválido for detectado, o programa solicita ao usuário que insira um valor correto antes de continuar.
Com a lista de dados inserida e validada, o programa escolhe o algoritmo de ordenação automaticamente, de acordo com as condições a seguir:

1 a 30 elementos: O algoritmo Insertion Sort é utilizado.
31 a 40 elementos: O algoritmo Bubble Sort é aplicado.
Mais de 40 elementos: O programa seleciona o algoritmo Selection Sort.

Descrição dos Algoritmos Utilizados.
Insertion Sort: Aplicado a listas com até 30 elementos, é eficiente para pequenos conjuntos de dados, 
onde cada elemento é colocado em sua posição correta de maneira incremental. Esse algoritmo é particularmente útil para listas quase ordenadas.

Bubble Sort: Ideal para listas de tamanho médio (31 a 40 elementos), onde o algoritmo passa repetidamente pela lista, 
comparando e trocando valores adjacentes para posicioná-los na ordem correta. Embora seja menos eficiente em listas maiores, ele é simples e prático para um número moderado de elementos.

Selection Sort: Usado para listas com mais de 40 elementos. 
Esse algoritmo seleciona o menor elemento em cada iteração e o coloca em sua posição correta. Ele é adequado para listas maiores, pois organiza a lista gradualmente e de forma eficaz.