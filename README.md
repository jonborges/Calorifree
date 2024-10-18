# MEU PROJETO DE EXTENSÃO ESTÁCIO : PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS EM ANDROID 

# Calorifree 

### Funcionalidades:
Lista com alimentos e suas calorias, lista de exercícios e quanto queimam de calorias e resumo que equilibra ambos. Navegação com TAB inferior.

### Lógica do código:
* Págima Welcome inicia a aplicação, mostra o nome do App e um botão COMEÇAR, anteriormente não tinha um botão e só aparecia por 3 segundos, altere se desejar.
* É perguntado Altura, Peso e Objetivo do usuário, tudo que é digitado é colocado passado para um Context, que é redefinido sempre que a aplicação é atualizada, os dados são utilizados na Page RESUME.
* Após completar os dados, é mostrada a page AddFood, com a lista TACO da maioria dos alimentos e suas calorias (Cerca de 340 alimentos).
* Página AddExercise mostra exercícios que podem ser adicionados para queimar calorias, o usuário que marcar pode realizar se quiser ou comparar exercícios com alimentação e balanceamento.
* Página Resume mostra o total de calorias e queima de calorias, além de tratar calorias diárias recomendadas pelos dados fornecidos e objetivo.


###  COMO UTILIZAR: 

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **Android Studio**: Para emular o app, podendo utilizar também Expo web ou Expo go

#### Faça o Download do Projeto ou copie o código:
  Descompacte o arquivo na pasta desejada, sinta-se à vontade.

#### Abra o Arquivo com VsCode, instale dependências e depois:
  1 No terminal digite o sequinte código :

  2 Execute o comando npx expo start, para iniciar o Expo
  
  3 Aperte a tecla W para visualizar na Web ou use Expo Go/ Android Studio/ Etc
  
  4 Altere a visualização para ~Celular~ com o ~Inspecionar~

##  Dados de alimentos:
  Esse projeto utilizou a Tabela Brasileira de Composicao de Alimentos (https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf)
  Arquivo Json criado e reduzido para mostrar somente as calorias. 

##  Possíveis incrementações:
  Esse é meu primeiro app em React Native, por falta de conhecimento, não consegui filtrar alimentos por intolerãncias, restrições e estilos de vida, mas isso seria uma ótima atribuição futura. Também seria interessante a adição de vídeos demonstrativos de todos os exercícios, além de fotos de cada um dos alimentos, que não foi possível devido ao tempo de entrega.

##  Tecnologias usadas:

  * ![React Native](https://img.shields.io/badge/react_native-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
  * ![Expo](https://img.shields.io/badge/expo-1B1F23.svg?style=for-the-badge&logo=expo&logoColor=white)
  * ![TypeScript](https://img.shields.io/badge/typescript-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  * ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  * ![TACO Database](https://img.shields.io/badge/Database-TACO-orange?style=for-the-badge)


## Autor
  - <a href='https://github.com/jonborges'>Jon Borges</a>
