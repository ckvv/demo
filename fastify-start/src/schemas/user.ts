import type { FromSchema, JSONSchema } from 'json-schema-to-ts'

export const GetSchema = {
  type: 'object',
  properties: {
    userId: { type: 'string', minLength: 4, examples: ['1234'] },
  },
  required: ['userId'],
} as const satisfies JSONSchema

export type Get = FromSchema<typeof GetSchema>

export const QuerySchema = {
  type: 'object',
  properties: {
    username: { type: 'string', minLength: 4, examples: ['1234'] },
    password: { type: 'string', minLength: 4, examples: ['1234'] },
  },
  required: ['username', 'password'],
} as const satisfies JSONSchema

export type Query = FromSchema<typeof QuerySchema>
