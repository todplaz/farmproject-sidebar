import React, {useEffect, useState} from 'react';
import CreationTache from '../modals/CreationTache';
import Card from './Card'

const Taches = () => {
    const [modal, setModal] = useState(false);
    const [listeTaches, setListeTaches] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem('listeTaches')
        
        if(arr) {
            let obj = JSON.parse(arr)
            setListeTaches(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = listeTaches
        tempList.splice(index, 1)
        localStorage.setItem("listeTaches", JSON.stringify(tempList))
        setListeTaches(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = listeTaches
        tempList[index] = obj
        localStorage.setItem("listeTaches", JSON.stringify(tempList))
        setListeTaches(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTache = (taskObj) => {
        let tempList = listeTaches
        tempList.push(taskObj)
        localStorage.setItem('listeTaches', JSON.stringify(tempList))
        setListeTaches(tempList)
        setModal(false)
    }

    return(
        <>
            <div className='header'>
                <h3>Taches</h3>
                <button className='bouton' onClick={() => setModal(true)}>Création de tache</button>
            </div>
            <div className='task-container'>
                {listeTaches && listeTaches.map((listeTache , index) => <Card taskObj={listeTache} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
            </div>
            <CreationTache toggle={toggle} modal={modal} save={saveTache}/>
        </>
    );
}


export default Taches
 