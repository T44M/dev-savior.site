import { linuxCommands } from './linux'
import { dockerCommands } from './docker'
import { sqlCommands } from './sql'
import { terraformCommands } from './terraform'
import { splunkCommands } from './splunk'

export const allCommands = [
  ...linuxCommands,
  ...dockerCommands,
  ...sqlCommands,
  ...terraformCommands,
  ...splunkCommands
]
