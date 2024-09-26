// app/actions.ts
'use server'

import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function runPythonScript(csvFilename: string, startingRow: string) {
  try {
    const command = `ssh root@45.55.50.247 "cd serveryoushorts && python3 mainsheets.py ${csvFilename} ${startingRow}"`
    
    const { stdout, stderr } = await execAsync(command)
    
    if (stderr) {
      console.error('Script execution error:', stderr)
      return { error: stderr }
    }
    
    return { message: 'Script executed successfully', output: stdout }
  } catch (error) {
    console.error('Error:', error)
    return { error: 'Internal server error' }
  }
}