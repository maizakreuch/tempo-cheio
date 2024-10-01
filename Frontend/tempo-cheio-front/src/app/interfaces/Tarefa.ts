export interface Tarefa {
  id: number;
  titulo: string;
  valorHora: number;
  valorMinuto: number;
  valorSegundo: number;
  medidaUnidade: string;
  quantidade: number;
  favorito: boolean;
  tipo: string;  // Este é o campo que está faltando
  tipoTarefa: string;
  fonte: string;
  fonteDescricao?: string;  // Este pode ser opcional
}
