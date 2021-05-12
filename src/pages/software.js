import React, {useEffect, useState} from 'react'
import Project from '../components/project'
import '../styles/software.css'

const Software = () => {

  const [data, saveData] = useState ([])
  const [order, saveOrder] = useState('');

  const getData = async () => {
      const url='https://api.github.com/users/jesusrafaell/repos'
      try{
        await fetch(url)
          .then(res => res.json())
          .then(repos => {
            repos.map(pro => pro.description && (pro.info = pro.description.split("&")))
            saveData(repos)
          })
      }catch(e){
        console.log(e)
      }
    }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data === null])

  const sortByName = () => {
    if(order === '' || order !== 'dn'){
      const sortData = [...data].sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
      saveData(sortData)
      saveOrder('dn')
    }else{
      const sortData = [...data].sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
      saveData(sortData)
      saveOrder('in')
    }
  }

  const sortByAbout= () => {
    if(order === '' || order !== 'da'){
      const sortData = [...data].sort((a,b) => a.info[0].toLowerCase() > b.info[0].toLowerCase() ? 1 : -1)
      saveData(sortData)
      saveOrder('da')
    }else{
      const sortData = [...data].sort((a,b) => a.info[0].toLowerCase() < b.info[0].toLowerCase() ? 1 : -1)
      saveData(sortData)
      saveOrder('ia')
    }
  }

  const sortByLanguage = () => {
    if(order === '' || order !== 'dl'){
      const sortData = [...data].sort((a,b) => a.language > b.language ? 1 : -1)
      saveData(sortData)
      saveOrder('dl')
    }else{
      const sortData = [...data].sort((a,b) => a.language < b.language ? 1 : -1)
      saveData(sortData)
      saveOrder('il')
    }
  }

  const sortByDate = () => {
    if(order === '' || order !== 'dc'){
      const sortData = [...data].sort((a,b) => b.created_at > a.created_at ? 1 : -1)
      saveData(sortData)
      saveOrder('dc')
    }else{
      const sortData = [...data].sort((a,b) => b.created_at < a.created_at ? 1 : -1)
      saveData(sortData)
      saveOrder('ic')
    }
  }

  const sortByDeploy = () => {
    if(order === '' || order !== 'dd'){
      const sortData = [...data].sort((a,b) => a.info[1] ? 1 : -1)
      saveData(sortData)
      saveOrder('dd')
    }else{
      const sortData = [...data].sort((a,b) => b.info[1] ? 1 : -1)
      saveData(sortData)
      saveOrder('id')
    }
  }

  const classOn = (a) => {
    if(order[0] === 'd' ){
      if(order[1] === a){
        return ('orderDe')
      }
    }else if(order[0] === 'i'){
      if(order[1] === a){
        return ('orderIn')
      }
    }
  }

  return(
      <div className="software-bg">
        <div className="sofware-table">
          <h3>Repository</h3>
          {data.length > 0 ? (
            <table className="table-scroll small-first-col">
              <thead>
                <tr>
                  <th className={classOn('n')} onClick={sortByName} scope="col">Title</th>
                  <th className={classOn('a')} onClick={sortByAbout} scope="col">About</th>
                  <th className={classOn('l')} onClick={sortByLanguage} scope="col">Language</th>
                  <th className={classOn('c')} onClick={sortByDate} scope="col">Create</th>
                  <th className={classOn('d')} onClick={sortByDeploy} scope="col">Deploy</th>
                </tr>
              </thead>
              <tbody className="body-half-screen"> 
                {data.map(pro => (
                    <Project
                      key={pro.id}
                      project={pro}
                    />
                  ))}
              </tbody>
            </table>
          ):(
            <div className="spinner">
              <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>
            </div>
            )}
        </div>
      </div>
  )
}

export default Software
