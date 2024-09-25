import { Tarefa } from "./Tarefa";

export interface Historico{

    id: Number;
    data: Date;
    usuario: string;
    tarefa: Tarefa;
    fonte: string;
}