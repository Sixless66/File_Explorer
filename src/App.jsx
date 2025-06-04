import React from 'react'
import { explorer } from './Data'
import FileExplorer from './FileExplorer/FileExplorer'

const App = () => {

  return (
    <div>
        <FileExplorer data={explorer} />    
    </div>
  )
}

export default App
