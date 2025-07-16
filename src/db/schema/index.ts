// Barrel file (arquivo para exportar todos os outros arquivos da pasta)
import { questions } from './questions.ts'
import { rooms } from './rooms.ts'

export const schema = {
  rooms,
  questions,
}
