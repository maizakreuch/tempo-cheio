import { Tarefa } from './Tarefa';       
// import { TipoTarefa } from './TipoTarefa'; 


export interface TipoTarefa {
  id: number;
  nome: string;
  tarefa: Tarefa;       // Usa a interface Tarefa
  tipoTarefa: TipoTarefa; // Usa a interface TipoTarefa
}
