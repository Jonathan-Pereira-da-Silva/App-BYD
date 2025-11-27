// src/navigation/tiposProdutosStack.ts

// Defina a estrutura de um produto (baseado em como você usa em ListaProdutos e EditarProduto)
export type ProdutoType = {
  id: number;
  nome: string;
  valor_unit: number;
  imagem: string;
  // Adicione outros campos se existirem na sua tabela 'produtos'
};

// Mapeamento que associa o nome da rota aos parâmetros que ela espera.
// Se a rota não espera parâmetros, use 'undefined'.
export type ProdutosStackParamList = {
  ListaProdutos: undefined; // Não espera parâmetros
  AdicionarProduto: undefined; // Não espera parâmetros
  // A rota EditarProduto espera um objeto com a chave 'produto' do tipo ProdutoType
  EditarProduto: { produto: ProdutoType }; 
};