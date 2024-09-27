'use server'

import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function runPythonScript(csvFilename: string, startingRow: string) {
  console.log(`Starting Python script execution for file: ${csvFilename}, starting at row: ${startingRow}`)

  try {
    const command = `ssh root@45.55.50.247 "cd serveryoushorts && source venv/bin/activate && nohup python3 mainsheets.py ${csvFilename} ${startingRow} > output.log 2>&1 &"`
    
    console.log('Executing command:', command)

    const { stdout, stderr } = await execAsync(command)
    
    if (stderr) {
      console.error('Script execution error:', stderr)
      return { error: stderr, details: 'Error occurred during script execution' }
    }
    
    console.log('Script executed successfully')
    return { message: 'Script executed successfully', output: stdout }
  } catch (error) {
    console.error('Error executing script:', error)
    
    if (error instanceof Error) {
      return { 
        error: 'Internal server error', 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }
    } else {
      return { 
        error: 'Internal server error', 
        details: 'An unexpected error occurred'
      }
    }
  }
}